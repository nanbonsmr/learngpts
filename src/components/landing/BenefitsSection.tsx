import { motion } from "framer-motion";
import { Clock, TrendingUp, Target, Shield, Zap, Star } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Save Time", desc: "Learn in bite-sized lessons you can finish in 5-10 minutes.", gradient: "from-blue-500 to-cyan-500" },
  { icon: TrendingUp, title: "Boost Productivity", desc: "Apply what you learn immediately to your work and projects.", gradient: "from-violet-500 to-purple-500" },
  { icon: Target, title: "Practical Skills", desc: "Every lesson includes real prompts and hands-on practice tasks.", gradient: "from-pink-500 to-rose-500" },
  { icon: Shield, title: "Learn Safely", desc: "Understand limitations and best practices from day one.", gradient: "from-emerald-500 to-green-500" },
  { icon: Zap, title: "Personalized Path", desc: "Choose your goal and level for a customized learning journey.", gradient: "from-amber-500 to-orange-500" },
  { icon: Star, title: "Free to Start", desc: "Access all beginner content for free. No credit card required.", gradient: "from-indigo-500 to-blue-500" },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-4">Why Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-balance">
            Why Learn With Us?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A structured, practical approach to mastering ChatGPT — designed for real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group glass-card rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-display font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
