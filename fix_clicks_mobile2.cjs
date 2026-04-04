const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// I'm going to add an explicit touch event handler directly to the container to ensure it registers on iOS Safari.
// Sometimes onClick is just ignored on div elements without cursor: pointer, but we have that.
// Let's just use `onTouchEnd` alongside `onClick` and handle the routing there too, ensuring we prevent default if needed, or just let it fire.

content = content.replace(
  /onClick=\{\(\) => \{\n\s*if \(window\.innerWidth <= 1024\) \{\n\s*setSelectedProject\(project\.id\);\n\s*setIsDrawerOpen\(true\);\n\s*\} else \{\n\s*setLocation\(project\.link\);\n\s*\}\n\s*\}\}/g,
  `onClick={() => {
        if (window.innerWidth <= 1024) {
          setSelectedProject(project.id);
          setIsDrawerOpen(true);
        } else {
          setLocation(project.link);
        }
      }}
      onTouchEnd={(e) => {
        // Prevent ghost clicks
        e.preventDefault();
        if (window.innerWidth <= 1024) {
          setSelectedProject(project.id);
          setIsDrawerOpen(true);
        } else {
          setLocation(project.link);
        }
      }}`
);

fs.writeFileSync(path, content, 'utf-8');
