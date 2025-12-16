import { Star, Quote, Building2 } from "lucide-react";
import FadeIn from "./FadeIn";
import SpotlightCard from "./SpotlightCard";

const testimonials = [
  {
    quote: "We replaced our entire internal admin panel in 3 days. The code quality is strictly enterprise-grade.",
    author: "Alex Rivera",
    role: "VP of Engineering",
    company: "FinTech Corp",
    metric: "40% Faster Dev Cycles",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
  {
    quote: "Security compliance was our biggest hurdle. DashCraft's pre-built auth and audit logs saved us months.",
    author: "Sarah Chen",
    role: "Staff Engineer",
    company: "HealthSafe",
    metric: "$80k Saved in Audits",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    quote: "The only template I've found that actually scales. We're serving 50k+ daily users on this dashboard.",
    author: "Marcus Johnson",
    role: "CTO",
    company: "DataFlow",
    metric: "99.99% Uptime",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
  },
  {
    quote: "Our design team was blown away. It doesn't look like a template, it looks like a bespoke product.",
    author: "Emily Davis",
    role: "Head of Product",
    company: "CreativeCloud",
    metric: "2x User Engagement",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
  },
  {
    quote: "Finally, a dashboard kit that respects TypeScript best practices. A joy to extend.",
    author: "Michael Brown",
    role: "Senior Architect",
    company: "TechGiant",
    metric: "Zero Tech Debt",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    quote: "Support is incredible. They helped us integrate our custom GraphQL API in under an hour.",
    author: "David Wilson",
    role: "Lead Developer",
    company: "ApiWorks",
    metric: "Instant Integration",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-slate-950">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950 opacity-50 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <FadeIn>
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Market Leaders
            </div>
            <h2 className="font-sans font-extrabold text-4xl md:text-6xl mb-6 text-white tracking-tight">
              The choice of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Unicorns</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Enterprises</span>.
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed font-light max-w-2xl mx-auto">
              We don't just build templates. We build the foundation for billion-dollar products.
            </p>
          </div>
        </FadeIn>

        <div className="flex overflow-hidden group mask-gradient-x">
          <div className="flex animate-marquee gap-8 py-8 min-w-full shrink-0">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="w-[450px] shrink-0">
                <SpotlightCard className="h-full p-8 flex flex-col bg-white/5 backdrop-blur-md border-white/10 hover:border-blue-500/50 transition-colors group shadow-lg">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-white/5 group-hover:text-blue-500/20 transition-colors" />
                  </div>

                  <p className="text-slate-300 text-lg leading-relaxed mb-8 flex-1 font-light italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="pt-6 border-t border-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img src={testimonial.image} alt={testimonial.author} className="w-10 h-10 rounded-full bg-slate-800 border border-white/10" />
                        <div>
                          <p className="font-bold text-white text-sm">{testimonial.author}</p>
                          <p className="text-slate-500 text-xs">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wide">
                        <span className="text-slate-500">{testimonial.role}</span>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                        {testimonial.metric}
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
