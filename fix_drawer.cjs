const fs = require('fs');

const filePath = 'client/src/components/ProjectMobileDrawer.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Ensure the drawer title matches the styling from the reference image
content = content.replace(
  '<DrawerTitle className="text-[16px] font-medium text-center text-[#111] font-sans m-0">',
  '<DrawerTitle className="text-[14px] font-medium text-center text-[#666] font-sans m-0">'
);

// Add the drag handle styling similar to reference image
content = content.replace(
  '<DrawerContent className="fixed inset-x-0 bottom-0 z-[101] mt-10 flex h-[92vh] flex-col rounded-t-[24px] border-0 bg-white outline-none">',
  '<DrawerContent className="fixed inset-x-0 bottom-0 z-[101] mt-10 flex h-[92vh] flex-col rounded-t-[24px] border-0 bg-[#f8f9fa] outline-none">\n          <div className="mx-auto mt-4 mb-2 h-1.5 w-[40px] shrink-0 rounded-full bg-gray-300" />'
);

// Update background colors
content = content.replace(
  '<DrawerHeader className="p-4 flex items-center justify-between sticky top-0 bg-white z-[102] rounded-t-[24px] shrink-0 border-b border-gray-100">',
  '<DrawerHeader className="px-4 pb-4 pt-2 flex items-center justify-between sticky top-0 bg-[#f8f9fa] z-[102] shrink-0">'
);

content = content.replace(
  '<div id="project-drawer-content" className="flex-1 overflow-y-auto overscroll-contain bg-white">',
  '<div id="project-drawer-content" className="flex-1 overflow-y-auto overscroll-contain bg-[#f8f9fa]">\n            <div className="bg-white mx-2 sm:mx-4 rounded-t-[24px] shadow-[0_-4px_24px_rgba(0,0,0,0.02)] min-h-full overflow-hidden">'
);

// Need to add an extra closing div since we added one above
content = content.replace(
  '</div>\n          </div>\n        </DrawerContent>',
  '</div>\n            </div>\n          </div>\n        </DrawerContent>'
);

fs.writeFileSync(filePath, content, 'utf-8');
