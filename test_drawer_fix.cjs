const fs = require('fs');

let path = 'client/src/components/ProjectMobileDrawer.tsx';
let content = fs.readFileSync(path, 'utf-8');

// I am noticing the custom drawer is still not showing up correctly or it's not capturing clicks.
// Let's switch back to the very basic shadcn Dialog/Drawer using the Vaul library to ensure maximum compatibility.
// Often custom portal implementations miss subtle Safari hacks that libraries like Vaul handle internally.

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
          <div className="p-4 bg-white rounded-t-[24px] flex-1 overflow-y-auto">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-6" />
            <div className="flex items-center justify-between w-full mb-4">
              <Drawer.Title className="text-[18px] font-semibold">{getProjectTitle()}</Drawer.Title>
              <button onClick={() => onOpenChange(false)} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <X size={20} />
              </button>
            </div>
            
            <div id="project-drawer-content" className="w-full h-full pb-20">
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
