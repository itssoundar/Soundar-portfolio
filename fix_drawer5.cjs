const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// I also noticed the `<ProjectMobileDrawer>` might have been placed in a weird spot in Projects.tsx.
// Let's ensure it's at the very end of the component, before the final closing tag, and not wrapped in any weird GSAP elements.
// I will just put it back inside the section but right at the end. The section has relative positioning but that shouldn't affect a React Portal (which shadcn Vaul uses under the hood).
// I also need to make sure the click handlers are definitely firing and triggering the state change.

content = content.replace(
  /    <ProjectMobileDrawer\n      isOpen=\{isDrawerOpen\}\n      onOpenChange=\{setIsDrawerOpen\}\n      projectId=\{selectedProject\}\n    \/>\n    <\/>\n  \);\n\}/g,
  `      <ProjectMobileDrawer
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        projectId={selectedProject}
      />
    </section>
  );
}`
);

content = content.replace(
  /  return \(\n    <>\n    <section id="work"/g,
  `  return (\n    <section id="work"`
);

// Add a console log to the click handler to verify it fires
content = content.replace(
  /        if \(window\.innerWidth <= 1024\) \{\n          e\.preventDefault\(\);\n          e\.stopPropagation\(\);\n          setSelectedProject\(project\.id\);\n          setIsDrawerOpen\(true\);\n        \} else \{/g,
  `        if (window.innerWidth <= 1024) {
          e.preventDefault();
          e.stopPropagation();
          console.log("Opening drawer for", project.id);
          setSelectedProject(project.id);
          setIsDrawerOpen(true);
        } else {`
);

fs.writeFileSync(path, content, 'utf-8');
