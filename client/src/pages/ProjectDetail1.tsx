import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

import Case1 from "@assets/Case1.png";

import { OtherProjects } from "@/components/OtherProjects";

export default function ProjectDetail1({ hideHeader = false }: { hideHeader?: boolean }) {
  useEffect(() => {
    if (!hideHeader) {
      window.scrollTo(0, 0);
    }
  }, [hideHeader]);

  return (
    <main className="min-h-screen bg-white text-foreground selection:bg-primary selection:text-primary-foreground relative pt-[0px]">
      {!hideHeader && (
        <div className="fixed top-6 left-4 md:left-8 z-50">
        <Link href="/">
          <span className="bg-white/95 backdrop-blur-md flex items-center justify-center px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-black hover:bg-black transition-all group mt-[20px] ml-[40px] cursor-pointer">
            <ArrowLeft className="w-5 h-5 text-black group-hover:text-white group-hover:-translate-x-1 transition-all" strokeWidth={2.5} />
          </span>
        </Link>
      </div>
      )}
      {/* Top Banner section */}
      {hideHeader ? (
        <div className="w-full bg-white pt-6 pb-8 px-4 sm:px-6 md:px-8 relative z-10 flex flex-col items-start text-left">
          <h1 className="text-[28px] sm:text-[32px] font-medium leading-[1.1] tracking-[-0.02em] font-sans text-[#111] mb-4">
            Redefining hiring at scale with AI Agents
          </h1>
          <p className="text-[16px] sm:text-[18px] text-[#333] leading-[1.5] mb-8 max-w-[800px]">
            Designed a Conversational AI recruiting co-pilot that automates talent engagement at every stage of the recruiting funnel.
          </p>
          <div className="w-full rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-[#f4f4f4]">
            <img src={Case1} alt="Project Dashboard" className="w-full h-auto block" />
          </div>
        </div>
      ) : (
        <div 
          className="w-full text-white flex flex-col items-center justify-start text-center px-6 relative overflow-hidden bg-cover bg-center bg-no-repeat pt-[80px]"
          style={{ backgroundImage: "url('/Case_hero.png')" }}
        >
          <div className="max-w-[800px] z-10 relative mt-8 mb-12">
            <h1 className="text-[40px] md:text-[56px] font-semibold leading-[1.2] tracking-tight font-sans">
              From Search to Action: Turning HR Intent into Intelligent Execution
            </h1>
          </div>

          {/* Main Interface Image - Placed inside the banner */}
          <div className="w-full max-w-[1000px] z-10 relative mt-4">
            <div className="rounded-t-xl md:rounded-t-2xl overflow-hidden shadow-2xl">
              <img src={Case1} alt="Project Dashboard" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      )}
      {/* Project Overview Section */}
      <div className={`w-full bg-gray-50 ${hideHeader ? 'pt-8' : 'pt-16'} pb-16 lg:pb-24 border-b border-gray-200 relative z-20`}>
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <div className="w-full">
            {/* Project Header */}
            <div className="mb-0">
              {!hideHeader ? (<h2 className="text-[32px] md:text-[40px] font-bold mb-6 leading-[1.3] tracking-tight font-sans">From Search to Action: Turning HR Intent<br className="hidden md:block" /> into Intelligent Execution</h2>) : (<h2 className="text-[22px] font-bold mb-4 mt-2">Context</h2>)}
              <p className="text-[16px] md:text-[18px] leading-[1.8] mb-12 font-medium tracking-wide">
                Sense is an AI-driven recruiting platform used by staffing agencies and enterprise talent teams to manage candidate pipelines, automate workflows, and engage candidates at scale.
                <br /><br />
                As the CRM evolved, recruiters still had to configure workflows and dashboards manually. This project explored how an AI execution layer could transform the CRM from a configuration-heavy system into an intent-driven experience.
              </p>

              {/* Project Meta Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 pb-4 border-t border-gray-200">
                <div>
                  <p className="text-[16px] md:text-[18px] font-semibold mb-1 tracking-tight">App Name / Client</p>
                  <p className="text-[16px] md:text-[18px]">Sense</p>
                </div>
                <div>
                  <p className="text-[16px] md:text-[18px] font-semibold mb-1 tracking-tight">Role</p>
                  <p className="text-[16px] md:text-[18px]">Senior Product Designer</p>
                </div>
                <div>
                  <p className="text-[16px] md:text-[18px] font-semibold mb-1 tracking-tight">Platform</p>
                  <p className="text-[16px] md:text-[18px]">Web App</p>
                </div>
                <div>
                  <p className="text-[16px] md:text-[18px] font-semibold mb-1 tracking-tight">Industry</p>
                  <p className="text-[16px] md:text-[18px]">SaaS - CRM</p>
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
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-6">Introduction</h3>
          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-6">
            Modern HR teams live inside CRM systems. They manage hiring pipelines, monitor attrition, track performance, and report metrics to leadership.
          </p>
          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-6">
            Yet when a simple question arises the system doesn't respond to intent. It responds to configuration.
          </p>
          
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-8">
            <div className="flex flex-col gap-2">
              <p className="text-[16px] md:text-[18px] -900 font-medium">"Why is attrition increasing in Sales?"</p>
              <p className="text-[16px] md:text-[18px] -900 font-medium">"How can we hire faster?"</p>
            </div>
          </div>
          
          <p className="text-[16px] md:text-[18px] -600 leading-relaxed">
            This project reimagines Global Search as an AI operating layer that transforms CRM from a structured tool into an intelligent execution engine.
          </p>
        </div>

        {/* My Role Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-6">My Role</h3>
          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-4">
            As a Senior Product Designer, I led the initiative from problem framing to interaction strategy. I defined the AI interaction model, designed the conversational execution flows, and established human-in-the-loop trust patterns.
          </p>
          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-4">
            I worked closely with product and engineering to align on data interpretation logic and ensure the AI layer scaled across CRM modules — positioning it not as a feature enhancement, but as a foundational interaction shift.
          </p>
        </div>

        {/* Problem Statement Section */}
        <div className="bg-[#1b1c3c] text-white rounded-xl p-8 md:p-10 mb-16 shadow-lg relative overflow-hidden">
          <h3 className="text-[22px] md:text-[28px] font-bold mb-6 /90">Problem Statement</h3>
          <div className="absolute top-4 right-4 text-white/10 text-9xl font-serif leading-none font-bold select-none pointer-events-none">"</div>
          <div className="relative z-10">
            <p className="text-[16px] md:text-[18px] leading-relaxed font-medium /90 mb-6">
              The CRM is structured around features and modules, but HR teams think in goals and outcomes.
            </p>
            <div className="border-l-4 border-indigo-400 pl-4 py-1">
              <p className="text-[16px] md:text-[18px] -200 font-medium">This mismatch creates cognitive overload, analyst dependency, and slow execution — despite having powerful data systems.</p>
            </div>
          </div>
        </div>

        {/* Problem 1 Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-6">Problem 1: High Setup Friction & Low AI Adoption</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li>Workflow automation existed, but adoption was stagnant.</li>
            <li>62% of recruiters abandoned workflow setup midway</li>
            <li>Avg. 2+ hours to configure complex hiring automation</li>
            <li>AI workflow adoption plateaued at 36%</li>
            <li>Dashboard creation took ~20 minutes on average</li>
          </ul>

          <div className="bg-gray-100 p-4 md:p-8 rounded-xl mb-6">
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
              <img 
                src="/image_1773424083054.png" 
                alt="Inconsistent UI before redesign" 
                className="w-full h-auto grayscale opacity-90 mix-blend-multiply"
              />
            </div>
          </div>

          <div className="mt-8 mb-4 max-w-2xl">
            <p className="text-[16px] md:text-[18px] -900 font-medium mb-2">Recruiters felt:</p>
            <p className="text-[16px] md:text-[18px] font-medium italic -700 mb-2">"This feels like more work."</p>
            <p className="text-[16px] md:text-[18px] -600">The system demanded effort before delivering value.</p>
          </div>
        </div>

        {/* Problem 2 Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-6">Problem 2: Trust Gap in Automation</h3>
          <p className="text-[16px] md:text-[18px] -600 mb-6">Even when AI generated suggestions:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li>Users questioned logic</li>
            <li>Feared "black box" behavior</li>
            <li>Wanted control but not complexity</li>
            <li>Too much configuration caused fatigue.</li>
            <li>Too much automation caused anxiety.</li>
          </ul>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 mb-8">
            <p className="text-[16px] md:text-[18px] -900 font-medium">
              The real challenge: How do we balance momentum and control?
            </p>
          </div>
        </div>

        {/* Goals Section */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-8">Goals</h3>
          
          <div className="grid md:grid-cols-12 gap-8 mb-10">
            <div className="md:col-span-3">
              <h4 className="text-lg font-bold text-gray-900">Business Goals</h4>
            </div>
            <div className="md:col-span-9 space-y-6">
              <div>
                <p className="text-[16px] md:text-[18px] font-bold -900 mb-1">• Increase Feature Adoption</p>
                <p className="text-[16px] md:text-[18px] -600 ml-4">Make AI analytics and workflow capabilities more accessible to enterprise users and drive a 2x increase in workflow adoption.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold -900 mb-1">• Reduce Analyst Dependency</p>
                <p className="text-[16px] md:text-[18px] -600 ml-4">Empower HR and business teams to self-serve insights, dashboards, and workflows without relying heavily on analysts.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold -900 mb-1">• Improve Platform Stickiness & Retention</p>
                <p className="text-[16px] md:text-[18px] -600 ml-4">Position the CRM as a decision engine, not just a data storage system, improving long-term platform engagement and retention.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold -900 mb-1">• Demonstrate Enterprise AI ROI</p>
                <p className="text-[16px] md:text-[18px] -600 ml-4">Strengthen the value narrative of AI-driven automation by reducing workflow setup time by 70%+ and enabling faster execution.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 pt-8 border-t border-gray-100">
            <div className="md:col-span-3">
              <h4 className="text-lg font-bold text-gray-900">User Goals</h4>
            </div>
            <div className="md:col-span-9 space-y-6">
              <div>
                <p className="text-[16px] md:text-[18px] font-bold -900 mb-1">• Move from Navigation → Decision Making</p>
                <p className="text-[16px] md:text-[18px] -600 ml-4">Reduce time spent navigating complex configurations and help users focus on insights and actions.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold -900 mb-1">• Instant Workflow Creation</p>
                <p className="text-[16px] md:text-[18px] -600 ml-4">Allow users to generate workflows quickly instead of manually configuring multiple steps.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold -900 mb-1">• Create Dashboards with Natural Language</p>
                <p className="text-[16px] md:text-[18px] -600 ml-4">Enable users to generate analytics dashboards through conversational prompts.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold -900 mb-1">• Increase Confidence in AI Insights</p>
                <p className="text-[16px] md:text-[18px] -600 ml-4">Provide transparent, explainable AI outputs so users can trust and validate the recommendations.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold -900 mb-1">• Maintain Human Approval Control</p>
                <p className="text-[16px] md:text-[18px] -600 ml-4">Ensure users can review and approve AI-generated workflows before execution.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solution 1 Section */}
        <div className="mb-16 pt-12 border-t border-gray-200">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-8">Solution 1: Conversational AI Interface</h3>
          
          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-6">
            The new design introduces an AI-powered execution layer embedded directly into the CRM. Instead of navigating across modules, recruiters can express intent in natural language.
          </p>

          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-6">
            Users can type prompts like:<br/>
            "Create hiring workflow for senior backend engineers."<br/>
            "Show attrition trend for Sales in the last 6 months."
          </p>

          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-8">
            The system interprets intent and initiates structured execution flows instantly.
          </p>
          
          <div className="pt-4 md:pt-8 rounded-xl bg-[#f3f4f600] mb-0">
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white mb-6">
              <video 
                src="/c1-s1.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto pointer-events-none"
              />
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg">
            <p className="text-[16px] md:text-[18px] font-bold -900 mb-2">Why it's better:</p>
            <ul className="list-disc pl-5 space-y-1 text-indigo-800 text-sm">
              <li>Eliminates multi-step module navigation</li>
              <li>Reduces cognitive overhead</li>
              <li>Makes AI feel native to the CRM, not a separate feature</li>
              <li>Shifts interaction from configuration → execution</li>
            </ul>
          </div>
        </div>

        {/* Solution 2 Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-8">Solution 2: AI Workflow Auto-Builder</h3>
          
          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-6">
            The redesigned workflow experience removes upfront setup fatigue. Based on user intent, AI automatically builds a structured hiring workflow — including stages, triggers, SLAs, and assignments.
          </p>

          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-8">
            Instead of configuring every rule manually, recruiters receive a ready-to-execute workflow with editable checkpoints.
          </p>

          <div className="pt-4 md:pt-8 rounded-xl bg-[#f3f4f600] mb-0">
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white mb-6">
              <video 
                src="/c1-s2.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto pointer-events-none"
              />
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg mb-8">
            <p className="text-[16px] md:text-[18px] font-bold -900 mb-2">Why it's better:</p>
            <ul className="list-disc pl-5 space-y-1 text-indigo-800 text-sm">
              <li>Reduces setup time by ~78%</li>
              <li>Eliminates repetitive field mapping and rule selection</li>
              <li>Increases workflow activation by 1.5x</li>
              <li>Preserves control without overwhelming configuration</li>
            </ul>
          </div>
        </div>

        {/* Solution 3 Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-8">Solution 3: AI-Generated CRM Analytics with Human-in-the-Loop Approval</h3>
          
          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-6">
            We extended the execution layer into analytics. Recruiters can generate dashboards using natural language prompts, and AI automatically selects relevant data sources, applies filters, and builds structured visualizations.
          </p>

          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-4">
            Before saving or activating, users see a full preview with contextual insight summaries and editable components.
          </p>

          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-8">
            Every AI action requires explicit approval before execution.
          </p>

          <div className="pt-4 md:pt-8 rounded-xl bg-[#f3f4f600] mb-0">
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white mb-6">
              <video 
                src="/c1-s3.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto pointer-events-none"
              />
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg mb-8">
            <p className="text-[16px] md:text-[18px] font-bold -900 mb-2">Why it's better:</p>
            <ul className="list-disc pl-5 space-y-1 text-indigo-800 text-sm">
              <li>Reduces dashboard creation time from ~20 minutes to under 4 minutes</li>
              <li>Lowers analyst dependency from 52% to 19%</li>
              <li>Eliminates the "blank canvas" problem</li>
              <li>Prevents black-box anxiety through preview & approval</li>
              <li>Balances speed with enterprise-level trust</li>
            </ul>
          </div>
        </div>

        {/* What I Would Have Done Next Section */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-6">What I Would Have Done Next</h3>
          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-8">
            Although the solution addressed the immediate usability challenges, the next phase would focus on improving trust, transparency, and intelligence in the AI-driven workflow experience.
          </p>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">1. Measuring Trust Through Behavior</h4>
              <p className="text-[16px] md:text-[18px] -600 leading-relaxed">
                To understand how confident users are in AI-generated workflows, I would track behavioral signals such as edit frequency, override patterns, and manual adjustments. These insights would reveal whether users trust the system's outputs or frequently modify them before execution.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">2. Tracking Prompt-to-Execution Success</h4>
              <p className="text-[16px] md:text-[18px] -600 leading-relaxed">
                I would measure the success rate between the initial prompt and final workflow execution. Identifying where prompts fail, require corrections, or lead to incomplete workflows would help refine the AI interpretation and improve overall reliability.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">3. Improving AI Transparency</h4>
              <p className="text-[16px] md:text-[18px] -600 leading-relaxed">
                To build stronger user confidence, I would introduce visible data lineage within AI outputs. Showing the data sources, logic paths, and reasoning behind AI-generated insights would help users better understand and validate the system's recommendations.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">4. Introducing Contextual Memory</h4>
              <p className="text-[16px] md:text-[18px] -600 leading-relaxed">
                Adding contextual memory across sessions would allow the system to remember previous workflows, prompts, and user preferences. This would reduce repetitive configuration and make interactions feel more personalized and efficient over time.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">5. Moving Toward Proactive AI</h4>
              <p className="text-[16px] md:text-[18px] -600 leading-relaxed">
                The long-term goal would be shifting the system from reactive responses to proactive intelligence. By analyzing patterns and user behavior, the platform could suggest workflows, highlight insights, and recommend optimizations before users even ask.
              </p>
            </div>
          </div>
        </div>

        {/* Business Impact Section */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-6">Impact Summary</h3>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-2xl font-bold mb-2">78%</h4>
              <p className="text-[16px] md:text-[18px] font-semibold mb-4 leading-tight">Faster workflow setup</p>
              <p className="text-[16px] md:text-[18px] /80">AI workflows reduced manual configuration time.</p>
            </div>
            
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-2xl font-bold mb-2">1.5x</h4>
              <p className="text-[16px] md:text-[18px] font-semibold mb-4 leading-tight">Increase in AI workflow adoption</p>
              <p className="text-[16px] md:text-[18px] /80">Teams shifted from manual automation to AI-generated workflows.</p>
            </div>
            
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-2xl font-bold mb-2">80%</h4>
              <p className="text-[16px] md:text-[18px] font-semibold mb-4 leading-tight">Faster dashboard generation</p>
              <p className="text-[16px] md:text-[18px] /80">Natural language prompts enabled instant dashboard creation.</p>
            </div>
          </div>

          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-16">
            More importantly, the redesign repositioned AI from being an assistant feature to becoming a foundational execution layer across the CRM, enabling teams to move from insight generation to automated decision-making.
          </p>

          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-6">Closing Reflection</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>This project wasn't about adding AI to search.</p>
              <p>It was about redesigning the interaction model of an enterprise CRM.</p>
              <p>As a Senior Product Designer, I drove the shift from configuration-heavy workflows to intent-driven execution — balancing speed, control, and trust in AI systems.</p>
              <p>The result was not just feature improvement.</p>
              <p>It was a mental model transformation.</p>
            </div>
          </div>
        </div>
        
        </div>
      </div>
      <OtherProjects currentProjectId="crm-ai" />
      <Footer />
    </main>
  );
}
