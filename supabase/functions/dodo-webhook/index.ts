import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, webhook-id, webhook-signature, webhook-timestamp",
};

// HMAC SHA256 signature verification
async function verifyWebhookSignature(
  payload: string,
  webhookId: string,
  webhookTimestamp: string,
  webhookSignature: string,
  secret: string
): Promise<boolean> {
  try {
    // The secret from Dodo Payments starts with "whsec_" and is base64 encoded after the prefix
    const secretBytes = Uint8Array.from(
      atob(secret.replace("whsec_", "")),
      (c) => c.charCodeAt(0)
    );

    const signedContent = `${webhookId}.${webhookTimestamp}.${payload}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(signedContent);

    const key = await crypto.subtle.importKey(
      "raw",
      secretBytes,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );

    const signature = await crypto.subtle.sign("HMAC", key, data);
    const computedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)));

    // webhook-signature can contain multiple signatures separated by spaces
    const expectedSignatures = webhookSignature.split(" ");
    return expectedSignatures.some((sig) => {
      const sigValue = sig.split(",")[1]; // format: v1,<base64>
      return sigValue === computedSignature;
    });
  } catch (err) {
    console.error("Signature verification error:", err);
    return false;
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const rawBody = await req.text();
    const webhookId = req.headers.get("webhook-id") || "";
    const webhookSignature = req.headers.get("webhook-signature") || "";
    const webhookTimestamp = req.headers.get("webhook-timestamp") || "";

    console.log("Webhook received. ID:", webhookId, "Type check pending...");

    // Verify signature
    const webhookSecret = Deno.env.get("DODO_PAYMENTS_WEBHOOK_KEY")!;
    const isValid = await verifyWebhookSignature(
      rawBody,
      webhookId,
      webhookTimestamp,
      webhookSignature,
      webhookSecret
    );

    if (!isValid) {
      console.error("Invalid webhook signature");
      return new Response(JSON.stringify({ error: "Invalid signature" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Webhook signature verified successfully");

    const event = JSON.parse(rawBody);
    console.log("Webhook event type:", event.type);
    console.log("Webhook payload_type:", event.data?.payload_type);

    // Only process payment.succeeded events
    if (event.type === "payment.succeeded") {
      const paymentData = event.data;
      const userId = paymentData?.metadata?.user_id;

      if (!userId) {
        console.error("No user_id in payment metadata");
        return new Response(JSON.stringify({ received: true }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      console.log("Payment succeeded for user:", userId);

      const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
      const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
      const supabase = createClient(supabaseUrl, supabaseServiceKey);

      // Update certificate status
      const { error: updateError } = await supabase
        .from("certificates")
        .update({
          payment_status: "succeeded",
          payment_id: paymentData.payment_id || paymentData.id,
          issued_at: new Date().toISOString(),
        })
        .eq("user_id", userId);

      if (updateError) {
        console.error("Failed to update certificate:", updateError.message);
        // Still return 200 to prevent retries for DB errors
      } else {
        console.log("Certificate issued successfully for user:", userId);
      }
    } else {
      console.log("Ignoring webhook event type:", event.type);
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Webhook processing error:", err);
    return new Response(JSON.stringify({ error: "Processing failed" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
