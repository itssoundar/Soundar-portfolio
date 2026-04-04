const fs = require('fs');

const details = {
  'ProjectDetail1': {
    title: 'Redefining hiring at scale with AI Agents',
    desc: 'Designed a Conversational AI recruiting co-pilot that automates talent engagement at every stage of the recruiting funnel.',
    imageStr: '<img src={Case1} alt="HR Platform Dashboard" className="w-full h-auto block" />'
  },
  'ProjectDetail2': {
    title: 'Building a Scalable Design System',
    desc: 'Built scalable components and tokens to unify UI across CRM modules, reducing UI inconsistencies and improving design-to-development efficiency.',
    imageStr: '<img src={Case1} alt="Design System" className="w-full h-auto block" />'
  },
  'ProjectDetail3': {
    title: 'CRM Analytics & Dashboard Builder',
    desc: 'Designed centralized dashboards to monitor hiring pipeline performance and enabled self-serve analytics through a flexible dashboard builder.',
    imageStr: '<img src="/c3-hero.png" alt="CRM Analytics Dashboard" className="w-full h-auto block" />'
  }
};

Object.keys(details).forEach(page => {
  const filePath = `client/src/pages/${page}.tsx`;
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace the top banner block
  // We need to match from {/* Top Banner section */} to the end of that div.
  const topBannerRegex = /\{\/\* Top Banner section \*\/\}\s*<div[^>]*className=\{`w-full text-white[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  
  if (content.match(topBannerRegex)) {
    const replacement = `\{/* Top Banner section */}
      {hideHeader ? (
        <div className="w-full bg-white pt-6 pb-8 px-4 md:px-6 relative z-10">
          <h1 className="text-[28px] font-semibold leading-[1.2] tracking-tight font-sans text-black mb-4">
            ${details[page].title}
          </h1>
          <p className="text-[16px] text-gray-600 leading-[1.5] mb-8 font-medium">
            ${details[page].desc}
          </p>
          <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-[#f4f4f4]">
            ${details[page].imageStr}
          </div>
        </div>
      ) : (
        <div 
          className="w-full text-white flex flex-col items-center justify-start text-center px-6 relative overflow-hidden bg-cover bg-center bg-no-repeat pt-[80px]"
          style={{ backgroundImage: "url('/Case_hero.png')" }}
        >
          <div className="max-w-[800px] z-10 relative mt-8 mb-12">
            <h1 className="text-[40px] md:text-[56px] font-semibold leading-[1.2] tracking-tight font-sans">
              ${page === 'ProjectDetail1' ? 'From Search to Action: Turning HR Intent into Intelligent Execution' : 
                page === 'ProjectDetail2' ? 'Building a Scalable Design System for a Growing HR Platform' : 
                'Building CRM analytics and a custom dashboard builder'}
            </h1>
          </div>

          {/* Main Interface Image - Placed inside the banner */}
          <div className="w-full max-w-[1000px] z-10 relative mt-4">
            <div className="rounded-t-xl md:rounded-t-2xl overflow-hidden shadow-2xl">
              ${details[page].imageStr}
            </div>
          </div>
        </div>
      )}`;

    content = content.replace(topBannerRegex, replacement);
  }

  // Also replace Project Overview title with "Context" when hideHeader is true, if possible, or just change "Project Overview" to "Context"
  // Wait, looking at the code, it just starts with text. I'll just change the "Project Overview Section" top padding if hideHeader is true.
  const overviewRegex = /<div className="w-full bg-gray-50 pt-16 pb-16 lg:pb-24 border-b border-gray-200 relative z-20">/;
  content = content.replace(overviewRegex, `<div className={\`w-full bg-gray-50 \${hideHeader ? 'pt-8' : 'pt-16'} pb-16 lg:pb-24 border-b border-gray-200 relative z-20\`}>`);

  // And optionally hide the big duplicate title in the overview if hideHeader is true
  const overviewTitleRegex = /(<h2 className="text-\[32px\] md:text-\[40px\] font-bold mb-6 leading-\[1\.3\] tracking-tight font-sans">\s*[\s\S]*?\s*<\/h2>)/;
  if (content.match(overviewTitleRegex)) {
    content = content.replace(overviewTitleRegex, `{!hideHeader && ( $1 )}\n              {hideHeader && <h2 className="text-[22px] font-bold mb-4">Context</h2>}`);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
});
