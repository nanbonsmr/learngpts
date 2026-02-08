import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Authenticate the user
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "No authorization header" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_PUBLISHABLE_KEY")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const supabaseUser = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    const { data: { user }, error: userError } = await supabaseUser.auth.getUser();
    if (userError || !user) {
      console.error("Auth error:", userError?.message);
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Creating checkout for user:", user.id, user.email);

    // Parse the request body for product_id
    const body = await req.json();
    const productId = body.product_id;

    if (!productId) {
      return new Response(JSON.stringify({ error: "product_id is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Check if user already has a paid certificate
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
    const { data: existingCert } = await supabaseAdmin
      .from("certificates")
      .select("*")
      .eq("user_id", user.id)
      .eq("payment_status", "succeeded")
      .maybeSingle();

    if (existingCert) {
      return new Response(
        JSON.stringify({ error: "Certificate already purchased" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Create Dodo Payments checkout session via REST API
    const dodoPK = Deno.env.get("DODO_PAYMENTS_API_KEY")!;
    const isTestMode = dodoPK.startsWith("sk_test_");
    const apiBase = isTestMode
      ? "https://test.dodopayments.com"
      : "https://api.dodopayments.com";

    const returnUrl = body.return_url || "https://id-preview--778e079a-3773-4cf9-8e7f-0e6528a15a22.lovable.app/certificate?status=success";

    console.log("Creating Dodo checkout session with product:", productId);

    const checkoutResponse = await fetch(`${apiBase}/checkouts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dodoPK}`,
      },
      body: JSON.stringify({
        product_cart: [{ product_id: productId, quantity: 1 }],
        customer: {
          email: user.email,
          name: user.user_metadata?.display_name || user.email?.split("@")[0] || "Student",
        },
        return_url: returnUrl,
        metadata: {
          user_id: user.id,
        },
      }),
    });

    if (!checkoutResponse.ok) {
      const errorText = await checkoutResponse.text();
      console.error("Dodo API error:", checkoutResponse.status, errorText);
      return new Response(
        JSON.stringify({ error: "Failed to create checkout session", details: errorText }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const session = await checkoutResponse.json();
    console.log("Checkout session created:", session.session_id);

    // Upsert a pending certificate record
    await supabaseAdmin.from("certificates").upsert(
      {
        user_id: user.id,
        payment_id: session.session_id,
        payment_status: "pending",
        certificate_name: user.user_metadata?.display_name || user.email?.split("@")[0] || "Student",
      },
      { onConflict: "user_id" }
    );

    return new Response(
      JSON.stringify({ checkout_url: session.checkout_url }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
