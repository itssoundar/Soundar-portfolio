const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// I am noticing the renderCardContent div doesn't actually have the replacement from test_script2 properly matched 
// because I used a regex that might have failed to match the exact string due to newlines or spaces.
// Let's use a simpler replace.

content = content.replace(
  /<div\n\s*onClick=\{\(e\) => \{\n\s*e\.preventDefault\(\);\n\s*\/\/ Use the hook value or check innerWidth\n\s*if \(isMobile \|\| window\.innerWidth <= 1024\) \{\n\s*setSelectedProject\(project\.id\);\n\s*setIsDrawerOpen\(true\);\n\s*\} else \{\n\s*setLocation\(project\.link\);\n\s*\}\n\s*\}\}\n\s*className="block w-full bg-white rounded-\[28px\] p-\[16px\] md:p-\[32px\] shadow-\[0_4px_24px_rgba\(0,0,0,0\.04\)\] border border-\[#eaeaea\] group transition-all duration-300 hover:shadow-\[0_8px_32px_rgba\(0,0,0,0\.08\)\] pointer-events-auto cursor-pointer">/g,
  `<div
      onClick={(e) => {
        e.preventDefault();
        // Use the hook value or check innerWidth
        if (isMobile || window.innerWidth <= 1024) {
          setSelectedProject(project.id);
          setIsDrawerOpen(true);
        } else {
          setLocation(project.link);
        }
      }}
      className="block w-full bg-white rounded-[28px] p-[16px] md:p-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#eaeaea] group transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] pointer-events-auto cursor-pointer relative z-[60]" tabIndex={0} role="button">`
);

fs.writeFileSync(path, content, 'utf-8');
