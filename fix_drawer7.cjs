const fs = require('fs');

let path = 'client/src/components/ProjectMobileDrawer.tsx';
let content = fs.readFileSync(path, 'utf-8');

// The touch scrolling on iOS can sometimes get stuck if `overscroll-contain` or `WebkitOverflowScrolling: "touch"` is used in a specific way.
// Let's remove `overscroll-contain` and let it scroll naturally.
// Also let's make sure `touch-action: none` isn't applied to the body by something else.

content = content.replace(
  /className="flex-1 overflow-y-auto bg-white pb-12 overscroll-contain" style=\{\{ WebkitOverflowScrolling: "touch" \}\}/g,
  `className="flex-1 overflow-y-auto bg-white pb-12"`
);

// Make sure body overflow is managed correctly, sometimes `document.body.style.overflow = 'hidden'` causes a jump.
// We can use `overflow: hidden` but let's ensure we also set `touch-action: none` on the backdrop to prevent scroll bleed,
// and allow scroll on the drawer content.

fs.writeFileSync(path, content, 'utf-8');
