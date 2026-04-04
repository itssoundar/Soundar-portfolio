const fs = require('fs');

let path = 'client/src/components/ProjectMobileDrawer.tsx';
let content = fs.readFileSync(path, 'utf-8');

// Also, the <Drawer.Root> from Shadcn is just exported as <Drawer>
// Shadcn already gives us <Drawer>, <DrawerContent>, <DrawerHeader>, etc.
// Let's make sure our ProjectMobileDrawer.tsx is completely correct based on standard Shadcn UI vaul implementation.

content = `import { useEffect } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer";
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
    <Drawer open={isOpen} onOpenChange={onOpenChange} shouldScaleBackground={false} repositionInputs={false}>
      <DrawerContent className="fixed inset-x-0 bottom-0 z-[101] mt-10 flex h-[92vh] flex-col rounded-t-[24px] border-0 bg-white outline-none pointer-events-auto shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <DrawerHeader className="px-4 pb-3 pt-1 flex flex-col items-center justify-center sticky top-0 bg-white z-[102] shrink-0 border-b border-gray-100">
          <div className="flex items-center justify-between w-full">
            <div className="w-8" /> {/* Spacer for centering */}
            <DrawerTitle className="text-[14px] font-medium text-center text-[#666] font-sans m-0">
              {getProjectTitle()}
            </DrawerTitle>
            <DrawerClose asChild>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                <X size={16} className="text-gray-500" />
              </button>
            </DrawerClose>
          </div>
        </DrawerHeader>
        
        <div id="project-drawer-content" className="flex-1 overflow-y-auto bg-white pb-12" style={{ WebkitOverflowScrolling: "touch" }}>
          <div className="bg-white min-h-full overflow-hidden">
            {renderProjectContent()}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
`;

fs.writeFileSync(path, content, 'utf-8');
