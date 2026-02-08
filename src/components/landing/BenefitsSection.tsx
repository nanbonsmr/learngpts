import { motion } from "framer-motion";
import { Clock, TrendingUp, Target, Shield, Zap, Star } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Save Time", desc: "Learn in bite-sized lessons you can finish in 5-10 minutes." },
  { icon: TrendingUp, title: "Boost Productivity", desc: "Apply what you learn immediately to your work and projects." },
  { icon: Target, title: "Practical Skills", desc: "Every lesson includes real prompts and hands-on practice tasks." },
  { icon: Shield, title: "Learn Safely", desc: "Understand limitations and best practices from day one." },
  { icon: Zap, title: "Personalized Path", desc: "Choose your goal and level for a customized learning journey." },
  { icon: Star, title: "Free to Start", desc: "Access all beginner content for free. No credit card required." },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Why Learn With Us?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A structured, practical approach to mastering ChatGPT — designed for real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl hover:bg-card transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
