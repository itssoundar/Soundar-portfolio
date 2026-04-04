const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// I also noticed the `card1Ref` wrapper has pointer-events-auto but if the parent has pointer-events-none removed, it should be fine.
// Wait, the chat layer is overlapping it?
// `<div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none mt-0 sm:mt-0">`
// This is z-20, card is z-30. So card is above it.

// But wait, the `renderCardContent` click handler might not be firing because it's wrapped in `<div onClick={...}>`.
// In React, sometimes adding an onClick to a non-interactive element requires `cursor: pointer` which it has.
// Let's change the onClick to also include `onTouchEnd` just in case iOS Safari is swallowing the click during scroll.

content = content.replace(
  /<div\s+onClick=\{\(e\) => \{/g,
  '<div\n      onClick={(e) => {\n        e.preventDefault();\n        if (isMobile || window.innerWidth <= 1024) {\n          setSelectedProject(project.id);\n          setIsDrawerOpen(true);\n        } else {\n          setLocation(project.link);\n        }\n      }}\n      onTouchEnd={(e) => {\n        // e.preventDefault(); // Don\'t prevent default on touch end as it blocks scrolling sometimes, just let onClick fire or fire it here if needed. But usually onClick is enough if pointer events are right.\n      }}'
);

// Actually, onTouchEnd might fire when they are just scrolling past the card. Let's just stick to onClick but ensure the element is interactive.
// I will change the root div of renderCardContent to an 'a' tag or a 'button' to make iOS treat it as fully interactive.

content = content.replace(
  /const renderCardContent = \(project: typeof projects\[0\], isFirst: boolean = false\) => \(\n    <div\n      onClick/g,
  'const renderCardContent = (project: typeof projects[0], isFirst: boolean = false) => (\n    <div\n      role="button"\n      tabIndex={0}\n      onClick'
);

fs.writeFileSync(path, content, 'utf-8');
