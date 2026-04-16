import { useEffect } from "react";
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

  // Reset scroll position when drawer opens
  useEffect(() => {
    if (isOpen) {
      const drawerContent = document.getElementById('project-drawer-content');
      if (drawerContent) {
        drawerContent.scrollTop = 0;
      }
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
    <Drawer.Root open={isOpen} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-[99999]" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[24px] h-[92vh] mt-24 fixed bottom-0 left-0 right-0 z-[100000] outline-none">
          
          {/* Sticky Header Section */}
          <div className="bg-white rounded-t-[24px] px-4 pt-4 pb-2 z-10 border-b border-gray-100 flex-shrink-0 relative">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-4" />
            <div className="flex items-center justify-between w-full">
              <Drawer.Title className="text-[18px] font-semibold text-[#111]">{getProjectTitle()}</Drawer.Title>
              <button onClick={() => onOpenChange(false)} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <X size={20} className="text-[#444]" />
              </button>
            </div>
          </div>
          
          {/* Scrollable Content Section */}
          <div className="flex-1 overflow-y-auto px-4 pb-20">
            <div id="project-drawer-content" className="w-full h-full pt-4">
              {renderProjectContent()}
            </div>
          </div>
          
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
