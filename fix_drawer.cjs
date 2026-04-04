const fs = require('fs');

let path = 'client/src/components/ProjectMobileDrawer.tsx';
let content = fs.readFileSync(path, 'utf-8');

// A common Vaul drawer issue on iOS is that if it's rendered conditionally, or without proper DOM mounting, it doesn't open.
// Ensure Drawer is unconditionally rendered and just controlled via the `open` prop.
// Ensure Drawer content has `pointer-events-auto`.

content = content.replace(
  /<Drawer open=\{isOpen\} onOpenChange=\{onOpenChange\} shouldScaleBackground=\{false\}>/,
  '<Drawer open={isOpen} onOpenChange={onOpenChange} shouldScaleBackground={false} repositionInputs={false}>'
);

fs.writeFileSync(path, content, 'utf-8');
