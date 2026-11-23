import { useEffect } from "react";
import { Link } from "wouter";
import { BackButton } from "@/components/BackButton";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Footer } from "@/components/Footer";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { AlertTriangle, Layers, TrendingUp, Target, Users } from "lucide-react";
import {
  Reveal,
  IconBeforeAfter,
  ModulePatternsBeforeAfter,
  WorkflowDiagram,
  TokenLayers,
  FoundationScales,
  ComponentHierarchy,
  StatesRow,
  CountStat,
} from "@/components/case-study/visuals";

/**
 * Case study (layout preview): Genesis design system, re-structured to follow
 * the editorial pattern of the reference page — hero with one italic word,
 * meta row, intro, Problems / Solution / Results snapshot, then long-form
 * sections written as "eyebrow label + sentence headline", a stat block,
 * learnings and a next-project link. All content comes from the existing
 * Genesis case study.
 */

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-indigo-600 mb-3">{children}</p>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-[26px] md:text-[34px] font-semibold leading-[1.2] tracking-[-0.02em] text-gray-900 mb-6 max-w-[760px]">
    {children}
  </h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[16px] md:text-[18px] leading-[1.75] text-gray-600 mb-5 max-w-[720px]">{children}</p>
);

const Bullets = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="space-y-3 mb-6 max-w-[720px]">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3 text-[16px] md:text-[18px] leading-[1.65] text-gray-600">
        <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Figure = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <figure className="my-10">
    <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
      <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-auto block" />
    </div>
    <figcaption className="mt-3 text-[13px] text-gray-500">{caption}</figcaption>
  </figure>
);

const Section = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <section id={id} className="py-14 md:py-20 border-t border-gray-200 first:border-t-0 scroll-mt-20">
    <Reveal>{children}</Reveal>
  </section>
);

