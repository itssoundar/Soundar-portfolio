const fs = require('fs');

const filePath = 'client/src/index.css';
let content = fs.readFileSync(filePath, 'utf-8');

if (!content.includes('.vaul-overlay')) {
  content += `\n
/* Vaul Drawer Overrides to ensure it works on all devices */
[data-vaul-drawer] {
  touch-action: none;
}

[data-vaul-overlay] {
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

[data-vaul-overlay][data-state="open"] {
  opacity: 1;
}

[data-vaul-drawer][data-state="open"] {
  transform: translate3d(0, 0, 0);
}
`;
  fs.writeFileSync(filePath, content, 'utf-8');
}
