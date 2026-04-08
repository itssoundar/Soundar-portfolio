import { ArrowUpRight, MessageSquare, Mic, Phone, PhoneOff, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { VoiceAssistant, type VoiceAssistantIntent } from "./VoiceAssistant";

interface TalkToAiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalView = "home" | "call";

type PromptSuggestion = {
  id: string;
  label: string;
};

const PROMPT_SUGGESTIONS: PromptSuggestion[] = [
  { id: "agents", label: "Ask about the AI project" },
  { id: "genesis", label: "Ask about the design system" },
  { id: "analytics", label: "Ask about the SaaS CRM work" },
  { id: "intro", label: "Ask for a quick introduction" },
];

const PROJECT_ID_MAP: Record<Exclude<VoiceAssistantIntent, "general">, string> = {
  ai: "crm-ai",
  design: "design-system",
  saas: "conversational-b2b",
};

export function TalkToAiModal({ isOpen, onClose }: TalkToAiModalProps) {
  const [view, setView] = useState<ModalView>("home");
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.cursor = "auto";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.style.cursor = "";
      document.body.classList.remove("modal-open");
      setView("home");
      setElapsedSeconds(0);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.cursor = "";
      document.body.classList.remove("modal-open");
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

    const interval = window.setInterval(() => {
      setElapsedSeconds((current) => current + 1);
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isOpen, view]);

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

  const handleHighlightProject = (intent: Exclude<VoiceAssistantIntent, "general">) => {
    const projectId = PROJECT_ID_MAP[intent];

    onClose();
    setView("home");

    window.setTimeout(() => {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.dispatchEvent(new CustomEvent("portfolio-highlight-project", { detail: { projectId } }));
    }, 180);
  };

  if (!isOpen) return null;

  return createPortal(
    <VoiceAssistant autoRestart onHighlightProject={handleHighlightProject}>
      {({ status, statusLabel, transcript, response, error, isSpeechSupported, startListening, stopAll }) => {
        const isListening = status === "listening";
        const isProcessing = status === "processing";
        const isSpeaking = status === "speaking";

        const orbScaleClass = isListening ? "scale-110" : isSpeaking ? "scale-105" : isProcessing ? "scale-95" : "scale-100";
        const orbGlowClass = isListening
          ? "from-[#d9efff] via-[#80c7ff]/70 to-transparent"
          : isSpeaking
            ? "from-[#ffe3c4] via-[#ffc277]/70 to-transparent"
            : isProcessing
              ? "from-[#efe9de] via-[#d9d2c4]/70 to-transparent"
              : "from-[#f3f5f8] via-white to-transparent";

        const handleStartConversation = async () => {
          setView("call");
          setElapsedSeconds(0);
          await startListening();
        };

        const handleHeaderMic = async () => {
          setView("call");
          await startListening();
        };

        const handleEndCall = () => {
          stopAll();
          setView("home");
          setElapsedSeconds(0);
        };

        return (
          <div
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-[rgba(247,244,238,0.82)] p-0 backdrop-blur-xl sm:p-3 md:p-6"
            onClick={onClose}
            style={{ cursor: "auto" }}
            data-testid="modal-talk-to-ai-overlay"
          >
            <div
              className="relative flex h-[100dvh] w-full flex-col overflow-hidden rounded-none border-0 bg-[linear-gradient(180deg,#fffdf9_0%,#ffffff_42%,#fbfaf7_100%)] text-[#111] shadow-none animate-in fade-in zoom-in-95 duration-200 sm:h-auto sm:max-h-[min(920px,calc(100dvh-24px))] sm:max-w-[1220px] sm:rounded-[36px] sm:border sm:border-black/8 sm:shadow-[0_24px_80px_rgba(17,17,17,0.12)]"
              onClick={(event) => event.stopPropagation()}
              style={{ cursor: "auto" }}
              data-testid="modal-talk-to-ai"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,239,229,0.7),transparent_28%),radial-gradient(circle_at_left,rgba(240,244,255,0.9),transparent_30%)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

              <div className="relative flex shrink-0 flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-5 md:px-8 md:py-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#6b665d] shadow-[0_8px_24px_rgba(17,17,17,0.04)] sm:text-[11px] md:text-[12px]" data-testid="badge-ai-mode">
                  <Sparkles className="h-3.5 w-3.5" />
                  Portfolio assistant
                </div>

                <div className="order-3 flex w-full items-center justify-center gap-2 rounded-full border border-black/8 bg-white/80 px-3 py-1.5 text-[12px] text-[#6b665d] shadow-[0_8px_24px_rgba(17,17,17,0.04)] sm:order-none sm:w-auto sm:justify-start md:px-4 md:text-[13px]">
                  <span className={`h-2 w-2 rounded-full ${isListening ? "bg-[#88b7ff] animate-pulse" : isProcessing ? "bg-[#d4b483] animate-pulse" : isSpeaking ? "bg-[#ffb56f] animate-pulse" : "bg-black/20"}`} />
                  <span data-testid="status-topbar-call">{statusLabel}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleHeaderMic}
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-black/8 bg-[#111] px-4 text-[14px] font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#222] sm:px-5"
                    data-testid="button-header-microphone"
                  >
                    <Mic className="h-4 w-4" />
                    {isListening ? "Listening" : "Start listening"}
                  </button>
                  <button
                    onClick={onClose}
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-black/8 bg-white px-4 text-[14px] font-medium text-[#111] transition-all hover:-translate-y-0.5 hover:bg-[#f6f3ee] sm:px-5"
                    data-testid="button-close-talk-to-ai"
                  >
                    <X className="h-4 w-4" />
                    Close
                  </button>
                </div>
              </div>

              {view === "home" ? (
                <div className="relative flex min-h-0 flex-1 items-start justify-center overflow-y-auto px-4 pb-8 pt-6 sm:px-6 sm:py-10 md:px-10 md:py-16">
                  <div className="my-auto w-full max-w-[560px] text-center">
                    <div className="mx-auto mb-6 flex h-[104px] w-[104px] items-center justify-center overflow-hidden rounded-full border border-black/8 bg-white p-1 shadow-[0_16px_48px_rgba(17,17,17,0.08)] sm:mb-8 sm:h-[124px] sm:w-[124px]">
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
                    <h2 className="mt-4 font-serif text-[38px] leading-[0.98] tracking-[-0.05em] text-[#111] sm:text-[44px] md:text-[64px]" data-testid="text-ai-name">
                      Talk to Soundar
                    </h2>
                    <p className="mx-auto mt-5 max-w-[500px] text-[16px] leading-[1.8] text-[#5f584e] md:text-[18px]" data-testid="text-ai-subtitle">
                      A conversational portfolio assistant that lets people explore AI, design system, and SaaS CRM work in a more natural, guided way.
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <button
                        onClick={handleStartConversation}
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
                      Ask about Soundar's AI work, design systems, SaaS CRM products, or a quick introduction.
                    </p>

                    <div className="mt-8 rounded-[24px] border border-black/8 bg-white/90 p-5 text-left shadow-[0_24px_64px_rgba(17,17,17,0.06)] backdrop-blur-sm sm:mt-10 sm:rounded-[28px] sm:p-6 md:p-7">
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
                <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pb-6 pt-2 sm:px-5 sm:pb-8 md:px-8 md:pt-0">
                  <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 pb-4 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8 lg:pb-0">
                    <aside className="order-2 rounded-[26px] border border-black/8 bg-white/82 p-4 shadow-[0_24px_64px_rgba(17,17,17,0.05)] backdrop-blur-md sm:rounded-[30px] sm:p-5 lg:order-1 lg:p-6">
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
                            Conversational portfolio assistant
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
                              {statusLabel}
                            </div>
                          </div>
                        </div>

                        <div className="rounded-[24px] border border-[#ece7df] bg-[#fcfaf6] p-4">
                          <p className="text-[11px] uppercase tracking-[0.2em] text-[#8a8276]">Voice behavior</p>
                          <p className="mt-3 text-[14px] leading-[1.7] text-[#5f584e]" data-testid="text-call-disclaimer">
                            The assistant listens, processes intent, responds with speech, and can jump directly to the relevant project section when it recognizes AI, design, or SaaS topics.
                          </p>
                        </div>
                      </div>
                    </aside>

                    <section className="order-1 flex min-h-[460px] flex-col items-center justify-center rounded-[28px] border border-black/8 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(248,245,239,0.96)_52%,rgba(241,244,250,0.9)_100%)] px-4 py-6 shadow-[0_24px_64px_rgba(17,17,17,0.05)] sm:rounded-[34px] sm:py-8 md:px-8 lg:order-2 lg:h-full lg:min-h-0">
                      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-[#6b665d]" data-testid="badge-center-status">
                        <span className={`h-2 w-2 rounded-full ${isListening ? "bg-[#88b7ff] animate-pulse" : isProcessing ? "bg-[#d4b483] animate-pulse" : isSpeaking ? "bg-[#ffb56f] animate-pulse" : "bg-black/20"}`} />
                        {statusLabel}
                      </div>

                      <div className="relative flex h-[220px] w-[220px] items-center justify-center sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px]" data-testid="visualizer-voice-orb">
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${orbGlowClass} blur-3xl transition-all duration-500`} />
                        <div className={`absolute inset-[18%] rounded-full border border-black/6 bg-white/70 transition-all duration-500 ${orbScaleClass} ${isListening ? "animate-pulse" : ""}`} />
                        <div className={`absolute inset-[30%] rounded-full border border-black/8 bg-gradient-to-br from-white to-[#f4f2ee] shadow-[0_20px_70px_rgba(17,17,17,0.08)] transition-all duration-500 ${orbScaleClass}`} />
                        <div className="absolute inset-[38%] overflow-hidden rounded-full border border-white bg-white shadow-[0_18px_60px_rgba(17,17,17,0.14)]">
                          <img src="/Soundar.png" alt="Soundar" className="h-full w-full object-cover" data-testid="img-orb-soundar" />
                        </div>
                      </div>

                      <div className="mt-8 w-full max-w-3xl text-center">
                        <h3 className="font-serif text-[24px] leading-[1.18] tracking-[-0.05em] text-[#111] sm:text-[30px] md:text-[50px]" data-testid="text-call-response">
                          {response}
                        </h3>
                        <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-[1.8] text-[#6a645a] md:text-[15px]" data-testid="text-call-transcript">
                          Transcript: {transcript || "Tap the microphone to start speaking."}
                        </p>
                        {error && (
                          <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-[1.7] text-[#c57b3f]" data-testid="text-mic-error">
                            {error}
                          </p>
                        )}
                        {!isSpeechSupported && !error && (
                          <p className="mt-3 text-[13px] text-[#c57b3f]" data-testid="text-speech-fallback">
                            Voice input depends on browser support. In supported browsers, the microphone button will start recognition immediately.
                          </p>
                        )}
                      </div>

                      <div className="mt-8 flex w-full max-w-md flex-wrap items-center justify-center gap-3 sm:mt-10 sm:max-w-none">
                        <button
                          onClick={handleHeaderMic}
                          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[16px] border border-black/8 bg-white px-6 text-[15px] font-medium text-[#111] transition-all hover:-translate-y-0.5 hover:bg-[#f6f3ee] sm:w-auto"
                          data-testid="button-restart-listening"
                        >
                          <Mic className="h-4 w-4" />
                          {isListening ? "Listening" : "Ask another question"}
                        </button>
                        <button
                          onClick={handleEndCall}
                          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[16px] bg-[#111] px-6 text-[15px] font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#222] sm:w-auto"
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
          </div>
        );
      }}
    </VoiceAssistant>,
    document.body
  );
}
