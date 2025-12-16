import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can I launch my first course?",
    answer: "Most users launch their first course within a week. Our intuitive course builder and templates make it easy to get started, even without technical experience."
  },
  {
    question: "Can I migrate from another platform?",
    answer: "Yes! We offer free migration assistance for users coming from other platforms. Our team will help transfer your content, students, and data seamlessly."
  },
  {
    question: "What payment methods do you support?",
    answer: "We support all major credit cards, PayPal, and bank transfers through our Stripe integration. You can also offer payment plans to your students."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <div className="section-badge mb-6 mx-auto w-fit">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            FAQ
          </div>
          <h2 className="font-serif text-3xl md:text-5xl">
            COMMON QUESTIONS<br />ANSWERED CLEARLY
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
