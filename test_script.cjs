const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// I need to make sure the onClick on the card is definitely triggering on mobile.
// The issue might be that the card is wrapped in a link, or pointer events are disabled,
// or there's a z-index issue where the click isn't registering,
// or the user isn't actually clicking the card but trying to tap something else.

// Wait, the card has onClick={(e) => { e.preventDefault(); ... }}
// And it says `if (isMobile || window.innerWidth < 768) { ... } else { setLocation(project.link); }`
// Maybe `window.innerWidth` isn't reliable on iOS Safari due to scaling/zooming,
// or `isMobile` isn't triggering. Let's just use `window.innerWidth <= 1024` for the drawer on tablets too?
// Or maybe the `onClick` is not on the right element?

content = content.replace(
  /if \(isMobile \|\| window\.innerWidth < 768\) \{/g,
  'if (isMobile || window.innerWidth <= 1024) {'
);

fs.writeFileSync(path, content, 'utf-8');
