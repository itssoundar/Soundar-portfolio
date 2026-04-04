const fs = require('fs');

['ProjectDetail1', 'ProjectDetail2', 'ProjectDetail3'].forEach(page => {
  const filePath = `client/src/pages/${page}.tsx`;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  content = content.replace(
    'useEffect(() => {\n    window.scrollTo(0, 0);\n  }, []);',
    'useEffect(() => {\n    if (!hideHeader) {\n      window.scrollTo(0, 0);\n    }\n  }, [hideHeader]);'
  );

  fs.writeFileSync(filePath, content, 'utf-8');
});
