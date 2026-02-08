import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ShareModule from "@/components/ShareModule";
import { categories } from "@/data/content";
import { useAppStore } from "@/store/useAppStore";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Trophy } from "lucide-react";

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const { user } = useAppStore();
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Category not found</h1>
          <Button asChild><Link to="/categories">Back to Categories</Link></Button>
        </div>
      </div>
    );
  }

  const completed = category.lessons.filter((l) => user.completedLessons.includes(l.id)).length;
  const progress = category.lessons.length > 0 ? Math.round((completed / category.lessons.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={category.title}
        description={category.description}
        canonical={`/category/${category.id}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: category.title,
          description: category.description,
          provider: { "@type": "Organization", name: "LearnGPT" },
        }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <Button variant="ghost" asChild className="shrink-0">
              <Link to="/categories"><ArrowLeft className="mr-2 h-4 w-4" /> Back</Link>
            </Button>
            <ShareModule title={category.title} url={`/category/${category.id}`} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl overflow-hidden mb-8"
          >
            <div className="h-48 md:h-56 overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${category.color}20` }}
                >
                  <category.icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: category.color }} />
                </div>
                <div className="min-w-0">
                  <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-bold">{category.title}</h1>
                  <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{category.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{category.level}</span>
                <span className="text-xs text-muted-foreground">{category.lessons.length} lessons</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <Progress value={progress} className="h-3 flex-1" />
                <span className="text-sm font-semibold text-primary">{progress}%</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">{completed} of {category.lessons.length} lessons completed</p>
            </div>
          </motion.div>

          <div className="space-y-3">
            {category.lessons.map((lesson, i) => {
              const isCompleted = user.completedLessons.includes(lesson.id);
              return (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/lesson/${category.id}/${lesson.id}`}
                    className={`group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border transition-all duration-200 ${
                      isCompleted
                        ? "border-accent/30 bg-accent/5 hover:bg-accent/10"
                        : "border-border hover:border-primary/30 hover:bg-secondary/50 hover:shadow-md"
                    }`}
                  >
                    <div className={`h-9 w-9 sm:h-10 sm:w-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isCompleted ? "bg-accent/20" : "bg-secondary"
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                      ) : (
                        <span className="text-sm font-semibold text-muted-foreground">{i + 1}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm group-hover:text-primary transition-colors truncate">{lesson.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5 hidden sm:block">{lesson.description}</p>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground hidden xs:flex">
                        <Clock className="h-3 w-3" />
                        {lesson.duration}
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Quiz Section */}
          {category.quiz && category.quiz.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: category.lessons.length * 0.05 + 0.1 }}
              className="mt-8"
            >
              <Link
                to={`/quiz/${category.id}`}
                className={`group flex items-center gap-4 p-6 rounded-xl border-2 transition-all duration-200 ${
                  user.completedQuizzes?.includes(category.id)
                    ? "border-accent/40 bg-accent/5 hover:bg-accent/10"
                    : "border-primary/30 bg-primary/5 hover:bg-primary/10 hover:shadow-lg"
                }`}
              >
                <div
                  className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${
                    user.completedQuizzes?.includes(category.id)
                      ? "bg-accent/20"
                      : "bg-primary/20"
                  }`}
                >
                  {user.completedQuizzes?.includes(category.id) ? (
                    <CheckCircle className="h-6 w-6 text-accent" />
                  ) : (
                    <Trophy className="h-6 w-6 text-primary" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold group-hover:text-primary transition-colors">
                    📝 Module Quiz
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {user.completedQuizzes?.includes(category.id)
                      ? "Quiz completed! Take it again to refresh your knowledge."
                      : `Test your knowledge with ${category.quiz.length} questions. Score 60% or higher to pass.`}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryDetail;
