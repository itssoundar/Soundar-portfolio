const fs = require('fs');
const glob = require('glob');

const files = glob.sync('client/src/{components,pages}/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // h1: mobile 40px, desktop 56px
  // h2: mobile 32px, desktop 40px
  // h3: mobile 22px, desktop 28px
  // p: mobile 16px, desktop 18px

  // Replace text sizing inside <h1 ... className="...">
  content = content.replace(/(<h1[^>]*className="[^"]*)(text-\[[^\]]+\]\s*md:text-\[[^\]]+\]|text-\[[^\]]+\])([^"]*")/g, (match, p1, p2, p3) => {
    return p1 + "text-[40px] md:text-[56px]" + p3;
  });

  // Replace text sizing inside <h2 ... className="...">
  content = content.replace(/(<h2[^>]*className="[^"]*)(text-\[[^\]]+\]\s*md:text-\[[^\]]+\]|text-\[[^\]]+\])([^"]*")/g, (match, p1, p2, p3) => {
    return p1 + "text-[32px] md:text-[40px]" + p3;
  });

  // Replace text sizing inside <h3 ... className="...">
  content = content.replace(/(<h3[^>]*className="[^"]*)(text-\[[^\]]+\]\s*md:text-\[[^\]]+\]|text-\[[^\]]+\]|text-\w+)([^"]*")/g, (match, p1, p2, p3) => {
    // some had text-lg, let's just make sure we capture it or replace the whole sizing logic
    return p1 + "text-[22px] md:text-[28px]" + p3;
  });

  // For <p>, some use text-[16px] md:text-[18px], text-[14px] sm:text-[15px] md:text-[18px] etc.
  content = content.replace(/(<p[^>]*className="[^"]*)(text-\[[^\]]+\]\s*(?:sm:text-\[[^\]]+\]\s*)?(?:md:text-\[[^\]]+\]\s*)?|text-\w+\s*)([^"]*")/g, (match, p1, p2, p3) => {
    return p1 + "text-[16px] md:text-[18px]" + (p3.startsWith(" ") ? p3 : " " + p3);
  });

  // Clean up any double spaces that might have been introduced
  content = content.replace(/className="([^"]+)"/g, (match, classes) => {
    return `className="${classes.replace(/\s+/g, ' ').trim()}"`;
  });

  fs.writeFileSync(file, content, 'utf-8');
});

console.log('Typography updated.');
