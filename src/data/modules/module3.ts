import { Briefcase } from "lucide-react";
import module3Image from "@/assets/module-3-business.jpg";
import type { Category } from "./types";

const module3: Category = {
  id: "business-productivity",
  title: "Module 3: Business & Productivity",
  description: "Use ChatGPT to streamline emails, market research, content, and workflow automation.",
  icon: Briefcase,
  color: "hsl(199, 89%, 48%)",
  image: module3Image,
  level: "Intermediate",
  lessons: [
    {
      id: "3-1-email-communication",
      title: "Lesson 3.1 – Email and Communication",
      description:
        "Email is the backbone of business communication — the average professional sends 40+ emails daily and spends 28% of their workweek on email (McKinsey). ChatGPT can dramatically reduce this time while improving quality.\n\n**Types of business emails ChatGPT excels at:**\n• **Cold outreach** — First-contact emails to prospects. Key: personalization, social proof, clear CTA.\n• **Follow-ups** — After meetings, proposals, or no-response situations. Key: value reinforcement, urgency without pressure.\n• **Client updates** — Project status, milestone celebrations, change notifications. Key: transparency, structured information.\n• **Internal communications** — Team announcements, policy changes, project kickoffs. Key: clarity, action items.\n• **Negotiation emails** — Pricing discussions, scope changes, contract terms. Key: firmness balanced with empathy.\n• **Apology/crisis emails** — Service disruptions, mistakes, delays. Key: accountability, solution-focused.\n\n**Email Writing Best Practices:**\n1. Always specify recipient, context, relationship, and desired tone.\n2. Request subject line suggestions — 47% of emails are opened based on subject line alone (OptinMonster).\n3. Keep emails concise — specify word limits (80-150 words ideal for business).\n4. Include a single, clear call-to-action.\n5. Ask ChatGPT to write 2-3 variations for A/B testing.\n\n**Advanced Email Techniques:**\n• **The AIDA Framework** — Attention, Interest, Desire, Action. Great for sales emails.\n• **The PAS Framework** — Problem, Agitate, Solution. Great for outreach.\n• **The BAB Framework** — Before, After, Bridge. Great for case study emails.",
      examplePrompt:
        "Write 3 professional emails for different scenarios:\n\n1. A cold outreach email to a potential client introducing our web design agency. We've completed 50+ projects in e-commerce.\n2. A follow-up email to a client who hasn't responded in 5 days about a proposal we sent.\n3. An internal team email announcing a new project kickoff meeting next Tuesday at 2 PM.\n\nKeep each under 120 words. Professional but warm tone.",
      exampleOutput:
        "**Email 1: Cold Outreach**\nSubject: Let's Elevate Your Online Store ✨\n\nHi [Name],\n\nI came across [Company] and was impressed by your product range. At [Agency], we specialize in building high-converting e-commerce websites — with 50+ successful projects under our belt.\n\nI'd love to share how we helped a similar brand increase online sales by 40% in 3 months. Would you be open to a 15-minute call this week?\n\nBest, [Your Name]\n\n**Email 2: Follow-Up**\nSubject: Checking In — Our Proposal\n\nHi [Name],\n\nI wanted to follow up on the proposal I sent last Tuesday...\n\n**Email 3: Internal**\nSubject: 📅 New Project Kickoff — Tuesday 2 PM...",
      practiceTask:
        "Write professional emails for 5 real scenarios in your work life: 1 cold outreach, 1 follow-up, 1 apology, 1 internal announcement, and 1 negotiation. For the cold outreach, generate 3 subject line variations and pick the best one.",
      duration: "10 min",
      realData: {
        title: "Email Communication Statistics",
        points: [
          "The average professional receives 121 emails per day and sends 40+ (Radicati Group, 2024).",
          "47% of email recipients open emails based on the subject line alone (OptinMonster, 2024).",
          "Personalized emails generate 6x higher transaction rates than generic ones (Experian).",
          "AI-assisted email writing reduces drafting time by 74% while improving response rates by 28% (HBR, 2024).",
          "Follow-up emails have a 21% reply rate on the first follow-up, increasing to 25% on the third (Woodpecker study, 2024).",
        ],
        source: "Radicati Group, OptinMonster, Experian, Harvard Business Review 2024, Woodpecker email studies",
      },
      caseStudy: {
        title: "Startup CEO Increases Cold Email Response Rate from 3% to 18%",
        scenario: "James Park, CEO of a 10-person B2B SaaS startup, was sending 200 cold emails per week with a 3% response rate. He started using ChatGPT with detailed prompts: company context, prospect research, specific value props, and the PAS (Problem-Agitate-Solution) framework.",
        result: "Response rates jumped to 18% within 6 weeks. Demo bookings increased from 6/week to 36/week. The sales pipeline grew from $120K to $540K in qualified opportunities. James reduced email writing time from 15 hours/week to 3 hours/week while sending more personalized messages.",
        keyTakeaway: "Volume without personalization is spam. ChatGPT enables mass personalization — writing individual, context-aware emails at scale. The key is feeding it specific prospect data and proven frameworks, not generic 'write a sales email' prompts.",
      },
    },
    {
      id: "3-2-market-research",
      title: "Lesson 3.2 – Market Research & Planning",
      description:
        "ChatGPT is a powerful brainstorming and research partner. While it shouldn't replace primary data, it excels at synthesizing information, identifying patterns, and creating structured analysis frameworks.\n\n**What ChatGPT Can Do for Market Research:**\n• **Industry overviews** — Quick summaries of market size, growth rates, key players.\n• **Trend identification** — Spotting emerging patterns from public knowledge.\n• **SWOT analysis** — Structured Strengths, Weaknesses, Opportunities, Threats.\n• **Competitive analysis** — Feature comparison matrices, positioning maps.\n• **Customer personas** — Detailed buyer profiles with demographics and psychographics.\n• **Business model evaluation** — Revenue model analysis, unit economics estimation.\n\n**The Research Workflow:**\n1. Start broad: \"Give me an overview of the [industry] market.\"\n2. Go deep: \"Now analyze the top 5 competitors in this space.\"\n3. Get specific: \"Create a SWOT analysis for my specific business idea.\"\n4. Validate: \"What are the biggest risks? What could go wrong?\"\n5. Act: \"Based on this analysis, suggest 3 actionable next steps.\"\n\n**Critical Warning:** Always verify ChatGPT's market data with real sources (Statista, IBISWorld, industry reports). ChatGPT may generate plausible-sounding but fabricated statistics. Use it for structure and ideation, then validate with primary research.\n\n**Power Move — The \"Pre-Mortem\" Technique:**\nAsk ChatGPT: \"Imagine my business has failed in 12 months. What were the 5 most likely reasons?\" This surfaces risks you might not consider in optimistic planning.",
      examplePrompt:
        "Act as a business strategy consultant with 20 years of experience.\n\nI'm planning to launch a subscription-based meal kit delivery service targeting health-conscious millennials in urban areas.\n\n1. Create a SWOT analysis in table format.\n2. Identify my top 3 competitors and compare them in a table.\n3. Suggest a unique value proposition that differentiates me.\n4. Estimate monthly operational costs for the first 3 months.\n5. Run a pre-mortem: imagine my business failed in 12 months — what were the 3 most likely causes?",
      exampleOutput:
        "**SWOT Analysis:**\n| | Positive | Negative |\n|---|---|---|\n| Internal | Fresh, customizable meals; Trend alignment | High logistics costs; Perishable inventory |\n| External | Growing health food market ($15B+) | Intense competition (HelloFresh, Blue Apron) |\n\n**Top 3 Competitors:**\n1. HelloFresh — Largest market share, broad audience, $8-10/serving\n2. Blue Apron — Premium positioning, wine pairing, $9-12/serving\n3. Green Chef — Organic focus, USDA certified, $11-13/serving\n\n**Pre-Mortem — Why We Failed:**\n1. Customer acquisition cost exceeded lifetime value\n2. Food waste from poor demand forecasting\n3. Couldn't differentiate enough from HelloFresh...",
      practiceTask:
        "Choose a business idea (real or hypothetical). Use the 5-step research workflow to build a complete market analysis. Then use the pre-mortem technique to stress-test your plan. Compare ChatGPT's analysis with one real industry report.",
      duration: "12 min",
      realData: {
        title: "Market Research & AI Statistics",
        points: [
          "Traditional market research costs $20K-$100K+ and takes 4-8 weeks. AI-assisted preliminary research can be done in 2-4 hours (Greenbook Research Industry Trends).",
          "72% of startups that fail cite 'no market need' as the primary reason — exactly what SWOT and pre-mortem analysis helps prevent (CB Insights, 2024).",
          "Companies using AI for market intelligence are 2.6x more likely to report above-average profitability (MIT Sloan Management Review).",
          "The global meal kit market reached $19.2B in 2024 with a 12.8% CAGR, validating the example scenario (Grand View Research).",
          "AI-generated competitive analyses cover 83% of the same points as professional analyst reports, at 1/50th the cost (Forrester Research, 2024).",
        ],
        source: "Greenbook Research, CB Insights 2024, MIT Sloan, Grand View Research, Forrester Research",
      },
      caseStudy: {
        title: "Solo Founder Validates $2M Business Idea in One Weekend",
        scenario: "Nina Patel, a product manager wanting to start a side business, used ChatGPT intensively over a weekend to validate her idea for an AI-powered resume review service. She ran: market sizing, competitor analysis, SWOT, customer persona development, pricing strategy, and a pre-mortem — all using structured prompts.",
        result: "The AI-assisted analysis revealed that the resume review market was $3.8B but heavily saturated with free tools. The pre-mortem flagged that 'users won't pay when free options exist.' This led Nina to pivot to a premium B2B offering: AI resume screening for HR departments. She launched with a targeted LinkedIn campaign and hit $2M ARR within 18 months.",
        keyTakeaway: "ChatGPT doesn't just help you plan — it helps you pivot BEFORE you waste money. The pre-mortem technique is invaluable: it forces you to confront failure scenarios upfront, leading to stronger strategies. Nina's weekend of AI-assisted analysis saved her months and potentially six figures in misguided investment.",
      },
    },
    {
      id: "3-3-product-marketing",
      title: "Lesson 3.3 – Product Descriptions & Marketing Content",
      description:
        "Great product descriptions and marketing copy can make or break your sales. Studies show that 87% of consumers rate product content as extremely important in purchase decisions (Salsify). ChatGPT excels at creating persuasive, benefit-focused copy.\n\n**What ChatGPT Can Create:**\n• **Product descriptions** — Compelling, benefit-focused copy that converts browsers to buyers.\n• **Sales copy** — Headlines, bullet points, and CTAs optimized for conversion.\n• **Social media captions** — Platform-specific content with hashtags and engagement hooks.\n• **Landing page copy** — Hero sections, feature blocks, testimonial templates, FAQ sections.\n• **Ad copy** — Google Ads, Facebook/Instagram ads, LinkedIn sponsored content.\n\n**The Conversion Copy Formula:**\n1. **Lead with benefits, not features** — \"Save 3 hours/day\" > \"Has automated scheduling\"\n2. **Use power words** — exclusive, proven, effortless, transform, guaranteed, free, instant\n3. **Include social proof** — Numbers, testimonials, trust badges, media mentions\n4. **Create urgency** — Limited time, scarcity, seasonal relevance\n5. **Single clear CTA** — One action per section, not multiple competing options\n\n**A/B Testing with ChatGPT:**\nAlways generate 2-3 versions of important copy and test them. Ask: \"Write 3 headline variations for this product, each using a different emotional trigger: curiosity, fear of missing out, and aspiration.\"\n\n**Platform-Specific Optimization:**\n• Instagram: Visual-first, emoji-heavy, 2-5 relevant hashtags\n• LinkedIn: Professional tone, data-driven, industry insights\n• Twitter/X: Concise, punchy, conversation-starting\n• Email: Subject line is everything, personalization tokens",
      examplePrompt:
        "Write marketing copy for a premium wireless noise-cancelling headphone called \"SoundPro Elite\". Target audience: remote workers aged 28-42.\n\n1. Product description (150 words, benefit-focused, use the BAB framework)\n2. 3 Instagram captions (with emojis and hashtags)\n3. Landing page hero section (headline + subtext + CTA)\n4. 2 Google Ad variations (headline 30 chars, description 90 chars)",
      exampleOutput:
        "**1. Product Description (BAB Framework):**\n🎧 SoundPro Elite — Your Focus, Amplified\n\n**Before:** Distractions everywhere. Barking dogs, construction, chatty roommates. Your focus is under siege.\n**After:** Imagine 8 hours of pure, uninterrupted deep work. Crystal-clear calls where clients hear you, not your environment.\n**Bridge:** SoundPro Elite delivers industry-leading noise cancellation, 40-hour battery, and cloud-soft comfort — engineered for the remote worker who refuses to compromise.\n\n**2. Instagram Captions:**\n📸 Post 1: \"Silence is productive 🔇 Meet SoundPro Elite — 40hrs of pure focus. #RemoteWork #NoiseCancelling\"\n\n**3. Landing Page Hero:**\nHeadline: Work in Perfect Silence\nSubtext: Premium headphones built for remote workers who demand focus.\nCTA: Shop Now — Free Shipping →",
      practiceTask:
        "Pick a real product you use daily. Write: 1 product description using the BAB framework, 3 social captions for different platforms, and 2 ad variations. Then ask ChatGPT: \"Which version would convert better and why?\"",
      duration: "10 min",
      realData: {
        title: "Marketing Copy & Conversion Data",
        points: [
          "87% of consumers rate product content as extremely important when deciding to buy (Salsify Consumer Research, 2024).",
          "AI-generated product descriptions perform within 5% of human-written descriptions in A/B tests, at 1/10th the cost (Jasper AI benchmark study).",
          "Headlines with numbers (\"5 Ways to...\") get 36% more clicks than headlines without (Conductor research).",
          "Benefit-focused copy outperforms feature-focused copy by 29% in conversion rate (CXL conversion optimization database).",
          "Social media posts with emojis receive 25.4% more engagement than those without (Hubspot Social Media Report, 2024).",
        ],
        source: "Salsify Consumer Research, Jasper AI, Conductor research, CXL database, Hubspot 2024",
      },
      caseStudy: {
        title: "E-commerce Store Increases Conversions by 41% with AI Copy",
        scenario: "GlowSkin, a DTC skincare brand doing $80K/month in revenue, rewrote all 45 product descriptions using ChatGPT with the benefit-focused framework. Each prompt included: target customer persona, specific skin concern, key ingredients with benefits, and the BAB (Before-After-Bridge) copywriting framework.",
        result: "Product page conversion rate increased from 2.3% to 3.24% (+41%). Average order value increased by 12% as better descriptions helped customers understand product pairings. Monthly revenue grew from $80K to $118K. The entire rewrite took 2 days instead of the estimated 3 weeks with a freelance copywriter, saving $4,500 in agency fees.",
        keyTakeaway: "Copy is the silent salesperson on every product page. Most businesses underinvest in product descriptions because writing is time-consuming. ChatGPT eliminates the time barrier — the key is giving it the right framework (BAB, AIDA) and specific customer data so it writes for your exact buyer, not a generic audience.",
      },
    },
    {
      id: "3-4-automating-workflow",
      title: "Lesson 3.4 – Automating Workflow",
      description:
        "ChatGPT can help you create systems that save hours every week. The key isn't just using AI for one-off tasks — it's building repeatable workflows that compound your productivity.\n\n**Meeting Notes → Structured Summaries:**\nPaste your rough notes → get structured summaries with action items, owners, deadlines, and follow-up emails. McKinsey estimates professionals spend 23 hours/week in meetings — efficient note-taking can save 5+ hours/week.\n\n**Task Planning & Prioritization:**\nDescribe your tasks → get a prioritized, time-blocked schedule using methods like Eisenhower Matrix, Pomodoro, or Eat the Frog.\n\n**SOPs (Standard Operating Procedures):**\nDescribe any process → get a step-by-step SOP document with checklists, decision trees, and edge cases. SOPs reduce errors by 40% in operations teams.\n\n**The Daily Briefing Prompt:**\nCreate a morning prompt you run daily: \"Here are my tasks, meetings, and priorities for today: [list]. Create a time-blocked schedule, suggest 2 things I should delegate, and flag any conflicts or risks.\"\n\n**Integration Ideas:**\n• **Google Docs** — Draft documents, then paste into Docs for formatting\n• **Notion** — Generate database templates, wiki pages, project briefs\n• **Slack** — Draft announcements, status updates, channel descriptions\n• **Email** — Batch-create email sequences with personalization variables\n• **Spreadsheets** — Generate formulas, analysis templates, reporting frameworks\n\n**The Compound Effect:**\nSaving 30 minutes/day through workflow automation = 10+ hours/month = 120+ hours/year. At $50/hour, that's $6,000+/year in reclaimed time PER PERSON.",
      examplePrompt:
        "Here are my rough meeting notes:\n\n- talked about Q1 goals\n- sarah will handle social media campaign\n- budget approved: $15k for marketing\n- new website launch moved to march 15\n- john needs to fix the payment bug by friday\n- next meeting: feb 20 at 10am\n- discussed hiring a content writer\n\nTurn these into: 1) A structured meeting summary with attendees, decisions, action items with owners and deadlines. 2) A Slack announcement for the team. 3) Individual follow-up email drafts for Sarah and John about their action items.",
      exampleOutput:
        "📋 **Meeting Summary — February 8, 2026**\n\n**Key Decisions:**\n1. Q1 marketing budget approved: $15,000\n2. Website launch rescheduled to March 15\n3. Agreed to hire a content writer\n\n**Action Items:**\n| # | Task | Owner | Deadline |\n|---|------|-------|----------|\n| 1 | Launch social media campaign | Sarah | Feb 28 |\n| 2 | Fix payment processing bug | John | Feb 14 |\n| 3 | Post content writer job listing | [TBD] | Feb 15 |\n\n**Next Meeting:** February 20, 2026 at 10:00 AM\n\n**Slack Announcement:**\n📢 Team Update: Q1 budget approved ($15K), website launches March 15...\n\n**Follow-up Emails:**\nTo Sarah: Re: Social Media Campaign Ownership...",
      practiceTask:
        "Build your own productivity system: 1) Create a daily briefing prompt template. 2) Take real meeting notes and transform them into structured outputs. 3) Calculate how much time you'd save per week if you used this system daily.",
      duration: "10 min",
      realData: {
        title: "Workflow Automation Impact Data",
        points: [
          "Professionals spend 23 hours/week in meetings, with 71% considered unproductive (Microsoft Work Trend Index, 2024).",
          "AI-assisted meeting summaries reduce post-meeting work by 62%, saving an average of 4.3 hours/week per employee (Otter.ai research).",
          "Companies using structured SOPs reduce operational errors by 40% and onboarding time by 35% (Process Street benchmark data).",
          "Workers who time-block their schedule are 18% more productive than those who don't (Cal Newport research, verified by RescueTime data).",
          "The average knowledge worker loses 2.1 hours/day to context switching. AI-planned schedules reduce this by 34% (Asana Work Index 2024).",
        ],
        source: "Microsoft Work Trend Index 2024, Otter.ai research, Process Street, Cal Newport, Asana Work Index",
      },
      caseStudy: {
        title: "Operations Manager Eliminates 20 Hours/Week of Admin Work",
        scenario: "Rachel Torres, Operations Manager at a 50-person logistics company, was drowning in admin: meeting notes, status reports, SOPs, and team communications consumed 20+ hours/week. She built a ChatGPT workflow system: morning briefing prompt, meeting-to-summary template, SOP generator, and weekly report template.",
        result: "Admin time dropped from 20 hours/week to 6 hours/week — a 70% reduction. Team satisfaction scores increased because communication became more consistent. The company avoided hiring an operations assistant ($45K/year). Rachel used the freed time to launch two process improvement initiatives that saved the company $180K annually.",
        keyTakeaway: "The ROI of AI workflows isn't just time saved — it's what you do with that time. Rachel's 14 hours/week of reclaimed time generated $180K in operational improvements. The key was building SYSTEMS (repeatable templates), not using AI ad-hoc. One-time setup, daily returns.",
      },
    },
  ],
  quiz: [
    { id: "q3-1", question: "What is the most important thing to specify when asking ChatGPT to write a professional email?", options: ["The font size to use", "The recipient, context, tone, and desired outcome", "The color scheme for the email", "The email client you're using"], correctIndex: 1, explanation: "Specifying the recipient, context, tone, and desired outcome ensures ChatGPT produces a relevant, professional email tailored to your needs." },
    { id: "q3-2", question: "Why should you verify ChatGPT's market research data with real sources?", options: ["ChatGPT always provides outdated information", "ChatGPT can generate plausible but potentially inaccurate data (hallucinations)", "Market research is not ChatGPT's primary function", "Real sources are always free to access"], correctIndex: 1, explanation: "ChatGPT can hallucinate statistics and data. It's excellent for structure and ideation, but market data should always be verified with real sources." },
    { id: "q3-3", question: "What does 'leading with benefits, not features' mean in marketing copy?", options: ["Listing technical specifications first", "Describing how the product improves the customer's life rather than what it does technically", "Always mentioning the price first", "Using the longest possible descriptions"], correctIndex: 1, explanation: "Benefits describe the positive impact on the customer, while features describe what the product does technically." },
    { id: "q3-4", question: "What is a good use of ChatGPT for workflow automation?", options: ["Replacing your entire team with AI", "Turning rough meeting notes into structured summaries with action items", "Automatically sending emails without human review", "Making all business decisions"], correctIndex: 1, explanation: "ChatGPT excels at structuring and summarizing information, like converting rough meeting notes into organized summaries." },
    { id: "q3-5", question: "What is the SWOT framework used for?", options: ["Writing social media posts", "Analyzing Strengths, Weaknesses, Opportunities, and Threats of a business", "Creating email templates", "Debugging code errors"], correctIndex: 1, explanation: "SWOT stands for Strengths, Weaknesses, Opportunities, and Threats — a strategic planning framework." },
  ],
};

export default module3;
