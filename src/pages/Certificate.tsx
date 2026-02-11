import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppStore } from "@/store/useAppStore";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { categories } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Award,
  Download,
  ShieldCheck,
  Loader2,
  ArrowRight,
  CheckCircle,
  Lock,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Certificate = () => {
  const { user: authUser } = useAuth();
  const { user: appUser } = useAppStore();
  const [certificate, setCertificate] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [claiming, setClaiming] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const totalLessons = categories.reduce((a, c) => a + c.lessons.length, 0);
  const completedCount = appUser.completedLessons.length;
  const progress = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
  const allCompleted = completedCount >= totalLessons && totalLessons > 0;

  useEffect(() => {
    if (!authUser) return;
    const fetchCertificate = async () => {
      const { data } = await supabase
        .from("certificates")
        .select("*")
        .eq("user_id", authUser.id)
        .maybeSingle();
      setCertificate(data);
      setLoading(false);
    };
    fetchCertificate();
  }, [authUser?.id]);

  const handleClaim = async () => {
    if (!authUser || !allCompleted) return;
    setClaiming(true);
    try {
      const { data: existing } = await supabase
        .from("certificates")
        .select("*")
        .eq("user_id", authUser.id)
        .eq("payment_status", "succeeded")
        .maybeSingle();

      if (existing) {
        setCertificate(existing);
        setClaiming(false);
        return;
      }

      const certName =
        authUser.user_metadata?.display_name ||
        authUser.email?.split("@")[0] ||
        "Student";

      const { data, error } = await supabase
        .from("certificates")
        .upsert(
          {
            user_id: authUser.id,
            payment_status: "succeeded",
            certificate_name: certName,
            issued_at: new Date().toISOString(),
          },
          { onConflict: "user_id" }
        )
        .select()
        .single();

      if (error) throw error;
      setCertificate(data);
      toast({ title: "🎉 Certificate claimed!", description: "Your certificate is ready to download." });
    } catch (err: any) {
      console.error("Claim error:", err);
      toast({ title: "Error", description: err.message || "Please try again.", variant: "destructive" });
    } finally {
      setClaiming(false);
    }
  };

  const drawCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas || !certificate) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 1200;
    canvas.height = 850;

    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, 1200, 850);
    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, 1140, 790);
    ctx.strokeStyle = "#6366f130";
    ctx.lineWidth = 1;
    ctx.strokeRect(45, 45, 1110, 760);

    const gradient = ctx.createLinearGradient(0, 0, 1200, 0);
    gradient.addColorStop(0, "#6366f1");
    gradient.addColorStop(1, "#8b5cf6");
    ctx.fillStyle = gradient;
    ctx.fillRect(30, 30, 1140, 6);

    ctx.font = "64px serif";
    ctx.textAlign = "center";
    ctx.fillText("🏆", 600, 140);

    ctx.fillStyle = "#e2e8f0";
    ctx.font = "bold 48px system-ui, -apple-system, sans-serif";
    ctx.fillText("Certificate of Completion", 600, 220);

    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(350, 240);
    ctx.lineTo(850, 240);
    ctx.stroke();

    ctx.fillStyle = "#94a3b8";
    ctx.font = "20px system-ui, -apple-system, sans-serif";
    ctx.fillText("This is to certify that", 600, 300);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 42px system-ui, -apple-system, sans-serif";
    ctx.fillText(certificate.certificate_name || "Student", 600, 370);

    ctx.strokeStyle = "#6366f140";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(300, 390);
    ctx.lineTo(900, 390);
    ctx.stroke();

    ctx.fillStyle = "#94a3b8";
    ctx.font = "20px system-ui, -apple-system, sans-serif";
    ctx.fillText("has successfully completed the", 600, 440);

    ctx.fillStyle = "#e2e8f0";
    ctx.font = "bold 30px system-ui, -apple-system, sans-serif";
    ctx.fillText("ChatGPT Mastery Program", 600, 490);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "18px system-ui, -apple-system, sans-serif";
    ctx.fillText(`${totalLessons} lessons across ${categories.length} modules`, 600, 530);

    const issueDate = certificate.issued_at
      ? new Date(certificate.issued_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
      : new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

    ctx.fillStyle = "#94a3b8";
    ctx.font = "16px system-ui, -apple-system, sans-serif";
    ctx.fillText(`Issued on ${issueDate}`, 600, 600);

    ctx.fillStyle = "#475569";
    ctx.font = "12px monospace";
    ctx.fillText(`Certificate ID: ${certificate.id}`, 600, 780);

    const bottomGradient = ctx.createLinearGradient(0, 0, 1200, 0);
    bottomGradient.addColorStop(0, "#6366f1");
    bottomGradient.addColorStop(1, "#8b5cf6");
    ctx.fillStyle = bottomGradient;
    ctx.fillRect(30, 814, 1140, 6);
  };

  useEffect(() => {
    if (certificate?.payment_status === "succeeded") {
      setTimeout(drawCertificate, 100);
    }
  }, [certificate]);

  const downloadCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `certificate-chatgpt-mastery-${certificate?.certificate_name || "student"}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    toast({ title: "Downloaded!", description: "Your certificate has been saved." });
  };

  const isPaid = certificate?.payment_status === "succeeded";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-3 sm:px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">Your Certificate</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Complete all lessons to claim your free ChatGPT Mastery certificate.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-semibold flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" /> Course Progress
              </h3>
              <span className="text-sm font-medium text-muted-foreground">{completedCount}/{totalLessons} lessons</span>
            </div>
            <Progress value={progress} className="h-3 mb-3" />
            {allCompleted ? (
              <p className="text-sm text-accent flex items-center gap-1">
                <CheckCircle className="h-4 w-4" /> All lessons completed! You're eligible for the certificate.
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">Complete all {totalLessons} lessons to unlock the certificate.</p>
            )}
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : isPaid ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="glass-card rounded-2xl p-6 mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                  <h3 className="font-display font-semibold flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" /> Certificate Issued
                  </h3>
                  <Button onClick={downloadCertificate} className="gradient-primary border-0 w-full sm:w-auto">
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </div>
                <div className="rounded-xl overflow-hidden border border-border">
                  <canvas ref={canvasRef} className="w-full h-auto" style={{ maxHeight: "600px" }} />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-2xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                {allCompleted ? <Award className="h-7 w-7 text-primary" /> : <Lock className="h-7 w-7 text-muted-foreground" />}
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                {allCompleted ? "Claim Your Free Certificate" : "Certificate Locked"}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                {allCompleted
                  ? "You've completed all lessons! Claim your official certificate to showcase your ChatGPT mastery."
                  : `Complete all ${totalLessons} lessons to unlock the certificate. You have ${totalLessons - completedCount} lessons remaining.`}
              </p>
              {allCompleted ? (
                <Button onClick={handleClaim} disabled={claiming} className="gradient-primary border-0 text-lg h-12 w-full sm:w-auto px-8">
                  {claiming ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Claiming...</>
                  ) : (
                    <><Award className="mr-2 h-5 w-5" /> Claim Certificate <ArrowRight className="ml-2 h-5 w-5" /></>
                  )}
                </Button>
              ) : (
                <Button asChild variant="outline">
                  <Link to="/categories">Continue Learning <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Certificate;
