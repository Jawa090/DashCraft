import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { Zap, Globe, ShieldCheck, Server } from "lucide-react";

const locations = [
    { top: "30%", left: "20%", name: "San Francisco" },
    { top: "35%", left: "28%", name: "New York" },
    { top: "25%", left: "48%", name: "London" },
    { top: "28%", left: "52%", name: "Frankfurt" },
    { top: "35%", left: "80%", name: "Tokyo" },
    { top: "45%", left: "75%", name: "Singapore" },
    { top: "70%", left: "85%", name: "Sydney" },
    { top: "65%", left: "32%", name: "Sao Paulo" },
];

const GlobalScale = () => {
    return (
        <section className="py-32 px-6 relative overflow-hidden bg-slate-950">
            {/* Background World Map SVG Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" fill="currentColor" className="text-blue-500" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950"></div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <FadeIn>
                    <div className="text-center mb-20 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                            <Globe className="w-3 h-3" />
                            Global Infrastructure
                        </div>
                        <h2 className="font-sans font-extrabold text-4xl md:text-6xl mb-6 text-white tracking-tight">
                            Deploy to the edge in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">milliseconds.</span>
                        </h2>
                        <p className="text-slate-400 text-xl leading-relaxed font-light max-w-2xl mx-auto">
                            Our mesh network automatically routes traffic to the nearest node, ensuring your dashboard loads instantly from anywhere on Earth.
                        </p>
                    </div>
                </FadeIn>

                {/* Map Visualization */}
                <div className="relative w-full aspect-[2/1] bg-slate-900 border border-white/10 rounded-3xl mb-16 overflow-hidden shadow-2xl">
                    {/* Outline Map - Clearer representation */}
                    <div className="absolute inset-0 opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-no-repeat bg-center"></div>

                    {/* Glowing Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                    {/* Connecting Lines - Brighter */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-cyan-500/40 stroke-[2] fill-none drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                        <path d="M 200,150 Q 400,50 480,125 T 800,175" />
                        <path d="M 480,125 Q 520,200 750,225" />
                        <path d="M 280,175 Q 320,325 850,350" />
                    </svg>

                    {/* Nodes */}
                    {locations.map((loc, i) => (
                        <div
                            key={i}
                            className="absolute w-4 h-4 group cursor-pointer"
                            style={{ top: loc.top, left: loc.left }}
                        >
                            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-white shadow-[0_0_20px_rgba(34,211,238,1)] border-2 border-cyan-500"></span>

                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 shadow-xl pointer-events-none transform translate-y-2 group-hover:translate-y-0 duration-200">
                                {loc.name}
                                <span className="block text-[10px] text-slate-500 font-normal">Latency: &lt;15ms</span>
                                {/* Tooltip Arrow */}
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    <FadeIn delay={0.2}>
                        <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-colors group">
                            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Zap className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div className="text-4xl font-extrabold text-white mb-2 font-mono">35ms</div>
                            <p className="text-slate-400 font-medium">Global Latency Cap</p>
                            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                                Strict SLAs ensure your data is processed faster than human perception.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-colors group">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="text-4xl font-extrabold text-white mb-2 font-mono">99.999%</div>
                            <p className="text-slate-400 font-medium">Uptime Guarantee</p>
                            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                                Redundant infrastructure across 3 cloud providers prevents downtime.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.6}>
                        <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-indigo-500/30 transition-colors group">
                            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Server className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div className="text-4xl font-extrabold text-white mb-2 font-mono">30TB+</div>
                            <p className="text-slate-400 font-medium">Daily Data Ingest</p>
                            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                                Built to handle massive scale without breaking a sweat.
                            </p>
                        </div>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
};

export default GlobalScale;
