import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, BarChart3, CreditCard, ShoppingCart } from "lucide-react";
import FadeIn from "./FadeIn";
import SpotlightCard from "./SpotlightCard";

const dashboards = [
    {
        title: "CRM & Sales",
        description: "Complete customer relationship management with pipelines and activity tracking.",
        features: ["Deal Pipeline", "Contact Management", "Email Integration"],
        icon: Users,
        color: "bg-blue-500",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Analytics Hub",
        description: "Real-time data visualization with customizable widget layouts.",
        features: ["Real-time Charts", "Custom Reports", "Data Export"],
        icon: BarChart3,
        color: "bg-purple-500",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Fintech Admin",
        description: "Secure financial dashboard for transaction monitoring and reporting.",
        features: ["Transaction Logs", "Fraud Detection", "Multi-currency"],
        icon: CreditCard,
        color: "bg-green-500",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "E-commerce Core",
        description: "Manage orders, inventory, and customers from a central command center.",
        features: ["Order Processing", "Inventory Sync", "Customer Support"],
        icon: ShoppingCart,
        color: "bg-orange-500",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
    }
];

const Dashboards = () => {
    return (
        <section id="dashboards" className="py-24 px-6 bg-slate-50/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-100/40 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <FadeIn>
                    <div className="text-center mb-20">
                        <h2 className="font-sans font-extrabold text-4xl md:text-5xl mb-6 text-slate-900">
                            50+ Production-Ready <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Templates Included</span>
                        </h2>
                        <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light">
                            Stop reinventing the wheel. Get every dashboard type you'll ever need.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {dashboards.map((dashboard, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <SpotlightCard className="h-full bg-white group hover:shadow-2xl transition-all duration-500 border-slate-200">
                                <div className="flex flex-col h-full rounded-2xl overflow-hidden">
                                    {/* Image Area */}
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                                        <img
                                            src={dashboard.image}
                                            alt={dashboard.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2">
                                                <dashboard.icon className={`w-4 h-4 ${dashboard.color.replace("bg-", "text-")}`} />
                                                <span className="text-xs font-bold text-slate-800">{dashboard.title}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 flex-1 flex flex-col">
                                        <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                                            {dashboard.description}
                                        </p>

                                        <div className="space-y-3 mb-8">
                                            {dashboard.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex gap-4 mt-auto">
                                            <Button className="flex-1 font-bold bg-slate-900 text-white hover:bg-slate-800">
                                                Preview
                                            </Button>
                                            <Button variant="outline" className="flex-1 font-bold border-slate-200 hover:bg-slate-50">
                                                Details
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.4}>
                    <div className="text-center">
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-2 bg-white hover:bg-slate-50 shadow-sm hover:shadow-md transition-all rounded-xl">
                            View all 50+ templates
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Dashboards;
