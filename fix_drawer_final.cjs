const fs = require('fs');

let path = 'client/src/components/ProjectMobileDrawer.tsx';

let content = `import { useEffect } from "react";
import { Drawer } from "vaul";
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

  // Reset scroll position when drawer opens
  useEffect(() => {
    if (isOpen) {
      const drawerContent = document.getElementById('project-drawer-content');
      if (drawerContent) {
        drawerContent.scrollTop = 0;
      }
      
      // Update URL without navigation to allow sharing links
      if (projectId) {
        window.history.pushState({}, '', \`/project/\${projectId}\`);
      }
    } else {
      // Revert URL when closing
      window.history.pushState({}, '', '/');
    }
  }, [isOpen, projectId]);

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

  return (
    <Drawer.Root open={isOpen} onOpenChange={onOpenChange} shouldScaleBackground={false}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/60 z-[99999]" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[24px] h-[92vh] fixed bottom-0 left-0 right-0 z-[100000] outline-none">
          {/* Header Area */}
          <div className="flex flex-col items-center justify-center pt-3 pb-3 sticky top-0 bg-white z-[100001] rounded-t-[24px] border-b border-gray-100 shrink-0">
            <div className="mx-auto h-1.5 w-12 rounded-full bg-gray-200 mb-4" />
            <div className="flex items-center justify-between w-full px-4">
              <div className="w-8" />
              <Drawer.Title className="text-[14px] font-medium text-center text-[#666] font-sans m-0">
                {getProjectTitle()}
              </Drawer.Title>
              <button 
                onClick={() => onOpenChange(false)} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <X size={16} className="text-gray-500" />
              </button>
            </div>
          </div>
          
          {/* Scrollable Content */}
          <div id="project-drawer-content" className="flex-1 overflow-y-auto bg-white pb-12 w-full">
            <div className="bg-white min-h-full">
              {renderProjectContent()}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
`;

fs.writeFileSync(path, content, 'utf-8');
