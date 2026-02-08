import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  const [certificate, setCertificate] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState(false);
  const [productId, setProductId] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const totalLessons = categories.reduce((a, c) => a + c.lessons.length, 0);
  const completedCount = appUser.completedLessons.length;
  const progress = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
  const allCompleted = completedCount >= totalLessons && totalLessons > 0;

  // Fetch certificate status
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

    // If returning from checkout, poll for status
    if (searchParams.get("status") === "success") {
      const interval = setInterval(async () => {
        const { data } = await supabase
          .from("certificates")
          .select("*")
          .eq("user_id", authUser.id)
          .maybeSingle();
        if (data?.payment_status === "succeeded") {
          setCertificate(data);
          clearInterval(interval);
          toast({ title: "🎉 Payment successful!", description: "Your certificate is ready." });
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [authUser?.id, searchParams]);

  const handlePurchase = async () => {
    if (!productId.trim()) {
      toast({ title: "Product ID required", description: "Please enter your Dodo Payments product ID.", variant: "destructive" });
      return;
    }
    setPurchasing(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-dodo-checkout", {
        body: {
          product_id: productId,
          return_url: `${window.location.origin}/certificate?status=success`,
        },
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      if (data?.checkout_url) {
        window.location.href = data.checkout_url;
      }
    } catch (err: any) {
      console.error("Checkout error:", err);
      toast({
        title: "Checkout failed",
        description: err.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setPurchasing(false);
    }
  };

  const drawCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas || !certificate) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 1200;
    canvas.height = 850;

    // Background
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, 1200, 850);

    // Border
    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, 1140, 790);

    // Inner border
    ctx.strokeStyle = "#6366f130";
    ctx.lineWidth = 1;
    ctx.strokeRect(45, 45, 1110, 760);

    // Header decoration
    const gradient = ctx.createLinearGradient(0, 0, 1200, 0);
    gradient.addColorStop(0, "#6366f1");
    gradient.addColorStop(1, "#8b5cf6");
    ctx.fillStyle = gradient;
    ctx.fillRect(30, 30, 1140, 6);

    // Award icon (simple star)
    ctx.font = "64px serif";
    ctx.textAlign = "center";
    ctx.fillText("🏆", 600, 140);

    // Title
    ctx.fillStyle = "#e2e8f0";
    ctx.font = "bold 48px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Certificate of Completion", 600, 220);

    // Decorative line
    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(350, 240);
    ctx.lineTo(850, 240);
    ctx.stroke();

    // "This certifies that"
    ctx.fillStyle = "#94a3b8";
    ctx.font = "20px system-ui, -apple-system, sans-serif";
    ctx.fillText("This is to certify that", 600, 300);

    // Name
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 42px system-ui, -apple-system, sans-serif";
    ctx.fillText(certificate.certificate_name || "Student", 600, 370);

    // Line under name
    ctx.strokeStyle = "#6366f140";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(300, 390);
    ctx.lineTo(900, 390);
    ctx.stroke();

    // Description
    ctx.fillStyle = "#94a3b8";
    ctx.font = "20px system-ui, -apple-system, sans-serif";
    ctx.fillText("has successfully completed the", 600, 440);

    ctx.fillStyle = "#e2e8f0";
    ctx.font = "bold 30px system-ui, -apple-system, sans-serif";
    ctx.fillText("ChatGPT Mastery Program", 600, 490);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "18px system-ui, -apple-system, sans-serif";
    ctx.fillText(`${totalLessons} lessons across ${categories.length} modules`, 600, 530);

    // Date
    const issueDate = certificate.issued_at
      ? new Date(certificate.issued_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

    ctx.fillStyle = "#94a3b8";
    ctx.font = "16px system-ui, -apple-system, sans-serif";
    ctx.fillText(`Issued on ${issueDate}`, 600, 600);

    // Certificate ID
    ctx.fillStyle = "#475569";
    ctx.font = "12px monospace";
    ctx.fillText(`Certificate ID: ${certificate.id}`, 600, 780);

    // Footer gradient
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
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Your Certificate
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Complete all lessons and purchase your official ChatGPT Mastery certificate.
            </p>
          </motion.div>

          {/* Progress section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-semibold flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Course Progress
              </h3>
              <span className="text-sm font-medium text-muted-foreground">
                {completedCount}/{totalLessons} lessons
              </span>
            </div>
            <Progress value={progress} className="h-3 mb-3" />
            {allCompleted ? (
              <p className="text-sm text-accent flex items-center gap-1">
                <CheckCircle className="h-4 w-4" /> All lessons completed! You're eligible for the certificate.
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Complete all {totalLessons} lessons to unlock the certificate purchase.
              </p>
            )}
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : isPaid ? (
            /* Certificate display */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass-card rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-semibold flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    Certificate Issued
                  </h3>
                  <Button onClick={downloadCertificate} className="gradient-primary border-0">
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </div>
                <div className="rounded-xl overflow-hidden border border-border">
                  <canvas
                    ref={canvasRef}
                    className="w-full h-auto"
                    style={{ maxHeight: "600px" }}
                  />
                </div>
              </div>
            </motion.div>
          ) : (
            /* Purchase section */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                {allCompleted ? (
                  <Award className="h-7 w-7 text-primary" />
                ) : (
                  <Lock className="h-7 w-7 text-muted-foreground" />
                )}
              </div>

              <h3 className="font-display text-xl font-semibold mb-2">
                {allCompleted ? "Get Your Certificate" : "Certificate Locked"}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                {allCompleted
                  ? "You've completed all lessons! Purchase your official certificate to showcase your ChatGPT mastery."
                  : `Complete all ${totalLessons} lessons to unlock the certificate. You have ${totalLessons - completedCount} lessons remaining.`}
              </p>

              {allCompleted ? (
                <div className="space-y-4 max-w-sm mx-auto">
                  <input
                    type="text"
                    placeholder="Enter Dodo Payments Product ID"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                  <Button
                    onClick={handlePurchase}
                    disabled={purchasing}
                    className="w-full gradient-primary border-0 text-lg h-12"
                  >
                    {purchasing ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...
                      </>
                    ) : (
                      <>
                        Purchase Certificate <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Secure payment via Dodo Payments. You'll be redirected to complete checkout.
                  </p>
                </div>
              ) : (
                <Button asChild variant="outline">
                  <Link to="/categories">
                    Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}

              {searchParams.get("status") === "success" && !isPaid && (
                <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm font-medium">Confirming your payment...</span>
                  </div>
                </div>
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
