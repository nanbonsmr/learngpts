import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

export const useCertificateStatus = () => {
  const { user } = useAuth();
  const [hasCertificate, setHasCertificate] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchStatus = async () => {
      const { data } = await supabase
        .from("certificates")
        .select("payment_status")
        .eq("user_id", user.id)
        .eq("payment_status", "succeeded")
        .maybeSingle();

      setHasCertificate(!!data);
      setLoading(false);
    };

    fetchStatus();
  }, [user?.id]);

  return { hasCertificate, loading };
};
