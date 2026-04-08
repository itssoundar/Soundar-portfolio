import { ArrowUpRight, MessageSquare, Mic, MicOff, Phone, PhoneOff, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface TalkToAiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalView = "home" | "call";
type CallPhase = "connecting" | "intro" | "speaking" | "live";
type MicState = "idle" | "requesting" | "granted" | "denied" | "unsupported";

type PromptSuggestion = {
  id: string;
  label: string;
};

const INTRO_SCRIPT = "Hey, I'm Soundar. You're on my portfolio right now. I’m a senior product designer focused on B2B, SaaS, and AI-first experiences. Feel free to ask me about my projects, my process, or how I think about product design.";

const PROMPT_SUGGESTIONS: PromptSuggestion[] = [
  { id: "agents", label: "Ask about the AI agent builder" },
  { id: "genesis", label: "Ask about the Genesis design system" },
  { id: "analytics", label: "Ask about CRM analytics" },
  { id: "process", label: "Ask about Soundar's process" },
];

export function TalkToAiModal({ isOpen, onClose }: TalkToAiModalProps) {
  const [view, setView] = useState<ModalView>("home");
  const [callPhase, setCallPhase] = useState<CallPhase>("connecting");
  const [assistantMessage, setAssistantMessage] = useState(INTRO_SCRIPT);
  const [heardMessage, setHeardMessage] = useState("Listening for your question...");
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);
  const [micState, setMicState] = useState<MicState>("idle");
  const [micError, setMicError] = useState("");

  const recognitionRef = useRef<any>(null);
  const connectTimeoutRef = useRef<number | null>(null);
  const restartRecognitionTimeoutRef = useRef<number | null>(null);
  const responseTimeoutRef = useRef<number | null>(null);
  const transcriptBufferRef = useRef("");
  const viewRef = useRef<ModalView>("home");
  const callPhaseRef = useRef<CallPhase>("connecting");
  const micStateRef = useRef<MicState>("idle");
  const isMutedRef = useRef(false);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  const isInCall = view === "call";

  const statusText = useMemo(() => {
    if (micState === "requesting") return "Waiting for microphone access";
    if (callPhase === "connecting") return "Connecting to Soundar";
    if (callPhase === "intro") return "Soundar is joining";
    if (callPhase === "speaking") return isMuted ? "Voice paused" : "Soundar is speaking";
    if (micState === "denied") return "Microphone access blocked";
    if (micState === "unsupported") return "Voice input not supported here";
    if (isMuted) return "Muted";
    if (isListening) return "Listening";
    return "Listening in the background";
  }, [callPhase, isMuted, isListening, micState]);

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

  const stopMediaTracks = () => {
    mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
    mediaStreamRef.current = null;
  };

  useEffect(() => {
    viewRef.current = view;
    callPhaseRef.current = callPhase;
    micStateRef.current = micState;
    isMutedRef.current = isMuted;
  }, [view, callPhase, micState, isMuted]);

  const cleanupRecognition = () => {
    if (restartRecognitionTimeoutRef.current) {
      window.clearTimeout(restartRecognitionTimeoutRef.current);
      restartRecognitionTimeoutRef.current = null;
    }

    if (responseTimeoutRef.current) {
      window.clearTimeout(responseTimeoutRef.current);
      responseTimeoutRef.current = null;
    }

    transcriptBufferRef.current = "";

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
    stopMediaTracks();
    window.speechSynthesis.cancel();
    setElapsedSeconds(0);
    setIsMuted(false);
    setCallPhase("connecting");
    setAssistantMessage(INTRO_SCRIPT);
    setHeardMessage("Listening for your question...");
    setMicState("idle");
    setMicError("");
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

  const getRecognitionErrorMessage = (error?: string) => {
    switch (error) {
      case "not-allowed":
      case "service-not-allowed":
        return "Microphone access is blocked. Please allow microphone permission in your browser and reopen voice mode.";
      case "audio-capture":
        return "I couldn't access your microphone. Check that your mic is connected and available.";
      case "no-speech":
        return "I’m listening, but I didn’t catch anything yet.";
      case "network":
        return "Voice recognition had a connection issue. I’ll keep trying in the background.";
      default:
        return "Voice input is having trouble right now. Try speaking again after a moment.";
    }
  };

  const buildResponse = (input: string) => {
    const message = input.toLowerCase();

    if (message.includes("hello") || message.includes("hey") || message.includes("hi")) {
      return "Hey, glad you're here. You can ask me about my AI workflow project, the Genesis design system work, CRM analytics, or just how I approach product design in general.";
    }

    if (message.includes("who are you") || message.includes("about yourself") || message.includes("tell me about yourself") || message.includes("who is soundar")) {
      return "I'm Soundar, a senior product designer focused on B2B, SaaS, and AI-first products. I like taking messy product problems and turning them into experiences that feel clear, scalable, and reliable for real teams.";
    }

    if (message.includes("portfolio") || message.includes("what is this site") || message.includes("what is on your portfolio")) {
      return "This portfolio is basically a snapshot of how I think through product problems. It highlights three kinds of work: AI-driven CRM workflows, scalable design systems, and analytics experiences that help teams make decisions faster.";
    }

    if (message.includes("project") || message.includes("featured work") || message.includes("case study") || message.includes("work you have done")) {
      return "The portfolio focuses on three main projects. One is an AI execution layer for recruiting workflows. Another is the Genesis design system work to unify a growing CRM. The third is a CRM analytics and dashboard builder experience for hiring teams. Together they show how I work across product strategy, systems thinking, and interaction design.";
    }

    if (message.includes("ai") || message.includes("agent") || message.includes("workflow") || message.includes("sense") || message.includes("recruit") || message.includes("hiring")) {
      return "One of the strongest projects is for Sense, an AI-driven recruiting platform. I designed an AI execution layer so recruiters could express intent in natural language instead of manually configuring complex workflows and dashboards. The goal was to shift the CRM from configuration-heavy tooling into a more intent-driven experience with better trust and faster execution.";
    }

    if (message.includes("genesis") || message.includes("design system") || message.includes("system")) {
      return "The Genesis work was about stabilizing and scaling the product foundation. I audited fragmented patterns across the CRM, defined component architecture and token structure, and helped create reusable patterns for forms, tables, cards, modals, and other key surfaces. It was less about cosmetics and more about reducing UI debt and making the platform feel coherent.";
    }

    if (message.includes("analytics") || message.includes("dashboard") || message.includes("report") || message.includes("metrics")) {
      return "The CRM analytics project focused on giving hiring teams a centralized analytics layer. I worked on pre-built dashboards, a custom dashboard builder, and proactive insight surfaces so teams could understand funnel performance, recruiter productivity, source effectiveness, and time-to-hire without depending so heavily on analysts or manual exports.";
    }

    if (message.includes("impact") || message.includes("result") || message.includes("outcome")) {
      return "A lot of the impact across these projects came from reducing friction and making systems easier to use. In the AI workflow project, setup time dropped significantly and adoption improved. In the design system work, consistency improved and UI-related issues went down. In analytics, the experience made reporting much faster and more self-serve for teams.";
    }

    if (message.includes("process") || message.includes("how do you work") || message.includes("approach")) {
      return "My process usually starts with reducing ambiguity. I try to understand the user tension, the business goal, and the system constraints first. From there I shape structure, interaction, and language in a way that makes the product easier to understand now, but still strong enough to scale later.";
    }

    if (message.includes("why") && message.includes("hire")) {
      return "I think the value I bring is that I don't stop at surface polish. I like connecting product thinking, systems design, user trust, and delivery realities. The work in this portfolio is a good reflection of that because it spans AI workflows, design systems, and analytics products, not just screens.";
    }

    if (message.includes("contact") || message.includes("reach") || message.includes("email")) {
      return "The easiest way to reach Soundar is through the contact section on the portfolio. If you're interested in working together, that's the best next step.";
    }

    return "From what I can tell, your question is about Soundar's portfolio, and the short version is this: the work is centered on making complex B2B and AI-first products feel simpler, more trustworthy, and easier to use. You can ask me about the AI agent builder, the Genesis design system, CRM analytics, or Soundar's design approach.";
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

    utterance.rate = 1.01;
    utterance.pitch = 0.96;
    utterance.volume = 1;
    utterance.onend = () => onEnd?.();
    utterance.onerror = () => onEnd?.();

    window.speechSynthesis.speak(utterance);
  };

  const respondToUser = (input: string) => {
    cleanupRecognition();
    setMicError("");
    const normalizedInput = input.trim();

    if (!normalizedInput) {
      setHeardMessage("I didn't catch that. Try asking again.");
      startListening();
      return;
    }

    const response = buildResponse(normalizedInput);
    setHeardMessage(`You said: ${normalizedInput}`);
    setAssistantMessage(response);
    setCallPhase("speaking");
    speakText(response, () => {
      setCallPhase("live");
      setHeardMessage("I'm listening...");
    });
  };

  const requestMicrophoneAccess = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setMicState("unsupported");
      setMicError("This browser doesn't expose microphone access for this prototype.");
      return false;
    }

    setMicState("requesting");
    setMicError("");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      setMicState("granted");
      setMicError("");
      return true;
    } catch {
      setMicState("denied");
      setMicError("Microphone access was blocked, so voice detection can't start. Please allow mic permission and reopen voice mode.");
      setHeardMessage("Microphone permission is blocked right now.");
      return false;
    }
  };

  const startListening = () => {
    const SpeechRecognitionApi = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionApi) {
      setIsSpeechSupported(false);
      setMicState((current) => (current === "denied" ? current : "unsupported"));
      setMicError("Voice recognition isn't supported in this browser. The prototype voice reply still works, but live mic detection won't.");
      return;
    }

    if (
      micStateRef.current !== "granted" ||
      isMutedRef.current ||
      viewRef.current !== "call" ||
      callPhaseRef.current !== "live" ||
      recognitionRef.current
    ) {
      setIsSpeechSupported(true);
      return;
    }

    cleanupRecognition();
    setIsSpeechSupported(true);
    setMicError("");

    const recognition = new SpeechRecognitionApi();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      setHeardMessage("I'm listening...");
    };

    recognition.onresult = (event: any) => {
      const freshResults = Array.from(event.results).slice(event.resultIndex);
      const transcript = freshResults
        .map((result: any) => result[0]?.transcript || "")
        .join(" ")
        .trim();
      const hasFinalResult = freshResults.some((result: any) => result.isFinal);

      if (!transcript) {
        return;
      }

      transcriptBufferRef.current = transcript;
      setHeardMessage(`You said: ${transcript}`);

      if (responseTimeoutRef.current) {
        window.clearTimeout(responseTimeoutRef.current);
      }

      responseTimeoutRef.current = window.setTimeout(() => {
        if (transcriptBufferRef.current.trim()) {
          respondToUser(transcriptBufferRef.current);
        }
      }, 900);

      if (hasFinalResult) {
        respondToUser(transcript);
      }
    };

    recognition.onerror = (event: any) => {
      setIsListening(false);

      if (event?.error === "no-speech") {
        setMicError("");
        return;
      }

      const message = getRecognitionErrorMessage(event?.error);
      setMicError(message);

      if (event?.error === "not-allowed" || event?.error === "service-not-allowed") {
        setMicState("denied");
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;

      if (
        viewRef.current === "call" &&
        callPhaseRef.current === "live" &&
        !isMutedRef.current &&
        micStateRef.current === "granted"
      ) {
        restartRecognitionTimeoutRef.current = window.setTimeout(() => {
          startListening();
        }, 350);
      }
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();
    } catch {
      recognitionRef.current = null;
      setMicError("Voice detection couldn't restart cleanly. I'll keep trying in the background.");
    }
  };

  const beginCall = async () => {
    cleanupCallExperience();
    setView("call");
    setCallPhase("connecting");
    setAssistantMessage("Connecting you to Soundar...");
    setHeardMessage("Requesting microphone access...");

    const microphoneReady = await requestMicrophoneAccess();

    if (!microphoneReady) {
      setAssistantMessage("I can still introduce Soundar, but voice detection needs microphone permission first.");
      setCallPhase("live");
      return;
    }

    setHeardMessage("Starting voice conversation...");
  };

  const endCall = () => {
    cleanupCallExperience();
    setView("home");
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      if (view === "call" && callPhase === "live" && micState === "granted") {
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
    if (!isOpen || view !== "call" || micState === "requesting") return;

    if (callPhase === "connecting" && micState === "granted") {
      connectTimeoutRef.current = window.setTimeout(() => {
        setCallPhase("intro");
        setAssistantMessage(INTRO_SCRIPT);
        speakText(INTRO_SCRIPT, () => {
          setCallPhase("live");
          setHeardMessage("I'm listening...");
        });
      }, 1200);
    }

    return () => {
      if (connectTimeoutRef.current) {
        window.clearTimeout(connectTimeoutRef.current);
        connectTimeoutRef.current = null;
      }
    };
  }, [isOpen, view, callPhase, micState]);

  useEffect(() => {
    if (!isOpen || view !== "call" || callPhase !== "live" || micState !== "granted" || isMuted) {
      return;
    }

    if (!recognitionRef.current) {
      startListening();
    }
  }, [isOpen, view, callPhase, micState, isMuted]);

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
      ? "from-[#dbe8ff] via-[#9ec5ff]/60 to-transparent"
      : callPhase === "intro" || callPhase === "speaking"
        ? "from-[#ffe3c4] via-[#ffc277]/70 to-transparent"
        : isListening
          ? "from-[#d9efff] via-[#80c7ff]/70 to-transparent"
          : "from-[#f3f5f8] via-white to-transparent";

  return createPortal(
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center bg-[rgba(247,244,238,0.82)] p-3 backdrop-blur-xl md:p-6"
      onClick={onClose}
      style={{ cursor: "auto" }}
      data-testid="modal-talk-to-ai-overlay"
    >
      <div
        className="relative w-full max-w-[1220px] min-h-[88vh] overflow-hidden rounded-[36px] border border-black/8 bg-[linear-gradient(180deg,#fffdf9_0%,#ffffff_42%,#fbfaf7_100%)] text-[#111] shadow-[0_24px_80px_rgba(17,17,17,0.12)] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        style={{ cursor: "auto" }}
        data-testid="modal-talk-to-ai"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,239,229,0.7),transparent_28%),radial-gradient(circle_at_left,rgba(240,244,255,0.9),transparent_30%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

        <div className="relative flex items-center justify-between px-4 py-4 md:px-8 md:py-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/80 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-[#6b665d] shadow-[0_8px_24px_rgba(17,17,17,0.04)] md:text-[12px]" data-testid="badge-ai-mode">
            <Sparkles className="h-3.5 w-3.5" />
            Voice conversation
          </div>

          <div className="flex items-center gap-2 rounded-full border border-black/8 bg-white/80 px-3 py-1.5 text-[12px] text-[#6b665d] shadow-[0_8px_24px_rgba(17,17,17,0.04)] md:px-4 md:text-[13px]">
            <span className={`h-2 w-2 rounded-full ${callPhase === "connecting" || micState === "requesting" ? "bg-[#88b7ff] animate-pulse" : isListening ? "bg-[#88b7ff] animate-pulse" : callPhase === "intro" || callPhase === "speaking" ? "bg-[#ffb56f] animate-pulse" : "bg-black/20"}`} />
            <span data-testid="status-topbar-call">{isInCall ? statusText : "Portfolio voice preview"}</span>
          </div>

          <button
            onClick={onClose}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-black/8 bg-white px-5 text-[14px] font-medium text-[#111] transition-all hover:-translate-y-0.5 hover:bg-[#f6f3ee]"
            data-testid="button-close-talk-to-ai"
          >
            <X className="h-4 w-4" />
            Close
          </button>
        </div>

        {view === "home" ? (
          <div className="relative flex min-h-[calc(88vh-88px)] items-center justify-center px-6 py-12 md:px-10 md:py-16">
            <div className="w-full max-w-[560px] text-center">
              <div className="mx-auto mb-8 flex h-[124px] w-[124px] items-center justify-center overflow-hidden rounded-full border border-black/8 bg-white p-1 shadow-[0_16px_48px_rgba(17,17,17,0.08)]">
                <img
                  src="/Soundar.png"
                  alt="Soundar"
                  className="h-full w-full rounded-full object-cover"
                  data-testid="img-soundar-ai-profile"
                />
              </div>

              <p className="text-[12px] font-medium uppercase tracking-[0.28em] text-[#8a8276]" data-testid="text-ai-kicker">
                DZNWITHSOUNDAR voice preview
              </p>
              <h2 className="mt-4 font-serif text-[44px] leading-[0.98] tracking-[-0.05em] text-[#111] md:text-[64px]" data-testid="text-ai-name">
                Talk to Soundar
              </h2>
              <p className="mx-auto mt-5 max-w-[470px] text-[16px] leading-[1.8] text-[#5f584e] md:text-[18px]" data-testid="text-ai-subtitle">
                A more editorial, portfolio-native voice experience that feels aligned with the rest of the site instead of a separate dark product surface.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  onClick={beginCall}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-[18px] bg-[#111] px-6 text-[16px] font-medium text-white shadow-[0_14px_32px_rgba(17,17,17,0.16)] transition-all hover:-translate-y-0.5 hover:bg-[#222]"
                  data-testid="button-start-the-call"
                >
                  <Phone className="h-4 w-4" />
                  Start voice mode
                </button>
                <a
                  href="mailto:rsoundar1998@gmail.com?subject=Talk%20to%20Soundar&body=Hi%20Soundar%2C%20I%27d%20like%20to%20chat%20about%20your%20portfolio."
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-[18px] border border-black/8 bg-white px-6 text-[16px] font-medium text-[#111] transition-all hover:-translate-y-0.5 hover:bg-[#f6f3ee]"
                  data-testid="button-chat-with-me"
                >
                  <MessageSquare className="h-4 w-4" />
                  Email instead
                </a>
              </div>

              <p className="mt-4 text-center text-[13px] text-[#8a8276]" data-testid="text-ai-note">
                Ask about Soundar's projects, process, systems work, and portfolio story.
              </p>

              <div className="mt-10 rounded-[28px] border border-black/8 bg-white/90 p-6 text-left shadow-[0_24px_64px_rgba(17,17,17,0.06)] backdrop-blur-sm md:p-7">
                <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#8a8276]">Try asking</p>
                <div className="mt-5 grid gap-3 text-[15px] leading-[1.7] text-[#34312d]">
                  {PROMPT_SUGGESTIONS.map((suggestion) => (
                    <p key={suggestion.id} className="rounded-2xl border border-[#f0ebe3] bg-[#fcfaf6] px-4 py-3" data-testid={`text-ai-suggestion-${suggestion.id}`}>
                      {suggestion.label}
                    </p>
                  ))}
                </div>
                <a
                  href="/#contact"
                  onClick={onClose}
                  className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-[#111] transition-opacity hover:opacity-75"
                  data-testid="link-jump-to-contact"
                >
                  Or skip straight to contact
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative flex min-h-[calc(88vh-88px)] flex-col px-4 pb-6 pt-2 md:px-8 md:pb-8 md:pt-0">
            <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">
              <aside className="rounded-[30px] border border-black/8 bg-white/82 p-5 shadow-[0_24px_64px_rgba(17,17,17,0.05)] backdrop-blur-md lg:p-6">
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <div className="h-[72px] w-[72px] overflow-hidden rounded-full border border-black/8 bg-white p-1 shadow-[0_16px_48px_rgba(17,17,17,0.08)] lg:h-[86px] lg:w-[86px]">
                    <img
                      src="/Soundar.png"
                      alt="Soundar"
                      className="h-full w-full rounded-full object-cover"
                      data-testid="img-soundar-call-profile"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-[28px] tracking-[-0.04em] text-[#111] lg:text-[32px]" data-testid="text-call-name">
                      Soundar
                    </p>
                    <p className="mt-1 text-[14px] text-[#7b7367]" data-testid="text-call-tagline">
                      Portfolio voice conversation
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-[24px] border border-[#ece7df] bg-[#fcfaf6] p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#8a8276]">Session</p>
                    <div className="mt-3 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[30px] font-medium tracking-[-0.04em] text-[#111]" data-testid="text-call-timer">
                          {timerLabel}
                        </p>
                        <p className="text-[13px] text-[#8a8276]" data-testid="text-call-time-left">
                          {timeLeftLabel}
                        </p>
                      </div>
                      <div className="rounded-full border border-black/8 bg-white px-3 py-1 text-[12px] text-[#6b665d]" data-testid="badge-call-status-left">
                        {statusText}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-[#ece7df] bg-[#fcfaf6] p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#8a8276]">Conversation memory</p>
                    <p className="mt-3 text-[14px] leading-[1.7] text-[#5f584e]" data-testid="text-call-disclaimer">
                      This mode is tuned to answer questions about Soundar's portfolio, projects, design systems work, analytics thinking, and overall product design approach.
                    </p>
                  </div>
                </div>
              </aside>

              <section className="flex min-h-[420px] flex-col items-center justify-center rounded-[34px] border border-black/8 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(248,245,239,0.96)_52%,rgba(241,244,250,0.9)_100%)] px-4 py-8 shadow-[0_24px_64px_rgba(17,17,17,0.05)] md:px-8">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-[#6b665d]" data-testid="badge-center-status">
                  <span className={`h-2 w-2 rounded-full ${callPhase === "connecting" || micState === "requesting" ? "bg-[#88b7ff] animate-pulse" : isListening ? "bg-[#88b7ff] animate-pulse" : callPhase === "intro" || callPhase === "speaking" ? "bg-[#ffb56f] animate-pulse" : "bg-black/20"}`} />
                  {statusText}
                </div>

                <div className="relative flex h-[300px] w-[300px] items-center justify-center md:h-[360px] md:w-[360px]" data-testid="visualizer-voice-orb">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${orbGlowClass} blur-3xl transition-all duration-500`} />
                  <div className={`absolute inset-[18%] rounded-full border border-black/6 bg-white/70 transition-all duration-500 ${orbScaleClass} ${callPhase === "connecting" || micState === "requesting" ? "animate-pulse" : ""}`} />
                  <div className={`absolute inset-[30%] rounded-full border border-black/8 bg-gradient-to-br from-white to-[#f4f2ee] shadow-[0_20px_70px_rgba(17,17,17,0.08)] transition-all duration-500 ${orbScaleClass}`} />
                  <div className="absolute inset-[38%] overflow-hidden rounded-full border border-white bg-white shadow-[0_18px_60px_rgba(17,17,17,0.14)]">
                    <img src="/Soundar.png" alt="Soundar" className="h-full w-full object-cover" data-testid="img-orb-soundar" />
                  </div>
                </div>

                <div className="mt-8 w-full max-w-3xl text-center">
                  <h3 className="font-serif text-[30px] leading-[1.18] tracking-[-0.05em] text-[#111] md:text-[50px]" data-testid="text-call-transcript">
                    {assistantMessage}
                  </h3>
                  <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-[1.8] text-[#6a645a] md:text-[15px]" data-testid="text-heard-message">
                    {heardMessage}
                  </p>
                  {micError && (
                    <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-[1.7] text-[#c57b3f]" data-testid="text-mic-error">
                      {micError}
                    </p>
                  )}
                  {!isSpeechSupported && !micError && (
                    <p className="mt-3 text-[13px] text-[#c57b3f]" data-testid="text-speech-fallback">
                      Voice input depends on browser support. In supported browsers, the experience listens automatically.
                    </p>
                  )}
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={toggleMute}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-[16px] border border-black/8 bg-white px-6 text-[15px] font-medium text-[#111] transition-all hover:-translate-y-0.5 hover:bg-[#f6f3ee]"
                    data-testid="button-mute-call"
                  >
                    {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                    {isMuted ? "Unmute" : "Mute"}
                  </button>
                  <button
                    onClick={endCall}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-[16px] bg-[#111] px-6 text-[15px] font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#222]"
                    data-testid="button-end-call"
                  >
                    <PhoneOff className="h-4 w-4" />
                    End call
                  </button>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
