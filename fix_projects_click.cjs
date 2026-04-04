const fs = require('fs');

const filePath = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Add useLocation import if not present
if (!content.includes('useLocation')) {
  content = content.replace('import { Link } from "wouter";', 'import { Link, useLocation } from "wouter";');
}

// Add setLocation inside Projects
if (!content.includes('const [, setLocation] = useLocation();')) {
  content = content.replace(
    'const [isDrawerOpen, setIsDrawerOpen] = useState(false);',
    'const [isDrawerOpen, setIsDrawerOpen] = useState(false);\n  const [, setLocation] = useLocation();'
  );
}

// Update renderCardContent
content = content.replace(
  /<Link href=\{project\.link\} onClick=\{\(e\) => \{\n\s*if \(window\.innerWidth < 768\) \{\n\s*e\.preventDefault\(\);\n\s*\}\n\s*\}\}>\n\s*<div\n\s*onClick=\{\(e\) => \{\n\s*if \(isMobile\) \{\n\s*e\.preventDefault\(\);\n\s*setSelectedProject\(project\.id\);\n\s*setIsDrawerOpen\(true\);\n\s*\}\n\s*\}\}/,
  `<div
      onClick={(e) => {
        e.preventDefault();
        if (window.innerWidth < 768) {
          setSelectedProject(project.id);
          setIsDrawerOpen(true);
        } else {
          setLocation(project.link);
        }
      }}`
);

content = content.replace(
  /<\/div>\n\s*<\/Link>\n\s*\);/,
  '</div>\n  );'
);

fs.writeFileSync(filePath, content, 'utf-8');
