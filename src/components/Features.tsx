import { BookOpen, Settings, Layout, BarChart3, Video, Zap, Layers, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";
import SpotlightCard from "./SpotlightCard";

const features = [
  {
    icon: Layers,
    title: "Drag & Drop Builder",
    description: "Create complex dashboard layouts in minutes. Our intuitive builder feels like using a design tool.",
    colSpan: "md:col-span-2",
  },
  {
    icon: Sparkles,
    title: "AI-Generated Content",
    description: "Let AI write your microhead, placeholders, and charts data.",
    colSpan: "md:col-span-1",
  },
  {
    icon: Layout,
    title: "Responsive by Default",
    description: "Every component is mobile-first and touch-optimized.",
    colSpan: "md:col-span-1",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Built-in charting librarly (Recharts/Visx) pre-configured for beauty.",
    colSpan: "md:col-span-2",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-32 px-6 relative overflow-hidden">
      {/* Floating particles for this section */}
      <div className="absolute top-10 left-20 w-3 h-3 particle opacity-50" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 particle opacity-50" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-10 w-2.5 h-2.5 particle opacity-50" style={{ animationDelay: '5s' }}></div>

      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wide text-blue-200">Power Features</span>
            </div>
            <h2 className="font-sans font-extrabold text-4xl md:text-5xl mb-6 tracking-tight text-white">
              Everything you need to <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">build faster.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1} className={`${feature.colSpan} h-full`}>
              <div className="glass-enhanced h-full p-8 group float-gentle border border-white/10 bg-white/5 md:bg-transparent" style={{ animationDelay: `${index * 0.7}s` }}>
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700 pointer-events-none">
                  <feature.icon className="w-32 h-32 text-white" />
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/20">
                    <feature.icon className="w-7 h-7 text-white group-hover:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3 text-white">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
