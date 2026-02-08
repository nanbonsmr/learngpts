import { motion } from "framer-motion";
import { UserPlus, Target, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: UserPlus, title: "Sign Up", desc: "Create your free account in seconds.", num: "01" },
  { icon: Target, title: "Choose Your Goal", desc: "Tell us what you want to use ChatGPT for.", num: "02" },
  { icon: BookOpen, title: "Start Learning", desc: "Follow your personalized learning path.", num: "03" },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-4">Getting Started</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-balance">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get started in three simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative text-center glass-card rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Step number watermark */}
              <span className="absolute top-3 right-4 text-5xl font-extrabold text-muted/40 font-display select-none">
                {step.num}
              </span>

              <div className="h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/20 glow-sm">
                <step.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            asChild
            className="gradient-primary border-0 text-base sm:text-lg px-8 sm:px-10 h-12 sm:h-14 rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
          >
            <Link to="/auth?signup=true">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
