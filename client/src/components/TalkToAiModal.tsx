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
    label: "Featured work",
    prompt: "Tell me about your featured projects.",
  },
  {
    id: "process",
    label: "Design process",
    prompt: "What is your design process like?",
  },
  {
    id: "ai",
    label: "AI-first products",
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
  const [heardMessage, setHeardMessage] = useState("Tap the mic or start speaking when you're ready.");
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);

  const recognitionRef = useRef<any>(null);
  const connectTimeoutRef = useRef<number | null>(null);
  const restartRecognitionTimeoutRef = useRef<number | null>(null);

  const isInCall = view === "call";

  const statusText = useMemo(() => {
    if (callPhase === "connecting") return "Connecting to Soundar AI";
    if (callPhase === "intro") return "Introducing";
    if (callPhase === "speaking") return isMuted ? "Voice paused" : "Soundar is speaking";
    if (isMuted) return "Muted";
    if (isListening) return "Listening";
    return "Ready to talk";
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
    setHeardMessage("Tap the mic or start speaking when you're ready.");
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
    setHeardMessage("Initializing voice session...");
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
      }, 1600);
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

  const orbScaleClass =
    callPhase === "connecting"
      ? "scale-95"
      : callPhase === "intro" || callPhase === "speaking"
        ? "scale-105"
        : isListening
          ? "scale-110"
          : "scale-100";

  const orbGlowClass =
    callPhase === "connecting"
      ? "from-white/10 via-[#8db8ff]/15 to-transparent"
      : callPhase === "intro" || callPhase === "speaking"
        ? "from-[#ffcc8f]/30 via-[#ff9d3f]/28 to-transparent"
        : isListening
          ? "from-[#7cd3ff]/30 via-[#4fb0ff]/24 to-transparent"
          : "from-white/12 via-white/8 to-transparent";

  return createPortal(
    <div
      className="fixed inset-0 z-[999999] bg-black/80 backdrop-blur-xl flex items-center justify-center p-3 md:p-6"
      onClick={onClose}
      style={{ cursor: "auto" }}
      data-testid="modal-talk-to-ai-overlay"
    >
      <div
        className="relative w-full max-w-[1220px] min-h-[88vh] overflow-hidden rounded-[36px] border border-white/10 bg-[#050505] text-white shadow-[0_40px_120px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        style={{ cursor: "auto" }}
        data-testid="modal-talk-to-ai"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_bottom,rgba(255,170,80,0.08),transparent_26%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative flex items-center justify-between px-4 py-4 md:px-8 md:py-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white/55 md:text-[12px]" data-testid="badge-ai-mode">
            <Sparkles className="h-3.5 w-3.5" />
            Real-time voice mode
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] text-white/55 md:px-4 md:text-[13px]">
            <span className={`h-2 w-2 rounded-full ${callPhase === "connecting" ? "bg-[#7cd3ff] animate-pulse" : isListening ? "bg-[#7cd3ff] animate-pulse" : callPhase === "intro" || callPhase === "speaking" ? "bg-[#ffb35c] animate-pulse" : "bg-white/40"}`} />
            <span data-testid="status-topbar-call">{isInCall ? statusText : "Voice preview"}</span>
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
          <div className="relative flex min-h-[calc(88vh-88px)] items-center justify-center px-6 py-12 md:px-10 md:py-16">
            <div className="w-full max-w-[460px] text-center">
              <div className="mx-auto mb-8 flex h-[124px] w-[124px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-[0_14px_60px_rgba(255,255,255,0.08)]">
                <img
                  src="/Soundar.png"
                  alt="Soundar"
                  className="h-full w-full object-cover"
                  data-testid="img-soundar-ai-profile"
                />
              </div>

              <h2 className="text-[40px] font-medium leading-none tracking-[-0.05em] md:text-[56px]" data-testid="text-ai-name">
                Talk to Soundar AI
              </h2>
              <p className="mx-auto mt-4 max-w-[420px] text-[16px] leading-[1.7] text-white/48 md:text-[18px]" data-testid="text-ai-subtitle">
                A voice-first portfolio guide inspired by modern assistant products — fast, ambient, and conversational.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  onClick={beginCall}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-6 text-[16px] font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-white/90"
                  data-testid="button-start-the-call"
                >
                  <Phone className="h-4 w-4" />
                  Start voice mode
                </button>
                <a
                  href="mailto:rsoundar1998@gmail.com?subject=Talk%20to%20Soundar%20AI&body=Hi%20Soundar%2C%20I%27d%20like%20to%20chat%20about%20your%20work."
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.02] px-6 text-[16px] font-medium text-white transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
                  data-testid="button-chat-with-me"
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat instead
                </a>
              </div>

              <p className="mt-4 text-center text-[13px] text-white/35" data-testid="text-ai-note">
                Voice simulation uses the browser’s built-in speech engine for a product-like prototype feel.
              </p>

              <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-5 text-left shadow-[0_20px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-6">
                <p className="text-[13px] uppercase tracking-[0.2em] text-white/35">What it can do</p>
                <div className="mt-4 space-y-3 text-[16px] leading-[1.65] text-white/72">
                  <p data-testid="text-ai-prompt-1">Speak an intro automatically after connecting.</p>
                  <p data-testid="text-ai-prompt-2">Listen for your voice and answer in a natural loop.</p>
                  <p data-testid="text-ai-prompt-3">Let visitors explore Soundar’s work in a more product-like way.</p>
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
          <div className="relative flex min-h-[calc(88vh-88px)] flex-col px-4 pb-5 pt-2 md:px-8 md:pb-8 md:pt-0">
            <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-[260px_minmax(0,1fr)_280px] lg:gap-8">
              <aside className="rounded-[28px] border border-white/8 bg-white/[0.02] p-5 backdrop-blur-md lg:p-6">
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <div className="h-[72px] w-[72px] overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-[0_14px_60px_rgba(255,255,255,0.08)] lg:h-[86px] lg:w-[86px]">
                    <img
                      src="/Soundar.png"
                      alt="Soundar"
                      className="h-full w-full object-cover"
                      data-testid="img-soundar-call-profile"
                    />
                  </div>
                  <div>
                    <p className="text-[26px] font-medium tracking-[-0.04em] lg:text-[30px]" data-testid="text-call-name">
                      Soundar AI
                    </p>
                    <p className="mt-1 text-[14px] text-white/45" data-testid="text-call-tagline">
                      Voice-first portfolio guide
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-white/8 bg-black/30 p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">Session</p>
                    <div className="mt-3 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[28px] font-medium tracking-[-0.04em]" data-testid="text-call-timer">
                          {timerLabel}
                        </p>
                        <p className="text-[13px] text-white/35" data-testid="text-call-time-left">
                          {timeLeftLabel}
                        </p>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[12px] text-white/55" data-testid="badge-call-status-left">
                        {statusText}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-black/30 p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">About this mode</p>
                    <p className="mt-3 text-[14px] leading-[1.7] text-white/52" data-testid="text-call-disclaimer">
                      This prototype mimics a real voice assistant flow with connection, spoken responses, ambient visuals, and live listening using browser voice tools.
                    </p>
                  </div>
                </div>
              </aside>

              <section className="flex min-h-[420px] flex-col items-center justify-center rounded-[32px] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),rgba(255,255,255,0.01)_45%,transparent_70%)] px-4 py-8 md:px-8">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-white/48" data-testid="badge-center-status">
                  <span className={`h-2 w-2 rounded-full ${callPhase === "connecting" ? "bg-[#7cd3ff] animate-pulse" : isListening ? "bg-[#7cd3ff] animate-pulse" : callPhase === "intro" || callPhase === "speaking" ? "bg-[#ffb35c] animate-pulse" : "bg-white/40"}`} />
                  {statusText}
                </div>

                <div className="relative flex h-[300px] w-[300px] items-center justify-center md:h-[360px] md:w-[360px]" data-testid="visualizer-voice-orb">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${orbGlowClass} blur-3xl transition-all duration-500`} />
                  <div className={`absolute inset-[18%] rounded-full border border-white/10 bg-white/[0.03] transition-all duration-500 ${orbScaleClass} ${callPhase === "connecting" ? "animate-pulse" : ""}`} />
                  <div className={`absolute inset-[30%] rounded-full border border-white/12 bg-gradient-to-br from-white/10 to-white/[0.02] shadow-[0_0_60px_rgba(255,255,255,0.06)] transition-all duration-500 ${orbScaleClass}`} />
                  <div className="absolute inset-[38%] overflow-hidden rounded-full border border-white/12 bg-black/20 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                    <img src="/Soundar.png" alt="Soundar" className="h-full w-full object-cover" data-testid="img-orb-soundar" />
                  </div>
                </div>

                <div className="mt-8 w-full max-w-3xl text-center">
                  <h3 className="text-[28px] font-medium leading-[1.28] tracking-[-0.05em] text-white/88 md:text-[46px]" data-testid="text-call-transcript">
                    {assistantMessage}
                  </h3>
                  <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-[1.7] text-white/42 md:text-[15px]" data-testid="text-heard-message">
                    You said: {heardMessage}
                  </p>
                  {!isSpeechSupported && (
                    <p className="mt-3 text-[13px] text-[#ffb35c]/80" data-testid="text-speech-fallback">
                      Voice input depends on browser support. Quick prompts still work below.
                    </p>
                  )}
                </div>
              </section>

              <aside className="flex flex-col rounded-[28px] border border-white/8 bg-white/[0.02] p-5 backdrop-blur-md lg:p-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">Quick starters</p>
                <div className="mt-4 grid gap-3">
                  {PROMPT_OPTIONS.map((prompt) => (
                    <button
                      key={prompt.id}
                      onClick={() => {
                        setHeardMessage(prompt.prompt);
                        respondToUser(prompt.prompt);
                      }}
                      className="rounded-2xl border border-white/8 bg-black/30 px-4 py-4 text-left text-[14px] font-medium text-white/72 transition-all hover:border-white/16 hover:bg-white/[0.04] hover:text-white"
                      data-testid={`button-prompt-${prompt.id}`}
                    >
                      {prompt.label}
                    </button>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">Controls</p>
                  <div className="mt-4 space-y-3">
                    <button
                      onClick={() => {
                        if (callPhase === "live") {
                          startListening();
                        }
                      }}
                      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 text-[15px] font-medium text-white transition-all hover:border-white/20 hover:bg-white/[0.07]"
                      data-testid="button-listen-call"
                    >
                      <Volume2 className="h-4 w-4" />
                      {isListening ? "Listening..." : "Talk now"}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 text-[15px] font-medium text-white transition-all hover:border-white/20 hover:bg-white/[0.06]"
                      data-testid="button-mute-call"
                    >
                      {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                      {isMuted ? "Unmute microphone" : "Mute microphone"}
                    </button>
                    <button
                      onClick={endCall}
                      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#ff5a4a] px-5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#ff4a38]"
                      data-testid="button-end-call"
                    >
                      <PhoneOff className="h-4 w-4" />
                      End call
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
