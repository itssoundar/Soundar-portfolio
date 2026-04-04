const fs = require('fs');

const filePath = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Make sure ProjectMobileDrawer is imported
if (!content.includes('ProjectMobileDrawer')) {
  content = content.replace(
    'export function Projects() {',
    'import { ProjectMobileDrawer } from "./ProjectMobileDrawer";\nimport { useState } from "react";\n\nexport function Projects() {'
  );
}

// Add state if it doesn't exist
if (!content.includes('const [selectedProject')) {
  content = content.replace(
    'export function Projects() {',
    'export function Projects() {\n  const [selectedProject, setSelectedProject] = useState<string | null>(null);\n  const [isDrawerOpen, setIsDrawerOpen] = useState(false);\n'
  );
}

// Update the renderCardContent function to handle clicks
// Find the function and replace it
const renderFnStart = content.indexOf('const renderCardContent =');
if (renderFnStart !== -1) {
  const renderFnEnd = content.indexOf('};', renderFnStart); // Assuming we can find the end
  
  // Let's just do a string replacement for the Link part
  const linkRegex = /<Link href=\{project\.link\} className="([^"]+)">/g;
  content = content.replace(linkRegex, (match, className) => {
    return `<div \n      onClick={(e) => {\n        // Check if mobile by window width\n        if (window.innerWidth < 768) {\n          e.preventDefault();\n          setSelectedProject(project.id);\n          setIsDrawerOpen(true);\n        } else {\n          // Let Link handle it for desktop (we'll wrap this div in a Link)\n        }\n      }}\n      className="${className} cursor-pointer"\n    >`;
  });

  content = content.replace(/<\/Link>\n  \);/g, '</div>\n  );');
  
  // Now wrap the whole card in a Link for desktop routing
  content = content.replace(
    /const renderCardContent = \(project: typeof projects\[0\], isFirst: boolean = false\) => \(/,
    'const renderCardContent = (project: typeof projects[0], isFirst: boolean = false) => (\n    <Link href={project.link} onClick={(e) => {\n      if (window.innerWidth < 768) {\n        e.preventDefault();\n      }\n    }}>'
  );
  
  content = content.replace(/<\/div>\n  \);/g, '</div>\n    </Link>\n  );');
}

// Add the drawer to the bottom of the component
if (!content.includes('<ProjectMobileDrawer')) {
  content = content.replace(
    /<\/section>\n  \);\n}/,
    `      <ProjectMobileDrawer\n        isOpen={isDrawerOpen}\n        onOpenChange={setIsDrawerOpen}\n        projectId={selectedProject}\n      />\n    </section>\n  );\n}`
  );
}

fs.writeFileSync(filePath, content, 'utf-8');
