const fs = require('fs');

const filePath = 'client/src/components/Projects.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// The regex above probably failed, so let's use string replacement or more robust regex
// Look for renderCardContent definition and replace the return
const startIdx = content.indexOf('const renderCardContent =');
const returnDivStartIdx = content.indexOf('<Link href={project.link}', startIdx);

if (returnDivStartIdx !== -1) {
  // Find where this Link block ends
  const endDivIdx = content.indexOf('</Link>', returnDivStartIdx);
  if (endDivIdx !== -1) {
    const oldBlock = content.substring(returnDivStartIdx, endDivIdx + 7);
    
    // Create new block
    const newBlock = `<div
      onClick={(e) => {
        e.preventDefault();
        if (window.innerWidth < 768) {
          setSelectedProject(project.id);
          setIsDrawerOpen(true);
        } else {
          setLocation(project.link);
        }
      }}
      className="block w-full bg-white rounded-[28px] p-[16px] md:p-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#eaeaea] group transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] pointer-events-auto cursor-pointer">
      <div className="flex flex-col md:flex-row gap-[12px] md:gap-[24px] items-stretch cursor-pointer md:h-[400px]">
        {/* Left Side: Image */}
        <div className="w-full md:w-[45%] h-[180px] sm:h-[400px] md:h-full relative rounded-[16px] overflow-hidden bg-[#f4f4f4] shrink-0 border border-[#f0f0f0]/50">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: \`url(\${project.image})\` }}
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-[55%] flex flex-col justify-center">
          <h3 className="text-[22px] md:text-[28px] font-medium tracking-[-0.02em] leading-[1.2] lg:leading-[1.15] mb-3 md:mb-8 pr-2 lg:pr-8">
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
            <span className="inline-block px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-[12px] bg-[#111] text-white font-medium text-[14px] md:text-[15px] lg:text-[16px] group-hover:bg-black transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.15)]">
              View Project
            </span>
          </div>
        </div>
      </div>
    </div>`;
    
    content = content.replace(oldBlock, newBlock);
  }
}

// Add useLocation if missing
if (!content.includes('useLocation')) {
  content = content.replace('import { Link } from "wouter";', 'import { Link, useLocation } from "wouter";');
}

// Add setLocation if missing
if (!content.includes('const [, setLocation] = useLocation();')) {
  content = content.replace(
    'const [isDrawerOpen, setIsDrawerOpen] = useState(false);',
    'const [isDrawerOpen, setIsDrawerOpen] = useState(false);\n  const [, setLocation] = useLocation();'
  );
}

fs.writeFileSync(filePath, content, 'utf-8');
