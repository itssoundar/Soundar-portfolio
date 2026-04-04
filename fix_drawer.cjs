const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// Vaul drawers should generally be at the root of the app, or at least outside of complex relative/z-index/GSAP containers.
// The `Projects` component has a lot of GSAP scroll triggers and `z-50` / `overflow-hidden` containers.
// This can sometimes clip the fixed position of the Vaul drawer on mobile Safari or cause it not to appear.
// I will move the `<ProjectMobileDrawer>` outside of the `<section id="work">` completely.

content = content.replace(
  /      <\/div>\n          <ProjectMobileDrawer\n        isOpen=\{isDrawerOpen\}\n        onOpenChange=\{setIsDrawerOpen\}\n        projectId=\{selectedProject\}\n      \/>\n    <\/section>\n  \);\n\}/g,
  `      </div>\n    </section>\n    <ProjectMobileDrawer\n      isOpen={isDrawerOpen}\n      onOpenChange={setIsDrawerOpen}\n      projectId={selectedProject}\n    />\n    </>\n  );\n}`
);

content = content.replace(
  /  return \(\n    <section id="work"/g,
  `  return (\n    <>\n    <section id="work"`
);

fs.writeFileSync(path, content, 'utf-8');
