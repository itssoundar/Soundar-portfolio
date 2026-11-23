import { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
const ProjectDetail1 = lazy(() => import("@/pages/ProjectDetail1"));
const ProjectDetail2 = lazy(() => import("@/pages/ProjectDetail2"));
const ProjectDetail3 = lazy(() => import("@/pages/ProjectDetail3"));
const ProjectDetail4 = lazy(() => import("@/pages/ProjectDetail4"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/crm-ai">{() => <ProjectDetail1 />}</Route>
      <Route path="/project/design-system">{() => <ProjectDetail2 />}</Route>
      <Route path="/project/conversational-b2b">{() => <ProjectDetail3 />}</Route>
      <Route path="/project/design-system-v2">{() => <ProjectDetail4 />}</Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Suspense fallback={<div className="min-h-screen bg-white" aria-busy="true" />}>
          <Router />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;