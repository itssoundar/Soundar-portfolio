import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, writeFile, mkdir } from "fs/promises";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

const SITE = "https://heysoundar.vercel.app";

// Per-route metadata. Social crawlers (LinkedIn, WhatsApp, Slack...) do not run
// JavaScript, so each case study gets its own static HTML file with the right
// title / description / preview image baked in. Vercel serves these files
// before falling back to the SPA rewrite.
const routes = [
  {
    path: "project/crm-ai",
    title: "AI-Agent Builder for CRM · Case Study | Soundar",
    description:
      "How a conversational AI execution layer turned a configuration-heavy recruiting CRM into an intent-driven experience: 78% faster workflow setup, 1.5x AI adoption.",
    image: "og-crm-ai.jpg",
  },
  {
    path: "project/design-system",
    title: "Genesis Design System · Case Study | Soundar",
    description:
      "Building the Genesis design system to unify a CRM: 30% faster design-to-development turnaround and 28% fewer UI inconsistency bugs.",
    image: "og-design-system.jpg",
  },
  {
    path: "project/conversational-b2b",
    title: "CRM Analytics & Dashboard Builder · Case Study | Soundar",
    description:
      "Designing centralized hiring analytics and a self-serve dashboard builder for a recruiting CRM.",
    image: "og-dashboard-builder.jpg",
  },
];

const esc = (v: string) => v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

async function writeRouteHtml() {
  const base = await readFile("dist/public/index.html", "utf-8");
  for (const r of routes) {
    const url = `${SITE}/${r.path}`;
    const img = `${SITE}/${r.image}`;
    let html = base
      .replace(/<title>.*?<\/title>/s, `<title>${esc(r.title)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(r.description)}$2`)
      .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`)
      .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(r.description)}$2`)
      .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
      .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${img}$2`)
      .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`)
      .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(r.description)}$2`)
      .replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${img}$2`)
      .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`);
    await mkdir(`dist/public/${r.path}`, { recursive: true });
    await writeFile(`dist/public/${r.path}/index.html`, html);
  }
  console.log(`wrote ${routes.length} route pages with social metadata`);
}

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();
  await writeRouteHtml();

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
