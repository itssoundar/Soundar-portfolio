const fs = require('fs');
['ProjectDetail1.tsx', 'ProjectDetail2.tsx', 'ProjectDetail3.tsx'].forEach(file => {
  const path = `client/src/pages/${file}`;
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/\{!hideHeader && \(\s*\{!hideHeader \? \(([\s\S]*?)\) : \(([\s\S]*?)\)\}\s*\)\}/g, "{!hideHeader ? ($1) : ($2)}");
  fs.writeFileSync(path, content, 'utf8');
});
