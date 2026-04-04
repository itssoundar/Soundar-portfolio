const fs = require('fs');

['ProjectDetail1', 'ProjectDetail2', 'ProjectDetail3'].forEach(page => {
  const filePath = `client/src/pages/${page}.tsx`;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Also adjust padding-top of the main div when hideHeader is true
  const ptRegex = /className="(w-full text-white flex flex-col items-center justify-start text-center px-6 relative overflow-hidden bg-cover bg-center bg-no-repeat) pt-\[80px\]"/;
  if (content.match(ptRegex)) {
    content = content.replace(
      ptRegex,
      'className={`$1 ${hideHeader ? "pt-[40px]" : "pt-[80px]"}`}'
    );
  }

  fs.writeFileSync(filePath, content, 'utf-8');
});
