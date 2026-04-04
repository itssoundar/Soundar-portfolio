const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// The issue might be that on mobile, `window.innerWidth <= 1024` is true, 
// but the absolute overlay approach is intercepting the touch event in a way Vaul doesn't like,
// OR the click event isn't properly registering as a user interaction to open the drawer.
// A simpler button without absolute positioning might be more robust.
// Let's use a standard `div` wrapper with an `onClick` that we know works.

content = content.replace(
  /      \{\/\* Mobile Click Target \(shows Drawer\) \*\/\}\n      <div \n        className="absolute inset-0 z-\[100\] md:hidden cursor-pointer"\n        onClick=\{\(e\) => \{\n          e\.preventDefault\(\);\n          e\.stopPropagation\(\);\n          console\.log\("Opening drawer for", project\.id\);\n          setSelectedProject\(project\.id\);\n          setIsDrawerOpen\(true\);\n        \}\}\n        onTouchStart=\{\(\) => \{\n          \/\/ Empty touch start to ensure iOS Safari registers this as a tappable element\n        \}\}\n      \/>\n      \n      \{\/\* Desktop Click Target \(navigates to page\) \*\/\}\n      <div \n        className="absolute inset-0 z-\[100\] hidden md:block cursor-pointer"\n        onClick=\{\(e\) => \{\n          e\.preventDefault\(\);\n          e\.stopPropagation\(\);\n          setLocation\(project\.link\);\n        \}\}\n      \/>/g,
  ``
);

// Add the click handler directly to the main card wrapper
content = content.replace(
  /    <div \n      className="block w-full bg-white rounded-\[28px\] p-\[16px\] md:p-\[32px\] shadow-\[0_4px_24px_rgba\(0,0,0,0\.04\)\] border border-\[#eaeaea\] group transition-all duration-300 md:hover:shadow-\[0_8px_32px_rgba\(0,0,0,0\.08\)\] relative z-\[90\] text-left pointer-events-auto" \n      style=\{\{ WebkitTapHighlightColor: "transparent" \}\}>/g,
  `    <div 
      onClick={(e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          e.stopPropagation();
          console.log("Opening drawer from root div for", project.id);
          setSelectedProject(project.id);
          setIsDrawerOpen(true);
        } else {
          setLocation(project.link);
        }
      }}
      className="block w-full bg-white rounded-[28px] p-[16px] md:p-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#eaeaea] group transition-all duration-300 md:hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] relative z-[90] text-left cursor-pointer pointer-events-auto" 
      style={{ WebkitTapHighlightColor: "transparent" }}
      role="button"
      tabIndex={0}>`
);

fs.writeFileSync(path, content, 'utf-8');
