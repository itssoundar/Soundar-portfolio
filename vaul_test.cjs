const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// I am noticing that if we only use `window.innerWidth <= 1024`, sometimes on mobile standard clicks don't fire properly when wrapped in a `div`.
// I will ensure we use `button` for the interactive target, but with no background/border to keep it clean.
// Actually, earlier the user had `a` tags which navigated correctly. I want to try keeping the overlay approach we had before which worked perfectly.

// Let's restore the exact overlay approach that worked previously but make sure the `ProjectMobileDrawer` is completely isolated.

content = content.replace(
  /    <div \n      onClick=\{\(e\) => \{\n        if \(window\.innerWidth <= 1024\) \{\n          e\.preventDefault\(\);\n          e\.stopPropagation\(\);\n          console\.log\("Opening drawer pure div for", project\.id\);\n          setSelectedProject\(project\.id\);\n          setIsDrawerOpen\(true\);\n        \} else \{\n          setLocation\(project\.link\);\n        \}\n      \}\}\n      className="block w-full bg-white rounded-\[28px\] p-\[16px\] md:p-\[32px\] shadow-\[0_4px_24px_rgba\(0,0,0,0\.04\)\] border border-\[#eaeaea\] group transition-all duration-300 md:hover:shadow-\[0_8px_32px_rgba\(0,0,0,0\.08\)\] relative z-\[90\] text-left cursor-pointer pointer-events-auto" \n      style=\{\{ WebkitTapHighlightColor: "transparent" \}\}\n      role="button"\n      tabIndex=\{0\}>\n      \n      <div className="flex flex-col md:flex-row gap-\[12px\] md:gap-\[24px\] items-stretch md:h-\[400px\] pointer-events-none relative z-10">/g,
  `    <div 
      className="block w-full bg-white rounded-[28px] p-[16px] md:p-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#eaeaea] group transition-all duration-300 md:hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] relative z-[90] text-left pointer-events-auto" 
      style={{ WebkitTapHighlightColor: "transparent" }}>
      
      {/* Mobile Click Target (shows Drawer) */}
      <div 
        className="absolute inset-0 z-[100] md:hidden cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log("Opening drawer for", project.id);
          setSelectedProject(project.id);
          setIsDrawerOpen(true);
        }}
        onTouchStart={() => {
          // Empty touch start to ensure iOS Safari registers this as a tappable element
        }}
      />
      
      {/* Desktop Click Target (navigates to page) */}
      <div 
        className="absolute inset-0 z-[100] hidden md:block cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setLocation(project.link);
        }}
      />
      
      <div className="flex flex-col md:flex-row gap-[12px] md:gap-[24px] items-stretch md:h-[400px] pointer-events-none relative z-10">`
);

fs.writeFileSync(path, content, 'utf-8');
