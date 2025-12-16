
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlassNavbar from "./components/GlassNavbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DashboardsPage from "./pages/DashboardsPage";
import GetStartedPage from "./pages/GetStartedPage";

import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <Toaster />
          <Sonner />
          <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">
            <GlassNavbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/dashboards" element={<DashboardsPage />} />
                <Route path="/get-started" element={<GetStartedPage />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
