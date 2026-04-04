const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// I am noticing that if we use absolute overlays and they don't work, it's because iOS Safari refuses to 
// acknowledge clicks on empty transparent divs unless they have specific cursor/touch handlers.
// And if we use a button, sometimes it gets swallowed by GSAP.
// I will combine the best of both: A real native <button> that covers the entire card, with z-[9999] so it sits ABOVE everything, 
// and has an explicit touch-action: manipulation to prevent scroll-swallowing.

content = content.replace(
  /    <div \n      className="block w-full bg-white rounded-\[28px\] p-\[16px\] md:p-\[32px\] shadow-\[0_4px_24px_rgba\(0,0,0,0\.04\)\] border border-\[#eaeaea\] group transition-all duration-300 md:hover:shadow-\[0_8px_32px_rgba\(0,0,0,0\.08\)\] relative z-\[90\] text-left pointer-events-auto" \n      style=\{\{ WebkitTapHighlightColor: "transparent" \}\}>\n      \n      \{\/\* Mobile Click Target \(shows Drawer\) \*\/\}\n      <div \n        className="absolute inset-0 z-\[100\] md:hidden cursor-pointer"\n        onClick=\{\(e\) => \{\n          e\.preventDefault\(\);\n          e\.stopPropagation\(\);\n          console\.log\("Opening drawer from absolute target for", project\.id\);\n          setSelectedProject\(project\.id\);\n          setIsDrawerOpen\(true\);\n        \}\}\n        onTouchEnd=\{\(e\) => \{\n          \/\/ Use onTouchEnd as well for older iOS Safari\n          e\.preventDefault\(\);\n          e\.stopPropagation\(\);\n          console\.log\("Opening drawer from absolute touchEnd for", project\.id\);\n          setSelectedProject\(project\.id\);\n          setIsDrawerOpen\(true\);\n        \}\}\n      \/>\n      \n      \{\/\* Desktop Click Target \(navigates to page\) \*\/\}\n      <div \n        className="absolute inset-0 z-\[100\] hidden md:block cursor-pointer"\n        onClick=\{\(e\) => \{\n          e\.preventDefault\(\);\n          e\.stopPropagation\(\);\n          setLocation\(project\.link\);\n        \}\}\n      \/>\n      \n      <div className="flex flex-col md:flex-row gap-\[12px\] md:gap-\[24px\] items-stretch md:h-\[400px\] pointer-events-none relative z-10">/g,
  `    <button 
      type="button"
      onClick={(e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          e.stopPropagation();
          console.log("Opening drawer for", project.id);
          setSelectedProject(project.id);
          setIsDrawerOpen(true);
        } else {
          setLocation(project.link);
        }
      }}
      className="block w-full bg-white rounded-[28px] p-[16px] md:p-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#eaeaea] group transition-all duration-300 md:hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] relative z-[9999] text-left cursor-pointer appearance-none outline-none focus:outline-none" 
      style={{ WebkitTapHighlightColor: "transparent", pointerEvents: "auto", touchAction: "manipulation" }}>
      
      <div className="flex flex-col md:flex-row gap-[12px] md:gap-[24px] items-stretch md:h-[400px] pointer-events-none relative z-10">`
);

content = content.replace(
  /      <\/div>\n    <\/div>\n  \);/g,
  `      </div>\n    </button>\n  );`
);

fs.writeFileSync(path, content, 'utf-8');
