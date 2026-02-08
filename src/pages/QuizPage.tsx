import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/data/content";
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  XCircle,
  Trophy,
  RotateCcw,
  BookOpen,
} from "lucide-react";
import { toast } from "sonner";

const QuizPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { completeQuiz } = useAppStore();

  const category = categories.find((c) => c.id === categoryId);
  const quiz = category?.quiz ?? [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!category || quiz.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold mb-4">
            Quiz not found
          </h1>
          <Button asChild>
            <Link to="/categories">Back to Categories</Link>
          </Button>
        </div>
      </div>
    );
  }

  const question = quiz[currentQuestion];
  const progress = ((currentQuestion + (isAnswered ? 1 : 0)) / quiz.length) * 100;

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === question.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion((c) => c + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      const finalScore = score;
      const percentage = Math.round((finalScore / quiz.length) * 100);
      if (percentage >= 60) {
        completeQuiz(category.id);
        toast.success("Quiz passed! 🎉");
      }
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  const percentage = Math.round((score / quiz.length) * 100);
  const passed = percentage >= 60;

  if (isFinished) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-2xl p-8 md:p-12 text-center"
            >
              <div
                className={`h-20 w-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
                  passed
                    ? "bg-accent/20 text-accent"
                    : "bg-destructive/20 text-destructive"
                }`}
              >
                {passed ? (
                  <Trophy className="h-10 w-10" />
                ) : (
                  <XCircle className="h-10 w-10" />
                )}
              </div>

              <h1 className="font-display text-3xl font-bold mb-2">
                {passed ? "Congratulations! 🎉" : "Keep Practicing!"}
              </h1>
              <p className="text-muted-foreground mb-6">
                {passed
                  ? "You've passed the quiz and demonstrated your understanding of this module."
                  : "You need at least 60% to pass. Review the lessons and try again!"}
              </p>

              <div className="flex items-center justify-center gap-6 sm:gap-8 mb-8">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary">{score}</p>
                  <p className="text-sm text-muted-foreground">Correct</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold">{quiz.length}</p>
                  <p className="text-sm text-muted-foreground">Total</p>
                </div>
                <div className="text-center">
                  <p
                    className={`text-3xl sm:text-4xl font-bold ${
                      passed ? "text-accent" : "text-destructive"
                    }`}
                  >
                    {percentage}%
                  </p>
                  <p className="text-sm text-muted-foreground">Score</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {!passed && (
                  <Button onClick={handleRetry} variant="outline">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Try Again
                  </Button>
                )}
                <Button
                  variant="outline"
                  asChild
                >
                  <Link to={`/category/${category.id}`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Review Lessons
                  </Link>
                </Button>
                {passed && (
                  <Button
                    className="gradient-primary border-0"
                    asChild
                  >
                    <Link to="/categories">
                      Continue Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
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
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Button variant="ghost" asChild className="mb-6">
            <Link to={`/category/${category.id}`}>
              <ArrowLeft className="mr-2 h-4 w-4" /> {category.title}
            </Link>
          </Button>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h1 className="font-display text-xl font-bold">Module Quiz</h1>
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {quiz.length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="glass-card rounded-2xl p-6 md:p-8 mb-6"
            >
              <h2 className="font-display text-lg md:text-xl font-semibold mb-6">
                {question.question}
              </h2>

              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === question.correctIndex;
                  let className =
                    "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ";

                  if (!isAnswered) {
                    className +=
                      "border-border hover:border-primary/50 hover:bg-secondary/50 cursor-pointer";
                  } else if (isCorrect) {
                    className += "border-accent bg-accent/10 text-foreground";
                  } else if (isSelected && !isCorrect) {
                    className +=
                      "border-destructive bg-destructive/10 text-foreground";
                  } else {
                    className += "border-border opacity-50";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={isAnswered}
                      className={className}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                            isAnswered && isCorrect
                              ? "bg-accent text-accent-foreground"
                              : isAnswered && isSelected && !isCorrect
                              ? "bg-destructive text-destructive-foreground"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {isAnswered && isCorrect ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : isAnswered && isSelected && !isCorrect ? (
                            <XCircle className="h-4 w-4" />
                          ) : (
                            String.fromCharCode(65 + index)
                          )}
                        </span>
                        <span className="text-sm font-medium">{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20"
                >
                  <p className="text-sm font-medium text-primary mb-1">
                    Explanation
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {question.explanation}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-end"
            >
              <Button onClick={handleNext} className="gradient-primary border-0">
                {currentQuestion + 1 < quiz.length ? (
                  <>
                    Next Question <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    See Results <Trophy className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuizPage;
