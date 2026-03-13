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

  // ensure nested spans inside Link tags have cursor-pointer
  content = content.replace(/<span className="([^"]*?)"([^>]*)>(\s*<svg[^>]*>[\s\S]*?Back to Home\s*)<\/span>/g, (match, classes, rest, inner) => {
    if (!classes.includes('cursor-pointer')) {
      return `<span className="${classes} cursor-pointer"${rest}>${inner}</span>`;
    }
    return match;
  });
  
  content = content.replace(/<span className="([^"]*?)"([^>]*)>(\s*<span[^>]*>Next Project<\/span>[\s\S]*?)<\/span>/g, (match, classes, rest, inner) => {
    if (!classes.includes('cursor-pointer')) {
      return `<span className="${classes} cursor-pointer"${rest}>${inner}</span>`;
    }
    return match;
  });

  fs.writeFileSync(file, content, 'utf8');
});
console.log('Cursor pointers added');
