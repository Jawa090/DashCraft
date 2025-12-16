import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Github, Mail, ShieldCheck, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const GetStartedPage = () => {
    const [activeTab, setActiveTab] = useState<"signup" | "sales">("signup");

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/90 pointer-events-none"></div>

            {/* Left Side - Social Proof & Context */}
            <div className="relative z-10 w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between border-r border-white/5">
                <div className="mb-12">
                    <Link to="/" className="inline-flex items-center gap-2 mb-12 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                            <span className="text-white font-bold text-lg">D</span>
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight text-white/90">DashCraft</span>
                    </Link>

                    <h1 className="font-sans font-extrabold text-4xl md:text-5xl text-white mb-6 leading-tight">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">top 1%</span> of engineering teams.
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                        Stop rebuilding the same dashboard components. Get a production-ready suite that scales with your ambition.
                    </p>
                </div>

                <div className="space-y-8">
                    <div className="flex flex-col gap-4">
                        {[
                            "SOC2 Type II Compliant",
                            "Unlimited Projects & Updates",
                            "Priority Slack Support"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-blue-500">★</span>)}
                        </div>
                        <p className="text-slate-300 italic mb-4">"We shipped our admin panel in 3 days instead of 3 months. The code quality is immaculate."</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">JD</div>
                            <div>
                                <p className="text-white font-bold text-sm">John Doe</p>
                                <p className="text-slate-500 text-xs">CTO at TechFlow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Auth Form */}
            <div className="relative z-10 w-full md:w-1/2 p-8 md:p-16 flex items-center justify-center">
                <div className="w-full max-w-md">

                    {/* Tabs */}
                    <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 rounded-xl border border-white/10 mb-8">
                        <button
                            onClick={() => setActiveTab("signup")}
                            className={`py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${activeTab === 'signup' ? 'bg-slate-800 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                        >
                            Create Account
                        </button>
                        <button
                            onClick={() => setActiveTab("sales")}
                            className={`py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${activeTab === 'sales' ? 'bg-slate-800 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                        >
                            Contact Sales
                        </button>
                    </div>

                    {activeTab === "signup" ? (
                        <FadeIn>
                            <div className="space-y-4">
                                <Button variant="outline" className="w-full h-12 text-base font-medium border-white/10 hover:bg-white/5 hover:text-white text-slate-300 gap-3">
                                    <Github className="w-5 h-5" />
                                    Continue with GitHub
                                </Button>
                                <Button variant="outline" className="w-full h-12 text-base font-medium border-white/10 hover:bg-white/5 hover:text-white text-slate-300 gap-3">
                                    <Mail className="w-5 h-5" />
                                    Continue with Google
                                </Button>

                                <div className="relative py-4">
                                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
                                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-slate-950 px-2 text-slate-500">Or continue with email</span></div>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Work Email</label>
                                        <input type="email" placeholder="name@company.com" className="w-full h-12 px-4 rounded-lg bg-slate-900 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white transition-all outline-none" />
                                    </div>
                                    <Button size="lg" className="w-full h-12 text-base font-bold bg-blue-600 hover:bg-blue-500 transition-colors">
                                        Get Started Free
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                                <p className="text-center text-xs text-slate-500 mt-6">
                                    By clicking continue, you agree to our <a href="#" className="text-blue-400 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>.
                                </p>
                            </div>
                        </FadeIn>
                    ) : (
                        <FadeIn>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">First Name</label>
                                        <input type="text" placeholder="John" className="w-full h-12 px-4 rounded-lg bg-slate-900 border border-white/10 focus:border-blue-500 outline-none text-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Last Name</label>
                                        <input type="text" placeholder="Doe" className="w-full h-12 px-4 rounded-lg bg-slate-900 border border-white/10 focus:border-blue-500 outline-none text-white" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Work Email</label>
                                    <input type="email" placeholder="name@company.com" className="w-full h-12 px-4 rounded-lg bg-slate-900 border border-white/10 focus:border-blue-500 outline-none text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Company Size</label>
                                    <select className="w-full h-12 px-4 rounded-lg bg-slate-900 border border-white/10 focus:border-blue-500 outline-none text-white">
                                        <option>1-50 employees</option>
                                        <option>51-200 employees</option>
                                        <option>201-1000 employees</option>
                                        <option>1000+ employees</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">How can we help?</label>
                                    <textarea placeholder="Tell us about your project needs..." className="w-full h-32 px-4 py-3 rounded-lg bg-slate-900 border border-white/10 focus:border-blue-500 outline-none text-white resize-none"></textarea>
                                </div>
                                <Button size="lg" className="w-full h-12 text-base font-bold bg-indigo-600 hover:bg-indigo-500 transition-colors">
                                    Request Demo
                                </Button>
                            </div>
                        </FadeIn>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GetStartedPage;
