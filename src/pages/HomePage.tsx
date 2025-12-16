import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Dashboards from "@/components/Dashboards";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import Newsletter from "@/components/Newsletter";
import Features from "@/components/Features";

import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

import TrustedBy from "@/components/TrustedBy";
import EnterpriseScale from "@/components/EnterpriseScale";
import Integrations from "@/components/Integrations";

const HomePage = () => {
  return (
    <div className="relative">
      {/* Beautiful Grid Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-slate-950"></div>

        {/* Dynamic Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid-background"></div>
        </div>

        {/* Floating Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-40 left-1/3 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-violet-500/20 rotate-45 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-fuchsia-500/20 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-8 bg-blue-500/20 animate-bounce" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-1/2 right-20 w-6 h-6 border-2 border-purple-500/20 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
      </div>

      {/* Content with proper spacing */}
      <div className="relative z-10 pt-24">
        <Hero />
        <TrustedBy />
        <Problems />
        <HowItWorks />
        <EnterpriseScale />
        <Integrations />
        <Comparison />
        <FAQ />
        <Newsletter />
      </div>
    </div>
  );
};

export default HomePage;