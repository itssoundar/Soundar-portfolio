const fs = require('fs');

let path = 'client/src/components/ProjectMobileDrawer.tsx';
let content = fs.readFileSync(path, 'utf-8');

// The Vaul drawer might be missing the `shouldScaleBackground` prop or it might be set to false which can cause rendering issues on some setups if the HTML isn't wrapped in a vaul-drawer-wrapper. 
// We have `shouldScaleBackground={false}` which is good.
// The `Drawer` component from our UI library uses `vaul`. Let's just make sure the `DrawerContent` is clearly visible and not obscured by `z-index` bugs.
// The z-[101] might be conflicting with the `Projects` component's `z-[90]` or `z-[100]`.
// Let's increase the drawer z-index to something crazy high like `z-[9999]`.

content = content.replace(
  /className="fixed inset-x-0 bottom-0 z-\[101\]/g,
  `className="fixed inset-x-0 bottom-0 z-[9999]`
);

// We also need to fix the overlay z-index in client/src/components/ui/drawer.tsx
let uiPath = 'client/src/components/ui/drawer.tsx';
let uiContent = fs.readFileSync(uiPath, 'utf-8');
uiContent = uiContent.replace(
  /className=\{cn\("fixed inset-0 z-50 bg-black\/80", className\)\}/g,
  `className={cn("fixed inset-0 z-[9998] bg-black/80", className)}`
);
uiContent = uiContent.replace(
  /"fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-\[10px\] border bg-background"/g,
  `"fixed inset-x-0 bottom-0 z-[9999] mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background"`
);
fs.writeFileSync(uiPath, uiContent, 'utf-8');

fs.writeFileSync(path, content, 'utf-8');
