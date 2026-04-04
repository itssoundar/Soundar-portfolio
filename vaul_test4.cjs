const fs = require('fs');

let path = 'client/src/index.css';
let content = fs.readFileSync(path, 'utf-8');

// Also, the Vaul drawer background scaling requires a wrapper on the main app content.
// By default, `shouldScaleBackground={true}` needs the body to have a specific background and the root element to have `[data-vaul-drawer-wrapper]`
// If it's not present, we should set `shouldScaleBackground={false}`. Let's make sure it's false to avoid unexpected behavior.

let pmdPath = 'client/src/components/ProjectMobileDrawer.tsx';
let pmdContent = fs.readFileSync(pmdPath, 'utf-8');
pmdContent = pmdContent.replace(/shouldScaleBackground=\{true\}/g, `shouldScaleBackground={false}`);
fs.writeFileSync(pmdPath, pmdContent, 'utf-8');
