import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import HeroSection from "@/components/landing/HeroSection";
import AudienceSection from "@/components/landing/AudienceSection";
import FeaturedCourseSection from "@/components/landing/FeaturedCourseSection";
import CategoriesSection from "@/components/landing/CategoriesSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "ChatGPT Mastery Program",
          description: "Master ChatGPT with 24+ hands-on lessons covering prompt engineering, business automation, coding, freelancing & productivity.",
          provider: {
            "@type": "Organization",
            name: "LearnGPTs",
            sameAs: "https://learngpts.lovable.app",
          },
          url: "https://learngpts.lovable.app",
          isAccessibleForFree: true,
          numberOfCredits: 24,
          educationalLevel: "Beginner to Advanced",
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "Online",
            courseWorkload: "PT10H",
          },
          potentialAction: {
            "@type": "SearchAction",
            target: "https://learngpts.lovable.app/prompts?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <AudienceSection />
        <FeaturedCourseSection />
        <CategoriesSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
