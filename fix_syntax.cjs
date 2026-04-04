const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// Looking at the error, it says "Expected corresponding JSX closing tag for <>." on line 395.
// Let's remove the extra closing tags and ensure it's a clean fragment.

content = content.replace(
  /    <\/section>\n    <\/section>\n      <ProjectMobileDrawer\n        isOpen=\{isDrawerOpen\}\n        onOpenChange=\{setIsDrawerOpen\}\n        projectId=\{selectedProject\}\n      \/>\n    <\/>\n  \);\n\}/g,
  `    </section>\n      <ProjectMobileDrawer\n        isOpen={isDrawerOpen}\n        onOpenChange={setIsDrawerOpen}\n        projectId={selectedProject}\n      />\n    </>\n  );\n}`
);

fs.writeFileSync(path, content, 'utf-8');
