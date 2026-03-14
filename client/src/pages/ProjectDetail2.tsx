import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

import Case1 from "@assets/Case1.png";
import { OtherProjects } from "@/components/OtherProjects";

export default function ProjectDetail2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white text-foreground selection:bg-primary selection:text-primary-foreground relative pt-[0px]">
      <div className="fixed top-6 left-4 md:left-8 z-50">
        <Link href="/">
<span className="bg-white/95 backdrop-blur-md flex items-center justify-center px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-black hover:bg-black transition-all group mt-[20px] ml-[40px]">
            <ArrowLeft className="w-5 h-5 text-black group-hover:text-white group-hover:-translate-x-1 transition-all" strokeWidth={2.5} />
          </span>
</Link>
      </div>
      {/* Top Banner section */}
      <div 
        className="w-full text-white flex flex-col items-center justify-start text-center px-6 relative overflow-hidden bg-cover bg-center bg-no-repeat pt-[80px]"
        style={{ backgroundImage: "url('/Case_hero.png')" }}
      >
        <div className="max-w-[800px] z-10 relative mt-8 mb-12">
          <h1 className="text-[40px] md:text-[56px] font-semibold leading-[1.2] tracking-tight text-white font-sans">
            Building a Scalable Design System for a Growing HR Platform
          </h1>
        </div>

        {/* Main Interface Image - Placed inside the banner */}
        <div className="w-full max-w-[1000px] z-10 relative mt-4">
          <div className="rounded-t-xl md:rounded-t-2xl overflow-hidden shadow-2xl">
            <img 
              src={Case1} 
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
              <h2 className="text-[32px] md:text-[40px] font-bold text-[#222] mb-6 leading-[1.3] tracking-tight font-sans">
                Building a Scalable Design System for a Growing HR Platform
              </h2>
              <p className="text-[#444] leading-[1.8] mb-12 text-[16px] md:text-[18px] font-medium tracking-wide">
                Sense is an AI-powered recruiting platform that helps staffing agencies and enterprise teams manage hiring pipelines, automation, and analytics within a unified CRM.
                <br /><br />
                As the platform expanded across multiple modules, inconsistencies in UI patterns and components began to emerge. This project focused on revamping the CRM using the Genesis Design System to create a scalable and consistent product foundation.
              </p>

              {/* Project Meta Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 pb-4 border-t border-gray-200">
                <div>
                  <p className="text-[16px] md:text-[18px] text-[#111] font-semibold mb-1 tracking-tight">App Name / Client</p>
                  <p className="text-[16px] md:text-[18px] text-[#555]">Sense</p>
                </div>
                <div>
                  <p className="text-[16px] md:text-[18px] text-[#111] font-semibold mb-1 tracking-tight">Role</p>
                  <p className="text-[16px] md:text-[18px] text-[#555]">Senior Product Designer</p>
                </div>
                <div>
                  <p className="text-[16px] md:text-[18px] text-[#111] font-semibold mb-1 tracking-tight">Platform</p>
                  <p className="text-[16px] md:text-[18px] text-[#555]">Web App</p>
                </div>
                <div>
                  <p className="text-[16px] md:text-[18px] text-[#111] font-semibold mb-1 tracking-tight">Industry</p>
                  <p className="text-[16px] md:text-[18px] text-[#555]">SaaS - CRM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Case Study Content Section */}
      <div className="w-full bg-white pt-16 lg:pt-24 pb-0 relative z-10">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">

        {/* Introduction Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-6">Introduction</h3>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-6">
            As the CRM evolved, feature velocity increased — but visual consistency and interaction logic began fragmenting.
          </p>
          
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-8">
            <p className="text-[16px] md:text-[18px] text-gray-900 font-medium mb-4">Multiple modules had:</p>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 font-medium">
              <li>Inconsistent UI patterns</li>
              <li>Redundant components</li>
              <li>Different spacing and hierarchy logic</li>
              <li>Conflicting interaction behaviors</li>
              <li>The system worked, but it didn't feel unified.</li>
            </ul>
          </div>
          
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
            This project focused on revamping the CRM using the Genesis Design System — not just as a visual refresh, but as a foundational system redesign.
          </p>
        </div>

        {/* My Role Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-6">My Role</h3>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-4">
            As a Senior Product Designer, I led the CRM modernisation initiative using Genesis.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-4">I initiated with:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li>Audited existing UI patterns across modules</li>
            <li>Defined component architecture and token structure</li>
            <li>Created reusable component patterns</li>
            <li>Partnered with engineering to align on scalable implementation</li>
            <li>Reduced UI debt and inconsistencies</li>
            <li>Established governance guidelines for future features</li>
          </ul>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
            This wasn't cosmetic work, it was system stabilization.
          </p>
        </div>

        {/* Problem Statement Section */}
        <div className="bg-[#1b1c3c] text-white rounded-xl p-8 md:p-10 mb-16 shadow-lg relative overflow-hidden">
          <h3 className="text-[22px] md:text-[28px] font-bold mb-6 text-white/90">Problem Statement</h3>
          <div className="absolute top-4 right-4 text-white/10 text-9xl font-serif leading-none font-bold select-none pointer-events-none">"</div>
          <div className="relative z-10">
            <p className="text-[16px] md:text-[20px] leading-relaxed font-medium text-white/90 mb-6">
              The CRM had grown feature-by-feature without a unified design system, resulting in inconsistent UI patterns, slower development cycles, and increased cognitive load for users.
            </p>
            <div className="border-l-4 border-indigo-400 pl-4 py-1">
              <p className="text-[16px] md:text-[18px] text-indigo-200 font-medium">The product was scaling.</p>
              <p className="text-[16px] md:text-[18px] text-indigo-200 font-medium mt-2">The design language was not.</p>
            </div>
          </div>
        </div>

        {/* Problem 1 Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-6">Problem 1: Inconsistent Patterns Across Modules</h3>
          <p className="text-[16px] md:text-[18px] text-gray-600 mb-6">Each module evolved independently.</p>
          <p className="text-[16px] md:text-[18px] text-gray-900 font-medium mb-4">Examples:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li>Buttons had varying sizes and hierarchy rules</li>
            <li>Form layouts differed between hiring and analytics modules</li>
            <li>Table interactions were inconsistent</li>
            <li>Modal behaviors varied across flows</li>
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
          
          <div className="mt-8">
            <p className="text-[16px] md:text-[18px] font-semibold text-gray-900 mb-2">Impact:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Higher onboarding time for recruiters</li>
              <li>Increased QA issues</li>
              <li>Slower design-to-dev cycles</li>
              <li>Lack of brand cohesion</li>
            </ul>
          </div>
        </div>

        {/* Problem 2 Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-6">Problem 2: High UI Debt & Low Reusability</h3>
          <p className="text-[16px] md:text-[18px] text-gray-600 mb-6">Without a structured component system:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li>Designers recreated patterns repeatedly</li>
            <li>Engineers implemented similar components differently</li>
            <li>Small UI changes required large refactors</li>
            <li>Feature delivery slowed over time</li>
          </ul>

          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
            The absence of a scalable foundation was increasing long-term cost.
          </p>
        </div>

        {/* Goals Section */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h3 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-8">Goals</h3>
          
          <div className="grid md:grid-cols-12 gap-8 mb-10">
            <div className="md:col-span-3">
              <h4 className="text-lg font-bold text-gray-900">Business Goals</h4>
            </div>
            <div className="md:col-span-9 space-y-6">
              <div>
                <p className="text-[16px] md:text-[18px] font-bold text-gray-900 mb-1">• Improve Product Consistency Across CRM Modules</p>
                <p className="text-gray-600 text-[16px] md:text-[18px] ml-4">Ensure a unified design language and interaction model across all CRM surfaces.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold text-gray-900 mb-1">• Reduce Design-to-Development Cycle Time</p>
                <p className="text-gray-600 text-[16px] md:text-[18px] ml-4">Streamline the handoff process and reusable components to accelerate delivery.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold text-gray-900 mb-1">• Improve Platform Stickiness & Retention</p>
                <p className="text-gray-600 text-[16px] md:text-[18px] ml-4">Introduce standardized components and patterns to reduce inconsistencies and cognitive load.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold text-gray-900 mb-1">• Enable Faster Feature Experimentation</p>
                <p className="text-gray-600 text-[16px] md:text-[18px] ml-4">Create a scalable system that allows teams to test and iterate on new features quickly.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 pt-8 border-t border-gray-100">
            <div className="md:col-span-3">
              <h4 className="text-lg font-bold text-gray-900">User Goals</h4>
            </div>
            <div className="md:col-span-9 space-y-6">
              <div>
                <p className="text-[16px] md:text-[18px] font-bold text-gray-900 mb-1">• Consistent Interaction Patterns</p>
                <p className="text-gray-600 text-[16px] md:text-[18px] ml-4">Provide familiar UI behaviors so users can navigate the system with confidence.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold text-gray-900 mb-1">• Predictable Workflows</p>
                <p className="text-gray-600 text-[16px] md:text-[18px] ml-4">Design structured flows that reduce friction and make task completion easier.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold text-gray-900 mb-1">• Reduced Cognitive Switching Across Modules</p>
                <p className="text-gray-600 text-[16px] md:text-[18px] ml-4">Maintain similar layouts and behaviors across CRM areas to minimize mental load.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold text-gray-900 mb-1">• Faster Onboarding for New Recruiters</p>
                <p className="text-gray-600 text-[16px] md:text-[18px] ml-4">Simplify the interface so new users can quickly learn and start using the platform.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solution 1 Section */}
        <div className="mb-16 pt-12 border-t border-gray-200">
          <h3 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-8">Solution 1: System Audit & Component Architecture</h3>
          
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

          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-6">
            We conducted a full UI audit across the CRM, identifying duplicated components, inconsistent patterns, and deviation from Genesis standards.
          </p>

          <p className="text-[16px] md:text-[18px] text-gray-600 font-medium mb-4">I redefined the component hierarchy:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li><strong>Base components</strong> (Buttons, Inputs, Toggles)</li>
            <li><strong>Composite components</strong> (Forms, Tables, Cards)</li>
            <li><strong>Complex modules</strong> (Workflow builders, Analytics layouts)</li>
          </ul>

          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-8">
            We aligned everything to Genesis token structure (spacing, typography, color, states).
          </p>

          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg">
            <p className="text-[16px] md:text-[18px] font-bold text-indigo-900 mb-2">Why it's better:</p>
            <ul className="list-disc pl-5 space-y-1 text-indigo-800 text-sm">
              <li>Eliminated redundant UI patterns</li>
              <li>Reduced visual inconsistency</li>
              <li>Created single source of truth for components</li>
              <li>Improved scalability for future modules</li>
            </ul>
          </div>
        </div>

        {/* Solution 2 Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-8">Solution 2: Reusable CRM Component Library</h3>
          
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

          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-4">
            I built a centralized CRM component library aligned with Genesis, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li>Standardized form systems</li>
            <li>Unified table design</li>
            <li>Status indicators</li>
            <li>Modal and drawer patterns</li>
            <li>Interaction states (hover, focus, error, loading)</li>
          </ul>

          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-8">
            Each component included clear usage guidelines and edge cases.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg">
            <p className="text-[16px] md:text-[18px] font-bold text-indigo-900 mb-2">Why it's better:</p>
            <ul className="list-disc pl-5 space-y-1 text-indigo-800 text-sm">
              <li>Reduced design redundancy by ~40%</li>
              <li>Improved design-to-dev alignment</li>
              <li>Increased implementation consistency</li>
              <li>Accelerated feature design cycles</li>
            </ul>
          </div>
        </div>

        {/* Solution 3 Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-8">Solution 3: Interaction & Layout Standardization</h3>
          
          <div className="bg-gray-100 p-4 md:p-8 rounded-xl mb-8">
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Layout Standardization" 
                className="w-full h-auto grayscale opacity-90 mix-blend-multiply"
              />
            </div>
          </div>

          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-4">
            Beyond visuals, I standardized:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li>Grid systems</li>
            <li>Spacing logic</li>
            <li>Responsive behavior</li>
            <li>Navigation patterns</li>
            <li>AI module integration patterns</li>
          </ul>

          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-8">
            We aligned complex modules (AI, Analytics, Workflows) to consistent layout logic.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg">
            <p className="text-[16px] md:text-[18px] font-bold text-indigo-900 mb-2">Why it's better:</p>
            <ul className="list-disc pl-5 space-y-1 text-indigo-800 text-sm">
              <li>Reduced cognitive load across modules</li>
              <li>Improved onboarding experience for new recruiters</li>
              <li>Reduced UI-related QA issues by ~28%</li>
              <li>Enabled scalable integration of new AI features</li>
            </ul>
          </div>
        </div>

        {/* What I Would Have Done Next Section */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h3 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-6">What I Would Have Done Next</h3>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-8">
            Although Genesis significantly improved product consistency and development efficiency, the next phase would focus on measuring adoption, strengthening governance, and expanding the system's impact across the platform.
          </p>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">1. Implement Design System Adoption Metrics</h4>
              <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
                To understand how effectively Genesis is being used across teams, I would introduce adoption metrics that track usage across products and modules. These insights would help identify gaps in adoption and areas where teams might still rely on custom implementations.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">2. Build Component Usage Analytics</h4>
              <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
                I would introduce analytics to measure how frequently design system components are used and where deviations occur. This would help ensure teams consistently use standardized components and highlight opportunities to improve the system.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">3. Formalize Governance Review Process</h4>
              <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
                Establishing a governance model would ensure that new patterns and components follow consistent design principles. Regular reviews would help maintain quality and prevent fragmentation as the system scales.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">4. Document Contribution Model</h4>
              <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
                A clear contribution process for designers and engineers would enable teams to propose improvements to Genesis while maintaining system integrity. This would encourage collaboration while ensuring changes align with the design system standards.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">5. Expand Genesis Across AI-Driven Modules</h4>
              <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
                As the CRM evolves, integrating Genesis into AI-powered modules would ensure the same consistency and usability across emerging product capabilities, strengthening the overall platform experience.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Summary Section */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h3 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-6">Impact Summary</h3>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-2xl font-bold mb-2">30%</h4>
              <p className="font-semibold text-[16px] md:text-[20px] mb-4 leading-tight">Faster design-to-development turnaround</p>
              <p className="text-white/80 text-[16px] md:text-[18px]">Improved design system consistency helped teams ship features faster and reduced handoff friction between design and engineering.</p>
            </div>
            
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-2xl font-bold mb-2">28%</h4>
              <p className="font-semibold text-[16px] md:text-[20px] mb-4 leading-tight">Reduction in UI inconsistency bugs</p>
              <p className="text-white/80 text-[16px] md:text-[18px]">Standardized components and interaction patterns reduced UI-related issues across CRM modules.</p>
            </div>
            
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-2xl font-bold mb-2">40%+</h4>
              <p className="font-semibold text-[16px] md:text-[20px] mb-4 leading-tight">Reduction in duplicated design work</p>
              <p className="text-white/80 text-[16px] md:text-[18px]">Shared design patterns eliminated redundant work across teams and improved design efficiency.</p>
            </div>
          </div>
          
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-16">
            More importantly, The CRM now feels like one cohesive product, not multiple stitched-together modules.
          </p>

          {/* Closing Reflection */}
          <div className="border-t border-gray-200 pt-12 mb-16">
            <h3 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-6">Closing Reflection</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>This project wasn't about adding AI to search.</p>
              <p>It was about redesigning the interaction model of an enterprise CRM.</p>
              <p>As a Senior Product Designer, I drove the shift from configuration-heavy workflows to intent-driven execution balancing speed, control, and trust in AI systems.</p>
              <p>The result was not just feature improvement.</p>
              <p>It was a mental model transformation.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <OtherProjects currentProjectId="design-system" />
      <Footer />
    </main>
  );
}
