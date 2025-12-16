import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  TrendingUp,
  Calendar,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardsPage = () => {
  const dashboards = [
    {
      icon: Users,
      title: "Customer Management CRM",
      description: "Complete customer relationship management dashboard with contact tracking, deal pipeline, and sales analytics.",
      features: ["Contact Management", "Deal Pipeline", "Sales Analytics", "Activity Tracking"],
      price: "$299",
      rating: 4.9,
      sales: "2,500+ sold"
    },
    {
      icon: TrendingUp,
      title: "Sales Analytics CRM",
      description: "Advanced sales performance dashboard with revenue tracking, forecasting, and team performance metrics.",
      features: ["Revenue Tracking", "Sales Forecasting", "Team Performance", "Goal Management"],
      price: "$399",
      rating: 4.8,
      sales: "1,800+ sold"
    },
    {
      icon: Phone,
      title: "Call Center CRM",
      description: "Specialized dashboard for call centers with call tracking, agent performance, and customer service metrics.",
      features: ["Call Tracking", "Agent Performance", "Queue Management", "Service Metrics"],
      price: "$349",
      rating: 4.7,
      sales: "1,200+ sold"
    },
    {
      icon: Mail,
      title: "Email Marketing CRM",
      description: "Email campaign management dashboard with automation, analytics, and customer segmentation tools.",
      features: ["Campaign Management", "Email Automation", "Segmentation", "Performance Analytics"],
      price: "$279",
      rating: 4.9,
      sales: "3,100+ sold"
    },
    {
      icon: Calendar,
      title: "Appointment CRM",
      description: "Scheduling and appointment management dashboard perfect for service-based businesses.",
      features: ["Appointment Scheduling", "Calendar Management", "Client Reminders", "Service Tracking"],
      price: "$249",
      rating: 4.6,
      sales: "900+ sold"
    },
    {
      icon: BarChart3,
      title: "Complete CRM Suite",
      description: "All-in-one CRM dashboard combining sales, marketing, and customer service in one powerful interface.",
      features: ["Full CRM Features", "Multi-department", "Advanced Analytics", "Custom Reports"],
      price: "$599",
      rating: 5.0,
      sales: "800+ sold"
    }
  ];

  const features = [
    "Ready-to-deploy React components",
    "Complete source code included",
    "Responsive design for all devices",
    "Modern UI with glass morphism",
    "Easy customization and branding",
    "Comprehensive documentation"
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient-aurora mb-6">
            CRM Dashboards
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Premium, ready-to-deploy CRM dashboard templates that help you launch your customer management system in days, not months.
          </p>
        </motion.div>

        {/* Features Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-3d p-8 mb-20 text-center"
        >
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">
            What's Included in Every Dashboard
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dashboards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {dashboards.map((dashboard, index) => {
            const Icon = dashboard.icon;
            return (
              <div
                key={index}
                className="glass-3d p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="glass-button p-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {dashboard.rating}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {dashboard.sales}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  {dashboard.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {dashboard.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {dashboard.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    {dashboard.price}
                  </span>
                  <Button
                    className="glass-button bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0"
                  >
                    Buy Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-3d p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Need a Custom CRM Dashboard?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find exactly what you need? We also create custom CRM dashboards tailored to your specific business requirements.
          </p>
          <Button
            size="lg"
            className="glass-button bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 px-8 py-3 text-lg"
          >
            Request Custom Dashboard
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardsPage;