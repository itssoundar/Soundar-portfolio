const fs = require('fs');
const glob = require('glob');

const files = glob.sync('client/src/{components,pages}/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // h1: mobile 40px, desktop 56px
  // h2: mobile 32px, desktop 40px
  // h3: mobile 22px, desktop 28px
  // p: mobile 16px, desktop 18px

  content = content.replace(/<h1[^>]*className="([^"]*)"/g, (match, classes) => {
    let newClasses = classes.replace(/text-\[[^\]]+\]\s*(?:sm:text-\[[^\]]+\]\s*)?(?:md:text-\[[^\]]+\]\s*)?/g, '')
                             .replace(/text-\w+\s*/g, '');
    newClasses = `text-[40px] md:text-[56px] ${newClasses}`.replace(/\s+/g, ' ').trim();
    return match.replace(classes, newClasses);
  });

  content = content.replace(/<h2[^>]*className="([^"]*)"/g, (match, classes) => {
    let newClasses = classes.replace(/text-\[[^\]]+\]\s*(?:sm:text-\[[^\]]+\]\s*)?(?:md:text-\[[^\]]+\]\s*)?/g, '')
                             .replace(/text-\w+\s*/g, '');
    newClasses = `text-[32px] md:text-[40px] ${newClasses}`.replace(/\s+/g, ' ').trim();
    return match.replace(classes, newClasses);
  });

  content = content.replace(/<h3[^>]*className="([^"]*)"/g, (match, classes) => {
    let newClasses = classes.replace(/text-\[[^\]]+\]\s*(?:sm:text-\[[^\]]+\]\s*)?(?:md:text-\[[^\]]+\]\s*)?/g, '')
                             .replace(/text-\w+\s*/g, '');
    newClasses = `text-[22px] md:text-[28px] ${newClasses}`.replace(/\s+/g, ' ').trim();
    return match.replace(classes, newClasses);
  });

  content = content.replace(/<p[^>]*className="([^"]*)"/g, (match, classes) => {
    let newClasses = classes.replace(/text-\[[^\]]+\]\s*(?:sm:text-\[[^\]]+\]\s*)?(?:md:text-\[[^\]]+\]\s*)?/g, '')
                             .replace(/text-\w+\s*/g, '');
    newClasses = `text-[16px] md:text-[18px] ${newClasses}`.replace(/\s+/g, ' ').trim();
    return match.replace(classes, newClasses);
  });

  fs.writeFileSync(file, content, 'utf-8');
});

console.log('Typography updated.');
