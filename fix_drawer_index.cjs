const fs = require('fs');

const filePath = 'client/src/index.css';
let content = fs.readFileSync(filePath, 'utf-8');

// Ensure that vaul-drawer styles don't conflict or add any needed styles
if (!content.includes('[data-vaul-drawer]')) {
  content += `\n
/* Vaul Drawer Overrides */
[data-vaul-drawer] {
  touch-action: none;
}
`;
  fs.writeFileSync(filePath, content, 'utf-8');
}
