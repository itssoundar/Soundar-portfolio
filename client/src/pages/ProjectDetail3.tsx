import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

import Case1 from "@assets/Case1.png";
import { OtherProjects } from "@/components/OtherProjects";

export default function ProjectDetail3({ hideHeader = false }: { hideHeader?: boolean }) {
  useEffect(() => {
    if (!hideHeader) {
      window.scrollTo(0, 0);
    }
  }, [hideHeader]);

  return (
    <main className="min-h-screen bg-white text-foreground selection:bg-primary selection:text-primary-foreground relative pt-[0px]">
      {!hideHeader && (
        <div className="fixed top-6 left-4 md:left-8 z-[100]">
          <Link href="/">
            <span className="bg-white/95 backdrop-blur-md flex items-center justify-center px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 hover:bg-gray-50 transition-all group mt-[20px] ml-[10px] md:ml-[40px] cursor-pointer">
              <ArrowLeft className="w-5 h-5 text-black group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
            </span>
          </Link>
        </div>
      )}
      {/* Top Banner section */}
      {hideHeader ? (
        <div 
          className="w-full pt-6 pb-8 px-4 sm:px-6 md:px-8 relative z-10 flex flex-col items-start text-left bg-cover bg-center bg-no-repeat text-white rounded-[24px] overflow-hidden mb-6"
          style={{ backgroundImage: "url('/Case_hero.png')" }}
        >
          <h1 className="text-[28px] sm:text-[32px] font-medium leading-[1.1] tracking-[-0.02em] font-sans text-white mb-4 relative z-10">
            CRM Analytics & Dashboard Builder
          </h1>
          <p className="text-[16px] sm:text-[18px] text-white/90 leading-[1.5] mb-8 max-w-[800px] relative z-10">
            Designed centralized dashboards to monitor hiring pipeline performance and enabled self-serve analytics through a flexible dashboard builder.
          </p>
          <div className="w-full rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-[#f4f4f4] relative z-10">
            <img src="/c3-hero.png" alt="Project Dashboard" className="w-full h-auto block" />
          </div>
        </div>
      ) : (
        <div 
          className="w-full text-white flex flex-col items-center justify-start text-center px-6 relative overflow-hidden bg-cover bg-center bg-no-repeat pt-[80px]"
          style={{ backgroundImage: "url('/Case_hero.png')" }}
        >
          <div className="max-w-[800px] z-10 relative mt-8 mb-12">
            <h1 className="text-[40px] md:text-[56px] font-semibold leading-[1.2] tracking-tight font-sans">
              Building CRM analytics and a custom dashboard builder
            </h1>
          </div>

          {/* Main Interface Image - Placed inside the banner */}
          <div className="w-full max-w-[1000px] z-10 relative mt-4">
            <div className="rounded-t-xl md:rounded-t-2xl overflow-hidden shadow-2xl">
              <img src="/c3-hero.png" alt="Project Dashboard" className="w-full h-auto block" />
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
              {!hideHeader ? (<h2 className="text-[32px] md:text-[40px] font-bold mb-6 leading-[1.3] tracking-tight font-sans">CRM Analytics</h2>) : (<h2 className="text-[22px] font-bold mb-4 mt-2">Context</h2>)}
              <p className="text-[16px] md:text-[18px] leading-[1.8] mb-12 font-medium tracking-wide">
                Sense is an AI-powered recruiting platform that helps staffing agencies and enterprise teams manage hiring pipelines, automation, and analytics within a unified CRM.<br/><br/>
                As the platform expanded across multiple modules, inconsistencies in UI patterns and components began to emerge. This project focused on revamping the CRM using the Genesis Design System to create a scalable and consistent product foundation.
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
            When we launched the new CRM, one critical gap became obvious:<br/><br/>
            The system could execute hiring workflows but it couldn't measure them.<br/><br/>
            Recruitment Leaders, Data Analysts, and Hiring Managers needed answers to questions like:
          </p>
          
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-8">
            <ul className="list-disc pl-5 space-y-3 text-gray-700 font-medium">
              <li>Where are we losing candidates in the hiring funnel?</li>
              <li>Which sourcing channels produce the best hires?</li>
              <li>Why is time-to-hire increasing?</li>
              <li>Which recruiters are overloaded?</li>
            </ul>
          </div>
          
          <p className="text-[16px] md:text-[18px] -600 leading-relaxed">
            Although the data existed across the system, extracting insights required manual exports and external analysis.<br/><br/>
            To solve this, we designed <strong>CRM Analytics</strong> a centralized analytics layer that enables recruitment teams to monitor performance, identify bottlenecks, and make faster hiring decisions.
          </p>
        </div>

        {/* My Role Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-6">My Role</h3>
          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-4">
            As a Senior Product Designer, I led the CRM modernisation initiative using Genesis.<br/><br/>
            I initiated with:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li>Defined the analytics information architecture</li>
            <li>Partnered with data engineering on metric logic (e.g., Time-to-Hire, Conversion Ratios)</li>
            <li>Structuring key recruitment metrics and KPIs</li>
            <li>Designed pre-built dashboards across personas</li>
            <li>Built the Custom Dashboard Builder experience</li>
            <li>Structured export & data-out flows (most critical enterprise need)</li>
            <li>Designed alerts & predictive insight surfaces</li>
            <li>Led usability validation and rollout</li>
          </ul>
          <p className="text-[16px] md:text-[18px] -600 leading-relaxed">
            This was not just visualization work — it was system-level product thinking.<br/><br/>
            This project required aligning <strong>data architecture, user workflows, and business metrics</strong> into a unified analytics experience.
          </p>
        </div>

        {/* Problem Statement Section */}
        <div className="bg-[#1b1c3c] text-white rounded-xl p-8 md:p-10 mb-16 shadow-lg relative overflow-hidden">
          <h3 className="text-[22px] md:text-[28px] font-bold mb-6 /90">Problem Statement</h3>
          <div className="absolute top-4 right-4 text-white/10 text-9xl font-serif leading-none font-bold select-none pointer-events-none">"</div>
          <div className="relative z-10">
            <p className="text-[16px] md:text-[18px] leading-relaxed font-medium /90 mb-6">
              CRM lacked a centralized analytics engine, forcing enterprise customers to rely on manual reporting, analyst dependency, and fragmented data visibility.
            </p>
            <div className="border-l-4 border-indigo-400 pl-4 py-1">
              <p className="text-[16px] md:text-[18px] -200 font-medium">Without centralized analytics:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-indigo-200 text-sm">
                <li>Recruiters struggled to monitor pipeline progress</li>
                <li>Leadership lacked visibility into hiring efficiency</li>
                <li>Teams depended heavily on analysts for reporting</li>
                <li>Critical hiring insights were discovered too late</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Problem 1 Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-6">Problem 1: Fragmented Hiring Funnel Visibility</h3>
          <p className="text-[16px] md:text-[18px] -600 mb-6">Key recruitment metrics such as:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li>Applicants</li>
            <li>Offers Sent</li>
            <li>Offer Acceptance</li>
            <li>Hires</li>
            <li>Time-to-Hire</li>
            <li>Time spent in each stage</li>
          </ul>
          <p className="text-[16px] md:text-[18px] -600 mb-6">
            were spread across different modules of the CRM.<br/><br/>
            Users had no clear funnel visualization to understand candidate progression or identify bottlenecks in the hiring process.<br/><br/>
            As a result, teams struggled to pinpoint where candidates were dropping off.
          </p>

          <div className="mb-6">
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                alt="Fragmented UI" 
                className="w-full h-auto grayscale opacity-90 mix-blend-multiply"
              />
            </div>
          </div>
        </div>

        {/* Problem 2 Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-6">Problem 2: Limited Dashboard Customization</h3>
          <p className="text-[16px] md:text-[18px] -600 mb-6">
            Existing reports were static and difficult to customize.<br/><br/>
            Enterprise customers required flexibility to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li>Create role-specific dashboards</li>
            <li>Compare hiring metrics across departments</li>
            <li>Filter data by recruiter, job, location, or source</li>
            <li>Export reports for leadership and external stakeholders</li>
          </ul>
          <p className="text-[16px] md:text-[18px] -600 mb-6">
            Without flexible reporting tools, most teams relied on analysts to generate dashboards.
          </p>

          <div className="mb-6">
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                alt="Dashboard Customization" 
                className="w-full h-auto grayscale opacity-90 mix-blend-multiply"
              />
            </div>
          </div>
        </div>
        
        {/* Problem 3 Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-6">Problem 3: Lack of Proactive Insights</h3>
          <p className="text-[16px] md:text-[18px] -600 mb-6">
            Analytics primarily displayed historical data.<br/><br/>
            However, recruitment leaders needed early signals to prevent issues such as:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li>Hiring delays</li>
            <li>Candidate drop-offs</li>
            <li>Low offer acceptance rates</li>
            <li>Recruiter workload imbalance</li>
          </ul>
          <p className="text-[16px] md:text-[18px] -600">
            Without proactive alerts or predictive insights, problems were often identified too late.
          </p>
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
                <p className="text-[16px] md:text-[18px] font-bold -900 mb-1">• Improve Analytics Adoption Across Recruitment Teams</p>
                <p className="text-[16px] md:text-[18px] -600 ml-4">Enable hiring teams to easily access and use analytics to monitor recruitment performance and make informed decisions.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold -900 mb-1">• Reduce Dependency on Manual Reporting</p>
                <p className="text-[16px] md:text-[18px] -600 ml-4">Provide automated insights and dashboards to minimize reliance on manual data compilation and analyst support.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold -900 mb-1">• Strengthen Enterprise Product Value Through Insights</p>
                <p className="text-[16px] md:text-[18px] -600 ml-4">Deliver measurable analytics capabilities that reinforce the CRM's value as a strategic decision-making platform.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold -900 mb-1">• Support Data-Driven Hiring Decisions</p>
                <p className="text-[16px] md:text-[18px] -600 ml-4">Equip recruitment leaders with actionable insights to optimize hiring strategies and improve overall efficiency.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 pt-8 border-t border-gray-100">
            <div className="md:col-span-3">
              <h4 className="text-lg font-bold text-gray-900">User Goals</h4>
            </div>
            <div className="md:col-span-9 space-y-6">
              <div>
                <p className="text-[16px] md:text-[18px] font-bold -900 mb-1">• Quickly Understand Hiring Performance</p>
                <p className="text-[16px] md:text-[18px] -600 ml-4">Allow recruiters and hiring managers to easily track key metrics and evaluate recruitment progress.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold -900 mb-1">• Identify Bottlenecks in the Recruitment Funnel</p>
                <p className="text-[16px] md:text-[18px] -600 ml-4">Surface insights that highlight delays or inefficiencies in the hiring pipeline.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold -900 mb-1">• Create Customized Dashboards Based on Role</p>
                <p className="text-[16px] md:text-[18px] -600 ml-4">Enable users to tailor dashboards to their responsibilities and priorities.</p>
              </div>
              <div>
                <p className="text-[16px] md:text-[18px] font-bold -900 mb-1">• Receive Proactive Alerts About Hiring Risks</p>
                <p className="text-[16px] md:text-[18px] -600 ml-4">Notify teams about potential issues such as pipeline drop-offs or slow hiring stages.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solution 1 Section */}
        <div className="mb-16 pt-12 border-t border-gray-200">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-8">Solution 1: Pre-Built Hiring Intelligence Dashboards</h3>
          
          <div className="mb-6">
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white mb-0">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-auto pointer-events-none"
              >
                <source src="/c3-s1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
              <img 
                src="/c3-s1-1.png" 
                alt="Dashboard view 1" 
                className="w-full h-auto"
              />
            </div>
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
              <img 
                src="/c3-s1-2.png" 
                alt="Dashboard view 2" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-6">
            We designed a set of structured dashboards focused on the most critical hiring metrics.
          </p>

          <p className="text-[16px] md:text-[18px] -600 font-medium mb-4">Key dashboards included:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li>Hiring Pipeline & Funnel Insights</li>
            <li>Job Status and Aging</li>
            <li>Candidate Source Performance</li>
            <li>Offer and Hiring Conversion Insights</li>
            <li>Recruiter Productivity Metrics</li>
            <li>Diversity and Hiring Patterns</li>
          </ul>

          <p className="text-[16px] md:text-[18px] -600 font-medium mb-4">Each dashboard combined:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li>KPI summary cards</li>
            <li>Funnel visualizations</li>
            <li>trend charts</li>
            <li>detailed drill-down tables</li>
          </ul>
          
          <p className="text-[16px] md:text-[18px] -600 mb-6">
            This structure helped teams quickly identify where issues occurred in the hiring process.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg">
            <p className="text-[16px] md:text-[18px] font-bold -900 mb-2">Why it's better:</p>
            <ul className="list-disc pl-5 space-y-1 text-indigo-800 text-sm">
              <li>Provides a centralized view of recruitment performance</li>
              <li>Makes funnel bottlenecks immediately visible</li>
              <li>Reduces time spent compiling reports</li>
              <li>Helps leadership monitor hiring health in real time</li>
            </ul>
          </div>
        </div>

        {/* Solution 2 Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-8">Solution 2: Custom Dashboard & Report Builder</h3>
          
          <div className="mb-6">
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white mb-6">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                alt="Report Builder" 
                className="w-full h-auto grayscale opacity-90 mix-blend-multiply"
              />
            </div>
          </div>

          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-4">
            To support enterprise teams with different reporting needs, we introduced a <strong>custom dashboard builder</strong>.<br/><br/>
            Users could:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li>Select recruitment metrics and data fields</li>
            <li>Apply advanced filters (department, job, location, recruiter)</li>
            <li>Choose visualization types</li>
            <li>Rearrange dashboard layouts</li>
            <li>Save and reuse dashboard configurations</li>
          </ul>
          <p className="text-[16px] md:text-[18px] -600 mb-6">
            Reports could also be exported in multiple formats for external reporting.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg">
            <p className="text-[16px] md:text-[18px] font-bold -900 mb-2">Why it's better:</p>
            <ul className="list-disc pl-5 space-y-1 text-indigo-800 text-sm">
              <li>Enables self-serve analytics without data expertise</li>
              <li>Allows teams to create role-specific dashboards</li>
              <li>Reduces dependency on data analysts</li>
              <li>Supports enterprise reporting workflows</li>
            </ul>
          </div>
        </div>

        {/* Solution 3 Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-8">Solution 3: Alerts & Predictive Insights</h3>
          
          <div className="mb-8">
             <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-auto pointer-events-none"
              >
                <source src="/c3-s3.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-4">
            To move analytics from reactive reporting to proactive intelligence, we introduced alerts and predictive insights.<br/><br/>
            Examples included:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
            <li>Notifications when time-to-hire exceeds thresholds.</li>
            <li>Alerts when candidates remain too long in a stage.</li>
            <li>Offer acceptance rate drops.</li>
            <li>Recruiter workload imbalance.</li>
          </ul>
          
          <p className="text-[16px] md:text-[18px] -600 mb-6">
            These alerts helped teams identify problems earlier and take action before hiring performance declined.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg">
            <p className="text-[16px] md:text-[18px] font-bold -900 mb-2">Why it's better:</p>
            <ul className="list-disc pl-5 space-y-1 text-indigo-800 text-sm">
              <li>Surfaces risks before they impact hiring outcomes.</li>
              <li>Helps recruiters prioritize actions.</li>
              <li>Improves accountability across recruitment teams.</li>
              <li>Makes analytics more actionable.</li>
            </ul>
          </div>
        </div>

        {/* Impact Summary Section */}
        <div className="mb-16">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-6">Impact Summary</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-[36px] md:text-4xl font-bold mb-4">30%</h4>
              <p className="text-[16px] md:text-[18px] font-semibold mb-2 leading-tight">Faster design-to-development turnaround</p>
              <p className="text-[16px] md:text-[18px] /70">Analytics usage increased significantly across recruiting teams</p>
            </div>
            
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-[36px] md:text-4xl font-bold mb-4">28%</h4>
              <p className="text-[16px] md:text-[18px] font-semibold mb-2 leading-tight">Reduction in UI inconsistency bugs</p>
              <p className="text-[16px] md:text-[18px] /70">Recruiters engaged more actively with hiring performance metrics</p>
            </div>
            
            <div className="bg-[#1b1c3c] text-white p-6 rounded-xl">
              <h4 className="text-[36px] md:text-4xl font-bold mb-4">40%+</h4>
              <p className="text-[16px] md:text-[18px] font-semibold mb-2 leading-tight">Reduction in duplicated design work</p>
              <p className="text-[16px] md:text-[18px] /70">Leadership gained faster access to recruitment insights</p>
            </div>
          </div>
          
          <p className="text-[16px] md:text-[18px] -600 mt-6">
            Reporting cycles for leadership updates were significantly reduced<br/>
            More importantly, The CRM now feels like one cohesive product, not multiple stitched-together modules.
          </p>
        </div>

        {/* What I Would Have Done Next Section */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-6">What I Would Have Done Next</h3>
          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-8">
            Although the analytics solution helps teams better understand recruitment performance, the next phase would focus on expanding predictive insights and improving collaboration across hiring teams.
          </p>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">1. Forecast Hiring Demand Trends</h4>
              <p className="text-[16px] md:text-[18px] -600 leading-relaxed">
                Introducing forecasting capabilities would help teams anticipate future hiring needs based on historical recruitment data and pipeline trends.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">2. Benchmark Recruiter Performance</h4>
              <p className="text-[16px] md:text-[18px] -600 leading-relaxed">
                Providing benchmarking tools would allow organizations to compare recruiter performance across teams and identify opportunities for improvement.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">3. Add Anomaly Detection for Hiring Metrics</h4>
              <p className="text-[16px] md:text-[18px] -600 leading-relaxed">
                Integrating anomaly detection could automatically highlight unusual changes in hiring metrics, helping teams identify risks or unexpected shifts in the recruitment pipeline.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">4. Improve Collaboration with Shared Dashboards</h4>
              <p className="text-[16px] md:text-[18px] -600 leading-relaxed">
                Enabling shared and collaborative dashboards would allow recruiters, hiring managers, and leadership to align on hiring progress and insights more effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Reflection */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h3 className="text-[22px] md:text-[28px] font-bold -900 mb-6">Closing Reflection</h3>
          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-4">
            CRM Analytics required designing beyond dashboards.
          </p>
          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-4">
            It involved structuring recruitment data into a system that helps teams understand performance and make better hiring decisions.
          </p>
          <p className="text-[16px] md:text-[18px] -600 leading-relaxed mb-4">
            This project strengthened my ability to design <strong>data-driven enterprise experiences</strong>, balancing complex analytics capabilities with clear and intuitive user interfaces.
          </p>
        </div>
      </div>
      </div>
      <OtherProjects currentProjectId="conversational-b2b" />
      <Footer />
    </main>
  );
}
