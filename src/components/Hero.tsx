import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Bell, CreditCard, LayoutDashboard, Search, Settings, Users, Calendar, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

import ThreeDCard from "./ThreeDCard";
import HeroDashboard from "./HeroDashboard";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Floating particles - Adjusted for dark mode visibility */}
      <div className="absolute top-20 left-10 w-2 h-2 particle opacity-50" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-3 h-3 particle opacity-50" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 particle opacity-50" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-2.5 h-2.5 particle opacity-50" style={{ animationDelay: '6s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -z-10" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto text-center max-w-6xl px-6 relative z-10">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm mb-8 hover:bg-white/10 transition-colors cursor-default">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wide text-white/80">v2.0 Now Live</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[1.1] mb-6 tracking-tight text-white drop-shadow-sm">
            Launch your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 typing-cursor">SaaS dashboard</span> <br className="hidden md:block" />
            faster than ever.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Don't waste 500+ hours building internal tools. Get a production-ready, highly performant dashboard suite in days.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col items-center gap-4 mb-20">
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] border-0 hover:-translate-y-1 transition-all duration-300">
                <Zap className="w-5 h-5 fill-current" />
                Start Building Free
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-white/10 text-white font-medium bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                View Live Demo
              </Button>
            </div>
            <div className="flex items-center gap-6 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> No credit card required</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> 14-day free trial</span>
            </div>
          </div>
        </FadeIn>

        {/* Dashboard Preview with 3D Tilt - DARK MODE */}
        <FadeIn delay={0.5} direction="up" className="relative mx-auto max-w-6xl mb-20">
          <ThreeDCard intensity={15} className="cursor-default">
            <HeroDashboard />
          </ThreeDCard>
        </FadeIn>

      </div>


    </section>
  );
};

export default Hero;
