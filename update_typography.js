const fs = require('fs');
const path = require('path');

const files = [
  'client/src/pages/ProjectDetail1.tsx',
  'client/src/pages/ProjectDetail2.tsx',
  'client/src/pages/ProjectDetail3.tsx',
  'client/src/components/Projects.tsx',
  'client/src/pages/Home.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // h1: 36px on mobile
  content = content.replace(/text-\[32px\] md:text-\[40px\]/g, 'text-[36px] md:text-[40px]');
  content = content.replace(/text-4xl/g, 'text-[36px] md:text-4xl'); // if any
  content = content.replace(/text-5xl/g, 'text-[36px] md:text-5xl');

  // h2: 24px on mobile
  content = content.replace(/text-\[28px\] md:text-\[34px\]/g, 'text-[24px] md:text-[34px]');
  content = content.replace(/<h2 className="([^"]*?)text-3xl([^"]*?)"/g, '<h2 className="$1text-[24px] md:text-3xl$2"');
  content = content.replace(/<h2 className="([^"]*?)text-4xl([^"]*?)"/g, '<h2 className="$1text-[24px] md:text-4xl$2"');

  // h3: 18px on mobile
  content = content.replace(/<h3 className="([^"]*?)text-xl([^"]*?)"/g, '<h3 className="$1text-[18px] md:text-xl$2"');
  content = content.replace(/<h3 className="([^"]*?)text-2xl([^"]*?)"/g, '<h3 className="$1text-[18px] md:text-2xl$2"');
  content = content.replace(/<h3 className="([^"]*?)text-lg([^"]*?)"/g, '<h3 className="$1text-[18px] md:text-lg$2"');

  // paragraphs: 14px on mobile
  // first, handle p tags that don't have text- size
  content = content.replace(/<p className="([^"]*?)"/g, (match, classes) => {
    let newClasses = classes;
    
    // if it already has text-[14px], skip
    if (newClasses.includes('text-[14px]') || newClasses.includes('text-xs')) {
      return match;
    }

    // if it has text-sm (which is 14px), change to text-[14px] md:text-sm to be explicit, or just leave it
    if (newClasses.includes('text-sm')) {
      newClasses = newClasses.replace('text-sm', 'text-[14px] md:text-sm');
    } else if (newClasses.includes('text-[16px]')) {
      newClasses = newClasses.replace('text-[16px]', 'text-[14px] md:text-[16px]');
    } else if (newClasses.includes('text-[17px]')) {
      newClasses = newClasses.replace('text-[17px]', 'text-[14px] md:text-[17px]');
    } else if (newClasses.includes('text-lg')) {
      newClasses = newClasses.replace('text-lg', 'text-[14px] md:text-lg');
    } else if (newClasses.includes('text-xl')) {
      newClasses = newClasses.replace('text-xl', 'text-[14px] md:text-xl');
    } else if (newClasses.includes('text-2xl')) {
      newClasses = newClasses.replace('text-2xl', 'text-[14px] md:text-2xl');
    } else if (newClasses.includes('text-4xl')) {
      newClasses = newClasses.replace('text-4xl', 'text-[24px] md:text-4xl'); // custom for numbers
    } else {
      // no text- size found, meaning it's 16px by default. 
      // Add text-[14px] md:text-base
      // but ensure we don't add multiple times
      if (!newClasses.includes('text-base')) {
        newClasses = 'text-[14px] md:text-base ' + newClasses;
      }
    }

    // remove duplicate spaces
    newClasses = newClasses.replace(/\s+/g, ' ').trim();
    return `<p className="${newClasses}"`;
  });

  fs.writeFileSync(file, content, 'utf8');
});
console.log('Typography updated');
