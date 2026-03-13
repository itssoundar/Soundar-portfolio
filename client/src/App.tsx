import { Switch, Route } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ProjectDetail1 from "@/pages/ProjectDetail1";
import ProjectDetail2 from "@/pages/ProjectDetail2";
import ProjectDetail3 from "@/pages/ProjectDetail3";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/crm-ai" component={ProjectDetail1} />
      <Route path="/project/design-system" component={ProjectDetail2} />
      <Route path="/project/conversational-b2b" component={ProjectDetail3} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <SmoothCursor />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;