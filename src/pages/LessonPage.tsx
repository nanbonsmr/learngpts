import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/data/content";
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Copy, BookOpen, Lightbulb, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const LessonPage = () => {
  const { categoryId, lessonId } = useParams();
  const navigate = useNavigate();
  const { user, completeLesson, uncompleteLesson } = useAppStore();

  const category = categories.find((c) => c.id === categoryId);
  const lesson = category?.lessons.find((l) => l.id === lessonId);
  const lessonIndex = category?.lessons.findIndex((l) => l.id === lessonId) ?? -1;
  const nextLesson = category?.lessons[lessonIndex + 1];
  const prevLesson = lessonIndex > 0 ? category?.lessons[lessonIndex - 1] : null;

  const isCompleted = lesson ? user.completedLessons.includes(lesson.id) : false;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  if (!category || !lesson) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Lesson not found</h1>
          <Button asChild><Link to="/categories">Back to Categories</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Button variant="ghost" asChild className="mb-6">
            <Link to={`/category/${category.id}`}><ArrowLeft className="mr-2 h-4 w-4" /> {category.title}</Link>
          </Button>

          {/* Lesson Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Lesson {lessonIndex + 1} of {category.lessons.length}
              </span>
              {isCompleted && (
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" /> Completed
                </span>
              )}
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">{lesson.title}</h1>
          </motion.div>

          {/* Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-6 md:p-8 mb-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="font-display font-semibold text-lg">Explanation</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{lesson.description}</p>
          </motion.div>

          {/* Example Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-6 md:p-8 mb-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h2 className="font-display font-semibold text-lg">Example Prompt</h2>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(lesson.examplePrompt)}
                className="shrink-0"
              >
                <Copy className="h-3 w-3 mr-1" />
                Copy
              </Button>
            </div>
            <div className="bg-secondary/80 rounded-xl p-4 font-mono text-sm leading-relaxed">
              {lesson.examplePrompt}
            </div>
          </motion.div>

          {/* Example Output */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-6 md:p-8 mb-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5 text-accent" />
              <h2 className="font-display font-semibold text-lg">Example Output</h2>
            </div>
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 text-sm leading-relaxed whitespace-pre-line">
              {lesson.exampleOutput}
            </div>
          </motion.div>

          {/* Practice Task */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card rounded-2xl p-6 md:p-8 mb-8 border-2 border-primary/20"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🎯</span>
              <h2 className="font-display font-semibold text-lg">Practice Task</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{lesson.practiceTask}</p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex gap-3">
              {prevLesson && (
                <Button variant="outline" asChild>
                  <Link to={`/lesson/${category.id}/${prevLesson.id}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </Link>
                </Button>
              )}
            </div>

            <div className="flex gap-3">
              <Button
                variant={isCompleted ? "outline" : "default"}
                onClick={() => {
                  if (isCompleted) {
                    uncompleteLesson(lesson.id);
                    toast.info("Lesson marked as incomplete");
                  } else {
                    completeLesson(lesson.id);
                    toast.success("Lesson completed! 🎉");
                  }
                }}
                className={!isCompleted ? "gradient-primary border-0" : ""}
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                {isCompleted ? "Mark Incomplete" : "Mark as Completed"}
              </Button>

              {nextLesson && (
                <Button asChild variant="outline">
                  <Link to={`/lesson/${category.id}/${nextLesson.id}`}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LessonPage;
