import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bell,
  Calendar,
  Check,
  FileText,
  Figma as FigmaIcon,
  Folder,
  Home,
  Mail,
  Search,
  Settings,
  Sparkles,
  Users,
  BookOpen,
  Rocket,
  FileSpreadsheet,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Reveal: fade + rise when scrolled into view                         */
/* ------------------------------------------------------------------ */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Visual frame used by every diagram                                  */
/* ------------------------------------------------------------------ */
export function Frame({ children, caption, className = "" }: { children: ReactNode; caption?: string; className?: string }) {
  return (
    <figure className="my-10">
      <div className={`rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-5 md:p-8 overflow-hidden ${className}`}>
        {children}
      </div>
      {caption && <figcaption className="mt-3 text-[13px] text-gray-500">{caption}</figcaption>}
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* BeforeAfter: draggable / keyboard-accessible reveal slider          */
/* ------------------------------------------------------------------ */
export function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  height = 320,
  label,
}: {
  before: ReactNode;
  after: ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
  height?: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [pos, setPos] = useState(100);
  const touched = useRef(false);

  // One gentle sweep the first time it appears, so people notice it is interactive.
  useEffect(() => {
    if (!inView || touched.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPos(50);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      if (touched.current) return;
      const t = Math.min((now - start) / 1400, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setPos(100 - eased * 50);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  return (
    <div ref={ref} className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white select-none" style={{ height }}>
      {/* AFTER (base layer) */}
      <div className="absolute inset-0">{after}</div>
      {/* BEFORE (clipped) */}
      <div className="absolute inset-0 bg-white" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {before}
      </div>

      <span className="absolute top-3 left-3 z-10 rounded-full bg-gray-900/85 px-3 py-1 text-[12px] font-medium text-white">{beforeLabel}</span>
      <span className="absolute top-3 right-3 z-10 rounded-full bg-indigo-600 px-3 py-1 text-[12px] font-medium text-white">{afterLabel}</span>

      {/* Handle */}
      <div className="pointer-events-none absolute top-0 bottom-0 z-10 w-[2px] bg-indigo-600" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-indigo-600 text-white shadow-lg flex items-center justify-center text-[14px]">
          ⇄
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        step={0.5}
        value={pos}
        aria-label={label}
        onChange={(e) => {
          touched.current = true;
          setPos(Number(e.target.value));
        }}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Icon before / after: same icons, inconsistent vs. one grid          */
/* ------------------------------------------------------------------ */
const ICONS: LucideIcon[] = [Home, Search, Bell, Mail, Calendar, Users, Folder, Settings, FileText, Sparkles, Check, Folder];

const MESSY = [
  { s: 22, w: 1, c: "#374151", dx: 0, dy: 3, cap: "square" as const },
  { s: 30, w: 2.8, c: "#7c3aed", dx: 4, dy: -2, cap: "round" as const },
  { s: 26, w: 1.5, c: "#0f766e", dx: -3, dy: 4, cap: "butt" as const },
  { s: 20, w: 2.2, c: "#b45309", dx: 2, dy: 0, cap: "round" as const },
  { s: 32, w: 1.2, c: "#1d4ed8", dx: -4, dy: -3, cap: "square" as const },
  { s: 24, w: 3, c: "#be123c", dx: 3, dy: 2, cap: "round" as const },
];

export function IconBeforeAfter() {
  const grid = "grid grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 p-5 pt-14 h-full content-center";
  return (
    <BeforeAfter
      label="Compare icons before and after the Genesis icon set"
      beforeLabel="Before: mixed sources"
      afterLabel="After: one icon set"
      height={300}
      before={
        <div className={`${grid} bg-white`}>
          {ICONS.map((Icon, i) => {
            const m = MESSY[i % MESSY.length];
            return (
              <div key={i} className="aspect-square rounded-xl border border-gray-200 flex items-center justify-center">
                <Icon size={m.s} strokeWidth={m.w} color={m.c} strokeLinecap={m.cap} style={{ transform: `translate(${m.dx}px, ${m.dy}px)` }} />
              </div>
            );
          })}
        </div>
      }
      after={
        <div className={`${grid} bg-indigo-50/40`}>
          {ICONS.map((Icon, i) => (
            <div key={i} className="aspect-square rounded-xl border border-indigo-100 bg-white flex items-center justify-center relative">
              <span aria-hidden className="absolute inset-3 rounded-md border border-dashed border-indigo-100" />
              <Icon size={24} strokeWidth={1.75} color="#4f46e5" strokeLinecap="round" strokeLinejoin="round" />
            </div>
          ))}
        </div>
      }
    />
  );
}

/* ------------------------------------------------------------------ */
/* Module patterns before / after                                      */
/* ------------------------------------------------------------------ */
const MODULES = [
  { name: "Hiring", btn: "rounded-none bg-blue-600 text-white px-5 py-2 text-[13px] font-bold uppercase", input: "rounded-none border-2 border-gray-400" },
  { name: "Analytics", btn: "rounded-full bg-emerald-600 text-white px-3 py-1 text-[12px]", input: "rounded-full border border-gray-300" },
  { name: "Workflows", btn: "rounded-md bg-orange-500 text-white px-6 py-3 text-[15px] font-semibold", input: "rounded-md border border-gray-200 bg-gray-100" },
  { name: "Settings", btn: "rounded-lg bg-gray-800 text-white px-4 py-2 text-[13px]", input: "rounded-lg border-b-2 border-gray-500" },
];

export function ModulePatternsBeforeAfter() {
  return (
    <BeforeAfter
      label="Compare module UI patterns before and after Genesis"
      beforeLabel="Before: every module differs"
      afterLabel="After: one system"
      height={320}
      before={
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 pt-14 h-full bg-gray-50">
          {MODULES.map((m) => (
            <div key={m.name} className="rounded-xl bg-white border border-gray-200 p-4 flex flex-col gap-4 justify-between">
              <p className="text-[12px] font-semibold text-gray-500">{m.name}</p>
              <div className={`h-9 ${m.input}`} />
              <button tabIndex={-1} className={`self-start ${m.btn}`}>Save</button>
            </div>
          ))}
        </div>
      }
      after={
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 pt-14 h-full bg-indigo-50/40">
          {MODULES.map((m) => (
            <div key={m.name} className="rounded-xl bg-white border border-indigo-100 p-4 flex flex-col gap-4 justify-between">
              <p className="text-[12px] font-semibold text-indigo-600">{m.name}</p>
              <div className="h-9 rounded-lg border border-gray-300 bg-white" />
              <button tabIndex={-1} className="self-start rounded-lg bg-indigo-600 text-white px-4 py-2 text-[13px] font-medium">Save</button>
            </div>
          ))}
        </div>
      }
    />
  );
}

/* ------------------------------------------------------------------ */
/* Workflow: Figma to Storybook to production                           */
/* ------------------------------------------------------------------ */
const FLOW: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Sparkles, title: "Claude skill", text: "A reusable skill that builds and checks icons against the Genesis rules." },
  { icon: FigmaIcon, title: "Figma library", text: "Icons and components live in one published library." },
  { icon: FileSpreadsheet, title: "Dev sheet", text: "Names, sizes and tokens handed over in a single sheet." },
  { icon: BookOpen, title: "Storybook", text: "Every component documented with states and usage." },
  { icon: Rocket, title: "Localhost and product", text: "The same skill spins up a local preview, then ships to the app." },
];

export function WorkflowDiagram() {
  return (
    <ol className="relative grid gap-4 md:grid-cols-5">
      {FLOW.map((step, i) => (
        <motion.li
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          className="relative rounded-2xl border border-gray-200 bg-white p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <step.icon size={20} strokeWidth={1.75} />
            </span>
            <span className="text-[12px] font-semibold text-gray-400">0{i + 1}</span>
          </div>
          <p className="text-[16px] font-semibold text-gray-900 mb-1">{step.title}</p>
          <p className="text-[14px] leading-[1.55] text-gray-500">{step.text}</p>
          {i < FLOW.length - 1 && (
            <span aria-hidden className="hidden md:flex absolute -right-[14px] top-1/2 -translate-y-1/2 z-10 h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
              <ArrowRight size={14} />
            </span>
          )}
        </motion.li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* Token layers                                                        */
/* ------------------------------------------------------------------ */
const RAMP = ["#eef2ff", "#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1", "#4f46e5", "#4338ca", "#3730a3"];

export function TokenLayers() {
  const Card = ({ n, title, sub, children }: { n: string; title: string; sub: string; children: ReactNode }) => (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 flex flex-col">
      <p className="text-[12px] font-semibold text-indigo-600 mb-1">{n}</p>
      <p className="text-[17px] font-semibold text-gray-900">{title}</p>
      <p className="text-[13px] text-gray-500 mb-5">{sub}</p>
      <div className="mt-auto">{children}</div>
    </div>
  );
  const Row = ({ a, b }: { a: string; b: string }) => (
    <div className="flex items-center justify-between gap-2 rounded-lg bg-gray-50 px-3 py-2 text-[12px] font-mono">
      <span className="text-gray-900">{a}</span>
      <span className="text-gray-400">{b}</span>
    </div>
  );
  return (
    <div className="grid md:grid-cols-3 gap-4 md:gap-8 relative">
      <Card n="Layer 1" title="Primitive" sub="Raw values, no meaning yet">
        <div className="flex overflow-hidden rounded-lg mb-3">
          {RAMP.map((c) => (
            <span key={c} className="h-10 flex-1" style={{ background: c }} />
          ))}
        </div>
        <Row a="indigo-600" b="#4F46E5" />
      </Card>
      <Card n="Layer 2" title="Semantic" sub="Meaning: what a value is for">
        <div className="space-y-2">
          <Row a="action-primary" b="→ indigo-600" />
          <Row a="surface-subtle" b="→ gray-50" />
          <Row a="text-muted" b="→ gray-500" />
        </div>
      </Card>
      <Card n="Layer 3" title="Component" sub="Tokens each component consumes">
        <div className="space-y-2">
          <Row a="button-bg" b="→ action-primary" />
          <Row a="input-border" b="→ border-default" />
          <Row a="table-row-hover" b="→ surface-subtle" />
        </div>
      </Card>
    </div>
  );
}

export function FoundationScales() {
  const space = [4, 8, 12, 16, 24, 32, 48];
  const radii = [0, 4, 8, 12, 16, 9999];
  const heights = [28, 32, 40, 48];
  const Block = ({ title, children }: { title: string; children: ReactNode }) => (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-400 mb-4">{title}</p>
      {children}
    </div>
  );
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Block title="Colour">
        <div className="grid grid-cols-4 gap-2">
          {["#4f46e5", "#16a34a", "#d97706", "#dc2626", "#111827", "#6b7280", "#e5e7eb", "#f9fafb"].map((c) => (
            <span key={c} className="aspect-square rounded-lg border border-black/5" style={{ background: c }} />
          ))}
        </div>
      </Block>
      <Block title="Typography">
        <div className="space-y-1 text-gray-900">
          <p className="text-[28px] font-semibold leading-none">Aa</p>
          <p className="text-[18px] font-medium">Heading</p>
          <p className="text-[14px]">Body text</p>
          <p className="text-[12px] text-gray-500">Caption</p>
        </div>
      </Block>
      <Block title="Spacing">
        <div className="space-y-2">
          {space.map((s) => (
            <div key={s} className="flex items-center gap-3">
              <span className="h-2 rounded-sm bg-indigo-500" style={{ width: s * 2 }} />
              <span className="text-[11px] font-mono text-gray-400">{s}</span>
            </div>
          ))}
        </div>
      </Block>
      <Block title="Radii and heights">
        <div className="flex gap-2 mb-4">
          {radii.map((r) => (
            <span key={r} className="h-8 w-8 border-2 border-indigo-500 bg-indigo-50" style={{ borderRadius: r }} />
          ))}
        </div>
        <div className="flex items-end gap-2">
          {heights.map((h) => (
            <span key={h} className="w-6 rounded bg-indigo-200" style={{ height: h }} />
          ))}
        </div>
      </Block>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Component hierarchy with real mini-UI                               */
/* ------------------------------------------------------------------ */
function Toggle() {
  const [on, setOn] = useState(true);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label="Example toggle"
      onClick={() => setOn(!on)}
      className={`relative h-6 w-11 rounded-full transition-colors ${on ? "bg-indigo-600" : "bg-gray-300"}`}
    >
      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${on ? "left-[22px]" : "left-0.5"}`} />
    </button>
  );
}

export function ComponentHierarchy() {
  const Tier = ({ n, title, sub, children }: { n: string; title: string; sub: string; children: ReactNode }) => (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 flex flex-col">
      <p className="text-[12px] font-semibold text-indigo-600 mb-1">{n}</p>
      <p className="text-[17px] font-semibold text-gray-900">{title}</p>
      <p className="text-[13px] text-gray-500 mb-5">{sub}</p>
      <div className="mt-auto rounded-xl bg-gray-50 border border-gray-100 p-4 min-h-[150px] flex items-center">{children}</div>
    </div>
  );
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Tier n="01" title="Base" sub="Buttons, inputs, toggles">
        <div className="w-full space-y-3">
          <button tabIndex={-1} className="rounded-lg bg-indigo-600 px-4 py-2 text-[13px] font-medium text-white">Primary</button>
          <div className="h-9 w-full rounded-lg border border-gray-300 bg-white px-3 flex items-center text-[13px] text-gray-400">Search candidates</div>
          <Toggle />
        </div>
      </Tier>
      <Tier n="02" title="Composite" sub="Forms, tables, cards">
        <div className="w-full rounded-lg bg-white border border-gray-200 overflow-hidden text-[12px]">
          <div className="grid grid-cols-3 bg-gray-50 px-3 py-2 font-semibold text-gray-500"><span>Name</span><span>Stage</span><span>Fit</span></div>
          {[["Asha", "Screening", "92%"], ["Rahul", "Interview", "85%"], ["Meera", "Offer", "97%"]].map((r) => (
            <div key={r[0]} className="grid grid-cols-3 px-3 py-2 border-t border-gray-100 text-gray-700">
              <span>{r[0]}</span>
              <span><span className="rounded-full bg-indigo-50 px-2 py-0.5 text-indigo-600">{r[1]}</span></span>
              <span>{r[2]}</span>
            </div>
          ))}
        </div>
      </Tier>
      <Tier n="03" title="Complex modules" sub="Workflow builders, analytics">
        <div className="w-full flex items-center justify-between gap-1 text-[11px]">
          {["Trigger", "AI step", "Notify"].map((t, i) => (
            <div key={t} className="flex items-center gap-1 flex-1">
              <span className={`flex-1 rounded-lg border px-2 py-3 text-center font-medium ${i === 1 ? "border-indigo-300 bg-indigo-50 text-indigo-700" : "border-gray-200 bg-white text-gray-700"}`}>{t}</span>
              {i < 2 && <span aria-hidden className="text-gray-300">→</span>}
            </div>
          ))}
        </div>
      </Tier>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Interaction states                                                  */
/* ------------------------------------------------------------------ */
export function StatesRow() {
  const items = [
    { label: "Default", cls: "bg-indigo-600 text-white" },
    { label: "Hover", cls: "bg-indigo-700 text-white" },
    { label: "Focus", cls: "bg-indigo-600 text-white ring-4 ring-indigo-200" },
    { label: "Error", cls: "bg-white text-red-600 border border-red-500" },
    { label: "Loading", cls: "bg-indigo-600/70 text-white" },
    { label: "Disabled", cls: "bg-gray-200 text-gray-400" },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
      {items.map((it) => (
        <div key={it.label} className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
          <span className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-[13px] font-medium ${it.cls}`}>
            {it.label === "Loading" && <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/40 border-t-white" />}
            Save
          </span>
          <span className="text-[12px] text-gray-500">{it.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Counting stat                                                       */
/* ------------------------------------------------------------------ */
export function CountStat({ value, suffix = "", label, text, delay = 0 }: { value: number; suffix?: string; label: string; text: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    let raf = 0;
    const start = performance.now() + delay * 1000;
    const tick = (now: number) => {
      const t = Math.min(Math.max((now - start) / 1200, 0), 1);
      setN(Math.round((1 - Math.pow(1 - t, 3)) * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, delay]);

  return (
    <div ref={ref} className="rounded-2xl border border-gray-200 bg-white p-7 flex flex-col">
      <p className="text-[56px] md:text-[64px] font-semibold leading-none tracking-[-0.04em] text-gray-900 mb-5">
        {n}
        {suffix}
      </p>
      <div className="h-1.5 w-full rounded-full bg-gray-100 mb-5 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-indigo-600"
          initial={{ width: 0 }}
          whileInView={{ width: `${Math.min(value, 100)}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <p className="text-[16px] font-semibold text-gray-900 mb-2">{label}</p>
      <p className="text-[14px] leading-[1.6] text-gray-500">{text}</p>
    </div>
  );
}
