import { ArrowUpRight, MessageSquare, Phone, Sparkles, X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface TalkToAiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

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
          <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/8 blur-[140px]" />
          <div className="absolute right-[-120px] top-[-80px] h-[260px] w-[260px] rounded-full bg-white/6 blur-[120px]" />
          <div className="absolute left-[-80px] bottom-[-120px] h-[280px] w-[280px] rounded-full bg-white/6 blur-[120px]" />
        </div>

        <div className="relative flex items-start justify-between px-5 pt-5 md:px-9 md:pt-8">
          <div className="max-w-[300px] text-[12px] md:text-[14px] leading-[1.5] text-white/45" data-testid="text-ai-disclaimer">
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
              <a
                href="mailto:rsoundar1998@gmail.com?subject=Let%27s%20talk&body=Hi%20Soundar%2C%20I%27d%20love%20to%20set%20up%20a%20call."
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-6 text-[16px] font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-white/90"
                data-testid="button-start-the-call"
              >
                <Phone className="h-4 w-4" />
                Start the Call
              </a>
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
      </div>
    </div>,
    document.body
  );
}
