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
                Transforming CRM workflows with an AI-Agent<br className="hidden md:block" /> Builder
              </h2>
              <p className="text-[#444] leading-[1.8] mb-12 text-[17px] font-medium tracking-wide">
                Sense, a leading AI-driven recruiting CRM, recognized a critical friction point: while recruiters knew exactly what they wanted to achieve, translating that intent into complex platform configurations was time-consuming and error-prone. We envisioned an AI-Agent Builder that would bridge this gap, allowing recruiters to simply state their goals and have the system build the necessary workflows, campaigns, and dashboards automatically.
              </p>

              {/* Project Meta Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 pb-4 border-t border-gray-200">
                <div>
                  <p className="text-[17px] text-[#111] font-semibold mb-1 tracking-tight">App Name / Client</p>
                  <p className="text-[16px] text-[#555]">Sense</p>
                </div>
                <div>
                  <p className="text-[17px] text-[#111] font-semibold mb-1 tracking-tight">Role</p>
                  <p className="text-[16px] text-[#555]">Lead Product Designer</p>
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
            Sense, a leading AI-driven recruiting CRM, recognized a critical friction point. The existing CRM required deep platform knowledge to build effective workflows. This resulted in:
          </p>
          
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-8">
            <ul className="list-disc pl-5 space-y-3 text-gray-700 font-medium">
              <li>62% of recruiters abandoning advanced workflow setups midway</li>
              <li>Average time of 2+ hours to configure a multi-touch candidate nurture campaign</li>
              <li>Adoption of advanced AI features plateauing at 36% among enterprise users</li>
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-gray-900 font-semibold italic">
                Recruiters needed an execution layer—a way to turn their intent into immediate platform action.
              </p>
            </div>
          </div>
          
          <p className="text-gray-600 leading-relaxed">
            They needed a solution that would let them focus on the candidate experience rather than navigating complex configuration menus.
          </p>
        </div>

        {/* My Role Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">My Role</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            As the Lead Product Designer on the AI initiatives team, I owned the end-to-end design of the AI-Agent Builder:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li>Conducted generative user research with 15 enterprise recruiters</li>
            <li>Mapped the complex translation from natural language to system actions</li>
            <li>Designed the conversational interface and the resulting "Agent Action" preview cards</li>
            <li>Collaborated with ML engineers to establish realistic boundaries for the NLP models</li>
            <li>Led usability testing and rapid iteration cycles prior to beta launch</li>
          </ul>
        </div>

        {/* Problem Statement Section */}
        <div className="bg-[#1b1c3c] text-white rounded-xl p-8 md:p-10 mb-16 shadow-lg relative overflow-hidden">
          <h3 className="text-xl font-bold mb-6 text-white/90">Problem Statement</h3>
          <div className="absolute top-4 right-4 text-white/10 text-9xl font-serif leading-none font-bold select-none pointer-events-none">"</div>
          <div className="relative z-10">
            <p className="text-lg md:text-xl leading-relaxed font-medium text-white/90 mb-6">
              Translating recruiter intent into complex platform configurations was time-consuming and error-prone. The existing CRM required deep platform knowledge to build effective workflows.
            </p>
            <div className="border-l-4 border-indigo-400 pl-4 py-1">
              <p className="text-indigo-200 font-medium">Recruiters knew exactly what they wanted to achieve.</p>
              <p className="text-indigo-200 font-medium">The platform made it too complex to execute.</p>
            </div>
          </div>
        </div>

        {/* Problem 1 Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Problem 1: High Workflow Abandonment</h3>
          <p className="text-gray-600 mb-6">Recruiters struggled with complex configurations because:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li>Translating human intent to system configuration was overly complex</li>
            <li>Multi-touch nurture campaigns required deep platform knowledge</li>
            <li>Navigating complex configuration menus caused significant friction</li>
            <li>Advanced AI features were hidden behind technical barriers</li>
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
              <li>62% of recruiters abandoning advanced workflow setups midway</li>
              <li>Adoption of advanced AI features plateauing at 36%</li>
              <li>Lower ROI on platform investment for enterprise clients</li>
              <li>Frustration with software management overhead</li>
            </ul>
          </div>
        </div>

        {/* Problem 2 Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Problem 2: Time-Consuming Configuration Process</h3>
          <p className="text-gray-600 mb-6">Without an intelligent execution layer:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li>Recruiters spent hours manually setting up campaigns</li>
            <li>Creating analytics dashboards from scratch was tedious</li>
            <li>Lack of natural language processing required exact match configurations</li>
            <li>Continuous context switching between candidate engagement and tool setup</li>
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
                <p className="font-bold text-gray-900 mb-1">• Increase Feature Adoption</p>
                <p className="text-gray-600 text-sm ml-4">Drive the number of advanced workflows created by enterprise users.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Reduce Setup Time</p>
                <p className="text-gray-600 text-sm ml-4">Enable complex campaigns to be built and launched significantly faster.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Increase Platform Stickiness</p>
                <p className="text-gray-600 text-sm ml-4">Encourage users to log in more frequently and rely on the platform for daily tasks.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Enhance User Trust in AI</p>
                <p className="text-gray-600 text-sm ml-4">Ensure users clearly understand and can easily verify the system's intended actions.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 pt-8 border-t border-gray-100">
            <div className="md:col-span-3">
              <h4 className="text-lg font-bold text-gray-900">User Goals</h4>
            </div>
            <div className="md:col-span-9 space-y-6">
              <div>
                <p className="font-bold text-gray-900 mb-1">• Conversational Intent Capture</p>
                <p className="text-gray-600 text-sm ml-4">Simply state goals and have the system build the necessary workflows automatically.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Seamless Execution</p>
                <p className="text-gray-600 text-sm ml-4">Turn intent into immediate platform action without navigating complex menus.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Predictability and Safety</p>
                <p className="text-gray-600 text-sm ml-4">Know exactly what the AI is about to do before it executes a campaign.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">• Graceful Error Handling</p>
                <p className="text-gray-600 text-sm ml-4">Have easy ways to manually correct the AI's interpretation when needed.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solution 1 Section */}
        <div className="mb-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Solution 1: Conversational Intent Capture</h3>
          
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
            Instead of traditional form-based configuration, we introduced a chat-centric interface. Recruiters could simply type, "Build a campaign to re-engage registered nurses in Texas who haven't been contacted in 6 months."
          </p>

          <p className="text-gray-600 font-medium mb-4">Key Design Decisions:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li><strong>Guided Prompts:</strong> Provided contextual suggestions to help users format their requests effectively.</li>
            <li><strong>Progressive Disclosure:</strong> Kept the chat interface clean while allowing users to click into the generated parameters for granular editing.</li>
            <li><strong>Transparency:</strong> Clear visual indicators explaining how the AI interpreted the request (e.g., highlighting extracted entities like "registered nurses" and "Texas").</li>
          </ul>

          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg">
            <p className="font-bold text-indigo-900 mb-2">Why it works:</p>
            <ul className="list-disc pl-5 space-y-1 text-indigo-800 text-sm">
              <li>Lowers the barrier to entry for complex features</li>
              <li>Feels natural and aligned with how recruiters actually think</li>
              <li>Saves significant time in the initial setup phase</li>
              <li>Keeps users in the flow of their work</li>
            </ul>
          </div>
        </div>

        {/* Solution 2 Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Solution 2: Agent Action Previews</h3>
          
          <div className="bg-[#1b1c3c] p-6 md:p-10 rounded-xl mb-8 flex flex-col gap-6">
             <div className="rounded-lg overflow-hidden border border-gray-700 shadow-md bg-white">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Agent Action Previews" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            Trust was the biggest hurdle. Recruiters needed to know exactly what the AI was about to do before it executed.
          </p>
          <p className="text-gray-600 font-medium mb-4">Key Design Decisions:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li><strong>"Before You Build" Cards:</strong> Created standardized preview cards showing the proposed workflow, audience size, and triggered actions.</li>
            <li><strong>Confidence Scores:</strong> Displayed the system's confidence level in its interpretation, prompting for human verification when confidence was low.</li>
            <li><strong>One-Click Revert:</strong> Built a robust undo system, giving users the psychological safety to experiment with AI generation.</li>
          </ul>

          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg">
            <p className="font-bold text-indigo-900 mb-2">Why it works:</p>
            <ul className="list-disc pl-5 space-y-1 text-indigo-800 text-sm">
              <li>Builds trust through transparency</li>
              <li>Prevents accidental mass-communications</li>
              <li>Provides psychological safety to experiment</li>
              <li>Allows for human-in-the-loop verification</li>
            </ul>
          </div>
        </div>

        {/* Solution 3 Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Solution 3: Dynamic Dashboard Generation</h3>
          
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
            Beyond workflows, users struggled to build custom analytics. We extended the Agent Builder to handle data visualization requests.
          </p>
          <p className="text-gray-600 font-medium mb-4">Key Design Decisions:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li><strong>Natural Language Querying:</strong> Users could ask, "Show me the drop-off rate for engineering roles by stage."</li>
            <li><strong>Auto-Charting:</strong> The system automatically selected the most appropriate visualization type (funnel, bar chart, etc.) based on the data requested.</li>
            <li><strong>Dashboard Pinning:</strong> Allowed users to easily save AI-generated charts to their permanent dashboards.</li>
          </ul>

          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg">
            <p className="font-bold text-indigo-900 mb-2">Why it works:</p>
            <ul className="list-disc pl-5 space-y-1 text-indigo-800 text-sm">
              <li>Democratizes access to data analytics</li>
              <li>Removes the need for complex report builders</li>
              <li>Delivers immediate answers to business questions</li>
              <li>Increases the overall value of the platform</li>
            </ul>
          </div>
        </div>

        {/* What I Learned Section */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">What I Learned</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Building an AI-Agent for a complex CRM provided several key insights into human-AI interaction:
          </p>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">1. Trust is paramount in AI design</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Users will only leverage automation if they clearly understand and can easily verify the system's intended actions. Transparency in how the AI interprets commands is critical.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">2. Friction isn't always bad</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Introducing slight friction—like requiring a manual confirmation click before a large campaign launch—actually increased user confidence in the AI. It reassured them that the AI wouldn't act autonomously without final approval.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">3. Design for the fallback</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                No NLP model is perfect. Designing graceful error states and easy ways for the user to manually correct the AI's interpretation was just as important as designing the happy path.
              </p>
            </div>
          </div>
        </div>

        {/* Business Impact Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Business Impact</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            The beta launch of the AI-Agent Builder fundamentally shifted how recruiters interacted with the Sense platform:
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-4xl font-bold mb-4">3.5x</h4>
              <p className="font-semibold text-lg mb-2 leading-tight">Faster Feature Adoption</p>
              <p className="text-white/70 text-sm">The number of advanced workflows created increased by 350% within the first month of beta launch.</p>
            </div>
            
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-4xl font-bold mb-4">85%</h4>
              <p className="font-semibold text-lg mb-2 leading-tight">Reduction in Setup Time</p>
              <p className="text-white/70 text-sm">Complex campaigns that previously took hours were now built and launched in under 15 minutes.</p>
            </div>
            
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-4xl font-bold mb-4">40%</h4>
              <p className="font-semibold text-lg mb-2 leading-tight">Increased Platform Stickiness</p>
              <p className="text-white/70 text-sm">Users who interacted with the Agent Builder logged in 40% more frequently than those who didn't.</p>
            </div>
          </div>
        </div>
        
        </div>
      </div>
      <Footer />
    </main>
  );
}
