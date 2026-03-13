import fs from 'fs';

const file = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(file, 'utf8');

// check if there's any hydration error issue in Projects
content = content.replace(/<Link key={project\.id} href={project\.link}>\s*<a ([^>]*)>([\s\S]*?)<\/a>\s*<\/Link>/g, '<Link key={project.id} href={project.link}>\n<span $1>$2</span>\n</Link>');
content = content.replace(/<Link key={project\.id} href={project\.link}><a([^>]*)>([\s\S]*?)<\/a><\/Link>/g, '<Link key={project.id} href={project.link}><span$1>$2</span></Link>');

fs.writeFileSync(file, content, 'utf8');
