import { motion } from "framer-motion";
import { Mail, MessageCircle, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const contactOptions = [
  {
    icon: Mail,
    title: "Email Us",
    desc: "Send us an email and we'll get back to you within 24 hours.",
    action: "support@learngpt.com",
    href: "mailto:support@learngpt.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageCircle,
    title: "Community",
    desc: "Join our community to connect with other learners and share tips.",
    action: "Join Discord",
    href: "#",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: HelpCircle,
    title: "Help Center",
    desc: "Browse our resources and guides for quick answers to common issues.",
    action: "View Resources",
    href: "/resources",
    internal: true,
    gradient: "from-pink-500 to-rose-500",
  },
];

const ContactSection = () => {
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
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-4">
            Support
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-balance">
            Need Help? We're Here.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reach out anytime — our team and community are ready to help you succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {contactOptions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {item.internal ? (
                <Link
                  to={item.href}
                  className="group block glass-card rounded-2xl p-7 text-center hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 h-full"
                >
                  <ContactCardContent item={item} />
                </Link>
              ) : (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group block glass-card rounded-2xl p-7 text-center hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 h-full"
                >
                  <ContactCardContent item={item} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-5">
            Ready to start your AI learning journey?
          </p>
          <Button
            size="lg"
            asChild
            className="gradient-primary border-0 text-lg px-10 h-14 rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02] transition-all duration-300"
          >
            <Link to="/auth?signup=true">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const ContactCardContent = ({
  item,
}: {
  item: (typeof contactOptions)[number];
}) => (
  <>
    <div
      className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}
    >
      <item.icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
      {item.desc}
    </p>
    <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all duration-200">
      {item.action}
      <ArrowRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </span>
  </>
);

export default ContactSection;