export default function ProjectDetail4() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useDocumentMeta(
    "Genesis Design System · Case Study | Soundar",
    "A design system that unified a growing CRM — 30% faster design-to-development turnaround, 28% fewer UI inconsistency bugs and 40%+ less duplicated design work.",
  );

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-indigo-600 selection:text-white">
      <ReadingProgress />
      <BackButton />

      {/* HERO */}
      <header className="pt-[120px] md:pt-[160px] pb-12 md:pb-16 px-4 md:px-8">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="text-[38px] sm:text-[48px] md:text-[64px] font-semibold leading-[1.1] tracking-[-0.03em] text-gray-900 max-w-[900px]">
            A design system that unified a growing CRM and helped teams ship{" "}
            <span className="font-serif italic font-normal">faster</span>
          </h1>

          <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 pt-8 border-t border-gray-200">
            {[
              ["Role", "Senior Product Designer"],
              ["Status", "Shipped"],
              ["Type", "Design System · B2B SaaS"],
              ["Platform", "Web app · CRM"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-400 mb-1">{k}</dt>
                <dd className="text-[16px] md:text-[17px] font-medium text-gray-900">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className="px-4 md:px-8">
        <div className="max-w-[1000px] mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-[#2b2160]">
          <img
            src="/c2-s1-1.webp"
            alt="Genesis design system component architecture"
            className="w-full h-auto max-h-[460px] object-cover object-top block"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="px-4 md:px-8">
        <div className="max-w-[1000px] mx-auto">
          {/* INTRO */}
          <Section id="intro">
            <Eyebrow>Intro</Eyebrow>
            <p className="text-[22px] md:text-[28px] leading-[1.4] tracking-[-0.01em] text-gray-900 font-medium max-w-[820px] mb-6">
              Sense is an AI-powered recruiting platform. As it grew across modules, every team made its own UI decisions.
              <span className="text-gray-500"> The product worked, but it didn't feel unified.</span>
            </p>
            <P>
              Feature velocity was rising while visual consistency and interaction logic were fragmenting. I led the
              CRM modernisation using the Genesis Design System, not as a visual refresh but as a foundational system
              redesign.
            </P>
            <p className="text-[14px] italic text-gray-500">Details are shared at a level that respects confidentiality.</p>
          </Section>

          {/* SNAPSHOT */}
          <Section id="snapshot">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  label: "Problems",
                  items: [
                    "Each module evolved on its own, so buttons, forms, tables and modals behaved differently",
                    "Designers and engineers rebuilt the same patterns again and again",
                    "Delivery slowed as small UI changes needed large refactors",
                  ],
                },
                {
                  label: "Solution",
                  items: [
                    "A full UI audit and a three-level component architecture",
                    "A reusable CRM component library aligned to Genesis tokens",
                    "Standard grids, spacing, navigation and AI-module layout patterns",
                  ],
                },
                {
                  label: "Results",
                  items: [
                    "30% faster design-to-development turnaround",
                    "28% fewer UI inconsistency bugs",
                    "40%+ less duplicated design work",
                  ],
                },
              ].map((col) => (
                <div key={col.label} className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      {col.label === "Problems" ? <AlertTriangle size={18} /> : col.label === "Solution" ? <Layers size={18} /> : <TrendingUp size={18} />}
                    </span>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-indigo-600">{col.label}</p>
                  </div>
                  <ul className="space-y-3">
                    {col.items.map((t) => (
                      <li key={t} className="text-[15px] leading-[1.6] text-gray-700 font-medium">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* PROCESS */}
          <Section id="process">
            <Eyebrow>Process</Eyebrow>
            <H3>The product looked fine. Until you tried to scale it.</H3>
            <P>The CRM had grown feature by feature without a shared foundation. The product was scaling. The design language was not.</P>
            <Bullets
              items={[
                "Buttons had varying sizes and hierarchy rules",
                "Form layouts differed between hiring and analytics modules",
                "Table interactions were inconsistent",
                "Modal behaviour varied across flows",
              ]}
            />
            <div className="my-10">
              <ModulePatternsBeforeAfter />
              <p className="mt-3 text-[13px] text-gray-500">Fig 1. Drag to compare: the same Save action in four modules, before and after Genesis.</p>
            </div>
            <Figure
              src="/c2-s3-1.webp"
              alt="An old component next to its Genesis replacement"
              caption="Fig 2. An old component next to its Genesis replacement."
            />
            <P>
              The cost showed up everywhere: longer onboarding for recruiters, more QA issues, slower design-to-dev
              cycles and a weaker sense of brand.
            </P>
          </Section>

          {/* GOALS */}
          <Section id="goals">
            <Eyebrow>Goals</Eyebrow>
            <H3>Make the system predictable for the business and for the people using it.</H3>
            <div className="grid md:grid-cols-2 gap-5 mt-8">
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-6">
                <p className="flex items-center gap-2 text-[14px] font-semibold text-gray-900 mb-4"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"><Target size={16} /></span>Business goals</p>
                <Bullets
                  items={[
                    <><strong className="text-gray-900">Consistency</strong> across all CRM modules</>,
                    <><strong className="text-gray-900">Shorter</strong> design-to-development cycles</>,
                    <><strong className="text-gray-900">Stickier</strong> platform with less cognitive load</>,
                    <><strong className="text-gray-900">Faster</strong> feature experimentation</>,
                  ]}
                />
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-6">
                <p className="flex items-center gap-2 text-[14px] font-semibold text-gray-900 mb-4"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"><Users size={16} /></span>User goals</p>
                <Bullets
                  items={[
                    <><strong className="text-gray-900">Familiar</strong> interaction patterns</>,
                    <><strong className="text-gray-900">Predictable</strong> workflows</>,
                    <><strong className="text-gray-900">Less switching</strong> cost between modules</>,
                    <><strong className="text-gray-900">Faster</strong> onboarding for new recruiters</>,
                  ]}
                />
              </div>
            </div>
          </Section>

          {/* FOUNDATIONS */}
          <Section id="foundations">
            <Eyebrow>The foundations</Eyebrow>
            <H3>Starting with an audit, then a clear component hierarchy.</H3>
            <P>
              I audited the whole CRM for duplicated components, inconsistent patterns and drift from Genesis, then
              redefined how components are organised and aligned everything to the Genesis tokens for spacing,
              typography, colour and states.
            </P>
            <div className="my-8"><ComponentHierarchy /></div>
            <P>One source of truth for components removed redundant patterns and made future modules easier to add.</P>

            <h4 className="mt-14 mb-2 text-[20px] md:text-[22px] font-semibold text-gray-900">A token structure with three layers</h4>
            <P>Raw values become meaning, and meaning becomes component behaviour. Change a token once and every module follows.</P>
            <div className="my-8"><TokenLayers /></div>
            <div className="my-8"><FoundationScales /></div>
            <p className="text-[13px] text-gray-500 -mt-4 mb-10">Illustrative token structure, simplified for this case study.</p>

            <h4 className="mt-14 mb-2 text-[20px] md:text-[22px] font-semibold text-gray-900">Iconography</h4>
            <P>Icons came from different sources, with different weights, sizes and corner styles. One icon set on one grid made them read as a single family.</P>
            <div className="my-8">
              <IconBeforeAfter />
              <p className="mt-3 text-[13px] text-gray-500">Fig 3. Drag to compare the icons before and after.</p>
            </div>
          </Section>

          {/* LIBRARY */}
          <Section id="library">
            <Eyebrow>Component library</Eyebrow>
            <H3>Building once, so every team builds the same way.</H3>
            <P>I built a centralised CRM component library aligned with Genesis. Each component shipped with usage guidelines and edge cases.</P>
            <Bullets
              items={[
                "Standardised form systems",
                "Unified table design",
                "Status indicators",
                "Modal and drawer patterns",
                "Interaction states: hover, focus, error and loading",
              ]}
            />
            <div className="my-8"><StatesRow /></div>
            <Figure
              src="/c2-s2-1.webp"
              alt="CRM component library"
              caption="Fig 4. Designer-ready and developer-ready documentation for each component."
            />
            <P>Design redundancy dropped by about 40%, and design and engineering finally worked from the same pieces.</P>
          </Section>

          {/* WORKFLOW */}
          <Section id="workflow">
            <Eyebrow>Full workflow</Eyebrow>
            <H3>From Figma to Storybook, with the same skill reused for local previews.</H3>
            <P>
              To keep design and code in step, I set up a repeatable flow. A Claude skill built around the Figma icon
              library feeds a developer sheet, which feeds Storybook. The same skill can spin up a localhost preview, so
              a change can be reviewed in the browser before it ships.
            </P>
            <div className="my-10"><WorkflowDiagram /></div>
          </Section>

          {/* PATTERNS */}
          <Section id="patterns">
            <Eyebrow>Design patterns</Eyebrow>
            <H3>Standardising behaviour, not just the way things look.</H3>
            <Bullets
              items={[
                "Grid systems and spacing logic",
                "Responsive behaviour",
                "Navigation patterns",
                "AI module integration patterns",
              ]}
            />
            <Figure src="/c2-s3-2.webp" alt="Layout standardisation detail" caption="Fig 5. Consistent layout logic across CRM modules." />
            <P>
              Complex modules now follow the same layout logic, which cut cognitive load, made onboarding easier and
              gave new AI features a ready place to land.
            </P>
          </Section>

          {/* RESULTS */}
          <Section id="results">
            <Eyebrow>Results</Eyebrow>
            <H3>Things shipped faster, and with less friction.</H3>
            <div className="grid md:grid-cols-3 gap-4 mt-10">
              <CountStat value={30} suffix="%" label="Faster design-to-development turnaround" text="Handoff friction between design and engineering dropped." />
              <CountStat value={28} suffix="%" label="Fewer UI inconsistency bugs" text="Standard components and interactions cut UI-related QA issues." delay={0.15} />
              <CountStat value={40} suffix="%+" label="Less duplicated design work" text="Shared patterns removed redundant work across teams." delay={0.3} />
            </div>
            <p className="mt-10 text-[20px] md:text-[24px] leading-[1.4] font-medium text-gray-900 max-w-[720px]">
              The CRM now feels like one cohesive product, not multiple stitched-together modules.
            </p>
          </Section>

          {/* NEXT */}
          <Section id="next">
            <Eyebrow>What's next</Eyebrow>
            <H3>If I had more time, I would measure adoption and protect the system.</H3>
            <Bullets
              items={[
                <><strong className="text-gray-900">Adoption metrics</strong> across products and modules</>,
                <><strong className="text-gray-900">Component usage analytics</strong> to spot deviations</>,
                <><strong className="text-gray-900">A governance review</strong> for new patterns</>,
                <><strong className="text-gray-900">A contribution model</strong> for designers and engineers</>,
                <><strong className="text-gray-900">Genesis across AI-driven modules</strong> as the CRM evolves</>,
              ]}
            />
          </Section>

          {/* LEARNINGS */}
          <Section id="learnings">
            <Eyebrow>Learnings</Eyebrow>
            <H3>A design system is as much about alignment as it is about components.</H3>
            <P>
              The inconsistency wasn't a styling problem, it was a shared-decisions problem. Once designers and
              engineers worked from the same foundations, the debates stopped and the product started to feel like one
              thing.
            </P>
          </Section>

          {/* NEXT PROJECT */}
          <div className="border-t border-gray-200 py-14 md:py-20">
            <Eyebrow>Next project</Eyebrow>
            <Link
              href="/project/crm-ai"
              className="group inline-flex items-center gap-3 text-[26px] md:text-[40px] font-semibold tracking-[-0.02em] text-gray-900 min-h-[44px]"
            >
              From search to action in an AI CRM
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
