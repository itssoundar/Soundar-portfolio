const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// I also need to make sure the original absolute overlays are REMOVED because right now they might be stacking.
// Ah, my replace regex in the previous step replaced the main wrapper, but maybe the absolute overlays are still there inside it?

if (content.includes('className="absolute inset-0 z-[100] md:hidden cursor-pointer"')) {
    content = content.replace(
        /      \{\/\* Mobile Click Target \(shows Drawer\) \*\/\}\n      <div \n        className="absolute inset-0 z-\[100\] md:hidden cursor-pointer"[\s\S]*?      \/>\n      \n      \{\/\* Desktop Click Target \(navigates to page\) \*\/\}\n      <div \n        className="absolute inset-0 z-\[100\] hidden md:block cursor-pointer"[\s\S]*?      \/>/g,
        ''
    );
    fs.writeFileSync(path, content, 'utf-8');
}

