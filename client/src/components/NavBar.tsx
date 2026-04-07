import { Eye, Menu, MessageSquareText, Sparkles, X } from "lucide-react";
import { useMemo, useState } from "react";
import { ResumeModal } from "./ResumeModal";

const aiSuggestions = [
  "Explain any project",
  "Show my UX thinking",
  "Best case study to start with",
  "Summarize my design system work",
];

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [activePrompt, setActivePrompt] = useState(aiSuggestions[0]);

  const aiResponse = useMemo(() => {
    if (activePrompt === "Show my UX thinking") {
      return "I turn ambiguous product problems into clear flows, stronger hierarchy, and practical design systems teams can scale with confidence.";
    }

    if (activePrompt === "Best case study to start with") {
      return "Start with the AI CRM project. It shows how I simplify complexity, shape workflows, and connect product decisions back to user outcomes.";
    }

    if (activePrompt === "Summarize my design system work") {
      return "I create systems with reusable patterns, thoughtful visual rules, and components that help products stay consistent as they grow.";
    }

    return "Ask about any project and I can explain the context, problem, design decisions, and the impact in a clean story.";
  }, [activePrompt]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setIsMobileMenuOpen(false);
    const isHome = window.location.pathname === "/";
    if (isHome) {
      e.preventDefault();
      const section = document.getElementById(targetId);
      if (section) {
        const navHeight = 132;
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
      <div className="fixed top-6 left-1/2 z-[9998] flex w-full max-w-5xl -translate-x-1/2 flex-col items-center gap-3 px-4">
        <nav className="w-full rounded-3xl border border-gray-100/60 bg-white/96 px-3 py-2.5 shadow-[0_10px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <a
              href="/"
              data-testid="link-home-brand"
              className="pl-4 text-[15px] font-medium tracking-[0.03em] text-[#111] transition-opacity hover:opacity-80"
            >
              Soundar Palande
            </a>

            <div className="hidden items-center gap-8 pr-1 md:flex">
              <div className="flex items-center gap-8 text-[15px] font-medium text-[#444]">
                <a
                  href="/#work"
                  onClick={(e) => handleNavClick(e, "work")}
                  data-testid="link-work"
                  className="transition-colors hover:text-black"
                >
                  Work
                </a>
                <a
                  href="/#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  data-testid="link-about"
                  className="transition-colors hover:text-black"
                >
                  About
                </a>
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  data-testid="link-contact"
                  className="transition-colors hover:text-black"
                >
                  Contact
                </a>
              </div>

              <button
                type="button"
                onClick={() => setIsAiOpen(true)}
                data-testid="button-open-ai"
                className="inline-flex h-11 items-center gap-2 rounded-[15px] bg-black px-5 text-[14px] font-medium text-white transition-all hover:bg-[#1d1d1f]"
              >
                <MessageSquareText className="h-4 w-4" />
                Talk to my AI
                <Sparkles className="h-4 w-4 text-white/80" />
              </button>

              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                data-testid="button-view-resume"
                className="inline-flex h-11 items-center gap-2 rounded-[15px] border border-gray-200 bg-white px-5 text-[14px] font-medium text-[#111] transition-all hover:bg-gray-50"
              >
                <Eye className="h-4 w-4" />
                View Resume
              </button>
            </div>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-gray-100 transition-colors md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-toggle-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5 text-[#111]" /> : <Menu className="h-5 w-5 text-[#111]" />}
            </button>
          </div>
        </nav>

        <button
          type="button"
          onClick={() => {
            setActivePrompt(aiSuggestions[0]);
            setIsAiOpen(true);
          }}
          data-testid="button-ai-prompt-bar"
          className="flex w-full items-center justify-center gap-3 rounded-full border border-[#ece7de] bg-white/95 px-5 py-3 text-center shadow-[0_12px_30px_rgba(15,23,42,0.07)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.1)]"
        >
          <span className="text-[17px] font-medium text-[#444] md:text-[18px]">Try</span>
          <span className="text-[17px] font-semibold text-[#0f0f10] md:text-[18px]">“Talk to my AI”</span>
          <span className="text-[17px] text-[#5a5a5a] md:text-[18px]">and ask to explain any project</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActivePrompt("Explain any project");
            setIsAiOpen(true);
          }}
          data-testid="button-ai-status-card"
          className="group flex w-full max-w-[560px] items-center justify-start gap-4 rounded-[34px] border border-[#1d1d1f] bg-black px-6 py-5 text-left shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_28px_90px_rgba(0,0,0,0.22)]"
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[#161616]">
            <div className="absolute inset-0 rounded-2xl bg-[#f3d59d]/35 blur-[10px]" />
            <div className="relative h-5 w-5 rounded-[6px] bg-[#f8e2b2] shadow-[0_0_16px_rgba(248,226,178,0.75)]" />
          </div>
          <div className="min-w-0">
            <p data-testid="text-ai-status-label" className="truncate text-[15px] font-normal text-white/58 md:text-[16px]">
              Read portfolio.tsx · creating context
            </p>
            <p data-testid="text-ai-status-title" className="truncate text-[28px] font-semibold tracking-[-0.03em] text-white transition-opacity group-hover:opacity-95 md:text-[30px]">
              Creating prototype
            </p>
          </div>
        </button>

        {isMobileMenuOpen && (
          <div className="w-full rounded-3xl border border-gray-100/80 bg-white/96 p-4 shadow-[0_16px_50px_rgba(15,23,42,0.1)] backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-2 text-[16px] font-medium text-[#444]">
              <a
                href="/#work"
                onClick={(e) => handleNavClick(e, "work")}
                data-testid="link-mobile-work"
                className="rounded-2xl px-4 py-3 transition-colors hover:bg-gray-50 hover:text-black"
              >
                Work
              </a>
              <a
                href="/#about"
                onClick={(e) => handleNavClick(e, "about")}
                data-testid="link-mobile-about"
                className="rounded-2xl px-4 py-3 transition-colors hover:bg-gray-50 hover:text-black"
              >
                About
              </a>
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                data-testid="link-mobile-contact"
                className="rounded-2xl px-4 py-3 transition-colors hover:bg-gray-50 hover:text-black"
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
                className="mt-2 flex h-12 items-center justify-center gap-2 rounded-2xl bg-black text-sm font-semibold text-white transition-all hover:bg-[#1d1d1f]"
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
                className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white text-sm font-medium text-[#111] transition-all hover:bg-gray-50"
              >
                <Eye className="h-4 w-4" />
                View Resume
              </button>
            </div>
          </div>
        )}
      </div>

      {isAiOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/35 px-4 pt-32 backdrop-blur-sm">
          <div className="w-full max-w-3xl overflow-hidden rounded-[32px] border border-[#1b1b1b] bg-[#0d0d0f] text-white shadow-[0_30px_120px_rgba(0,0,0,0.4)]">
            <div className="border-b border-white/10 px-6 py-5 md:px-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/45">AI Portfolio Guide</p>
                  <h2 data-testid="text-ai-modal-title" className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                    Talk to my AI
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
                        ? "border-[#8d7dff] bg-[linear-gradient(135deg,rgba(141,125,255,0.18),rgba(255,255,255,0.06))] text-white shadow-[0_18px_50px_rgba(124,114,255,0.18)]"
                        : "border-white/10 bg-white/[0.04] text-white/75 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)] p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#8d7dff_0%,#5b4df1_100%)] shadow-[0_12px_30px_rgba(99,102,241,0.35)]">
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
            </div>
          </div>
        </div>
      )}

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
