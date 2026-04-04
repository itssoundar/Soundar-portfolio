const fs = require('fs');

['ProjectDetail1.tsx', 'ProjectDetail2.tsx', 'ProjectDetail3.tsx'].forEach(file => {
  const path = `client/src/pages/${file}`;
  let content = fs.readFileSync(path, 'utf8');

  // Let's just do a string replacement for the broken line
  content = content.replace(
    /\{\!hideHeader\s*&&\s*\(\s*\{\!hideHeader\s*\?\s*\((<h2[\s\S]*?<\/h2>)\)\s*:\s*\((<h2[\s\S]*?<\/h2>)\)\}\s*\)\}/,
    '{!hideHeader ? ($1) : ($2)}'
  );

  fs.writeFileSync(path, content, 'utf8');
});
