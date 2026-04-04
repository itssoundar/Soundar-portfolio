const fs = require('fs');

let path = 'client/src/components/ProjectMobileDrawer.tsx';
let content = fs.readFileSync(path, 'utf-8');

// The issue might be that DrawerContent from shadcn already includes DrawerPortal and DrawerOverlay.
// Let's check `client/src/components/ui/drawer.tsx`:
// It shows DrawerContent wraps its children in DrawerPortal and DrawerOverlay.
// So in ProjectMobileDrawer we should NOT use DrawerPortal and DrawerOverlay explicitly, because it causes nesting/duplicate overlays.
// We just need <Drawer> and <DrawerContent>

content = content.replace(
  /<DrawerPortal>\n        <DrawerOverlay className="fixed inset-0 z-\[100\] bg-black\/40 backdrop-blur-sm" \/>\n        <DrawerContent className="fixed inset-x-0 bottom-0 z-\[101\] mt-10 flex h-\[92vh\] flex-col rounded-t-\[24px\] border-0 bg-white outline-none pointer-events-auto">/g,
  `<DrawerContent className="fixed inset-x-0 bottom-0 z-[101] mt-10 flex h-[92vh] flex-col rounded-t-[24px] border-0 bg-white outline-none pointer-events-auto shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">`
);

content = content.replace(
  /      <\/DrawerPortal>\n    <\/Drawer>/g,
  `    </Drawer>`
);

content = content.replace(
  /<div className="mx-auto mt-4 mb-2 h-1\.5 w-\[40px\] shrink-0 rounded-full bg-gray-200" \/>/g,
  `{/* Grabber handle is inside Shadcn DrawerContent, so we don't need a duplicate, but if we do, we can leave it. Shadcn DrawerContent has one. Let's hide the default one via CSS or just let it be. Actually, shadcn's drawer.tsx has \`<div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />\`. We will just use ours instead by removing it from our component or leaving it and overriding. Let's just remove ours since shadcn provides one. */}`
);

fs.writeFileSync(path, content, 'utf-8');
