import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import { Database, Cloud, Layout, Code2, Lock, Share2, Globe, Cpu } from "lucide-react";

const Integrations = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const reverseRotate = useTransform(scrollYProgress, [0, 1], [360, 0]);

  return (
    <section className="py-24 px-6 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wide text-indigo-200">Universal Compatibility</span>
              </div>
              <h2 className="font-sans font-extrabold text-4xl md:text-5xl mb-6 tracking-tight text-white">
                Connects with everything <br /> you already use.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                DashCraft plays nice with your existing stack. Whether you're using Supabase, Firebase, or a custom backend, our templates slot right in.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Database className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Backend Agnostic</h4>
                    <p className="text-slate-400 text-sm">Works with PostgreSQL, MongoDB, MySQL</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Cloud className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Cloud Native</h4>
                    <p className="text-slate-400 text-sm">Deploy to Vercel, Netlify, or AWS in one click</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative flex justify-center">
            <div className="relative w-[500px] h-[500px]">
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-slate-900 border-2 border-indigo-500/50 flex items-center justify-center z-20 shadow-[0_0_50px_-10px_rgba(99,102,241,0.3)]">
                <div className="text-center">
                  <span className="text-2xl font-bold text-white">API</span>
                </div>
              </div>

              {/* Orbiting Icons */}
              <motion.div style={{ rotate }} className="absolute inset-0 z-10">
                {[
                  { icon: Code2, color: "text-blue-400", bg: "bg-blue-900/50", top: "0%", left: "50%" },
                  { icon: Lock, color: "text-emerald-400", bg: "bg-emerald-900/50", top: "50%", left: "100%" },
                  { icon: Share2, color: "text-pink-400", bg: "bg-pink-900/50", top: "100%", left: "50%" },
                  { icon: Layout, color: "text-amber-400", bg: "bg-amber-900/50", top: "50%", left: "0%" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    style={{ rotate: reverseRotate, top: item.top, left: item.left }}
                    className={`absolute w-16 h-16 rounded-2xl ${item.bg} border border-white/10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-lg backdrop-blur-md`}
                  >
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Outer Orbit */}
              <div className="absolute inset-0 rounded-full border border-white/5 border-dashed animate-spin-slow" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-12 rounded-full border border-white/5 border-dashed animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
