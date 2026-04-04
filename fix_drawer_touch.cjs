const fs = require('fs');

const filePath = 'client/src/components/ProjectMobileDrawer.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Fix touch scrolling in the drawer by removing overscroll-contain which sometimes bugs out on mobile Vaul
content = content.replace(
  '<div id="project-drawer-content" className="flex-1 overflow-y-auto overscroll-contain bg-[#f8f9fa]">',
  '<div id="project-drawer-content" className="flex-1 overflow-y-auto bg-[#f8f9fa]" style={{ WebkitOverflowScrolling: "touch" }}>'
);

// Allow pointer events
content = content.replace(
  '<DrawerContent className="fixed inset-x-0 bottom-0 z-[101] mt-10 flex h-[92vh] flex-col rounded-t-[24px] border-0 bg-[#f8f9fa] outline-none">',
  '<DrawerContent className="fixed inset-x-0 bottom-0 z-[101] mt-10 flex h-[92vh] flex-col rounded-t-[24px] border-0 bg-[#f8f9fa] outline-none pointer-events-auto">'
);

fs.writeFileSync(filePath, content, 'utf-8');
