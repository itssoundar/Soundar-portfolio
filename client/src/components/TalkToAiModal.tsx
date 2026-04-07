import { ArrowUpRight, MessageSquare, Mic, MicOff, Phone, PhoneOff, Sparkles, Volume2, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface TalkToAiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalView = "home" | "call";
type CallPhase = "connecting" | "intro" | "speaking" | "live";

type PromptOption = {
  id: string;
  label: string;
  prompt: string;
};

const INTRO_SCRIPT = "Hey, I'm Soundar. You're on my portfolio right now. I design products that feel clear, useful, and ready to scale. Ask me about my work, my process, or how I think about AI-first experiences.";

const PROMPT_OPTIONS: PromptOption[] = [
  {
    id: "projects",
    label: "Explain the projects",
    prompt: "Tell me about your featured projects.",
  },
  {
    id: "process",
    label: "Design process",
    prompt: "What is your design process like?",
  },
  {
    id: "ai",
    label: "AI-first work",
    prompt: "How do you think about AI-first products?",
  },
  {
    id: "about",
    label: "About Soundar",
    prompt: "Tell me about yourself.",
  },
];

export function TalkToAiModal({ isOpen, onClose }: TalkToAiModalProps) {
  const [view, setView] = useState<ModalView>("home");
  const [callPhase, setCallPhase] = useState<CallPhase>("connecting");
  const [assistantMessage, setAssistantMessage] = useState(INTRO_SCRIPT);
  const [heardMessage, setHeardMessage] = useState("Try speaking or tap one of the prompts below.");
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);

  const recognitionRef = useRef<any>(null);
  const connectTimeoutRef = useRef<number | null>(null);
  const restartRecognitionTimeoutRef = useRef<number | null>(null);

  const isInCall = view === "call";

  const statusText = useMemo(() => {
    if (callPhase === "connecting") return "Connecting";
    if (callPhase === "intro" || callPhase === "speaking") return isMuted ? "Voice paused" : "Speaking";
    if (isMuted) return "Muted";
    if (isListening) return "Listening";
    return "Ready";
  }, [callPhase, isMuted, isListening]);

  const timerLabel = useMemo(() => {
    const minutes = Math.floor(elapsedSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (elapsedSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }, [elapsedSeconds]);

  const timeLeftLabel = useMemo(() => {
    const remaining = Math.max(0, 300 - elapsedSeconds);
    const minutes = Math.floor(remaining / 60);
    const seconds = (remaining % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds} left`;
  }, [elapsedSeconds]);

  const cleanupRecognition = () => {
    if (restartRecognitionTimeoutRef.current) {
      window.clearTimeout(restartRecognitionTimeoutRef.current);
      restartRecognitionTimeoutRef.current = null;
    }

    if (recognitionRef.current) {
      recognitionRef.current.onend = null;
      recognitionRef.current.onresult = null;
      recognitionRef.current.onerror = null;
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }

    setIsListening(false);
  };

  const cleanupCallExperience = () => {
    if (connectTimeoutRef.current) {
      window.clearTimeout(connectTimeoutRef.current);
      connectTimeoutRef.current = null;
    }

    cleanupRecognition();
    window.speechSynthesis.cancel();
    setElapsedSeconds(0);
    setIsMuted(false);
    setCallPhase("connecting");
    setAssistantMessage(INTRO_SCRIPT);
    setHeardMessage("Try speaking or tap one of the prompts below.");
  };

  const pickVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    const englishVoices = voices.filter((voice) => voice.lang.toLowerCase().includes("en"));

    return (
      englishVoices.find((voice) => /aria|samantha|google uk english|zira|daniel/i.test(voice.name)) ||
      englishVoices[0] ||
      voices[0] ||
      null
    );
  };

  const startListening = () => {
    const SpeechRecognitionApi = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionApi || isMuted || !isInCall || callPhase !== "live") {
      setIsSpeechSupported(Boolean(SpeechRecognitionApi));
      return;
    }

    cleanupRecognition();
    setIsSpeechSupported(true);

    const recognition = new SpeechRecognitionApi();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0]?.transcript || "")
        .join(" ")
        .trim();

      if (transcript) {
        setHeardMessage(transcript);
      }

      const finalResult = event.results[event.results.length - 1];
      if (finalResult?.isFinal && transcript) {
        respondToUser(transcript);
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);

      if (view === "call" && callPhase === "live" && !isMuted) {
        restartRecognitionTimeoutRef.current = window.setTimeout(() => {
          startListening();
        }, 900);
      }
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const speakText = (text: string, onEnd?: () => void) => {
    if (isMuted) {
      onEnd?.();
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = pickVoice();

    if (voice) {
      utterance.voice = voice;
    }

    utterance.rate = 1.02;
    utterance.pitch = 0.95;
    utterance.volume = 1;
    utterance.onend = () => onEnd?.();
    utterance.onerror = () => onEnd?.();

    window.speechSynthesis.speak(utterance);
  };

  const buildResponse = (input: string) => {
    const message = input.toLowerCase();

    if (message.includes("project") || message.includes("work")) {
      return "A lot of my work sits at the intersection of product clarity and execution. I like taking messy, early-stage problems and turning them into flows, systems, and interfaces people can actually rely on.";
    }

    if (message.includes("process") || message.includes("design")) {
      return "My process usually starts with reducing ambiguity. I look for the user tension, align that with the business goal, then shape the experience through structure, language, and interaction details that scale.";
    }

    if (message.includes("ai")) {
      return "For AI-first products, I care a lot about trust and usability. The interface has to explain what the system is doing, help people recover when things go wrong, and still feel simple under the hood.";
    }

    if (message.includes("yourself") || message.includes("about") || message.includes("soundar")) {
      return "I'm a product designer focused on B2B, SaaS, and AI-first experiences. I enjoy building systems that feel thoughtful in the details and strong enough to grow with the product.";
    }

    if (message.includes("hello") || message.includes("hey")) {
      return "Hey, glad you're here. You can ask me about projects, process, design systems, or how I approach AI products.";
    }

    return "Happy to talk through that. Ask me about my featured work, how I approach product design, or what I optimize for when designing AI-powered experiences.";
  };

  const respondToUser = (input: string) => {
    cleanupRecognition();
    const response = buildResponse(input);
    setAssistantMessage(response);
    setCallPhase("speaking");
    speakText(response, () => {
      setCallPhase("live");
      startListening();
    });
  };

  const beginCall = () => {
    cleanupCallExperience();
    setView("call");
    setCallPhase("connecting");
    setAssistantMessage("Connecting you to Soundar AI...");
    setHeardMessage("Initializing voice channel...");
  };

  const endCall = () => {
    cleanupCallExperience();
    setView("home");
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      if (view === "call" && callPhase === "live") {
        startListening();
      }
      return;
    }

    window.speechSynthesis.cancel();
    cleanupRecognition();
    setIsMuted(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.cursor = "auto";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.style.cursor = "";
      document.body.classList.remove("modal-open");
      cleanupCallExperience();
      setView("home");
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.cursor = "";
      document.body.classList.remove("modal-open");
      cleanupCallExperience();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || view !== "call") return;

    if (callPhase === "connecting") {
      connectTimeoutRef.current = window.setTimeout(() => {
        setCallPhase("intro");
        setAssistantMessage(INTRO_SCRIPT);
        speakText(INTRO_SCRIPT, () => {
          setCallPhase("live");
          startListening();
        });
      }, 1800);
    }

    return () => {
      if (connectTimeoutRef.current) {
        window.clearTimeout(connectTimeoutRef.current);
        connectTimeoutRef.current = null;
      }
    };
  }, [isOpen, view, callPhase]);

  useEffect(() => {
    if (!isOpen || view !== "call") return;

    const interval = window.setInterval(() => {
      setElapsedSeconds((current) => current + 1);
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isOpen, view]);

  useEffect(() => {
    const SpeechRecognitionApi = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    setIsSpeechSupported(Boolean(SpeechRecognitionApi));

    const populateVoices = () => {
      window.speechSynthesis.getVoices();
    };

    populateVoices();
    window.speechSynthesis.onvoiceschanged = populateVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[999999] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
      style={{ cursor: "auto" }}
      data-testid="modal-talk-to-ai-overlay"
    >
      <div
        className="relative w-full max-w-5xl min-h-[82vh] overflow-hidden rounded-[32px] border border-white/10 bg-[#050505] text-white shadow-[0_40px_120px_rgba(0,0,0,0.55)] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        style={{ cursor: "auto" }}
        data-testid="modal-talk-to-ai"
      >
        <div className="absolute inset-0 opacity-60">
          <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#ffb35c]/10 blur-[140px]" />
          <div className="absolute right-[-120px] top-[-80px] h-[260px] w-[260px] rounded-full bg-white/6 blur-[120px]" />
          <div className="absolute left-[-80px] bottom-[-120px] h-[280px] w-[280px] rounded-full bg-white/6 blur-[120px]" />
        </div>

        <div className="relative flex items-start justify-between px-5 pt-5 md:px-9 md:pt-8">
          <div className="max-w-[320px] text-[12px] md:text-[14px] leading-[1.5] text-white/45" data-testid="text-ai-disclaimer">
            <p>Powered by AI and crafted by me.</p>
            <p>Responses may not always be perfectly accurate.</p>
          </div>

          <button
            onClick={onClose}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 text-[14px] font-medium text-white/90 transition-all hover:border-white/20 hover:bg-white/[0.06]"
            data-testid="button-close-talk-to-ai"
          >
            <X className="h-4 w-4" />
            Close
          </button>
        </div>

        {view === "home" ? (
          <div className="relative flex min-h-[calc(82vh-88px)] items-center justify-center px-6 py-12 md:px-10 md:py-16">
            <div className="w-full max-w-[420px]">
              <div className="mx-auto mb-6 flex h-[116px] w-[116px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-[0_14px_60px_rgba(255,255,255,0.08)]">
                <img
                  src="/Soundar.png"
                  alt="Soundar"
                  className="h-full w-full object-cover"
                  data-testid="img-soundar-ai-profile"
                />
              </div>

              <div className="text-center">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[12px] uppercase tracking-[0.18em] text-white/55">
                  <Sparkles className="h-3.5 w-3.5" />
                  AI voice + chat
                </div>

                <h2 className="text-[38px] font-medium leading-none tracking-[-0.04em] md:text-[48px]" data-testid="text-ai-name">
                  Soundar AI
                </h2>
                <p className="mt-3 text-[17px] text-white/45" data-testid="text-ai-subtitle">
                  Trained on my process, product thinking, and portfolio stories.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  onClick={beginCall}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-6 text-[16px] font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-white/90"
                  data-testid="button-start-the-call"
                >
                  <Phone className="h-4 w-4" />
                  Start the Call
                </button>
                <a
                  href="mailto:rsoundar1998@gmail.com?subject=Talk%20to%20Soundar%20AI&body=Hi%20Soundar%2C%20I%27d%20like%20to%20chat%20about%20your%20work."
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.02] px-6 text-[16px] font-medium text-white transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
                  data-testid="button-chat-with-me"
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat with me
                </a>
              </div>

              <p className="mt-4 text-center text-[13px] text-white/35" data-testid="text-ai-note">
                5 free minutes · Best for quick portfolio walkthroughs and product conversations.
              </p>

              <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-5 text-left shadow-[0_20px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-6">
                <p className="text-[13px] uppercase tracking-[0.2em] text-white/35">Try asking</p>
                <div className="mt-4 space-y-3 text-[16px] leading-[1.65] text-white/72">
                  <p data-testid="text-ai-prompt-1">“Explain the project” and I’ll walk you through the thinking behind it.</p>
                  <p data-testid="text-ai-prompt-2">“How would you improve our product?” for a sharper UX perspective.</p>
                  <p data-testid="text-ai-prompt-3">“What makes your design process different?” for the quick version.</p>
                </div>
                <a
                  href="/#contact"
                  onClick={onClose}
                  className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-white transition-opacity hover:opacity-75"
                  data-testid="link-jump-to-contact"
                >
                  Or skip straight to contact
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative flex min-h-[calc(82vh-88px)] flex-col px-6 pb-8 pt-4 md:px-9 md:pb-10 md:pt-2">
            <div className="flex flex-col gap-8 md:flex-row md:gap-12">
              <aside className="w-full md:max-w-[220px] md:pt-6">
                <div className="flex items-start gap-4 md:block">
                  <div className="h-[76px] w-[76px] overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-[0_14px_60px_rgba(255,255,255,0.08)] md:h-[88px] md:w-[88px]">
                    <img
                      src="/Soundar.png"
                      alt="Soundar"
                      className="h-full w-full object-cover"
                      data-testid="img-soundar-call-profile"
                    />
                  </div>

                  <div className="pt-2 md:pt-5">
                    <p className="text-[28px] font-medium leading-none tracking-[-0.04em] md:text-[32px]" data-testid="text-call-name">
                      Soundar AI
                    </p>
                    <p className="mt-2 text-[14px] text-white/45" data-testid="text-call-tagline">
                      Trust me, I sound like my AI.
                    </p>
                    <p className="mt-4 max-w-[220px] text-[13px] leading-[1.6] text-white/32" data-testid="text-call-disclaimer">
                      Powered by AI and built around Soundar&apos;s product perspective, portfolio context, and tone.
                    </p>
                  </div>
                </div>
              </aside>

              <div className="min-w-0 flex-1">
                <div className="mx-auto mb-8 flex max-w-[420px] items-center justify-center gap-4 text-[13px] text-white/40 md:mb-10">
                  <span data-testid="text-call-timer">{timerLabel}</span>
                  <div className="h-px flex-1 bg-white/10" />
                  <span data-testid="text-call-time-left">{timeLeftLabel}</span>
                </div>

                <div className="min-h-[220px] md:min-h-[280px]">
                  <p className="mb-4 text-[12px] uppercase tracking-[0.24em] text-white/35" data-testid="status-call-phase">
                    {statusText}
                  </p>
                  <h3 className="max-w-4xl text-[30px] leading-[1.25] tracking-[-0.04em] text-white/78 md:text-[52px] md:leading-[1.22]" data-testid="text-call-transcript">
                    {assistantMessage}
                  </h3>
                  <p className="mt-6 text-[15px] text-white/40 md:text-[16px]" data-testid="text-heard-message">
                    You: {heardMessage}
                  </p>
                  {!isSpeechSupported && (
                    <p className="mt-2 text-[13px] text-[#ffb35c]/80" data-testid="text-speech-fallback">
                      Live mic input depends on browser support. You can still use the quick prompts below.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <div className="relative mx-auto flex h-[92px] w-full max-w-[520px] items-center justify-center overflow-hidden">
                <div className="absolute inset-x-12 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#ffb35c]/60 to-transparent" />
                <div className="absolute left-1/2 top-1/2 h-24 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff9d3f]/16 blur-3xl" />
                <div className="relative flex items-center gap-1.5" data-testid="visualizer-call-waveform">
                  {Array.from({ length: 32 }).map((_, index) => {
                    const active = callPhase !== "connecting" && !isMuted;
                    const height = active ? 18 + ((index * 7) % 36) : 8 + ((index * 3) % 12);

                    return (
                      <span
                        key={`wave-${index}`}
                        className={`block w-1.5 rounded-full bg-gradient-to-b from-[#ffd18a] to-[#ff8a3d] ${active ? "animate-pulse" : "opacity-40"}`}
                        style={{ height: `${height}px`, animationDelay: `${index * 70}ms` }}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                {PROMPT_OPTIONS.map((prompt) => (
                  <button
                    key={prompt.id}
                    onClick={() => {
                      setHeardMessage(prompt.prompt);
                      respondToUser(prompt.prompt);
                    }}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[13px] text-white/65 transition-all hover:border-white/18 hover:bg-white/[0.05] hover:text-white"
                    data-testid={`button-prompt-${prompt.id}`}
                  >
                    {prompt.label}
                  </button>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={toggleMute}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 text-[16px] font-medium text-white transition-all hover:border-white/20 hover:bg-white/[0.06]"
                  data-testid="button-mute-call"
                >
                  {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  {isMuted ? "Unmute" : "Mute"}
                </button>
                <button
                  onClick={() => {
                    if (callPhase === "live") {
                      startListening();
                    }
                  }}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 text-[16px] font-medium text-white transition-all hover:border-white/20 hover:bg-white/[0.06]"
                  data-testid="button-listen-call"
                >
                  <Volume2 className="h-4 w-4" />
                  {isListening ? "Listening..." : "Talk now"}
                </button>
                <button
                  onClick={endCall}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#ff5a4a] px-6 text-[16px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#ff4a38]"
                  data-testid="button-end-call"
                >
                  <PhoneOff className="h-4 w-4" />
                  End Call
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
