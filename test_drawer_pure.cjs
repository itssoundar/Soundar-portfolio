const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// I will simplify the click handler and the card wrapper.
// Sometimes the `button` tag is capturing the click but not passing it on, or there's a conflict with other elements.
// Let's use a simple `div` with `onClick` but make sure it has the right cursor and z-index.
// And let's make sure the drawer state isn't being immediately reset by a conflicting event.

content = content.replace(
  /    <button \n      onClick=\{\(e\) => \{\n        if \(window\.innerWidth <= 1024\) \{\n          e\.preventDefault\(\);\n          e\.stopPropagation\(\);\n          console\.log\("Opening drawer for", project\.id\);\n          setSelectedProject\(project\.id\);\n          setIsDrawerOpen\(true\);\n        \} else \{\n          setLocation\(project\.link\);\n        \}\n      \}\}\n      className="block w-full bg-white rounded-\[28px\] p-\[16px\] md:p-\[32px\] shadow-\[0_4px_24px_rgba\(0,0,0,0\.04\)\] border border-\[#eaeaea\] group transition-all duration-300 md:hover:shadow-\[0_8px_32px_rgba\(0,0,0,0\.08\)\] relative z-\[90\] text-left cursor-pointer pointer-events-auto appearance-none" \n      style=\{\{ WebkitTapHighlightColor: "transparent" \}\}>\n      \n      <div className="flex flex-col md:flex-row gap-\[12px\] md:gap-\[24px\] items-stretch md:h-\[400px\] pointer-events-none relative z-10">/g,
  `    <div 
      onClick={(e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          e.stopPropagation();
          console.log("Opening drawer pure div for", project.id);
          setSelectedProject(project.id);
          setIsDrawerOpen(true);
        } else {
          setLocation(project.link);
        }
      }}
      className="block w-full bg-white rounded-[28px] p-[16px] md:p-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#eaeaea] group transition-all duration-300 md:hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] relative z-[90] text-left cursor-pointer pointer-events-auto" 
      style={{ WebkitTapHighlightColor: "transparent" }}
      role="button"
      tabIndex={0}>
      
      <div className="flex flex-col md:flex-row gap-[12px] md:gap-[24px] items-stretch md:h-[400px] pointer-events-none relative z-10">`
);

content = content.replace(
  /      <\/div>\n    <\/button>\n  \);/g,
  `      </div>\n    </div>\n  );`
);

fs.writeFileSync(path, content, 'utf-8');
