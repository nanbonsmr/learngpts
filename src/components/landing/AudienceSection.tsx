import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Rocket, Edit3, Code, Users } from "lucide-react";

const audiences = [
  { icon: GraduationCap, label: "Students", desc: "Study smarter, not harder" },
  { icon: Rocket, label: "Freelancers", desc: "Win more clients" },
  { icon: Briefcase, label: "Business Owners", desc: "Streamline operations" },
  { icon: Edit3, label: "Content Creators", desc: "Create 10x faster" },
  { icon: Code, label: "Developers", desc: "Code with AI assistance" },
  { icon: Users, label: "Everyone", desc: "Boost daily productivity" },
];

const AudienceSection = () => {
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
            Who This Platform is For
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're a student, freelancer, or business owner — we have the right learning path for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {audiences.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-1">{item.label}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
