const fs = require('fs');

const data = {
  'ProjectDetail1': {
    title: 'Redefining hiring at scale with AI Agents',
    subtitle: 'Designed a Conversational AI recruiting co-pilot that automates talent engagement at every stage of the recruiting funnel.',
    img: '{Case1}'
  },
  'ProjectDetail2': {
    title: 'Building a Scalable Design System',
    subtitle: 'Built scalable components and tokens to unify UI across CRM modules, reducing UI inconsistencies and improving design-to-development efficiency.',
    img: '{Case1}'
  },
  'ProjectDetail3': {
    title: 'CRM Analytics & Dashboard Builder',
    subtitle: 'Designed centralized dashboards to monitor hiring pipeline performance and enabled self-serve analytics through a flexible dashboard builder.',
    img: '"/c3-hero.png"'
  }
};

Object.keys(data).forEach(page => {
  const filePath = `client/src/pages/${page}.tsx`;
  let content = fs.readFileSync(filePath, 'utf-8');

  // Match the hideHeader block exactly
  const hideHeaderRegex = /\{\s*hideHeader\s*\?\s*\(\s*<div className="w-full bg-white pt-6 pb-6 px-4 md:px-6 relative z-10 flex flex-col items-center text-center">[\s\S]*?<img src=[^\s]+ alt="Project Dashboard" className="w-full h-auto block" \/>\s*<\/div>\s*<\/div>\s*\)\s*:\s*\(/;

  if (content.match(hideHeaderRegex)) {
    const replacement = `{hideHeader ? (
        <div className="w-full bg-white pt-6 pb-8 px-4 sm:px-6 md:px-8 relative z-10 flex flex-col items-start text-left">
          <h1 className="text-[28px] sm:text-[32px] font-semibold leading-[1.2] tracking-tight font-sans text-[#111] mb-4">
            ${data[page].title}
          </h1>
          <p className="text-[16px] sm:text-[18px] text-[#333] leading-[1.6] mb-8 max-w-[800px]">
            ${data[page].subtitle}
          </p>
          <div className="w-full rounded-[24px] overflow-hidden bg-gradient-to-b from-[#eaf2ff] to-[#d6e5ff] p-4 sm:p-6 md:p-8">
            <img src=${data[page].img} alt="Project Dashboard" className="w-full h-auto block rounded-[12px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/50" />
          </div>
        </div>
      ) : (`;
    
    content = content.replace(hideHeaderRegex, replacement);
    fs.writeFileSync(filePath, content, 'utf-8');
  } else {
    console.log(`Could not match in ${page}`);
  }
});
