const fs = require('fs');

let path = 'client/src/components/ProjectMobileDrawer.tsx';
let content = fs.readFileSync(path, 'utf-8');

// Wait! In the custom drawer implementation, I made a mistake:
// `if (!mounted || !renderOpen) return null;`
// But I put `return (` AFTER that with the drawer JSX!
// Let's fix that.

content = `import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLocation } from "wouter";

// Import project detail components
import ProjectDetail1 from "@/pages/ProjectDetail1";
import ProjectDetail2 from "@/pages/ProjectDetail2";
import ProjectDetail3 from "@/pages/ProjectDetail3";

interface ProjectMobileDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  projectId: string | null;
}

export function ProjectMobileDrawer({ isOpen, onOpenChange, projectId }: ProjectMobileDrawerProps) {
  const [, setLocation] = useLocation();
  const [mounted, setMounted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle animations and URL
  useEffect(() => {
    if (isOpen) {
      // Small delay to allow display:block to apply before animating opacity/transform
      const raf = requestAnimationFrame(() => {
        setAnimateIn(true);
      });
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
      
      // Update URL without navigation to allow sharing links
      if (projectId) {
        window.history.pushState({}, '', \`/project/\${projectId}\`);
      }
      
      return () => cancelAnimationFrame(raf);
    } else {
      setAnimateIn(false);
      document.body.style.overflow = '';
      
      // Revert URL when closing
      window.history.pushState({}, '', '/');
    }
  }, [isOpen, projectId]);

  // Cleanup overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Wait for unmount animation
  const [renderOpen, setRenderOpen] = useState(isOpen);
  useEffect(() => {
    if (isOpen) {
      setRenderOpen(true);
    } else {
      const timer = setTimeout(() => setRenderOpen(false), 300); // match transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const renderProjectContent = () => {
    switch (projectId) {
      case "crm-ai":
        return <ProjectDetail1 hideHeader={true} />;
      case "design-system":
        return <ProjectDetail2 hideHeader={true} />;
      case "conversational-b2b":
        return <ProjectDetail3 hideHeader={true} />;
      default:
        return null;
    }
  };

  const getProjectTitle = () => {
    switch (projectId) {
      case "crm-ai":
        return "AI Agents for HR Teams";
      case "design-system":
        return "Genesis Design System";
      case "conversational-b2b":
        return "CRM Analytics Dashboard";
      default:
        return "Project Details";
    }
  };

  if (!mounted || !renderOpen) return null;

  return (
    <div className="fixed inset-0 z-[100000] pointer-events-auto" style={{ WebkitTapHighlightColor: "transparent" }}>
      {/* Backdrop */}
      <div 
        className={\`absolute inset-0 bg-black/60 transition-opacity duration-300 \${animateIn ? 'opacity-100' : 'opacity-0'}\`}
        onClick={() => onOpenChange(false)}
      />
      
      {/* Drawer */}
      <div 
        className={\`absolute bottom-0 left-0 right-0 bg-white rounded-t-[24px] flex flex-col h-[92vh] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] \${animateIn ? 'translate-y-0' : 'translate-y-full'}\`}
      >
        {/* Handle & Header */}
        <div className="flex flex-col items-center justify-center pt-2 pb-3 sticky top-0 bg-white z-[100001] rounded-t-[24px] border-b border-gray-100 shrink-0">
          <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-gray-200 mb-4" />
          <div className="flex items-center justify-between w-full px-4">
            <div className="w-8" />
            <h2 className="text-[14px] font-medium text-center text-[#666] font-sans m-0">
              {getProjectTitle()}
            </h2>
            <button 
              onClick={() => onOpenChange(false)} 
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <X size={16} className="text-gray-500" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-white pb-12 overscroll-contain" style={{ WebkitOverflowScrolling: "touch" }}>
          <div className="bg-white min-h-full">
            {renderProjectContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(path, content, 'utf-8');
