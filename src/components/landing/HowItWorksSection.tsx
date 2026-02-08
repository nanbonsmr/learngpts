import { motion } from "framer-motion";
import { UserPlus, Target, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: UserPlus, title: "Sign Up", desc: "Create your free account in seconds." },
  { icon: Target, title: "Choose Your Goal", desc: "Tell us what you want to use ChatGPT for." },
  { icon: BookOpen, title: "Start Learning", desc: "Follow your personalized learning path." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get started in three simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="h-16 w-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25">
                <step.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="absolute top-8 left-full w-full h-px bg-border hidden md:block -translate-y-1/2" style={{ display: i === steps.length - 1 ? "none" : undefined }} />
              <span className="text-xs font-semibold text-primary mb-2 block">Step {i + 1}</span>
              <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild className="gradient-primary border-0 text-lg px-8 h-14 rounded-xl shadow-lg shadow-primary/25">
            <Link to="/auth?signup=true">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
