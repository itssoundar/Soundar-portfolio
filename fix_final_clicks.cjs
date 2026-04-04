const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// The grep failed, meaning my previous replace didn't work because I removed the absolute overlays earlier!
// Let's add them back properly.
// The current wrapper looks like:
// <div 
//   onClick={(e) => { ... }}
//   className="..."
//   style={{ ... }}
//   role="button"
//   tabIndex={0}>

content = content.replace(
  /    <div \n      onClick=\{\(e\) => \{\n        if \(window\.innerWidth <= 1024\) \{\n          e\.preventDefault\(\);\n          e\.stopPropagation\(\);\n          console\.log\("Opening drawer from root div for", project\.id\);\n          setSelectedProject\(project\.id\);\n          setIsDrawerOpen\(true\);\n        \} else \{\n          setLocation\(project\.link\);\n        \}\n      \}\}\n      className="block w-full bg-white rounded-\[28px\] p-\[16px\] md:p-\[32px\] shadow-\[0_4px_24px_rgba\(0,0,0,0\.04\)\] border border-\[#eaeaea\] group transition-all duration-300 md:hover:shadow-\[0_8px_32px_rgba\(0,0,0,0\.08\)\] relative z-\[90\] text-left cursor-pointer pointer-events-auto" \n      style=\{\{ WebkitTapHighlightColor: "transparent" \}\}\n      role="button"\n      tabIndex=\{0\}>\n      \n      <div className="flex flex-col md:flex-row gap-\[12px\] md:gap-\[24px\] items-stretch md:h-\[400px\] pointer-events-none relative z-10">/g,
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
        onTouchEnd={(e) => {
          // Use onTouchEnd as well for older iOS Safari
          e.preventDefault();
          e.stopPropagation();
          console.log("Opening drawer from touchEnd for", project.id);
          setSelectedProject(project.id);
          setIsDrawerOpen(true);
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
