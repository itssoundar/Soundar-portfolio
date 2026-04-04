const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// I will just make it a standard Link on desktop and fallback to onClick div on mobile, but maybe the overlay is blocking clicks altogether.
// Actually, iOS Safari requires `cursor: pointer` on the element being clicked, OR an onClick handler on an element like `<button>` or `<a>`. 
// I'll change the wrapper to a `<button>` which natively supports clicks on iOS.
// The overlay approach works well but button is bulletproof.

content = content.replace(
  /<div className="block w-full bg-white rounded-\[28px\] p-\[16px\] md:p-\[32px\] shadow-\[0_4px_24px_rgba\(0,0,0,0\.04\)\] border border-\[#eaeaea\] group transition-all duration-300 md:hover:shadow-\[0_8px_32px_rgba\(0,0,0,0\.08\)\] relative z-\[60\] text-left">/g,
  '<button className="block w-full bg-white rounded-[28px] p-[16px] md:p-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#eaeaea] group transition-all duration-300 md:hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] relative z-[60] text-left appearance-none" style={{ WebkitAppearance: "none" }}>'
);

content = content.replace(
  /<\/div>\n  \);/g,
  '</button>\n  );'
);

// Remove the absolute click overlay and move onClick back to the root button
content = content.replace(
  /\s*\{\/\* Absolute Click Overlay - this guarantees the whole card is clickable without child elements interfering \*\/\}\n\s*<div\s*\n\s*className="absolute inset-0 z-\[100\] cursor-pointer"\n\s*onClick=\{\(e\) => \{\n\s*e\.preventDefault\(\);\n\s*e\.stopPropagation\(\);\n\s*if \(window\.innerWidth <= 1024\) \{\n\s*setSelectedProject\(project\.id\);\n\s*setIsDrawerOpen\(true\);\n\s*\} else \{\n\s*setLocation\(project\.link\);\n\s*\}\n\s*\}\}\n\s*style=\{\{ WebkitTapHighlightColor: "transparent" \}\}\n\s*\/>/g,
  ''
);

content = content.replace(
  /<button className="block w-full bg-white rounded-\[28px\]/g,
  `<button 
      onClick={(e) => {
        e.preventDefault();
        if (window.innerWidth <= 1024) {
          setSelectedProject(project.id);
          setIsDrawerOpen(true);
        } else {
          setLocation(project.link);
        }
      }}
      className="block w-full bg-white rounded-[28px]`
);

fs.writeFileSync(path, content, 'utf-8');
