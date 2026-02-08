import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Manager",
    text: "LearnGPT transformed how I work. I went from spending hours on emails to crafting perfect drafts in minutes. The prompt templates alone saved me 10+ hours a week.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Freelance Writer",
    text: "The course structure is brilliant. Each lesson builds on the last, and the practice tasks made sure I actually retained what I learned. My client proposals now convert at 2x the rate.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Computer Science Student",
    text: "I was skeptical about AI courses, but LearnGPT is different. The coding module helped me debug faster and the prompt engineering skills transfer to every AI tool I use.",
    rating: 5,
  },
  {
    name: "Michael Foster",
    role: "Small Business Owner",
    text: "Worth every minute. I automated half my customer service responses and created a content calendar in a single afternoon using what I learned here.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    role: "UX Researcher",
    text: "The research module is incredible. I use the prompts daily for user interviews, competitive analysis, and synthesizing findings. It's like having a research assistant.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Product Manager",
    text: "Finally, a course that teaches practical AI skills, not theory. Within a week I was using ChatGPT to draft PRDs, analyze user feedback, and plan sprints more efficiently.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Student Reviews
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-6 mb-4">
            Loved by <span className="gradient-text">learners worldwide</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join thousands of professionals, students, and creators who leveled up their AI skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`h-4 w-4 ${
                      s < t.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
