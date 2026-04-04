const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// It seems there are a bunch of pointer-events-none on parent containers that might be blocking the clicks.
// Let's make absolutely sure the button has pointer-events-auto and a high z-index, and its parents don't block it.

// Change button style
content = content.replace(
  /style={{ WebkitTapHighlightColor: "transparent", pointerEvents: "auto" }}/g,
  'style={{ WebkitTapHighlightColor: "transparent", pointerEvents: "all", position: "relative", zIndex: 100 }}'
);

// Remove pointer-events-none from Stage 4 container and its parents
content = content.replace(
  /className="absolute inset-0 flex items-center justify-center z-\[80\]" style={{ pointerEvents: "auto" }}/g,
  'className="absolute inset-0 flex items-center justify-center z-[80] pointer-events-none"'
);
content = content.replace(
  /className="w-\[90%\] md:w-full max-w-\[1000px\] opacity-0 pointer-events-auto"/g,
  'className="w-[90%] md:w-full max-w-[1000px] opacity-0 pointer-events-auto"' 
);

fs.writeFileSync(path, content, 'utf-8');
