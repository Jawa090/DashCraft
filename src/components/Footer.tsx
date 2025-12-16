import { Github, Twitter, Linkedin, Mail, Phone, MapPin, Star, Shield, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 text-slate-400 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute -top-[20%] left-[20%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-[20%] right-[20%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <FadeIn>
          {/* Newsletter Section */}
          <div className="glass-3d p-8 mb-16 text-center">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Stay Updated with New Dashboards
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Get notified when we release new CRM dashboard templates and exclusive offers for our premium customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 backdrop-blur-xl"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 px-6">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-12 mb-16">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative p-2 rounded-xl backdrop-blur-xl border border-white/20" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">D</span>
                  </div>
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-white">DashCraft</span>
              </div>
              <p className="leading-relaxed max-w-sm font-light mb-6">
                Premium CRM dashboard templates for modern businesses.
                Launch your customer management system in days, not months.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">15,000+ Customers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Secure & Reliable</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">Instant Download</span>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold mb-6 text-white">CRM Dashboards</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/dashboards" className="hover:text-primary transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Customer Management
                </Link></li>
                <li><Link to="/dashboards" className="hover:text-primary transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Sales Analytics
                </Link></li>
                <li><Link to="/dashboards" className="hover:text-primary transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Call Center CRM
                </Link></li>
                <li><Link to="/dashboards" className="hover:text-primary transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Email Marketing
                </Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-6 text-white">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
                <li><Link to="/dashboards" className="hover:text-primary transition-colors">Our Products</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold mb-6 text-white">Support</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a href="mailto:support@dashcraft.com" className="hover:text-primary transition-colors">
                    support@dashcraft.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span>24/7 Live Chat</span>
                </li>
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Documentation</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <p className="text-sm">
                  © 2024 DashCraft. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm">
                  <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-500">Follow us:</span>
                <div className="flex gap-4">
                  <a href="#" className="glass-button p-2 hover:text-primary transition-colors transform hover:scale-110">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="glass-button p-2 hover:text-primary transition-colors transform hover:scale-110">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="#" className="glass-button p-2 hover:text-primary transition-colors transform hover:scale-110">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
