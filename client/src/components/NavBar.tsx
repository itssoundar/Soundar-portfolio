import { Eye, Menu, MessageSquareText, Monitor, MoonStar, Sparkles, X } from "lucide-react";
import { useMemo, useState } from "react";
import { ResumeModal } from "./ResumeModal";

const aiSuggestions = [
  "Explain any project",
  "Show how I think through UX",
  "Find the strongest case study",
  "Summarize my design system work",
];

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [activePrompt, setActivePrompt] = useState(aiSuggestions[0]);

  const aiResponse = useMemo(() => {
    if (activePrompt === "Show how I think through UX") {
      return "I map ambiguity into usable flows, tighten the product story, and turn feedback into systems teams can ship with confidence.";
    }

    if (activePrompt === "Find the strongest case study") {
      return "Start with the AI CRM work. It shows product strategy, workflow simplification, and interface decisions that directly improved usability.";
    }

    if (activePrompt === "Summarize my design system work") {
      return "I build scalable UI foundations with thoughtful tokens, repeatable interaction patterns, and components that stay consistent as products grow.";
    }

    return "Ask about any project and I will frame the context, the problem, the design decisions, and the outcomes in a clean story.";
  }, [activePrompt]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setIsMobileMenuOpen(false);
    const isHome = window.location.pathname === "/";
    if (isHome) {
      e.preventDefault();
      const section = document.getElementById(targetId);
      if (section) {
        const navHeight = 120;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <div className="fixed top-4 left-1/2 z-[9998] flex w-full max-w-6xl -translate-x-1/2 flex-col items-center gap-3 px-4">
        <nav className="w-full rounded-[26px] border border-white/10 bg-[#0b0b0d]/95 px-4 py-3 text-white shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <a
              href="/"
              data-testid="link-home-brand"
              className="rounded-full px-3 py-2 text-sm font-medium tracking-[0.08em] text-white/92 transition-opacity hover:opacity-75"
            >
              Soundar Palande
            </a>

            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
              <a
                href="/#work"
                onClick={(e) => handleNavClick(e, "work")}
                data-testid="link-work"
                className="rounded-full px-4 py-2 text-sm font-medium text-white/72 transition-all hover:bg-white/8 hover:text-white"
              >
                Work
              </a>
              <a
                href="/#about"
                onClick={(e) => handleNavClick(e, "about")}
                data-testid="link-about"
                className="rounded-full px-4 py-2 text-sm font-medium text-white/72 transition-all hover:bg-white/8 hover:text-white"
              >
                About
              </a>
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                data-testid="link-contact"
                className="rounded-full px-4 py-2 text-sm font-medium text-white/72 transition-all hover:bg-white/8 hover:text-white"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
                <button
                  type="button"
                  data-testid="button-desktop-view"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-all hover:bg-white/8 hover:text-white"
                >
                  <Monitor className="h-[18px] w-[18px]" />
                </button>
                <button
                  type="button"
                  data-testid="button-theme-toggle"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-all hover:bg-white/8 hover:text-white"
                >
                  <MoonStar className="h-[18px] w-[18px]" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsAiOpen(true)}
                data-testid="button-open-ai"
                className="hidden h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-black transition-all hover:scale-[1.02] hover:bg-[#f4f4f4] md:inline-flex"
              >
                <MessageSquareText className="h-4 w-4" />
                Talk to my AI
                <Sparkles className="h-4 w-4 text-[#6d5efc]" />
              </button>

              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                data-testid="button-view-resume"
                className="hidden h-11 items-center gap-2 rounded-full border border-white/10 bg-white/6 px-5 text-sm font-medium text-white transition-all hover:bg-white/10 md:inline-flex"
              >
                <Eye className="h-4 w-4" />
                Resume
              </button>

              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white transition-colors hover:bg-white/10 md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-toggle-mobile-menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>

        <button
          type="button"
          onClick={() => {
            setActivePrompt(aiSuggestions[0]);
            setIsAiOpen(true);
          }}
          data-testid="button-ai-prompt-bar"
          className="group flex w-full max-w-[760px] items-center justify-center gap-3 rounded-full border border-[#eaeaea] bg-white/92 px-5 py-3 text-sm text-[#222] shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
        >
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#f8c58c_0%,#8a5a44_100%)] text-[11px] font-semibold text-white">
            AI
          </div>
          <span className="font-medium text-[#5e5e5e]">Try</span>
          <span className="font-semibold text-[#0f0f10] group-hover:text-black">“Talk to my AI”</span>
          <span className="text-[#5e5e5e]">and ask to explain any project</span>
        </button>

        {isMobileMenuOpen && (
          <div className="w-full rounded-[24px] border border-[#19191d] bg-[#0b0b0d]/96 p-4 text-white shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-2">
              <a
                href="/#work"
                onClick={(e) => handleNavClick(e, "work")}
                data-testid="link-mobile-work"
                className="rounded-2xl px-4 py-3 text-base font-medium text-white/80 transition-all hover:bg-white/8 hover:text-white"
              >
                Work
              </a>
              <a
                href="/#about"
                onClick={(e) => handleNavClick(e, "about")}
                data-testid="link-mobile-about"
                className="rounded-2xl px-4 py-3 text-base font-medium text-white/80 transition-all hover:bg-white/8 hover:text-white"
              >
                About
              </a>
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                data-testid="link-mobile-contact"
                className="rounded-2xl px-4 py-3 text-base font-medium text-white/80 transition-all hover:bg-white/8 hover:text-white"
              >
                Contact
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsAiOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                data-testid="button-mobile-open-ai"
                className="mt-2 flex h-12 items-center justify-center gap-2 rounded-2xl bg-white text-sm font-semibold text-black transition-all hover:bg-[#f4f4f4]"
              >
                <MessageSquareText className="h-4 w-4" />
                Talk to my AI
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsResumeOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                data-testid="button-mobile-view-resume"
                className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/6 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                <Eye className="h-4 w-4" />
                View Resume
              </button>
            </div>
          </div>
        )}
      </div>

      {isAiOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/45 px-4 pt-32 backdrop-blur-sm">
          <div className="w-full max-w-3xl overflow-hidden rounded-[32px] border border-white/15 bg-[#0e0e12]/98 text-white shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <div className="border-b border-white/10 px-6 py-5 md:px-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/45">AI Portfolio Guide</p>
                  <h2 data-testid="text-ai-modal-title" className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                    Talk to Soundar's AI
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAiOpen(false)}
                  data-testid="button-close-ai"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/80 transition-all hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="space-y-6 px-6 py-6 md:px-8 md:py-8">
              <div className="grid gap-3 md:grid-cols-2">
                {aiSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => setActivePrompt(suggestion)}
                    data-testid={`button-ai-suggestion-${suggestion.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className={`rounded-[22px] border px-4 py-4 text-left text-sm transition-all ${
                      activePrompt === suggestion
                        ? "border-[#7c72ff] bg-[linear-gradient(135deg,rgba(124,114,255,0.18),rgba(255,255,255,0.06))] text-white shadow-[0_18px_50px_rgba(124,114,255,0.18)]"
                        : "border-white/10 bg-white/[0.04] text-white/75 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)] p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#7c72ff_0%,#4f46e5_100%)] shadow-[0_12px_30px_rgba(99,102,241,0.35)]">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/45">Selected prompt</p>
                    <p data-testid="text-ai-active-prompt" className="text-lg font-semibold tracking-[-0.02em] text-white">
                      {activePrompt}
                    </p>
                    <p data-testid="text-ai-response" className="max-w-2xl text-sm leading-7 text-white/72 md:text-[15px]">
                      {aiResponse}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 rounded-[26px] border border-white/10 bg-black/20 p-4 md:flex-row md:items-center md:justify-between md:p-5">
                <div>
                  <p className="text-sm font-medium text-white">Want the full conversation flow next?</p>
                  <p className="mt-1 text-sm text-white/55">I can expand this into a richer AI assistant section across the hero and project pages.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAiOpen(false)}
                  data-testid="button-ai-got-it"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black transition-all hover:bg-[#f4f4f4]"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
