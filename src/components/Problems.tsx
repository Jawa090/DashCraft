import { AlertTriangle, EyeOff, Clock, CheckCircle2, Zap, LayoutTemplate } from "lucide-react";
import FadeIn from "./FadeIn";

const benefits = [
  {
    icon: Clock,
    title: "Cut development time by 90%",
    description: "Don't waste months building internal tools. Our templates are production-ready, saving you 500+ engineering hours per project.",
  },
  {
    icon: LayoutTemplate,
    title: "Premium design, out of the box",
    description: "Stop wrestling with CSS. We provide a meticulously crafted design system that looks professional from day one.",
  },
  {
    icon: Zap,
    title: "Performance optimized",
    description: "Built on the latest tech stack (React, Tailwind, Vite) for blazing fast load times and smooth interactions.",
  },
];

const Problems = () => {
  return (
    <section id="benefits" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-sans font-extrabold text-4xl md:text-5xl mb-6 tracking-tight text-white">
              Dashboards shouldn't be hard.
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed font-light">
              Engineering teams spend 30% of their time building internal tools. <br className="hidden md:block" /> We fixed that, so you can focus on your core product.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="h-full glass-enhanced p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 group float-gentle bg-white/5 border border-white/10" style={{ animationDelay: `${index * 0.5}s` }}>
                <div className="w-14 h-14 bg-white/10 rounded-xl border border-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:border-blue-500/50 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-white group-hover:text-blue-300 transition-colors" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
