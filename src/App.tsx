import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { useProgressSync } from "@/hooks/useProgressSync";
import ProtectedRoute from "@/components/ProtectedRoute";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import LessonPage from "./pages/LessonPage";
import QuizPage from "./pages/QuizPage";
import PromptLibrary from "./pages/PromptLibrary";
import Resources from "./pages/Resources";
import Onboarding from "./pages/Onboarding";
import Profile from "./pages/Profile";
import Certificate from "./pages/Certificate";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useProgressSync();

  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
      <Route path="/category/:categoryId" element={<ProtectedRoute><CategoryDetail /></ProtectedRoute>} />
      <Route path="/lesson/:categoryId/:lessonId" element={<ProtectedRoute><LessonPage /></ProtectedRoute>} />
      <Route path="/quiz/:categoryId" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
      <Route path="/prompts" element={<ProtectedRoute><PromptLibrary /></ProtectedRoute>} />
      <Route path="/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
      <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/certificate" element={<ProtectedRoute><Certificate /></ProtectedRoute>} />
      <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
