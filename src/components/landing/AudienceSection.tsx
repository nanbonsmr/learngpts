import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Rocket, Edit3, Code, Users } from "lucide-react";

const audiences = [
  { icon: GraduationCap, label: "Students", desc: "Study smarter, not harder", color: "from-blue-500/20 to-blue-600/10" },
  { icon: Rocket, label: "Freelancers", desc: "Win more clients", color: "from-violet-500/20 to-violet-600/10" },
  { icon: Briefcase, label: "Business Owners", desc: "Streamline operations", color: "from-emerald-500/20 to-emerald-600/10" },
  { icon: Edit3, label: "Content Creators", desc: "Create 10x faster", color: "from-pink-500/20 to-pink-600/10" },
  { icon: Code, label: "Developers", desc: "Code with AI assistance", color: "from-amber-500/20 to-amber-600/10" },
  { icon: Users, label: "Everyone", desc: "Boost daily productivity", color: "from-cyan-500/20 to-cyan-600/10" },
];

const AudienceSection = () => {
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
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-4">Built For You</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-balance">
            Who This Platform is For
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're a student, freelancer, or business owner — we have the right learning path for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
          {audiences.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group glass-card rounded-2xl p-5 sm:p-6 text-center hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 cursor-default"
            >
              <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-1">{item.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
