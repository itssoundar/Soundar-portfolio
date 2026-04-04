const fs = require('fs');

const path = 'client/src/components/ProjectMobileDrawer.tsx';
let content = fs.readFileSync(path, 'utf-8');

// The user wants the drawer header title centered with an X close button, and the top drag handle.
// And no padding issues.

// Update the drawer content padding and header to match the design reference
content = content.replace(
  /<DrawerHeader className="px-4 pb-4 pt-2 flex flex-col items-center justify-center sticky top-0 bg-white z-\[102\] shrink-0 border-b border-gray-100">/,
  '<DrawerHeader className="px-4 pb-3 pt-1 flex flex-col items-center justify-center sticky top-0 bg-white z-[102] shrink-0 border-b border-gray-100">'
);

// We need to change the content background of the drawer so it's rounded at the top inside the drawer,
// and the scroll area looks clean. Wait, I already did this. Let's make sure the background matches.
// The image shows the Drawer background as white, with the title "AI Agents for HR Teams" and a close button.

fs.writeFileSync(path, content, 'utf-8');
