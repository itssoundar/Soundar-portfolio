const fs = require('fs');

let path = 'client/src/components/ProjectMobileDrawer.tsx';
let content = fs.readFileSync(path, 'utf-8');

// Ensure that Vaul Drawer overlay and content are correctly structured and have pointer events working.
// Sometimes the `pointer-events-none` on parent containers breaks the Vaul overlay.
// Let's also check if we are using Drawer.Portal

content = content.replace(
  /<Drawer\.Root open=\{isOpen\} onOpenChange=\{onOpenChange\} repositionInputs=\{false\}>/g,
  `<Drawer.Root open={isOpen} onOpenChange={onOpenChange} repositionInputs={false} shouldScaleBackground={false}>`
);

if (!content.includes('<Drawer.Portal>')) {
  // It should already be using Portal from our earlier code, but if not we ensure it is.
  content = content.replace(
    /<Drawer\.Overlay className="fixed inset-0 bg-black\/40 z-\[100\]" \/>/g,
    `<Drawer.Portal>\n        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-[100]" />`
  );
  content = content.replace(
    /      <\/Drawer\.Content>\n    <\/Drawer\.Root>/g,
    `      </Drawer.Content>\n      </Drawer.Portal>\n    </Drawer.Root>`
  );
}

fs.writeFileSync(path, content, 'utf-8');
