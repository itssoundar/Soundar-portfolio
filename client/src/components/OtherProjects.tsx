import { Link } from "wouter";

const allProjects = [
  {
    id: "crm-ai",
    title: "AI-Agent Builder",
    description: "Transforming CRM workflows with an AI execution layer.",
    image: "/C1new.png?v=1",
    link: "/project/crm-ai",
    imageBg: "bg-[#eef2fc]"
  },
  {
    id: "design-system",
    title: "Genesis Design System",
    description: "Building scalable components to unify UI across CRM modules.",
    image: "/C2new.png?v=1",
    link: "/project/design-system",
    imageBg: "bg-[#f5eefc]"
  },
  {
    id: "conversational-b2b",
    title: "Dashboard Builder",
    description: "Building CRM analytics and a centralized dashboard experience.",
    image: "/C3.png",
    link: "/project/conversational-b2b",
    imageBg: "bg-[#eefcf5]"
  }
];

export function OtherProjects({ currentProjectId }: { currentProjectId: string }) {
  const otherProjects = allProjects.filter(p => p.id !== currentProjectId);

  return (
    <div className="w-full bg-[#FAFAFA] py-16 lg:py-24 border-t border-gray-100 mt-20">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8">
        <h3 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-8 md:mb-12 font-sans">Other Projects</h3>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {otherProjects.map(project => (
            <Link 
              key={project.id} 
              href={project.link}
              className="group cursor-pointer block"
            >
                <div className={`rounded-[20px] overflow-hidden mb-6 aspect-[16/10] relative ${project.imageBg}`}>
                  <div 
                    className="absolute inset-0 bg-cover bg-no-repeat bg-center transition-transform duration-500 group-hover:scale-[1.03]" 
                    style={{ backgroundImage: `url(${project.image})` }} 
                  />
                </div>
                <h4 className="text-[18px] md:text-[20px] font-bold text-gray-900 mb-2 font-sans">{project.title}</h4>
                <p className="text-[16px] md:text-[18px] text-gray-500 leading-relaxed font-medium">{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
