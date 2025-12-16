import { Check, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "./FadeIn";

const Comparison = () => {
    return (
        <section id="pricing" className="py-24 px-6 relative overflow-hidden text-white">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="font-sans font-extrabold text-3xl md:text-5xl mb-6 text-white">
                            Why DashCraft?
                        </h2>
                        <p className="text-slate-400 text-lg">
                            The smartest way to launch your SaaS dashboard.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
                    {/* Hiring Developers */}
                    <FadeIn delay={0.1} className="h-full">
                        <div className="h-full bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col opacity-75 hover:opacity-100 transition-all duration-300 hover:bg-white/10">
                            <h3 className="font-bold text-xl mb-6 text-center text-slate-300">Hiring Developers</h3>
                            <ul className="space-y-4 text-sm text-slate-400 flex-1">
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-red-400 shrink-0" />
                                    <span>High salary costs ($120k+/yr)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-red-400 shrink-0" />
                                    <span>Weeks of recruiting time</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-red-400 shrink-0" />
                                    <span>Management overhead</span>
                                </li>
                            </ul>
                        </div>
                    </FadeIn>

                    {/* DashCraft */}
                    <FadeIn delay={0.2} className="relative z-20">
                        <div className="bg-slate-900 p-8 rounded-3xl border-2 border-blue-500 shadow-[0_0_50px_-12px_rgba(37,99,235,0.3)] relative scale-110 transform-style-3d overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>

                            <div className="text-center mb-6">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                    <Zap className="w-6 h-6 fill-blue-500 text-blue-500" />
                                </div>
                                <h3 className="font-bold text-2xl text-white">DashCraft</h3>
                                <div className="mt-2 text-sm text-slate-400 font-medium">
                                    <span className="bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Best Value</span>
                                </div>
                            </div>

                            <div className="flex items-baseline justify-center gap-1 mb-8">
                                <span className="text-4xl font-extrabold text-white">$299</span>
                                <span className="text-slate-500 font-medium">/lifetime</span>
                            </div>

                            <ul className="space-y-4 text-sm font-medium text-slate-300 mb-8">
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-green-400" />
                                    </div>
                                    <span>Unlock all 50+ templates</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-green-400" />
                                    </div>
                                    <span>Delivery in 24 hours</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-green-400" />
                                    </div>
                                    <span>Production-ready React code</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-green-400" />
                                    </div>
                                    <span>Lifetime updates</span>
                                </li>
                            </ul>

                            <Button size="lg" className="w-full font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 h-14 cursor-pointer">
                                Get Started Now
                            </Button>
                        </div>
                    </FadeIn>

                    {/* Typical Agency */}
                    <FadeIn delay={0.3} className="h-full">
                        <div className="h-full bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col opacity-75 hover:opacity-100 transition-all duration-300 hover:bg-white/10">
                            <h3 className="font-bold text-xl mb-6 text-center text-slate-300">Typical Agency</h3>
                            <ul className="space-y-4 text-sm text-slate-400 flex-1">
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-red-400 shrink-0" />
                                    <span>Expensive hourly rates</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-red-400 shrink-0" />
                                    <span>Scope creep charges</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-red-400 shrink-0" />
                                    <span>Slow communication</span>
                                </li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
