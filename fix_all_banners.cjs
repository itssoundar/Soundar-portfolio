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

  const bannerRegex = /\{\/\* Top Banner section \*\/\}[\s\S]*?(?=\{\/\* Project Overview Section \*\/\})/;
  
  if (content.match(bannerRegex)) {
    const origTitle = page === 'ProjectDetail1' 
      ? 'From Search to Action: Turning HR Intent into Intelligent Execution' 
      : page === 'ProjectDetail2' 
      ? 'Building a Scalable Design System for a Growing HR Platform' 
      : 'Building CRM analytics and a custom dashboard builder';
      
    const replacement = `{/* Top Banner section */}
      {hideHeader ? (
        <div className="w-full bg-white pt-6 pb-6 px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-[24px] sm:text-[28px] font-semibold leading-[1.2] tracking-tight font-sans text-[#111] mb-3">
            ${data[page].title}
          </h1>
          <p className="text-[15px] sm:text-[16px] text-[#444] leading-[1.5] mb-6 font-medium max-w-[600px]">
            ${data[page].subtitle}
          </p>
          <div className="w-full max-w-[800px] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-[#f4f4f4]">
            <img src=${data[page].img} alt="Project Dashboard" className="w-full h-auto block" />
          </div>
        </div>
      ) : (
        <div 
          className="w-full text-white flex flex-col items-center justify-start text-center px-6 relative overflow-hidden bg-cover bg-center bg-no-repeat pt-[80px]"
          style={{ backgroundImage: "url('/Case_hero.png')" }}
        >
          <div className="max-w-[800px] z-10 relative mt-8 mb-12">
            <h1 className="text-[40px] md:text-[56px] font-semibold leading-[1.2] tracking-tight font-sans">
              ${origTitle}
            </h1>
          </div>

          {/* Main Interface Image - Placed inside the banner */}
          <div className="w-full max-w-[1000px] z-10 relative mt-4">
            <div className="rounded-t-xl md:rounded-t-2xl overflow-hidden shadow-2xl">
              <img src=${data[page].img} alt="Project Dashboard" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      )}
      `;
      
    content = content.replace(bannerRegex, replacement);
  }

  // Also replace the H2 if hideHeader is true
  // Let's use a simpler regex that finds the H2 and replaces it
  const h2Regex = /<h2 className="text-\[32px\] md:text-\[40px\] font-bold mb-6 leading-\[1\.3\] tracking-tight font-sans">[\s\S]*?<\/h2>/g;
  
  if (content.match(h2Regex)) {
    const match = content.match(h2Regex)[0];
    content = content.replace(h2Regex, `{!hideHeader ? (${match}) : (<h2 className="text-[22px] font-bold mb-4 mt-2">Context</h2>)}`);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
});
