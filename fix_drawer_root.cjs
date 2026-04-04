const fs = require('fs');

let path = 'client/src/components/ProjectMobileDrawer.tsx';
let content = fs.readFileSync(path, 'utf-8');

// The issue might be that we need `DrawerPrimitive.Root` from Vaul directly, or that shadcn's Drawer component 
// defaults to a desktop dialog when it thinks it's not mobile if we used `<Drawer>` from a combined Dialog/Drawer component.
// Let's use pure `vaul` instead of the shadcn wrapper to guarantee it works.

content = `import { useEffect } from "react";
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
    <Drawer.Root open={isOpen} onOpenChange={onOpenChange} shouldScaleBackground={false} repositionInputs={false}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-[99999] backdrop-blur-sm" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-[100000] mt-24 flex h-[92vh] flex-col rounded-t-[24px] bg-white outline-none border-0 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pointer-events-auto">
          
          <div className="flex flex-col items-center justify-center pt-2 pb-3 sticky top-0 bg-white z-[100001] rounded-t-[24px] border-b border-gray-100">
            <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-gray-200 mb-4" />
            <div className="flex items-center justify-between w-full px-4">
              <div className="w-8" /> {/* Spacer for centering */}
              <Drawer.Title className="text-[14px] font-medium text-center text-[#666] font-sans m-0">
                {getProjectTitle()}
              </Drawer.Title>
              <Drawer.Close asChild>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                  <X size={16} className="text-gray-500" />
                </button>
              </Drawer.Close>
            </div>
          </div>
          
          <div id="project-drawer-content" className="flex-1 overflow-y-auto bg-white pb-12" style={{ WebkitOverflowScrolling: "touch" }}>
            <div className="bg-white min-h-full overflow-hidden">
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
