const fs = require('fs');

let path = 'client/src/components/ProjectMobileDrawer.tsx';
let content = fs.readFileSync(path, 'utf-8');

// I need to ensure the Vaul Drawer is actually properly imported and structured.
// Sometimes if it lacks certain classes or Portal it doesn't render.

if (!content.includes('<Drawer.Portal>')) {
  content = content.replace(
    /<Drawer\.Overlay className="fixed inset-0 bg-black\/40 z-\[100\]" \/>/g,
    `<Drawer.Portal>\n        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-[100]" />`
  );
  content = content.replace(
    /      <\/Drawer\.Content>\n    <\/Drawer\.Root>/g,
    `      </Drawer.Content>\n      </Drawer.Portal>\n    </Drawer.Root>`
  );
  fs.writeFileSync(path, content, 'utf-8');
}
