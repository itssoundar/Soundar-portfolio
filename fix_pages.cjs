const fs = require('fs');

['ProjectDetail1', 'ProjectDetail2', 'ProjectDetail3'].forEach(page => {
  const filePath = `client/src/pages/${page}.tsx`;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Add hideHeader prop
  if (content.includes(`export default function ${page}() {`)) {
    content = content.replace(
      `export default function ${page}() {`,
      `export default function ${page}({ hideHeader = false }: { hideHeader?: boolean }) {`
    );
  }
  
  // Conditionally render the top navigation back button based on hideHeader
  // The structure is: <div className="fixed top-6 left-4 md:left-8 z-50">...</div>
  const backButtonRegex = /(<div className="fixed top-6 left-4 md:left-8 z-50">[\s\S]*?<\/div>)/;
  if (content.match(backButtonRegex)) {
    content = content.replace(
      backButtonRegex,
      '{!hideHeader && (\n        $1\n      )}'
    );
  }

  fs.writeFileSync(filePath, content, 'utf-8');
});
