import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is LearnGPT really free?",
    a: "Yes! All beginner content is completely free. No credit card required. You can start learning right away after signing up.",
  },
  {
    q: "Do I need any prior experience with AI?",
    a: "Not at all. LearnGPT is designed for complete beginners. We start from the basics and gradually build up to advanced techniques.",
  },
  {
    q: "How long does it take to complete a lesson?",
    a: "Each lesson is designed to be completed in 5–10 minutes. You can learn at your own pace and pick up where you left off anytime.",
  },
  {
    q: "Can I use what I learn for my business?",
    a: "Absolutely. We have dedicated modules for business use cases including email writing, marketing, proposals, and workflow automation.",
  },
  {
    q: "Do I need a ChatGPT subscription?",
    a: "No. Our lessons work with the free version of ChatGPT. We'll note when a feature requires a paid plan, but most content applies to all users.",
  },
  {
    q: "How is this different from YouTube tutorials?",
    a: "LearnGPT offers a structured, progressive curriculum with hands-on exercises, quizzes, and a prompt library — not random, disconnected videos.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card rounded-2xl border border-border/40 px-6 data-[state=open]:shadow-lg transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-base py-5 hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
