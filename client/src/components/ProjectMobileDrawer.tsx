import { useEffect } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose, DrawerOverlay, DrawerPortal } from "@/components/ui/drawer";
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
        window.history.pushState({}, '', `/project/${projectId}`);
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
    <Drawer open={isOpen} onOpenChange={onOpenChange} shouldScaleBackground={false}>
      <DrawerPortal>
        <DrawerOverlay className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm" />
        <DrawerContent className="fixed inset-x-0 bottom-0 z-[101] mt-10 flex h-[92vh] flex-col rounded-t-[24px] border-0 bg-[#f8f9fa] outline-none pointer-events-auto">
          <div className="mx-auto mt-4 mb-2 h-1.5 w-[40px] shrink-0 rounded-full bg-gray-300" />
          <DrawerHeader className="px-4 pb-4 pt-2 flex items-center justify-between sticky top-0 bg-[#f8f9fa] z-[102] shrink-0">
            <div className="w-8" /> {/* Spacer for centering */}
            <DrawerTitle className="text-[14px] font-medium text-center text-[#666] font-sans m-0">
              {getProjectTitle()}
            </DrawerTitle>
            <DrawerClose asChild>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <X size={16} className="text-gray-600" />
              </button>
            </DrawerClose>
          </DrawerHeader>
          
          <div id="project-drawer-content" className="flex-1 overflow-y-auto bg-[#f8f9fa]" style={{ WebkitOverflowScrolling: "touch" }}>
            <div className="bg-white mx-2 sm:mx-4 rounded-t-[24px] shadow-[0_-4px_24px_rgba(0,0,0,0.02)] min-h-full overflow-hidden">
            <div className="pb-12">
              {renderProjectContent()}
            </div>
            </div>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}
