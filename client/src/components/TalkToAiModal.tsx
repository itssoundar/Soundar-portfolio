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
              className="relative flex h-[100dvh] w-full flex-col overflow-hidden rounded-none border-0 bg-[#0a0a0a] text-white shadow-none animate-in fade-in zoom-in-95 duration-200 sm:h-auto sm:max-h-[min(920px,calc(100dvh-24px))] sm:max-w-[1120px] sm:rounded-[36px] sm:border sm:border-white/10 sm:shadow-[0_24px_80px_rgba(0,0,0,0.4)]"
              onClick={(event) => event.stopPropagation()}
              style={{ cursor: "auto" }}
              data-testid="modal-talk-to-ai"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(25,25,25,0.95),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(20,20,20,0.7),transparent_28%),radial-gradient(circle_at_left,rgba(15,15,15,0.9),transparent_30%)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="relative flex shrink-0 flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-5 md:px-8 md:py-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#a09c96] shadow-[0_8px_24px_rgba(0,0,0,0.2)] sm:text-[11px] md:text-[12px]" data-testid="badge-ai-mode">
                  <Sparkles className="h-3.5 w-3.5" />
                  Simple voice mode
                </div>

                <div className="order-3 flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[12px] text-[#a09c96] shadow-[0_8px_24px_rgba(0,0,0,0.2)] sm:order-none sm:w-auto sm:justify-start md:px-4 md:text-[13px]">
                  <span className={`h-2 w-2 rounded-full ${isListening ? "bg-[#ff8f50] animate-pulse" : "bg-white/20"}`} />
                  <span data-testid="status-topbar-call">{statusLabel}</span>
                </div>

                <button
                  onClick={handleClose}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-[14px] font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 sm:px-5"
                  data-testid="button-close-talk-to-ai"
                >
                  <X className="h-4 w-4" />
                  Close
                </button>
              </div>

              <div className="relative grid min-h-0 flex-1 grid-cols-1 overflow-y-auto px-4 pb-6 pt-2 sm:px-5 sm:pb-8 md:px-8 md:pt-0 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
                <section className="flex flex-col justify-center py-6 sm:py-8 md:px-2 lg:py-12">
                  <div className="flex items-center gap-3">
                    <div className="flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#111] p-1 shadow-[0_16px_48px_rgba(0,0,0,0.4)] sm:h-[84px] sm:w-[84px]" data-testid="img-soundar-ai-profile">
                      <img src="/Soundar.png" alt="Soundar" className="h-full w-full rounded-full object-cover" />
                    </div>
                    <div>
                      <p className="text-[12px] font-medium uppercase tracking-[0.28em] text-[#8a8276]" data-testid="text-ai-kicker">
                        DZNWITHSOUNDAR
                      </p>
                      <h2 className="mt-2 font-serif text-[34px] leading-[0.98] tracking-[-0.05em] text-white sm:text-[42px] md:text-[56px]" data-testid="text-ai-name">
                        Talk to Soundar
                      </h2>
                    </div>
                  </div>

                  <p className="mt-6 max-w-[540px] text-[16px] leading-[1.85] text-[#a09c96] md:text-[18px]" data-testid="text-ai-subtitle">
                    This version keeps the interaction intentionally simple: start talking, let it listen continuously, and hear a quick spoken response back.
                  </p>

                  <div className="mt-8 rounded-[26px] border border-white/10 bg-[#111]/80 p-5 shadow-[0_24px_64px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:p-6 md:p-7">
                    <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#8a8276]" data-testid="text-voice-prompts-label">
                      Try asking
                    </p>
                    <div className="mt-5 grid gap-3 text-[15px] leading-[1.7] text-[#e0deda]">
                      {PROMPT_SUGGESTIONS.map((suggestion, index) => (
                        <p
                          key={suggestion}
                          className="rounded-2xl border border-white/5 bg-[#1a1a1a] px-4 py-3"
                          data-testid={`text-ai-suggestion-${index}`}
                        >
                          {suggestion}
                        </p>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        onClick={toggleListening}
                        className={`inline-flex h-12 items-center justify-center gap-2 rounded-[16px] px-5 text-[15px] font-medium transition-all hover:-translate-y-0.5 ${isListening ? "border border-[#ff8f50] bg-[#2a170d] text-[#ff8f50] hover:bg-[#3a2012]" : "bg-white text-[#111] shadow-[0_14px_32px_rgba(255,255,255,0.16)] hover:bg-[#f0f0f0]"}`}
                        data-testid="button-toggle-listening"
                      >
                        {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                        {isListening ? "Stop listening" : "Start talking"}
                      </button>

                      <a
                        href="mailto:rsoundar1998@gmail.com?subject=Talk%20to%20Soundar&body=Hi%20Soundar%2C%20I%27d%20like%20to%20chat%20about%20your%20portfolio."
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-[16px] border border-white/10 bg-[#1a1a1a] px-5 text-[15px] font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#222]"
                        data-testid="button-chat-with-me"
                      >
                        <MessageSquare className="h-4 w-4" />
                        Email instead
                      </a>
                    </div>
                  </div>
                </section>

                <section className="flex min-h-[460px] flex-col justify-center rounded-[28px] border border-white/5 bg-[#050505] px-4 py-6 shadow-[inset_0_0_80px_rgba(0,0,0,0.5)] sm:rounded-[34px] sm:px-6 sm:py-8 md:px-8 lg:my-10 lg:min-h-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,143,80,0.15)_0%,transparent_60%)] opacity-0 transition-opacity duration-700 ease-in-out" style={{ opacity: isListening ? 1 : 0 }} />

                  <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-[#a09c96] relative z-10" data-testid="badge-center-status">
                    <span className={`h-2 w-2 rounded-full ${isListening ? "bg-[#ff8f50] animate-pulse" : "bg-white/20"}`} />
                    {statusLabel}
                  </div>

                  <div className="relative mx-auto mt-auto mb-auto flex h-[160px] w-[280px] items-center justify-center sm:h-[180px] sm:w-[320px] md:h-[200px] md:w-[400px] z-10" data-testid="visualizer-voice-orb">
                    {/* The audio wave visualization replaces the orb */}
                    <div className="flex items-center justify-center h-full w-full gap-1">
                      {Array.from({ length: 40 }).map((_, i) => {
                        // Generate a pseudo-random wave pattern based on the index
                        // It peaks in the middle and tapers off at the edges
                        const centerDistance = Math.abs(i - 20) / 20; // 0 at center, 1 at edges
                        const baseHeight = 4 + (Math.sin(i * 0.5) * 6) + (1 - centerDistance) * 20;
                        const activeHeight = isListening ? baseHeight * (1 + Math.random() * 0.8) : 2;
                        
                        return (
                          <div 
                            key={i}
                            className={`w-1 rounded-full transition-all duration-150 ease-in-out ${isListening ? 'opacity-90 bg-gradient-to-t from-[#ff7a2e] to-[#ffb380]' : 'opacity-40 bg-white/20'}`}
                            style={{ 
                              height: `${activeHeight}px`,
                              transform: isListening ? `scaleY(${1 + Math.sin(Date.now() / 100 + i) * 0.2})` : 'scaleY(1)'
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-auto text-center relative z-10">
                    <h3 className="mx-auto max-w-2xl font-serif text-[24px] leading-[1.18] tracking-[-0.05em] text-white sm:text-[30px] md:text-[36px]" data-testid="text-call-response">
                      {response}
                    </h3>
                    <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-[1.8] text-[#a09c96] md:text-[15px]" data-testid="text-call-transcript">
                      You said: {transcript || "Nothing yet — start talking when you're ready."}
                    </p>
                    {error && (
                      <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-[1.7] text-[#ff8f50]" data-testid="text-mic-error">
                        {error}
                      </p>
                    )}
                    {!isSpeechSupported && !error && (
                      <p className="mt-3 text-[13px] text-[#ff8f50]" data-testid="text-speech-fallback">
                        Voice input depends on browser support. If it isn't available, use the email option instead.
                      </p>
                    )}
                  </div>

                  <div className="mt-8 flex items-center justify-center relative z-10">
                    <a
                      href="/#contact"
                      onClick={handleClose}
                      className="inline-flex items-center gap-2 text-[14px] font-medium text-white/70 transition-colors hover:text-white"
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
