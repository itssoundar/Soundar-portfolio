const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// One more fix: Make sure the drawer uses a high z-index and pointer-events.
// Let's verify Vaul's drawer classes or just check our project cards.
// If the user taps and nothing happens, it's almost certainly because of pointer-events blocking it.

// Let's double check if we missed removing pointer-events-none from any wrapper of the card1Ref.
// The image floating elements also have a wrapper.

// Let's just make sure `pointer-events-auto` is heavily forced on the next-card elements too.
content = content.replace(
  /<div\n\s*key=\{project\.id\}\n\s*className="next-card w-\[90%\] md:w-full max-w-\[1000px\]"\n\s*>/g,
  '<div\n              key={project.id}\n              className="next-card w-[90%] md:w-full max-w-[1000px] pointer-events-auto"\n            >'
);

fs.writeFileSync(path, content, 'utf-8');
