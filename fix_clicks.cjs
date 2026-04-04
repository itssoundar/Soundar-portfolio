const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

content = content.replace(
  /className="block w-full bg-white rounded-\[28px\] p-\[16px\] md:p-\[32px\] shadow-\[0_4px_24px_rgba\(0,0,0,0\.04\)\] border border-\[#eaeaea\] group transition-all duration-300 hover:shadow-\[0_8px_32px_rgba\(0,0,0,0\.08\)\] pointer-events-auto cursor-pointer">/g,
  'className="block w-full bg-white rounded-[28px] p-[16px] md:p-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#eaeaea] group transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] pointer-events-auto cursor-pointer relative z-[60]" style={{ touchAction: "manipulation" }}>'
);

// We should also remove the pointer-events-none from the parents if they are blocking it.
// The container for the first card is:
// <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
//   <div ref={card1Ref} className="w-[90%] md:w-full max-w-[1000px] opacity-0 pointer-events-auto">
// That's usually fine because pointer-events-auto overrides it for the child. 
// But sometimes on iOS Safari, nested pointer-events: none on absolute containers can intercept taps.

content = content.replace(
  /<div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">/g,
  '<div className="absolute inset-0 flex items-center justify-center z-30">' // Removed pointer-events-none
);

// Also the wrapper for next cards:
content = content.replace(
  /<div className="relative z-50 w-full bg-\[#f8f9fa\] sm:pt-\[180px\] md:pt-0 mt-0 md:mt-0 pt-\[0px\]">/g,
  '<div className="relative z-50 w-full bg-[#f8f9fa] sm:pt-[180px] md:pt-0 mt-0 md:mt-0 pt-[0px] pointer-events-auto">'
);

fs.writeFileSync(path, content, 'utf-8');
