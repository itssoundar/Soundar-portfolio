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
                From Search to Action: Turning HR Intent<br className="hidden md:block" /> into Intelligent Execution
              </h2>
              <p className="text-[#444] leading-[1.8] mb-12 text-[17px] font-medium tracking-wide">
                Sense is an AI-driven recruiting platform used by staffing agencies and enterprise talent teams to manage candidate pipelines, automate workflows, and engage candidates at scale.
                <br /><br />
                As the CRM evolved, recruiters still had to configure workflows and dashboards manually. This project explored how an AI execution layer could transform the CRM from a configuration-heavy system into an intent-driven experience.
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
            Modern HR teams live inside CRM systems. They manage hiring pipelines, monitor attrition, track performance, and report metrics to leadership.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Yet when a simple question arises the system doesn't respond to intent. It responds to configuration.
          </p>
          
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-8">
            <div className="flex flex-col gap-2">
              <p className="text-gray-900 font-medium">"Why is attrition increasing in Sales?"</p>
              <p className="text-gray-900 font-medium">"How can we hire faster?"</p>
            </div>
          </div>
          
          <p className="text-gray-600 leading-relaxed">
            This project reimagines Global Search as an AI operating layer that transforms CRM from a structured tool into an intelligent execution engine.
          </p>
        </div>

        {/* My Role Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">My Role</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            As a Senior Product Designer, I led the initiative from problem framing to interaction strategy. I defined the AI interaction model, designed the conversational execution flows, and established human-in-the-loop trust patterns.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            I worked closely with product and engineering to align on data interpretation logic and ensure the AI layer scaled across CRM modules — positioning it not as a feature enhancement, but as a foundational interaction shift.
          </p>
        </div>

        {/* Problem Statement Section */}
        <div className="bg-[#1b1c3c] text-white rounded-xl p-8 md:p-10 mb-16 shadow-lg relative overflow-hidden">
          <h3 className="text-xl font-bold mb-6 text-white/90">Problem Statement</h3>
          <div className="absolute top-4 right-4 text-white/10 text-9xl font-serif leading-none font-bold select-none pointer-events-none">"</div>
          <div className="relative z-10">
            <p className="text-lg md:text-xl leading-relaxed font-medium text-white/90 mb-6">
              The CRM is structured around features and modules, but HR teams think in goals and outcomes.
            </p>
            <div className="border-l-4 border-indigo-400 pl-4 py-1">
              <p className="text-indigo-200 font-medium">This mismatch creates cognitive overload, analyst dependency, and slow execution — despite having powerful data systems.</p>
            </div>
          </div>
        </div>

        {/* Problem 1 Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Problem 1: High Setup Friction & Low AI Adoption</h3>
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Inconsistent UI before redesign" 
                className="w-full h-auto grayscale opacity-90 mix-blend-multiply"
              />
            </div>
          </div>
        </div>

        {/* Problem 2 Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Problem 2: Trust Gap in Automation</h3>
          <p className="text-gray-600 mb-6">Even when AI generated suggestions:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li>Users questioned the logic and feared "black box" behavior</li>
            <li>Users wanted control, but not complexity</li>
            <li>Too much configuration caused fatigue</li>
            <li>Too much automation caused anxiety</li>
          </ul>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 mb-8">
            <p className="text-indigo-900 font-medium text-lg text-center">
              The real challenge: How do we balance momentum and control?
            </p>
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
                <p className="font-bold text-gray-900 mb-1">• Increase Feature Adoption (2x)</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Reduce Analyst Dependency</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Improve Platform Stickiness & Retention</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Demonstrate Enterprise AI ROI</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 pt-8 border-t border-gray-100">
            <div className="md:col-span-3">
              <h4 className="text-lg font-bold text-gray-900">User Goals</h4>
            </div>
            <div className="md:col-span-9 space-y-6">
              <div>
                <p className="font-bold text-gray-900 mb-1">• Move from Navigation to Decision Making</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Instant Workflow Creation</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Create Dashboards with Natural Language</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Increase Confidence in AI Insights</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Maintain Human Approval Control</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solution 1 Section */}
        <div className="mb-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Solution 1: Interaction Shift - From Navigation to Conversational Execution</h3>
          
          <div className="bg-gray-100 p-4 md:p-8 rounded-xl mb-6">
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white mb-6">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Conversational Intent Capture" 
                className="w-full h-auto grayscale opacity-90 mix-blend-multiply"
              />
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            Instead of clicking through 5 layers of menus to build a report, the Global Search bar was reimagined as a command line for the CRM.
          </p>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-8">
            <p className="text-gray-900 font-medium">Users could simply type: "Show me drop-off rates for nursing candidates in Texas."</p>
          </div>

          <p className="text-gray-600 font-medium mb-4">Key Design Decisions:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li><strong>Guided Prompts:</strong> Provided contextual suggestions to help users format their requests effectively.</li>
            <li><strong>Progressive Disclosure:</strong> Kept the chat interface clean while allowing users to click into the generated parameters for granular editing.</li>
            <li><strong>Transparency:</strong> Clear visual indicators explaining how the AI interpreted the request.</li>
          </ul>
        </div>

        {/* Solution 2 Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Solution 2: The "Sandbox" Pattern - Creating a Safe Space for AI</h3>
          
          <div className="bg-[#1b1c3c] p-6 md:p-10 rounded-xl mb-8 flex flex-col gap-6">
             <div className="rounded-lg overflow-hidden border border-gray-700 shadow-md bg-white">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Agent Action Previews" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            When the AI generated a workflow or dashboard, it didn't immediately save or execute it. It rendered it in an ephemeral 'sandbox' view.
          </p>
          <p className="text-gray-600 font-medium mb-4">This allowed users to:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li>Review the logic</li>
            <li>Tweak parameters manually</li>
            <li>Discard without consequence</li>
          </ul>

          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg">
            <p className="text-indigo-900 font-medium">This drastically reduced the anxiety of AI making a 'mistake'.</p>
          </div>
        </div>

        {/* Solution 3 Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Solution 3: Explainable Logic</h3>
          
          <div className="bg-gray-100 p-4 md:p-8 rounded-xl mb-8">
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Dynamic Dashboard Generation" 
                className="w-full h-auto grayscale opacity-90 mix-blend-multiply"
              />
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            Every AI-generated chart or workflow included a "How this was built" toggle. It translated the database query back into plain English, proving to the user that it understood their intent correctly.
          </p>
        </div>

        {/* What I Learned Section */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">The Takeaway</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            The value of AI in enterprise tools isn't just about doing things automatically—it's about doing them transparently. By prioritizing trust and explainability, we turned a "black box" feature into an indispensable daily tool.
          </p>
        </div>

        {/* Business Impact Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Impact</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-4xl font-bold mb-4">78%</h4>
              <p className="font-semibold text-lg mb-2 leading-tight">Faster workflow setup</p>
              <p className="text-white/70 text-sm">Avg time dropped from 2 hours to ~25 mins</p>
            </div>
            
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-4xl font-bold mb-4">1.5x</h4>
              <p className="font-semibold text-lg mb-2 leading-tight">Increase in AI adoption</p>
              <p className="text-white/70 text-sm">Enterprise workflow adoption jumped from 36% to 54%</p>
            </div>
            
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-4xl font-bold mb-4">80%</h4>
              <p className="font-semibold text-lg mb-2 leading-tight">Faster dashboards</p>
              <p className="text-white/70 text-sm">Dashboard generation time went from 20 mins down to &lt;3 mins</p>
            </div>
          </div>
        </div>
        
        </div>
      </div>
      <Footer />
    </main>
  );
}
