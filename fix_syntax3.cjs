const fs = require('fs');

['ProjectDetail1.tsx', 'ProjectDetail2.tsx', 'ProjectDetail3.tsx'].forEach(file => {
  const path = `client/src/pages/${file}`;
  let content = fs.readFileSync(path, 'utf8');

  // Fix the duplicate "Context" H2 when hideHeader is true
  content = content.replace(
    /\{\!hideHeader \? \(<h2 className="text-\[32px\] md:text-\[40px\] font-bold mb-6 leading-\[1\.3\] tracking-tight font-sans">[\s\S]*?<\/h2>\) : \(<h2 className="text-\[22px\] font-bold mb-4 mt-2">Context<\/h2>\)\}\n\s*\{hideHeader && <h2 className="text-\[22px\] font-bold mb-4">Context<\/h2>\}/g,
    '{!hideHeader ? (<h2 className="text-[32px] md:text-[40px] font-bold mb-6 leading-[1.3] tracking-tight font-sans">From Search to Action: Turning HR Intent<br className="hidden md:block" /> into Intelligent Execution</h2>) : (<h2 className="text-[22px] font-bold mb-4 mt-2">Context</h2>)}'
  );

  // General fix for others just in case the above is too specific
  content = content.replace(
    /\{\!hideHeader \? \((<h2[\s\S]*?<\/h2>)\) : \(<h2 className="text-\[22px\] font-bold mb-4 mt-2">Context<\/h2>\)\}\n\s*\{hideHeader && <h2 className="text-\[22px\] font-bold mb-4">Context<\/h2>\}/g,
    '{!hideHeader ? ($1) : (<h2 className="text-[22px] font-bold mb-4 mt-2">Context</h2>)}'
  );

  fs.writeFileSync(path, content, 'utf8');
});
