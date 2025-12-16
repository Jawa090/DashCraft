import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    description: "Perfect for getting started",
    price: "19.99€",
    period: "/mo",
    features: [
      "Up to 3 courses",
      "100 students",
      "Basic analytics",
      "Email support",
      "Custom domain"
    ]
  },
  {
    name: "PRO",
    description: "For growing educators",
    price: "49.99€",
    period: "/mo",
    popular: true,
    features: [
      "Unlimited courses",
      "1,000 students",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
      "Integrations"
    ]
  },
  {
    name: "ACADEMY",
    description: "For teams and organizations",
    price: "99.99€",
    period: "/mo",
    features: [
      "Everything in Pro",
      "Unlimited students",
      "Team collaboration",
      "API access",
      "Dedicated support",
      "White-label option"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="section-badge mb-6 mx-auto w-fit">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Pricing
          </div>
          <h2 className="font-serif text-3xl md:text-5xl">
            CHOOSE THE PLAN THAT<br />BEST FITS YOUR GOALS
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`feature-card relative ${plan.popular ? 'border-primary ring-2 ring-primary' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="font-serif text-2xl mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
