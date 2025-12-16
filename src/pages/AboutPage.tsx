import { motion } from "framer-motion";
import { Users, Target, Award, Zap, CheckCircle2 } from "lucide-react";

const AboutPage = () => {
  const processSteps = [
    {
      icon: Target,
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals to define the perfect dashboard architecture for your specific needs."
    },
    {
      icon: Zap,
      title: "High-Fidelity Design",
      description: "Our world-class designers create stunning, pixel-perfect interfaces that align with your brand identity."
    },
    {
      icon: Award, // Reused Award for Quality/Dev
      title: "Precision Development",
      description: "We build with clean, scalable code. 100% pixel accuracy and optimized performance guaranteed."
    },
    {
      icon: Users, // Reused Users for Handoff/Launch
      title: "Launch & Support",
      description: "Seamless deployment and ongoing support to ensure your product scales flawlessly as you grow."
    }
  ];

  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-950 -z-20"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300">Premium Dashboard Agency</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white tracking-tight">
            We build the dashboards<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">others can't.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            DashCraft is a specialized agency dedicated to crafting high-performance, visually stunning dashboards for ambitious brands and rapidly growing startups.
          </p>
        </motion.div>

        {/* Accuracy & Precision Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-32"
        >
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl blur-2xl -z-10"></div>
            <div className="glass-3d p-8 rounded-3xl border border-white/10 bg-slate-900/50">
              <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="flex-1 text-center text-xs text-slate-500 font-mono">accuracy_check.tsx</div>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-3 text-green-400">
                  <CheckCircle2 className="w-4 h-4" /> <span>Pixel_Perfect_Matches: 100%</span>
                </div>
                <div className="flex items-center gap-3 text-green-400">
                  <CheckCircle2 className="w-4 h-4" /> <span>Performance_Score: 99/100</span>
                </div>
                <div className="flex items-center gap-3 text-green-400">
                  <CheckCircle2 className="w-4 h-4" /> <span>Accessibility_Compliant: true</span>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/5 text-slate-300 mt-4">
                  <span className="text-blue-400">const</span> <span className="text-blue-400">quality</span> = <span className="text-yellow-400">await</span> precision.maximize();
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Obsessed with <br />
              <span className="text-blue-400">Accuracy.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              We don't just "build" design files; we translate them with mathematical precision. Our development process ensures that every padding, margin, and gradient matches your vision exactly.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                </div>
                Component-driven Architecture
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                </div>
                Type-safe & Scalable Codebase
              </li>
            </ul>
          </div>
        </motion.div>


        {/* Our Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A streamlined workflow designed to move from concept to shipment without the headaches.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent -z-10"></div>
                )}

                <div className="glass-3d p-8 rounded-2xl h-full hover:bg-white/5 transition-all duration-300 border border-white/5 group-hover:border-blue-500/30">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Helping Brands & Startups */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-3d p-12 md:p-20 rounded-3xl text-center relative overflow-hidden mb-20 border border-white/10"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/20 to-slate-950/80 -z-10"></div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
            Ready to scale your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">startup?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            We help fast-moving brands and startups skip the hiring queue. Get a senior-level dashboard team for a fraction of the cost, delivered with the speed and accuracy you need to impress investors and users.
          </p>
          <div className="flex justify-center gap-6">
            <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-lg hover:bg-slate-200 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200">
              Schedule a Call
            </button>
            <button className="px-8 py-4 rounded-full glass-button text-white font-bold text-lg border border-white/20 hover:bg-white/10 transition-colors">
              View Our Work
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutPage;