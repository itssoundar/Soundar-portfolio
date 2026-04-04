const fs = require('fs');

let path = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf-8');

// I am noticing `onPointerDown` might still be conflicting.
// Let's replace the `div` wrapper with an `a` tag and just use the native link behavior, but intercept it with `onClick`.
// This is the absolute most reliable way to handle clicks on iOS Safari because native links ALWAYS work.

content = content.replace(
  /const renderCardContent = \(project: typeof projects\[0\], isFirst: boolean = false\) => \([\s\S]*?<\/div>\n  \);/g,
  `const renderCardContent = (project: typeof projects[0], isFirst: boolean = false) => (
    <a 
      href={project.link}
      onClick={(e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          setSelectedProject(project.id);
          setIsDrawerOpen(true);
        }
      }}
      className="block w-full bg-white rounded-[28px] p-[16px] md:p-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#eaeaea] group transition-all duration-300 md:hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] relative z-[90] text-left cursor-pointer pointer-events-auto" 
      style={{ display: "block", WebkitTapHighlightColor: "transparent" }}>
      
      <div className="flex flex-col md:flex-row gap-[12px] md:gap-[24px] items-stretch md:h-[400px] pointer-events-none">
        {/* Left Side: Image */}
        <div className="w-full md:w-[45%] h-[180px] sm:h-[400px] md:h-full relative rounded-[16px] overflow-hidden bg-[#f4f4f4] shrink-0 border border-[#f0f0f0]/50 pointer-events-none">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 md:group-hover:scale-105"
            style={{ backgroundImage: \`url(\${project.image})\` }}
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-[55%] flex flex-col justify-center pointer-events-none">
          <h3 className="text-[22px] md:text-[28px] font-medium tracking-[-0.02em] leading-[1.2] lg:leading-[1.15] mb-3 md:mb-8 pr-2 lg:pr-8 text-[#111]">
            {project.title}
          </h3>
          
          <ul className="space-y-2 md:space-y-5 md:mb-10 pr-2 lg:pr-10 mb-[8px]">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 md:gap-4 text-[#444] text-[16px] md:text-[18px] leading-[1.5] md:leading-[1.6]">
                <span className="w-[5px] h-[5px] rounded-full bg-[#111] mt-[7px] md:mt-[11px] flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto md:mt-0">
            <span className="inline-block px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-[12px] bg-[#111] text-white font-medium text-[14px] md:text-[15px] lg:text-[16px] md:group-hover:bg-black transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.15)]">
              View Project
            </span>
          </div>
        </div>
      </div>
    </a>
  );`
);

fs.writeFileSync(path, content, 'utf-8');
