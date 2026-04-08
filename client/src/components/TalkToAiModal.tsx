import { ArrowUpRight, MessageSquare, Mic, MicOff, Sparkles, X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { VoiceAssistant } from "./VoiceAssistant";

interface TalkToAiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PROMPT_SUGGESTIONS = [
  "Ask about the portfolio",
  "Ask about a project",
  "Ask who Soundar is",
];

export function TalkToAiModal({ isOpen, onClose }: TalkToAiModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.cursor = "auto";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.style.cursor = "";
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.cursor = "";
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <VoiceAssistant>
      {({ statusLabel, transcript, response, error, isSpeechSupported, isListening, toggleListening, stopListening }) => {
        const handleClose = () => {
          stopListening();
          onClose();
        };

        return (
          <div
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-[rgba(247,244,238,0.82)] p-0 backdrop-blur-xl sm:p-3 md:p-6"
            onClick={handleClose}
            style={{ cursor: "auto" }}
            data-testid="modal-talk-to-ai-overlay"
          >
            <div
              className="relative flex h-[100dvh] w-full flex-col overflow-hidden rounded-none border-0 bg-[linear-gradient(180deg,#fffdf9_0%,#ffffff_42%,#fbfaf7_100%)] text-[#111] shadow-none animate-in fade-in zoom-in-95 duration-200 sm:h-auto sm:max-h-[min(920px,calc(100dvh-24px))] sm:max-w-[1120px] sm:rounded-[36px] sm:border sm:border-black/8 sm:shadow-[0_24px_80px_rgba(17,17,17,0.12)]"
              onClick={(event) => event.stopPropagation()}
              style={{ cursor: "auto" }}
              data-testid="modal-talk-to-ai"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,239,229,0.7),transparent_28%),radial-gradient(circle_at_left,rgba(240,244,255,0.9),transparent_30%)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

              <div className="relative flex shrink-0 flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-5 md:px-8 md:py-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#6b665d] shadow-[0_8px_24px_rgba(17,17,17,0.04)] sm:text-[11px] md:text-[12px]" data-testid="badge-ai-mode">
                  <Sparkles className="h-3.5 w-3.5" />
                  Simple voice mode
                </div>

                <div className="order-3 flex w-full items-center justify-center gap-2 rounded-full border border-black/8 bg-white/80 px-3 py-1.5 text-[12px] text-[#6b665d] shadow-[0_8px_24px_rgba(17,17,17,0.04)] sm:order-none sm:w-auto sm:justify-start md:px-4 md:text-[13px]">
                  <span className={`h-2 w-2 rounded-full ${isListening ? "bg-[#88b7ff] animate-pulse" : "bg-black/20"}`} />
                  <span data-testid="status-topbar-call">{statusLabel}</span>
                </div>

                <button
                  onClick={handleClose}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-black/8 bg-white px-4 text-[14px] font-medium text-[#111] transition-all hover:-translate-y-0.5 hover:bg-[#f6f3ee] sm:px-5"
                  data-testid="button-close-talk-to-ai"
                >
                  <X className="h-4 w-4" />
                  Close
                </button>
              </div>

              <div className="relative grid min-h-0 flex-1 grid-cols-1 overflow-y-auto px-4 pb-6 pt-2 sm:px-5 sm:pb-8 md:px-8 md:pt-0 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
                <section className="flex flex-col justify-center py-6 sm:py-8 md:px-2 lg:py-12">
                  <div className="flex items-center gap-3">
                    <div className="flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-full border border-black/8 bg-white p-1 shadow-[0_16px_48px_rgba(17,17,17,0.08)] sm:h-[84px] sm:w-[84px]" data-testid="img-soundar-ai-profile">
                      <img src="/Soundar.png" alt="Soundar" className="h-full w-full rounded-full object-cover" />
                    </div>
                    <div>
                      <p className="text-[12px] font-medium uppercase tracking-[0.28em] text-[#8a8276]" data-testid="text-ai-kicker">
                        DZNWITHSOUNDAR
                      </p>
                      <h2 className="mt-2 font-serif text-[34px] leading-[0.98] tracking-[-0.05em] text-[#111] sm:text-[42px] md:text-[56px]" data-testid="text-ai-name">
                        Talk to Soundar
                      </h2>
                    </div>
                  </div>

                  <p className="mt-6 max-w-[540px] text-[16px] leading-[1.85] text-[#5f584e] md:text-[18px]" data-testid="text-ai-subtitle">
                    This version keeps the interaction intentionally simple: start talking, let it listen continuously, and hear a quick spoken response back.
                  </p>

                  <div className="mt-8 rounded-[26px] border border-black/8 bg-white/88 p-5 shadow-[0_24px_64px_rgba(17,17,17,0.06)] backdrop-blur-sm sm:p-6 md:p-7">
                    <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#8a8276]" data-testid="text-voice-prompts-label">
                      Try asking
                    </p>
                    <div className="mt-5 grid gap-3 text-[15px] leading-[1.7] text-[#34312d]">
                      {PROMPT_SUGGESTIONS.map((suggestion, index) => (
                        <p
                          key={suggestion}
                          className="rounded-2xl border border-[#f0ebe3] bg-[#fcfaf6] px-4 py-3"
                          data-testid={`text-ai-suggestion-${index}`}
                        >
                          {suggestion}
                        </p>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        onClick={toggleListening}
                        className={`inline-flex h-12 items-center justify-center gap-2 rounded-[16px] px-5 text-[15px] font-medium transition-all hover:-translate-y-0.5 ${isListening ? "border border-black/8 bg-white text-[#111] hover:bg-[#f6f3ee]" : "bg-[#111] text-white shadow-[0_14px_32px_rgba(17,17,17,0.16)] hover:bg-[#222]"}`}
                        data-testid="button-toggle-listening"
                      >
                        {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                        {isListening ? "Stop listening" : "Start talking"}
                      </button>

                      <a
                        href="mailto:rsoundar1998@gmail.com?subject=Talk%20to%20Soundar&body=Hi%20Soundar%2C%20I%27d%20like%20to%20chat%20about%20your%20portfolio."
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-[16px] border border-black/8 bg-white px-5 text-[15px] font-medium text-[#111] transition-all hover:-translate-y-0.5 hover:bg-[#f6f3ee]"
                        data-testid="button-chat-with-me"
                      >
                        <MessageSquare className="h-4 w-4" />
                        Email instead
                      </a>
                    </div>
                  </div>
                </section>

                <section className="flex min-h-[460px] flex-col justify-center rounded-[28px] border border-black/8 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(248,245,239,0.96)_52%,rgba(241,244,250,0.9)_100%)] px-4 py-6 shadow-[0_24px_64px_rgba(17,17,17,0.05)] sm:rounded-[34px] sm:px-6 sm:py-8 md:px-8 lg:my-10 lg:min-h-0">
                  <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-[#6b665d]" data-testid="badge-center-status">
                    <span className={`h-2 w-2 rounded-full ${isListening ? "bg-[#88b7ff] animate-pulse" : "bg-black/20"}`} />
                    {statusLabel}
                  </div>

                  <div className="relative mx-auto mt-8 flex h-[220px] w-[220px] items-center justify-center sm:h-[280px] sm:w-[280px] md:h-[330px] md:w-[330px]" data-testid="visualizer-voice-orb">
                    <div className={`absolute inset-0 rounded-full blur-3xl transition-all duration-500 ${isListening ? "bg-gradient-to-br from-[#d9efff] via-[#80c7ff]/70 to-transparent" : "bg-gradient-to-br from-[#f3f5f8] via-white to-transparent"}`} />
                    <div className={`absolute inset-[18%] rounded-full border border-black/6 bg-white/70 transition-all duration-500 ${isListening ? "scale-110" : "scale-100"}`} />
                    <div className={`absolute inset-[30%] rounded-full border border-black/8 bg-gradient-to-br from-white to-[#f4f2ee] shadow-[0_20px_70px_rgba(17,17,17,0.08)] transition-all duration-500 ${isListening ? "scale-105" : "scale-100"}`} />
                    <div className="absolute inset-[38%] overflow-hidden rounded-full border border-white bg-white shadow-[0_18px_60px_rgba(17,17,17,0.14)]">
                      <img src="/Soundar.png" alt="Soundar" className="h-full w-full object-cover" data-testid="img-orb-soundar" />
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <h3 className="mx-auto max-w-2xl font-serif text-[24px] leading-[1.18] tracking-[-0.05em] text-[#111] sm:text-[30px] md:text-[42px]" data-testid="text-call-response">
                      {response}
                    </h3>
                    <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-[1.8] text-[#6a645a] md:text-[15px]" data-testid="text-call-transcript">
                      You said: {transcript || "Nothing yet — start talking when you're ready."}
                    </p>
                    {error && (
                      <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-[1.7] text-[#c57b3f]" data-testid="text-mic-error">
                        {error}
                      </p>
                    )}
                    {!isSpeechSupported && !error && (
                      <p className="mt-3 text-[13px] text-[#c57b3f]" data-testid="text-speech-fallback">
                        Voice input depends on browser support. If it isn't available, use the email option instead.
                      </p>
                    )}
                  </div>

                  <div className="mt-8 flex items-center justify-center">
                    <a
                      href="/#contact"
                      onClick={handleClose}
                      className="inline-flex items-center gap-2 text-[14px] font-medium text-[#111] transition-opacity hover:opacity-75"
                      data-testid="link-jump-to-contact"
                    >
                      Or skip straight to contact
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        );
      }}
    </VoiceAssistant>,
    document.body
  );
}
