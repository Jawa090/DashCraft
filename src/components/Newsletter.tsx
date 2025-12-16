import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";

const Newsletter = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Floating particles for this section */}
      <div className="absolute top-20 left-1/4 w-2 h-2 particle opacity-50" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-20 right-1/4 w-3 h-3 particle opacity-50" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-20 w-1.5 h-1.5 particle opacity-50" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <FadeIn>
          <h2 className="font-sans font-extrabold text-5xl md:text-7xl mb-8 text-white tracking-tight leading-[1.05]">
            Stop planning.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-400">Starts shipping.</span>
          </h2>

          <p className="text-slate-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Join 500+ engineering teams who saved months of development time with DashCraft.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button size="lg" className="px-10 h-16 text-xl font-bold shadow-xl hover:shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
              Get Instant Access
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="px-10 h-16 text-xl font-medium border-white/10 hover:bg-white/10 text-white w-full sm:w-auto">
              Talk to Sales
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No credit card required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Money-back guarantee
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Cancel anytime
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Newsletter;
