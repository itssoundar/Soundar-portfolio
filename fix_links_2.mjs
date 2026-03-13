import fs from 'fs';

const files = [
  'client/src/pages/ProjectDetail1.tsx',
  'client/src/pages/ProjectDetail2.tsx',
  'client/src/pages/ProjectDetail3.tsx',
  'client/src/components/Projects.tsx',
  'client/src/pages/Home.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Find all <Link> tags with an <a> tag inside it and replace the <a> with a <span>
  content = content.replace(/<Link([^>]*)>\s*<a ([^>]*)>([\s\S]*?)<\/a>\s*<\/Link>/g, '<Link$1>\n<span $2>$3</span>\n</Link>');
  content = content.replace(/<Link([^>]*)><a([^>]*)>([\s\S]*?)<\/a><\/Link>/g, '<Link$1><span$2>$3</span></Link>');

  fs.writeFileSync(file, content, 'utf8');
});
console.log('Links fixed');
