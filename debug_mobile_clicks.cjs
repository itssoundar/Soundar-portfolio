const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// I am noticing that when clicking the cards on mobile, the click might not be reaching the button.
// The whole `Projects` section has a lot of GSAP scroll triggers and absolutely positioned elements.
// Let's add a clear click capture overlay on mobile specifically for the cards to make absolutely sure they can be clicked.

content = content.replace(
  /className="w-full text-left touch-manipulation"/g,
  'className="w-full text-left touch-manipulation relative group block"'
);

// Add an absolute overlay that captures clicks
content = content.replace(
  /<div className="group block">/g,
  '<div className="group block relative">'
);

fs.writeFileSync(path, content, 'utf-8');
