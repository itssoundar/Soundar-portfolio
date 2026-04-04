const fs = require('fs');

let path = 'client/src/components/ProjectMobileDrawer.tsx';
let content = fs.readFileSync(path, 'utf-8');

// I think the Drawer from vaul is rendering but maybe hidden behind the absolute positioned GSAP container.
// Or Vaul's root element z-index is lower than our pinned section's z-index.
// Let's force Vaul's portal to have an incredibly high z-index via CSS in index.css

let cssPath = 'client/src/index.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');

if (!cssContent.includes('[data-vaul-drawer]')) {
  cssContent += `\n
/* Force Vaul Drawer to be on top of absolutely everything */
[data-vaul-overlay] {
  z-index: 2147483646 !important;
}
[data-vaul-drawer] {
  z-index: 2147483647 !important;
}
`;
  fs.writeFileSync(cssPath, cssContent, 'utf-8');
}

