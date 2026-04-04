const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// I am noticing the button onClick handler uses a strict check `if (window.innerWidth <= 1024)`.
// We need to verify that `window.innerWidth` is behaving as expected, or just use CSS to handle pointer events.
// But first, let's add a console log and alert so we know for sure it's catching the click on mobile!
content = content.replace(
  /console.log\("Opening drawer for", project.id\);/g,
  'console.log("Opening drawer for", project.id);'
);

fs.writeFileSync(path, content, 'utf-8');
