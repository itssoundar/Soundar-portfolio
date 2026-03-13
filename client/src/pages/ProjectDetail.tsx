import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white text-foreground selection:bg-primary selection:text-primary-foreground relative pt-[0px]">
      <div className="fixed top-6 left-4 md:left-8 z-50">
        <Link href="/">
          <a className="bg-white/95 backdrop-blur-md flex items-center justify-center px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 hover:bg-gray-50 transition-all group">
            <ArrowLeft className="w-5 h-5 text-[#111] group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
          </a>
        </Link>
      </div>
      {/* Top Banner section */}
      <div className="w-full bg-[#2a2456] text-white pt-32 flex flex-col items-center justify-start text-center px-6 relative overflow-hidden">
        {/* Subtle vertical striping effect for background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,1) 1px, rgba(255,255,255,1) 2px)',
            backgroundSize: '8px 100%' 
          }}
        ></div>
        
        {/* Center glowing radial gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#413280]/60 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#2a2456] to-transparent z-0 pointer-events-none"></div>

        <div className="max-w-[800px] z-10 relative mt-8 mb-12">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.2] tracking-tight text-white font-sans">
            Building a Scalable Design System for a Growing HR Platform
          </h1>
        </div>

        {/* Main Interface Image - Placed inside the banner */}
        <div className="w-full max-w-[1000px] z-10 relative mt-4">
          <div className="rounded-t-xl md:rounded-t-2xl overflow-hidden shadow-2xl">
            <img 
              src="/Case1.png" 
              alt="HR Platform Dashboard" 
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
      {/* Project Overview Section */}
      <div className="w-full bg-gray-50 pt-16 pb-16 lg:pb-24 border-b border-gray-200 relative z-20">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <div className="w-full">
            {/* Project Header */}
            <div className="mb-0">
              <h2 className="text-[28px] md:text-[34px] font-bold text-[#222] mb-6 leading-[1.3] tracking-tight font-sans">
                Building a Scalable Design System for a Growing HR<br className="hidden md:block" /> Platform
              </h2>
              <p className="text-[#444] leading-[1.8] mb-12 text-[17px] font-medium tracking-wide">
                Clovertex is a cloud organization specializing in architecting, building, automating, and managing applications
                that revolve around data processing. A modern cloud solutions provider, Clovertex brings years of cloud and
                HPC expertise to enable researchers to get productive at once. We provide a full solution tailored to specific
                research needs allowing the HPC workload to move seamlessly to the cloud.
              </p>

              {/* Project Meta Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 pb-4 border-t border-gray-200">
                <div>
                  <p className="text-[17px] text-[#111] font-semibold mb-1 tracking-tight">App Name / Client</p>
                  <p className="text-[16px] text-[#555]">Sense</p>
                </div>
                <div>
                  <p className="text-[17px] text-[#111] font-semibold mb-1 tracking-tight">Role</p>
                  <p className="text-[16px] text-[#555]">Senior Product Designer</p>
                </div>
                <div>
                  <p className="text-[17px] text-[#111] font-semibold mb-1 tracking-tight">Platform</p>
                  <p className="text-[16px] text-[#555]">Web App</p>
                </div>
                <div>
                  <p className="text-[17px] text-[#111] font-semibold mb-1 tracking-tight">Industry</p>
                  <p className="text-[16px] text-[#555]">SaaS - CRM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Case Study Content Section */}
      <div className="w-full bg-white py-16 lg:py-24 relative z-10">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">

        {/* Introduction Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Introduction</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            As the HR platform rapidly expanded its feature set, the user experience became fragmented and complex. The team faced several critical challenges:
          </p>
          
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-8">
            <ul className="list-disc pl-5 space-y-3 text-gray-700 font-medium">
              <li>Inconsistent UI patterns across different modules</li>
              <li>Redundant components slowing down development</li>
              <li>Different typography choices and spacing systems</li>
              <li>Conflicting interaction behaviors that confused users</li>
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-gray-900 font-semibold italic">
                The product worked, but it didn't feel unified.
              </p>
            </div>
          </div>
          
          <p className="text-gray-600 leading-relaxed">
            This lack of cohesion impacted user adoption and significantly increased onboarding time for new enterprise clients.
          </p>
        </div>

        {/* My Role Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">My Role</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            As the lead Product Designer, I drove the design system initiative from conception to launch:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li>Audited existing UI patterns across all products</li>
            <li>Defined the foundational visual language (color, typography, spacing)</li>
            <li>Created 150+ reusable Figma components</li>
            <li>Partnered with engineering to align on implementation structure</li>
            <li>Authored detailed documentation guidelines</li>
            <li>Facilitated adoption across 3 separate product teams</li>
          </ul>
        </div>

        {/* Problem Statement Section */}
        <div className="bg-[#1b1c3c] text-white rounded-xl p-8 md:p-10 mb-16 shadow-lg relative overflow-hidden">
          <h3 className="text-xl font-bold mb-6 text-white/90">Problem Statement</h3>
          <div className="absolute top-4 right-4 text-white/10 text-9xl font-serif leading-none font-bold select-none pointer-events-none">"</div>
          <div className="relative z-10">
            <p className="text-lg md:text-xl leading-relaxed font-medium text-white/90 mb-6">
              The platform had grown feature by feature without a unified design strategy, resulting in inconsistent UI patterns, slower development cycles, and increased cognitive load for users.
            </p>
            <div className="border-l-4 border-indigo-400 pl-4 py-1">
              <p className="text-indigo-200 font-medium">The product was scaling.</p>
              <p className="text-indigo-200 font-medium">The design language was not.</p>
            </div>
          </div>
        </div>

        {/* Problem 1 Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Problem 1: Inconsistent Patterns Across Modules</h3>
          <p className="text-gray-600 mb-6">Users found it difficult to navigate because:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li>Similar actions had different button styles and locations</li>
            <li>Data tables presented information using conflicting structures</li>
            <li>Form inputs and error states varied wildly</li>
            <li>Modal behaviors lacked standardization</li>
          </ul>

          <div className="bg-gray-100 p-4 md:p-8 rounded-xl mb-6">
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Inconsistent UI before redesign" 
                className="w-full h-auto grayscale opacity-90 mix-blend-multiply"
              />
            </div>
          </div>
          
          <div className="bg-red-50 text-red-800 p-4 rounded-lg border border-red-100">
            <p className="font-semibold mb-2">Impact:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Higher onboarding time for new users</li>
              <li>Increased support tickets</li>
              <li>Slower feature discovery</li>
              <li>Loss of brand trust</li>
            </ul>
          </div>
        </div>

        {/* Problem 2 Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Problem 2: High UI Debt & Low Reusability</h3>
          <p className="text-gray-600 mb-6">Without a centralized component library:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li>Engineers rebuilt the same components repeatedly</li>
            <li>Designers spent too much time on basic UI decisions</li>
            <li>Code base became bloated and hard to maintain</li>
            <li>Quality assurance took twice as long</li>
          </ul>

          <div className="bg-gray-100 p-4 md:p-8 rounded-xl mb-6">
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Code and UI debt examples" 
                className="w-full h-auto grayscale opacity-90 mix-blend-multiply"
              />
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Goals</h3>
          
          <div className="grid md:grid-cols-12 gap-8 mb-10">
            <div className="md:col-span-3">
              <h4 className="text-lg font-bold text-gray-900">Business Goals</h4>
            </div>
            <div className="md:col-span-9 space-y-6">
              <div>
                <p className="font-bold text-gray-900 mb-1">• Improve Product Consistency Across All Modules</p>
                <p className="text-gray-600 text-sm ml-4">Establish a cohesive brand identity and user experience across the entire platform.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Reduce Design-to-Development Cycle Time</p>
                <p className="text-gray-600 text-sm ml-4">Streamline the handoff process and empower developers to build features faster.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Improve Platform Scalability & Evolution</p>
                <p className="text-gray-600 text-sm ml-4">Create a scalable foundation that accommodates future features without breaking existing UI.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Enable Faster Feature Experimentation</p>
                <p className="text-gray-600 text-sm ml-4">Provide a robust set of building blocks allowing product teams to test ideas quickly and safely.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 pt-8 border-t border-gray-100">
            <div className="md:col-span-3">
              <h4 className="text-lg font-bold text-gray-900">User Goals</h4>
            </div>
            <div className="md:col-span-9 space-y-6">
              <div>
                <p className="font-bold text-gray-900 mb-1">• Consistent Interaction Patterns</p>
                <p className="text-gray-600 text-sm ml-4">Provide familiar UI behaviors so users can navigate the system with confidence.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Predictable Workflows</p>
                <p className="text-gray-600 text-sm ml-4">Design clear user flows that clearly communicate the next steps to complete a task.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Reduced Cognitive Load When Context Switching</p>
                <p className="text-gray-600 text-sm ml-4">Maintain visual harmony so moving between modules feels seamless and intuitive.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Faster Onboarding for New HR Admins</p>
                <p className="text-gray-600 text-sm ml-4">Simplify the interface so new users can get up to speed without extensive training.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solution 1 Section */}
        <div className="mb-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Solution 1: System Audit & Component Architecture</h3>
          
          <div className="bg-gray-100 p-4 md:p-8 rounded-xl mb-6">
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white mb-6">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="System Audit Process" 
                className="w-full h-auto grayscale opacity-90 mix-blend-multiply"
              />
            </div>
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Component Architecture" 
                className="w-full h-auto grayscale opacity-90 mix-blend-multiply"
              />
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            We conducted a full visual audit to catalog every existing UI element. We discovered 14 button variations, 8 dropdown styles, and 5 different table designs.
          </p>

          <p className="text-gray-600 font-medium mb-4">I structured the new architecture into:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li><strong>Base primitives:</strong> Typography, Colors, Spacing</li>
            <li><strong>Core components:</strong> Buttons, Inputs, Tooltips</li>
            <li><strong>Complex patterns:</strong> Data tables, Navigation, Modals</li>
          </ul>

          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg">
            <p className="font-bold text-indigo-900 mb-2">Why it works:</p>
            <ul className="list-disc pl-5 space-y-1 text-indigo-800 text-sm">
              <li>Establishes a single source of truth</li>
              <li>Reduces visual inconsistency</li>
              <li>Creates clear rules for when to use which component</li>
              <li>Builds trust and predictability for the user</li>
            </ul>
          </div>
        </div>

        {/* Solution 2 Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Solution 2: Reusable CRM Component Library</h3>
          
          <div className="bg-[#1b1c3c] p-6 md:p-10 rounded-xl mb-8 flex flex-col gap-6">
             <div className="rounded-lg overflow-hidden border border-gray-700 shadow-md bg-white">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Component Library 1" 
                className="w-full h-auto"
              />
            </div>
             <div className="rounded-lg overflow-hidden border border-gray-700 shadow-md bg-white">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Component Library 2" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            Built a comprehensive Figma component library utilizing the latest features (auto-layout, variants, properties). The library included:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li>Interactive states (hover, active, disabled)</li>
            <li>Dark/Light mode support</li>
            <li>Responsive behaviors</li>
            <li>Accessibility compliance guidelines</li>
            <li>Extensive usage documentation</li>
          </ul>

          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg">
            <p className="font-bold text-indigo-900 mb-2">Why it works:</p>
            <ul className="list-disc pl-5 space-y-1 text-indigo-800 text-sm">
              <li>Speeds up design workflow by 40%</li>
              <li>Improves developer hand-off significantly</li>
              <li>Eliminates "pixel-pushing" in day-to-day work</li>
              <li>Ensures ADA compliance across the board</li>
            </ul>
          </div>
        </div>

        {/* Solution 3 Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Solution 3: Interaction & Layout Standardization</h3>
          
          <div className="bg-gray-100 p-4 md:p-8 rounded-xl mb-8">
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Layout Standardization" 
                className="w-full h-auto grayscale opacity-90 mix-blend-multiply"
              />
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            Standardized complex layouts and interactions including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li>Page structures and max widths</li>
            <li>Global navigation patterns</li>
            <li>Data table filtering and sorting</li>
            <li>Form validation and error handling</li>
            <li>Empty states and loading skeletons</li>
          </ul>

          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg">
            <p className="font-bold text-indigo-900 mb-2">Why it works:</p>
            <ul className="list-disc pl-5 space-y-1 text-indigo-800 text-sm">
              <li>Reduces user learning curve for new features</li>
              <li>Provides a predictable experience across the platform</li>
              <li>Helps users scan information faster</li>
              <li>Minimizes destructive actions through standardized safeguards</li>
            </ul>
          </div>
        </div>

        {/* What I Would Have Done Next Section */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">What I Would Have Done Next</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            While the core system was successfully launched and adopted, a design system is never truly "done". If I had another 6 months on the project, I would have prioritized the following initiatives:
          </p>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">1. Implement Design System Analytics Metrics</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Currently, we measure success qualitatively through developer and designer feedback. I would implement telemetry analytics within our React components to track actual usage rates. Knowing which components are heavily used vs. rarely used would inform our prioritization roadmap and help deprecate unused patterns.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">2. Build Automated Design Validations</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Integrate tooling directly into the CI/CD pipeline that flags UI regressions. By introducing visual regression testing (like Percy or Chromatic), we could automatically catch UI inconsistencies before they hit staging, ensuring the coded application perfectly matches the design tokens.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">3. Formalize the Component Contribution Process</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Establish a clear, documented governance model for when and how product teams can propose new components or patterns back to the core system. This would transform the system from a top-down mandate to a community-driven ecosystem.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">4. Comprehensive Accessibility Testing</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                While color contrast and basic ARIA roles were handled, I would conduct deep accessibility audits using screen readers (VoiceOver/JAWS) and keyboard navigation across all complex components (like data tables and multi-select dropdowns) to ensure strict WCAG 2.1 AA compliance.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">5. Expand Theming System for White-labeling</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                As the company explores enterprise white-labeling, the design tokens architecture needs to be refactored to support deep theme customization (beyond just light/dark mode) allowing enterprise clients to inject their own brand colors and typography seamlessly.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Summary Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Impact Summary</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-4xl font-bold mb-4">30%</h4>
              <p className="font-semibold text-lg mb-2 leading-tight">Faster Design-to-Development Turnaround</p>
              <p className="text-white/70 text-sm">Reduced UI bugs during QA significantly because engineers were using pre-built, tested components rather than custom building each time.</p>
            </div>
            
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-4xl font-bold mb-4">25%</h4>
              <p className="font-semibold text-lg mb-2 leading-tight">Reduction in UI Inconsistency Bugs</p>
              <p className="text-white/70 text-sm">Streamlined QA processes with fewer visual regressions reported across different modules.</p>
            </div>
            
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-4xl font-bold mb-4">40+</h4>
              <p className="font-semibold text-lg mb-2 leading-tight">Reduction in Deprecated Design Assets</p>
              <p className="text-white/70 text-sm">Cleaned up legacy files and consolidated components, creating a leaner and more performant design workspace.</p>
            </div>
          </div>
          
          <p className="text-gray-600 mt-6 italic text-center text-sm">
            *Metrics gathered during the 6 months post-launch via engineering velocity tracking and QA ticket volume analysis.
          </p>
        </div>

        {/* Closing Reflection */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Closing Reflection</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            This project taught me a valuable lesson building UI systems:
          </p>
          <p className="text-gray-800 font-medium leading-relaxed mb-6 italic pl-4 border-l-4 border-gray-300">
            A design system is only as good as its adoption rate among engineers and PMs.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The technical execution (Figma setup, React props, CSS architecture) is only half the battle. The other half is advocacy, education, support, and building trust with the people who will use it every day.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The system was a success because we treated it like a product itself.
          </p>
        </div>
        
        {/* Next Project Footer */}
        <div className="pt-12 border-t border-gray-200 flex justify-between items-center mt-20">
          <a href="/" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </a>
          
          <a href="#" className="text-gray-900 hover:text-indigo-600 font-medium flex flex-col items-end transition-colors group">
            <span className="text-xs text-gray-500 mb-1 group-hover:text-indigo-400 transition-colors">Next Project</span>
            <span className="flex items-center gap-2">
              AI Chatbot Interface
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
      </div>
      <Footer />
    </main>
  );
}