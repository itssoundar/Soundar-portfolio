import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

import Case1 from "@assets/Case1.png";

export default function ProjectDetail1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white text-foreground selection:bg-primary selection:text-primary-foreground relative pt-[0px]">
      <div className="fixed top-6 left-4 md:left-8 z-50">
        <Link href="/">
          <a className="bg-white/95 backdrop-blur-md flex items-center justify-center px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-black hover:bg-black transition-all group mt-[20px] ml-[40px]">
            <ArrowLeft className="w-5 h-5 text-black group-hover:text-white group-hover:-translate-x-1 transition-all" strokeWidth={2.5} />
          </a>
        </Link>
      </div>
      {/* Top Banner section */}
      <div 
        className="w-full text-white flex flex-col items-center justify-start text-center px-6 relative overflow-hidden bg-cover bg-center bg-no-repeat pt-[80px]"
        style={{ backgroundImage: "url('/Case_hero.png')" }}
      >
        <div className="max-w-[800px] z-10 relative mt-8 mb-12">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.2] tracking-tight text-white font-sans">From Search to Action: Turning HR Intent into Intelligent Execution</h1>
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
              <h2 className="text-[28px] md:text-[34px] font-bold text-[#222] mb-6 leading-[1.3] tracking-tight font-sans">
                From Search to Action: Turning HR Intent into Intelligent Execution
              </h2>
              <div className="text-[#444] leading-[1.8] mb-12 text-[17px] font-medium tracking-wide space-y-4">
                <p>Sense is an AI-driven HR recruitment platform. Staffing agencies use Sense to automate communication, generate workflows, and manage candidates at scale.</p>
                <p>As the CRM includes countless modules to configure workflows and automation execution. This process demands time and supported logic could sometimes be a difficult to configure for basic use cases like a simple text or email flows.</p>
              </div>

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
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#111] mb-6 tracking-tight">Introduction</h2>
          <p className="text-[#444] text-[17px] leading-[1.8] mb-6">
            Sense is focused on a range of HR solutions. The managed integration process can be tedious and overwhelming and basic intent is lost.
          </p>
          <p className="text-[#444] text-[17px] leading-[1.8] mb-6">
            HR Admins struggle because of complex modules doesn't operate on intent. It operates on configuration.
          </p>
          
          <div className="bg-[#f8f9fa] border-l-4 border-[#111] py-4 px-6 mb-8">
            <ul className="space-y-2 text-[#444] font-medium text-[17px]">
              <li>"Why is database terminology in steps?"</li>
              <li>"What are my field filters?"</li>
            </ul>
          </div>
          
          <p className="text-[#444] text-[17px] leading-[1.8]">
            This causes recruiters using the ATS to be frustrated because they are dealing with a configuration UI instead of making candidate hires.
          </p>
        </div>

        {/* My Role Section */}
        <div className="mb-16">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#111] mb-6 tracking-tight">My Role</h2>
          <p className="text-[#444] text-[17px] leading-[1.8] mb-4">
            As a Senior Product Designer, I led the product to re-evaluate the heavy enterprise strategy. I defined the AI-Agent UI and also designed the conversational flow layout and validation process in the new AI Architecture.
          </p>
          <p className="text-[#444] text-[17px] leading-[1.8]">
            I created wireframes and high-fidelity UI to help the engineering team conceptually build these models across ATS contexts — enhancing the search filters and validation processes.
          </p>
        </div>

        {/* Problem Statement Section */}
        <div className="bg-[#1b1c3c] text-white rounded-2xl p-8 md:p-12 mb-20 shadow-lg relative overflow-hidden">
          <h2 className="text-[24px] md:text-[28px] font-bold mb-8 text-white/90 tracking-tight">Problem Statement</h2>
          <div className="absolute top-4 right-6 text-white/5 text-[120px] font-serif leading-none font-bold select-none pointer-events-none">"</div>
          <div className="relative z-10">
            <p className="text-[18px] md:text-[20px] leading-[1.7] font-medium text-white/90 mb-8">
              The CRM is structured around instances and modules, not HR intent. A CRM is a guide, not execution.
            </p>
            <div className="border-l-4 border-indigo-400 pl-5 py-2">
              <p className="text-indigo-100 text-[17px] leading-[1.6]">This paradigm creates cognitive overload, breaks dependency, and slows execution - directly hurting people interactions.</p>
            </div>
          </div>
        </div>

        {/* Problem 1 Section */}
        <div className="mb-16">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#111] mb-6 tracking-tight">Problem 1: High Setup Friction & Low AI Adoption</h2>
          <ul className="space-y-3 text-[#444] text-[17px] leading-[1.6] mb-10 font-normal">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111] mt-2.5 flex-shrink-0"></span>
              <span>Complex workflows include tool-tips and legends.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111] mt-2.5 flex-shrink-0"></span>
              <span>UX is redundant and breaks anytime users refresh.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111] mt-2.5 flex-shrink-0"></span>
              <span>Setup is hard to configure without a long workflow.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111] mt-2.5 flex-shrink-0"></span>
              <span>In-product adoption dropped to 18%</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111] mt-2.5 flex-shrink-0"></span>
              <span>Frustration leads to low utilization of the application.</span>
            </li>
          </ul>

          <div className="mb-6">
             <div className="rounded-[16px] overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
              <img 
                src="/Case1.png" 
                alt="Recruiters UI" 
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-[14px] text-gray-500 mt-4 font-medium">Recruiters UI</p>
            <p className="text-[14px] text-gray-500 mt-1">The input bar for actions.</p>
            <p className="text-[14px] text-gray-500 mt-1">The system generating filters without bringing data.</p>
          </div>
        </div>

        {/* Problem 2 Section */}
        <div className="mb-20">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#111] mb-6 tracking-tight">Problem 2: Trust Gap in Automation</h2>
          <p className="text-[#444] text-[17px] mb-6">Low trust in AI generated suggestions.</p>
          <ul className="space-y-3 text-[#444] text-[17px] leading-[1.6] mb-10 font-normal">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111] mt-2.5 flex-shrink-0"></span>
              <span>Users require full logs.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111] mt-2.5 flex-shrink-0"></span>
              <span>Hard to see what happens.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111] mt-2.5 flex-shrink-0"></span>
              <span>Needs human in the loop controls.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111] mt-2.5 flex-shrink-0"></span>
              <span>The lack of explainable model steps.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111] mt-2.5 flex-shrink-0"></span>
              <span>The UI is unreliable and breaks often.</span>
            </li>
          </ul>

          <div className="mb-6">
             <div className="rounded-[16px] overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
              <img 
                src="/Case1.png" 
                alt="The user challenges the AI" 
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-[14px] text-gray-500 mt-4">The user challenges the AI and refuses to execute the task.</p>
          </div>
        </div>

        {/* Goals Section */}
        <div className="mb-20">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#111] mb-10 tracking-tight">Goals</h2>
          
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-3">
              <h4 className="text-[18px] font-bold text-[#111]">Business Goals</h4>
            </div>
            <div className="md:col-span-9 space-y-8">
              <div>
                <p className="font-bold text-[#111] mb-2 text-[17px]">• Increase Feature Adoption</p>
                <p className="text-[#555] text-[16px] leading-[1.6] ml-4">Make AI-Agents an intuitive upgrade from manual workflows, driving product stickiness and ARR.</p>
              </div>
              <div>
                <p className="font-bold text-[#111] mb-2 text-[17px]">• Reduce Product Dependency</p>
                <p className="text-[#555] text-[16px] leading-[1.6] ml-4">Streamline the user journey allowing users to manage configurations, rule sets filters without relying heavily on support.</p>
              </div>
              <div>
                <p className="font-bold text-[#111] mb-2 text-[17px]">• Improve Platform Operations & Retention</p>
                <p className="text-[#555] text-[16px] leading-[1.6] ml-4">Create an API architecture allowing third-party tools to communicate with Sense. This is an added integration layer and MRR.</p>
              </div>
              <div>
                <p className="font-bold text-[#111] mb-2 text-[17px]">• Demonstrate Relevance of AI</p>
                <p className="text-[#555] text-[16px] leading-[1.6] ml-4">Showcase the value proposition of AI over the traditional manual configurations. Bring the AI - ATS - Candidate data into one.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 pt-10 border-t border-gray-100">
            <div className="md:col-span-3">
              <h4 className="text-[18px] font-bold text-[#111]">User Goals</h4>
            </div>
            <div className="md:col-span-9 space-y-8">
              <div>
                <p className="font-bold text-[#111] mb-2 text-[17px]">• Short ATS Navigation — Intuitive Making</p>
                <p className="text-[#555] text-[16px] leading-[1.6] ml-4">Reduce time spent navigating complex routing tables and logic and focus on simple task actions.</p>
              </div>
              <div>
                <p className="font-bold text-[#111] mb-2 text-[17px]">• Intent Workflow Creation</p>
                <p className="text-[#555] text-[16px] leading-[1.6] ml-4">Allow users to generate workflows quickly based on what you ask them to do from chat.</p>
              </div>
              <div>
                <p className="font-bold text-[#111] mb-2 text-[17px]">• Visual Confidence with Natural Language</p>
                <p className="text-[#555] text-[16px] leading-[1.6] ml-4">Enable users to generate analytics dashboards through conversational prompts.</p>
              </div>
              <div>
                <p className="font-bold text-[#111] mb-2 text-[17px]">• Increase Confidence in AI Insights</p>
                <p className="text-[#555] text-[16px] leading-[1.6] ml-4">Provide transparent, explainable AI logs and human-in-the-loop validation for executing actions.</p>
              </div>
              <div>
                <p className="font-bold text-[#111] mb-2 text-[17px]">• Multiple Choices Layout & Actions</p>
                <p className="text-[#555] text-[16px] leading-[1.6] ml-4">Let recruiters pick from layout of generated selections actions in UI state.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solution 1 Section */}
        <div className="mb-20">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#111] mb-6 tracking-tight">Solution 1: Conversational AI Interface</h2>
          
          <p className="text-[#444] text-[17px] leading-[1.8] mb-6">
            The new layout introduces an AI assistant that intercepts user intents over the raw CRM, limited to navigation actions and simply translates user problems to structured language.
          </p>

          <ul className="space-y-3 text-[#444] text-[17px] leading-[1.6] mb-8 font-normal">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111] mt-2.5 flex-shrink-0"></span>
              <span>Users can input simple text.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111] mt-2.5 flex-shrink-0"></span>
              <span>Creates a visual state for quick filtering suggestions.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111] mt-2.5 flex-shrink-0"></span>
              <span>Keeps context of what stage in the funnel you are.</span>
            </li>
          </ul>

          <p className="text-[15px] text-gray-500 mb-8 italic">User inputs simple tasks. AI suggests variables based on input structure.</p>

          <div className="mb-8">
             <div className="rounded-[16px] overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
              <img 
                src="/Case1.png" 
                alt="Conversational AI Interface" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="mb-8">
            <p className="font-bold text-[#111] mb-4 text-[17px]">Why it works:</p>
            <ul className="space-y-3 text-[#444] text-[16px] leading-[1.6]">
              <li className="flex items-start gap-3">
                <span className="text-[#111] font-bold mt-0.5">-</span>
                <span>Provides a very clear intent to action.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#111] font-bold mt-0.5">-</span>
                <span>Takes less time to configure.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#111] font-bold mt-0.5">-</span>
                <span>Makes an effort to know the ATS via conversational filters.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#111] font-bold mt-0.5">-</span>
                <span>Allows flexing into fixed configuration UI manually.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Solution 2 Section */}
        <div className="mb-20">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#111] mb-6 tracking-tight">Solution 2: AI Workflow Auto-Builder</h2>
          
          <p className="text-[#444] text-[17px] leading-[1.8] mb-4">
            The auto-builder structure generates discovery agency jobs, target criteria for job orders, and candidates from a set parameters generated in a detailed project triggers, rules, and assignments.
          </p>
          <p className="text-[#444] text-[17px] leading-[1.8] mb-8">
            Instead of configuring fields manually, users simply verify AI created variables and confirm execution.
          </p>

          <div className="mb-10">
            <p className="font-bold text-[#111] mb-4 text-[17px]">Why it works:</p>
            <ul className="space-y-3 text-[#444] text-[16px] leading-[1.6]">
              <li className="flex items-start gap-3">
                <span className="text-[#111] font-bold mt-0.5">-</span>
                <span>Removes need for UI configurations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#111] font-bold mt-0.5">-</span>
                <span>Eliminates lengthy 8-10 step processes for execution.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#111] font-bold mt-0.5">-</span>
                <span>Converts HR terms to system terms via NLP.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#111] font-bold mt-0.5">-</span>
                <span>Encourages human check and balances in logic flow.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 mb-8">
             <div className="rounded-[16px] overflow-hidden shadow-sm border border-gray-200 bg-gray-50">
              <img 
                src="/Case1.png" 
                alt="AI Workflow Auto-Builder 1" 
                className="w-full h-auto object-cover"
              />
            </div>
             <div className="rounded-[16px] overflow-hidden shadow-sm border border-gray-200 bg-gray-50">
              <img 
                src="/Case1.png" 
                alt="AI Workflow Auto-Builder 2" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Solution 3 Section */}
        <div className="mb-20">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#111] mb-6 tracking-tight">Solution 3: AI-Generated CRM Analytics with Human-in-the-Loop Approval</h2>
          
          <p className="text-[#444] text-[17px] leading-[1.8] mb-4">
            By replacing the view-filter split with an action layout, we give the recruiter a more direct approach to automation execution and simply requires them to review the logic and confirm.
          </p>
          <p className="text-[#444] text-[17px] leading-[1.8] mb-6">
            The HR admin acts as an approver rather than a builder. The layout reduces configuration complexity and limits error.
          </p>

          <p className="text-[15px] text-gray-500 mb-8 italic">Note: The UI requires explicit confirmation execution.</p>

          <div className="mb-8">
             <div className="rounded-[16px] overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
              <img 
                src="/Case1.png" 
                alt="AI-Generated CRM Analytics" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="font-bold text-[#111] mb-4 text-[17px]">Why it works:</p>
            <ul className="space-y-3 text-[#444] text-[16px] leading-[1.6]">
              <li className="flex items-start gap-3">
                <span className="text-[#111] font-bold mt-0.5">-</span>
                <span>Retains developer control logic but human in loop execution.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#111] font-bold mt-0.5">-</span>
                <span>Clearly shows steps taken from prompt.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#111] font-bold mt-0.5">-</span>
                <span>Allows for visual record auditing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#111] font-bold mt-0.5">-</span>
                <span>Prevents blind log reliance causing severe bad updates.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#111] font-bold mt-0.5">-</span>
                <span>Builds trust via transparency over time.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* What I Would Have Done Next Section */}
        <div className="mb-20 pt-16 border-t border-gray-200">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#111] mb-8 tracking-tight">What I Would Have Done Next</h2>
          <p className="text-[#444] text-[17px] leading-[1.8] mb-10">
            Although the MVP showed promising results for execution capabilities. We had several limitations in measuring their contextual use and mapping out full UI functionality states.
          </p>
          
          <div className="space-y-10">
            <div>
              <h4 className="text-[18px] font-bold text-[#111] mb-3">1. More Error Exception — Context Sharing</h4>
              <p className="text-[#555] text-[16px] leading-[1.7]">
                As expected the complex data state of generated workflows, a visual error breakdown agenda limit is hard. Reducing overall reliance on manual adjustments, mapping what actions lead to failures gives a better state and defines a threshold point to limit hallucination.
              </p>
            </div>
            
            <div>
              <h4 className="text-[18px] font-bold text-[#111] mb-3">2. Fluid Layout in the Data View</h4>
              <p className="text-[#555] text-[16px] leading-[1.7]">
                I would replace the standard left side data tables array view to a fluid canvas view - introducing node structure format for visualizing AI intent connections and how actions logically stack up. A timeline view map for logical flow.
              </p>
            </div>
            
            <div>
              <h4 className="text-[18px] font-bold text-[#111] mb-3">3. Algorithmic Transparency</h4>
              <p className="text-[#555] text-[16px] leading-[1.7]">
                Provide a proper visual validation mapping the lineage from prompt to AI output. Showing precisely how logic rules were derived increases user trust and encourages users to make larger leaps with automation tools.
              </p>
            </div>

            <div>
              <h4 className="text-[18px] font-bold text-[#111] mb-3">4. Enhancing Contextual Memory</h4>
              <p className="text-[#555] text-[16px] leading-[1.7]">
                Adding contextual awareness around recent searches and candidate states. Allowing users to branch out into multiple chat sessions based on contextual data without losing root context from initial chat flows.
              </p>
            </div>
            
            <div>
              <h4 className="text-[18px] font-bold text-[#111] mb-3">5. Missing Thread Principles UI</h4>
              <p className="text-[#555] text-[16px] leading-[1.7]">
                Allowing the user thread to branch out in new chats presents execution in isolation in the UI. A nesting system structure would let users pause one suggested direction, execute a task, and resume initial workflow actions from root tree.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Summary Section */}
        <div className="mb-20">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#111] mb-8 tracking-tight">Impact Summary</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1b1c3c] text-white p-8 rounded-[20px]">
              <h4 className="text-[48px] font-bold mb-4 font-sans tracking-tight">10x</h4>
              <p className="font-semibold text-[18px] mb-2 leading-tight">Faster workflow setup</p>
              <p className="text-white/70 text-[15px]">Vs manual configuration in UI</p>
            </div>
            
            <div className="bg-[#1b1c3c] text-white p-8 rounded-[20px]">
              <h4 className="text-[48px] font-bold mb-4 font-sans tracking-tight">15x</h4>
              <p className="font-semibold text-[18px] mb-2 leading-tight">Increase in AI workflow adoption</p>
              <p className="text-white/70 text-[15px]">Target audience in product cohort</p>
            </div>
            
            <div className="bg-[#1b1c3c] text-white p-8 rounded-[20px]">
              <h4 className="text-[48px] font-bold mb-4 font-sans tracking-tight">85%</h4>
              <p className="font-semibold text-[18px] mb-2 leading-tight">Task likelihood completion</p>
              <p className="text-white/70 text-[15px]">Positive evaluation rating over manual configuration</p>
            </div>
          </div>
          
          <div className="mt-8 text-[14px] text-gray-500 italic">
            Note: Analytics are heavily dependent on immediate execution speed vs manual configurations. Complexity determines task drops so AI vs manual comparison provides a huge variable in standard completion vs setup.
          </div>
        </div>

        {/* Closing Reflection Section */}
        <div className="mb-16 pt-16 border-t border-gray-200">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#111] mb-8 tracking-tight">Closing Reflection</h2>
          
          <div className="space-y-5 text-[#555] text-[17px] leading-[1.8]">
            <p>The switch from hard settings to intent.</p>
            <p>If you give a recruiter an empty box, their mind has to work to build.</p>
            <p>By using AI-Agent builders, you take away that cognitive leap required to initiate a workflow logic. Reducing the gap to action limits hesitation.</p>
            <p>The UI of AI is natural language actions.</p>
            <p>It was a fun project to be a part of.</p>
          </div>
        </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}