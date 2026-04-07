import { Menu, MessageSquareText, Sparkles, X } from "lucide-react";
import { useMemo, useState } from "react";

const aiSuggestions = [
  "Explain any project",
  "Show my UX thinking",
  "Best case study to start with",
  "Summarize my design system work",
];

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [activePrompt, setActivePrompt] = useState(aiSuggestions[0]);

  const aiResponse = useMemo(() => {
    if (activePrompt === "Show my UX thinking") {
      return "I turn ambiguous product problems into clear flows, stronger hierarchy, and practical systems teams can scale with confidence.";
    }

    if (activePrompt === "Best case study to start with") {
      return "Start with the AI CRM project. It shows how I simplify complex workflows and connect design decisions back to user outcomes.";
    }

    if (activePrompt === "Summarize my design system work") {
      return "I create reusable foundations, interaction patterns, and visual rules that help products stay consistent as they grow.";
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
      <div className="fixed top-6 left-1/2 z-[9998] w-full max-w-6xl -translate-x-1/2 px-4">
        <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/95 shadow-[0_22px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
          <nav className="px-4 py-3 md:px-6">
            <div className="flex items-center justify-between gap-3">
              <a
                href="/"
                data-testid="link-home-brand"
                className="rounded-full px-3 py-2 text-[15px] font-semibold tracking-[0.04em] text-[#111] transition-opacity hover:opacity-75"
              >
                DZNWITHSOUNDAR
              </a>

              <div className="hidden items-center gap-8 md:flex">
                <a
                  href="/#work"
                  onClick={(e) => handleNavClick(e, "work")}
                  data-testid="link-work"
                  className="text-[15px] font-medium text-[#444] transition-colors hover:text-black"
                >
                  Work
                </a>
                <a
                  href="/#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  data-testid="link-about"
                  className="text-[15px] font-medium text-[#444] transition-colors hover:text-black"
                >
                  About
                </a>
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  data-testid="link-contact"
                  className="text-[15px] font-medium text-[#444] transition-colors hover:text-black"
                >
                  Contact
                </a>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsAiOpen(true)}
                  data-testid="button-open-ai"
                  className="hidden h-11 items-center gap-2 rounded-[16px] bg-black px-5 text-[14px] font-medium text-white transition-all hover:bg-[#1a1a1d] md:inline-flex"
                >
                  <MessageSquareText className="h-4 w-4" />
                  Talk to my AI
                </button>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  data-testid="button-toggle-mobile-menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-[#111] transition-colors hover:bg-gray-100 md:hidden"
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
            className="flex h-[42px] w-full items-center justify-center gap-2 bg-[#111214] px-4 text-center transition-all hover:bg-[#17181c]"
          >
            <span className="hidden h-2 w-2 rounded-full bg-[#f5d7a1] shadow-[0_0_16px_rgba(245,215,161,0.8)] md:block" />
            <span className="text-[15px] font-medium text-white/76">Try</span>
            <span className="text-[15px] font-semibold text-white">“Talk to my AI”</span>
            <span className="hidden text-[15px] text-white/68 sm:inline">and ask to explain any project</span>
            <span className="text-[15px] text-white/68 sm:hidden">to explain any project</span>
          </button>

          {isMobileMenuOpen && (
            <div className="border-t border-[#ececec] bg-white px-4 py-4 md:hidden">
              <div className="flex flex-col gap-2">
                <a
                  href="/#work"
                  onClick={(e) => handleNavClick(e, "work")}
                  data-testid="link-mobile-work"
                  className="rounded-2xl px-4 py-3 text-[15px] font-medium text-[#444] transition-colors hover:bg-gray-50 hover:text-black"
                >
                  Work
                </a>
                <a
                  href="/#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  data-testid="link-mobile-about"
                  className="rounded-2xl px-4 py-3 text-[15px] font-medium text-[#444] transition-colors hover:bg-gray-50 hover:text-black"
                >
                  About
                </a>
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  data-testid="link-mobile-contact"
                  className="rounded-2xl px-4 py-3 text-[15px] font-medium text-[#444] transition-colors hover:bg-gray-50 hover:text-black"
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
                  className="mt-2 flex h-12 items-center justify-center gap-2 rounded-2xl bg-black text-sm font-semibold text-white transition-all hover:bg-[#1a1a1d]"
                >
                  <MessageSquareText className="h-4 w-4" />
                  Talk to my AI
                </button>
              </div>
            </div>
          )}
        </div>
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
    </>
  );
}
