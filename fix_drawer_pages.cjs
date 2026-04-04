const fs = require('fs');

['ProjectDetail1', 'ProjectDetail2', 'ProjectDetail3'].forEach(page => {
  const filePath = `client/src/pages/${page}.tsx`;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace the pt-[40px] with pt-[0px] when hideHeader is true to remove the gap
  content = content.replace(
    /\$\{hideHeader \? "pt-\[40px\]" : "pt-\[80px\]"\}/g,
    '${hideHeader ? "pt-[0px] rounded-t-[24px]" : "pt-[80px]"}'
  );

  fs.writeFileSync(filePath, content, 'utf-8');
});
