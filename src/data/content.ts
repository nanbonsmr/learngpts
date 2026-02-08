import {
  BookOpen, Briefcase, Code, Edit3, GraduationCap, Lightbulb,
  Megaphone, PenTool, Rocket, Target, Users, Zap, Clock,
  TrendingUp, Shield, Star, CheckCircle, Settings, Cpu, Wrench
} from "lucide-react";

import module1Image from "@/assets/module-1-getting-started.jpg";
import module2Image from "@/assets/module-2-prompt-mastery.jpg";
import module3Image from "@/assets/module-3-business.jpg";
import module4Image from "@/assets/module-4-freelancing.jpg";
import module5Image from "@/assets/module-5-coding.jpg";
import module6Image from "@/assets/module-6-productivity.jpg";
import module7Image from "@/assets/module-7-advanced.jpg";

export interface Lesson {
  id: string;
  title: string;
  description: string;
  examplePrompt: string;
  exampleOutput: string;
  practiceTask: string;
  duration: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: typeof BookOpen;
  color: string;
  image: string;
  level: string;
  lessons: Lesson[];
}

// ──────────────────────────────────────────────
// MODULE 1 — Getting Started with ChatGPT (Beginner)
// ──────────────────────────────────────────────
const module1: Category = {
  id: "getting-started",
  title: "Module 1: Getting Started with ChatGPT",
  description: "Start from zero — learn what ChatGPT is, set up your account, and write your very first prompt.",
  icon: BookOpen,
  color: "hsl(250, 75%, 57%)",
  image: module1Image,
  level: "Beginner",
  lessons: [
    {
      id: "1-1-introduction",
      title: "Lesson 1.1 – Introduction to ChatGPT",
      description:
        "ChatGPT is a conversational AI model created by OpenAI that can understand and generate human-like text. In this lesson you'll learn what ChatGPT actually is, how the underlying technology works at a high level, the differences between free and paid versions, and important safety considerations and limitations to keep in mind.\n\n**What is ChatGPT?**\nChatGPT is a Large Language Model (LLM) — it was trained on billions of words from books, websites, and articles. It predicts the most probable next word in a sequence, which allows it to produce coherent, helpful text on virtually any topic.\n\n**Free vs Paid**\n• Free — access to GPT-3.5 with standard speed.\n• Plus ($20/mo) — priority access, GPT-4/4o, image generation, web browsing, plugins.\n• Team/Enterprise — collaboration features, higher limits.\n\n**Safety & Limitations**\n1. Knowledge cutoff — may not know the latest events.\n2. Hallucinations — can confidently state incorrect facts.\n3. Bias — reflects biases present in training data.\n4. No true understanding — pattern matching, not reasoning.\n5. Never share personal, financial, or medical info.",
      examplePrompt:
        "Explain ChatGPT to me like I'm a 10-year-old. Include what it can do and what it can't do.",
      exampleOutput:
        "ChatGPT is like a super-smart robot friend that reads and writes. You type a question and it writes back an answer! It learned by reading millions of books and websites, so it knows a LOT.\n\n✅ What it CAN do: answer questions, write stories, help with homework, explain things simply.\n❌ What it CAN'T do: browse the internet in real-time (free version), always be correct, understand feelings, or replace a real teacher.",
      practiceTask:
        "Open ChatGPT and ask it: \"What are your top 5 strengths and top 5 weaknesses?\" Compare its answer with the limitations described in this lesson.",
      duration: "8 min",
    },
    {
      id: "1-2-setting-up",
      title: "Lesson 1.2 – Setting Up Your Account",
      description:
        "Before you can use ChatGPT, you need to create an account and learn to navigate the interface.\n\n**Step-by-step setup:**\n1. Visit chat.openai.com and click 'Sign Up'.\n2. Enter your email or use Google / Microsoft / Apple sign-in.\n3. Verify your email and set a password.\n4. Accept terms of service.\n\n**Navigating the interface:**\n• **Chat area** — the main window where you type prompts and see responses.\n• **Sidebar** — your conversation history. You can rename, pin, or delete chats.\n• **Model selector** — choose between GPT-3.5, GPT-4, GPT-4o (if on Plus).\n• **Settings** — theme (light/dark), data controls, linked apps.\n• **Custom instructions** — tell ChatGPT about yourself so every response is personalized.\n\n**Pro tip:** Enable 'Memory' in settings so ChatGPT remembers details across conversations.",
      examplePrompt:
        "I just created my ChatGPT account. Walk me through the most important settings I should configure first.",
      exampleOutput:
        "Great choice! Here are the top settings to configure:\n\n1. **Theme** — Go to Settings → General → choose Dark or Light mode.\n2. **Custom Instructions** — Tell ChatGPT your role, industry, and preferred response style.\n3. **Data Controls** — Decide if your chats can be used for model training.\n4. **Memory** — Enable this so ChatGPT remembers your preferences.\n5. **Connected Apps** — Link Google Drive or OneDrive for file access (Plus only).",
      practiceTask:
        "Create your ChatGPT account (if you haven't already). Configure custom instructions by telling ChatGPT your profession, your preferred tone (casual/formal), and one thing you want to use it for most.",
      duration: "6 min",
    },
    {
      id: "1-3-first-prompt",
      title: "Lesson 1.3 – Your First Prompt",
      description:
        "A **prompt** is any text you type into ChatGPT. The quality of your prompt directly determines the quality of the response.\n\n**Simple prompt types to start with:**\n• **Ask a question** — \"What is climate change?\"\n• **Request a summary** — \"Summarize this article in 5 bullet points: [paste]\"\n• **Get an explanation** — \"Explain quantum computing in simple terms.\"\n• **Generate ideas** — \"Give me 10 blog post ideas about healthy cooking.\"\n\n**Key principles for beginners:**\n1. Be specific — \"Tell me about dogs\" vs. \"List 5 best dog breeds for apartment living with pros and cons.\"\n2. Give context — mention your audience, purpose, or constraints.\n3. Specify format — bullet points, table, paragraph, etc.\n4. Iterate — if the first response isn't perfect, refine your prompt.",
      examplePrompt:
        "Summarize the following news article in 5 bullet points. Focus on the key facts, who was involved, and why it matters:\n\n[Paste any news article here]",
      exampleOutput:
        "Here's a 5-point summary of the article:\n\n• **What happened:** A new international climate agreement was reached at COP29, committing 195 countries to reduce emissions by 50% by 2035.\n• **Who's involved:** Led by the EU, US, and China, with developing nations receiving $100B annual support.\n• **Key decisions:** Phase-out of coal by 2035, carbon tax on shipping, and mandatory corporate emissions reporting.\n• **Why it matters:** Scientists say this is the last window to limit warming to 1.5°C.\n• **Next steps:** Countries must submit updated national plans within 6 months.",
      practiceTask:
        "Find any news article online. Copy-paste it into ChatGPT with this prompt: \"Summarize this article in 5 bullet points, then explain why it matters in one sentence.\" Compare the summary with the original.",
      duration: "7 min",
    },
  ],
};

// ──────────────────────────────────────────────
// MODULE 2 — Prompt Mastery (Intermediate)
// ──────────────────────────────────────────────
const module2: Category = {
  id: "prompt-mastery",
  title: "Module 2: Prompt Mastery",
  description: "Master the art of writing effective prompts — from structure and templates to advanced techniques.",
  icon: PenTool,
  color: "hsl(280, 80%, 60%)",
  image: module2Image,
  level: "Intermediate",
  lessons: [
    {
      id: "2-1-anatomy",
      title: "Lesson 2.1 – Anatomy of a Good Prompt",
      description:
        "Every great prompt follows a structure. Think of it as a recipe:\n\n**The C-R-T-F-C Framework:**\n1. **Context** — Background information (\"I run a small bakery in Austin\")\n2. **Role** — Who should ChatGPT act as (\"Act as a senior marketing consultant\")\n3. **Task** — What you want done (\"Create a 30-day Instagram content calendar\")\n4. **Format** — How you want the output (\"Use a table with columns for date, post type, caption, hashtags\")\n5. **Constraints** — Limitations (\"Keep captions under 150 characters, use casual tone\")\n\n**Clear instructions** are the single most important factor. Vague prompts = vague answers.\n\n**Role-based prompts** (\"Act as…\") dramatically improve quality because they set the expertise level and perspective.\n\n**Step-by-step prompts** break complex tasks into manageable parts, ensuring thorough coverage.",
      examplePrompt:
        "You are a senior marketing consultant with 15 years of experience in food & beverage. I run a small bakery in Austin, Texas that specializes in sourdough bread and artisan pastries.\n\nCreate a 7-day Instagram content calendar. Format it as a table with columns: Day, Post Type (Reel/Carousel/Story), Topic, Caption (under 100 words), and 5 Hashtags. Keep the tone warm and friendly.",
      exampleOutput:
        "| Day | Post Type | Topic | Caption | Hashtags |\n|-----|-----------|-------|---------|----------|\n| Mon | Reel | Behind-the-scenes sourdough process | Watch the magic happen! Our sourdough takes 48 hours from starter to shelf... | #SourdoughLove #AustinBakery #ArtisanBread #BakeFromScratch #ATXFood |\n| Tue | Carousel | Top 5 pastries this week | Can't decide? Here are this week's top 5... | #PastryArt #FreshBaked #AustinEats #BakeryLife #TreatYourself |\n| Wed | Story | Customer spotlight | 💛 You make our mornings! Thanks @customer... | #CustomerLove #SmallBusiness #AustinLocal #BakeryVibes #Grateful |\n...(continues for full week)",
      practiceTask:
        "Write a prompt using all 5 elements of the C-R-T-F-C Framework for something relevant to your work or studies. Test it in ChatGPT and note how the structured prompt produces a better response than a simple one.",
      duration: "8 min",
    },
    {
      id: "2-2-templates",
      title: "Lesson 2.2 – Prompt Templates for Daily Use",
      description:
        "Templates are reusable prompt structures you can customize. They save time and ensure consistent quality.\n\n**Email template:**\n\"Write a professional [type] email to [recipient] about [topic]. Tone: [formal/casual]. Include: greeting, main message, call-to-action, sign-off. Keep it under [word count] words.\"\n\n**Summary template:**\n\"Summarize the following [document type] in [number] bullet points. Focus on [key aspects]. Audience: [who will read it].\"\n\n**Report template:**\n\"Create a [type] report on [topic]. Include: executive summary, key findings, data analysis, and recommendations. Format: [structure]. Length: [word count].\"\n\nThe key is to identify patterns in your daily work and create templates for recurring tasks.",
      examplePrompt:
        "Write a professional follow-up email to a client named Sarah about a project delay. Tone: empathetic but professional. Include: acknowledgment of the delay, reason (supplier issues), revised timeline (2 weeks), and offer for a call to discuss. Keep it under 150 words.",
      exampleOutput:
        "Subject: Project Timeline Update — Revised Delivery Date\n\nDear Sarah,\n\nI hope you're doing well. I wanted to reach out regarding the timeline for your project.\n\nUnfortunately, we've encountered an unexpected delay due to supplier availability issues that are beyond our control. I want to be transparent about this — your revised delivery date is now March 15, which is approximately two weeks from the original deadline.\n\nI understand this may affect your planning, and I sincerely apologize for any inconvenience. Rest assured, the quality of the final deliverable remains our top priority.\n\nWould you be available for a quick call this week to discuss the updated timeline and address any concerns?\n\nBest regards,\n[Your Name]",
      practiceTask:
        "Create 3 prompt templates for tasks you do regularly (emails, reports, summaries, social posts, etc.). Save them somewhere you can reuse them. Test each template in ChatGPT.",
      duration: "7 min",
    },
    {
      id: "2-3-avoiding-bad",
      title: "Lesson 2.3 – Avoiding Bad Prompts",
      description:
        "Bad prompts produce bad results. Here are the most common mistakes and how to fix them:\n\n**❌ Too vague:**\n\"Tell me about marketing\" → ChatGPT doesn't know what aspect, audience, or depth you want.\n✅ Fix: \"List 5 low-budget digital marketing strategies for a new online clothing store targeting women aged 25-35.\"\n\n**❌ Too long & unfocused:**\nA 500-word prompt with multiple unrelated questions → ChatGPT loses focus.\n✅ Fix: Break into separate, focused prompts. One task per prompt.\n\n**❌ No context or format:**\n\"Write an email\" → No recipient, purpose, tone, or length specified.\n✅ Fix: \"Write a formal 100-word email to my manager requesting time off next Friday for a medical appointment.\"\n\n**❌ Assuming ChatGPT knows your situation:**\n\"Continue the project\" → ChatGPT has no memory of previous sessions (unless Memory is on).\n✅ Fix: Always provide full context at the start of each conversation.",
      examplePrompt:
        "Here are 3 poorly written prompts. For each one, explain what's wrong and rewrite it as an effective prompt:\n\n1. \"Write something about dogs.\"\n2. \"I need help with my business. What should I do about everything?\"\n3. \"Make it better.\"",
      exampleOutput:
        "**Prompt 1: \"Write something about dogs.\"**\n❌ Problem: No topic, audience, format, or purpose.\n✅ Rewrite: \"Write a 300-word blog post about the top 5 dog breeds for families with young children. Include temperament, size, and care requirements for each breed.\"\n\n**Prompt 2: \"I need help with my business. What should I do about everything?\"**\n❌ Problem: Too vague, no specific area of business, no context about the business.\n✅ Rewrite: \"I run an online handmade jewelry store with $2K/month revenue. I want to increase sales. Suggest 5 specific marketing strategies I can implement this month with a $200 budget.\"\n\n**Prompt 3: \"Make it better.\"**\n❌ Problem: No reference to what 'it' is, no criteria for 'better'.\n✅ Rewrite: \"Rewrite the following paragraph to be more persuasive. Use active voice, add specific data points, and include a call-to-action: [paste paragraph]\"",
      practiceTask:
        "Find 3 bad prompts (from the internet or make them up). Identify what's wrong with each and rewrite them as effective prompts. Test both the original and improved versions in ChatGPT and compare results.",
      duration: "7 min",
    },
    {
      id: "2-4-advanced-techniques",
      title: "Lesson 2.4 – Advanced Prompt Techniques",
      description:
        "Take your prompting to the next level with these advanced methods:\n\n**1. Chain-of-Thought Prompting**\nAsk ChatGPT to \"think step by step\" before giving a final answer. This dramatically improves accuracy for complex reasoning.\nExample: \"Solve this problem step by step: If a store has a 30% off sale and you have an additional 10% coupon, what's the final price of a $200 item?\"\n\n**2. Multi-Step Instructions**\nBreak a large task into numbered steps within a single prompt.\nExample: \"Step 1: Research the topic. Step 2: Create an outline. Step 3: Write the first draft. Step 4: Review and improve.\"\n\n**3. Prompt Tweaking (Iteration)**\nNever settle for the first output. Use follow-ups:\n• \"Make it shorter\" / \"Make it more detailed\"\n• \"Change the tone to casual\"\n• \"Add 3 real-world examples\"\n• \"Now format it as a table\"\n\n**4. Few-Shot Prompting**\nProvide examples of the output you want, then ask for more.\nExample: \"Here's an example of the style I want: [example]. Now write 5 more in this same style.\"",
      examplePrompt:
        "I want you to think step by step.\n\nI'm launching a SaaS product for project management. My budget is $5,000 for the first month of marketing.\n\nStep 1: Identify my target audience (be specific with demographics and pain points).\nStep 2: Suggest 5 marketing channels ranked by ROI potential.\nStep 3: Create a $5,000 budget allocation across those channels.\nStep 4: Provide a week-1 action plan with specific tasks.",
      exampleOutput:
        "**Step 1: Target Audience**\n• Primary: Small business owners & startup founders (25-45 years old)\n• Pain points: Juggling multiple tools, poor team visibility, missed deadlines\n• Where they hang out: LinkedIn, Twitter/X, Product Hunt, Indie Hackers\n\n**Step 2: Marketing Channels (Ranked by ROI)**\n1. Content Marketing / SEO — long-term organic traffic\n2. LinkedIn Outreach — direct B2B lead generation\n3. Product Hunt Launch — one-time burst of early adopters\n4. Google Ads — targeted intent-based traffic\n5. Twitter/X Community Building — brand awareness\n\n**Step 3: Budget Allocation ($5,000)**\n• Content / SEO: $1,500 (writers, tools)\n• LinkedIn Ads: $1,200\n• Product Hunt prep: $300\n• Google Ads: $1,500\n• Social / Tools: $500\n\n**Step 4: Week-1 Action Plan**\nMon: Set up Google Ads campaign targeting \"project management tool\"\nTue: Publish first blog post, set up LinkedIn company page...",
      practiceTask:
        "Choose a complex task (business plan, content strategy, study schedule). Write a multi-step prompt using chain-of-thought. Then iterate on the response at least 3 times to refine it.",
      duration: "10 min",
    },
  ],
};

// ──────────────────────────────────────────────
// MODULE 3 — ChatGPT for Business & Productivity
// ──────────────────────────────────────────────
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
        "Email is the backbone of business communication. ChatGPT can write professional emails, follow-ups, cold outreach, client updates, and internal communications in seconds.\n\n**Types of business emails:**\n• Introduction / cold outreach emails\n• Follow-up emails (after meetings, no-reply situations)\n• Client update emails\n• Internal team communications\n• Negotiation / pricing emails\n\n**Best practices:**\n1. Always specify the recipient, context, and desired tone.\n2. Ask for subject line suggestions.\n3. Keep emails concise — specify word limits.\n4. Include a clear call-to-action.",
      examplePrompt:
        "Write 3 professional emails for different scenarios:\n\n1. A cold outreach email to a potential client introducing our web design agency. We've completed 50+ projects in e-commerce.\n2. A follow-up email to a client who hasn't responded in 5 days about a proposal we sent.\n3. An internal team email announcing a new project kickoff meeting next Tuesday at 2 PM.\n\nKeep each under 120 words. Professional but warm tone.",
      exampleOutput:
        "**Email 1: Cold Outreach**\nSubject: Let's Elevate Your Online Store ✨\n\nHi [Name],\n\nI came across [Company] and was impressed by your product range. At [Agency], we specialize in building high-converting e-commerce websites — with 50+ successful projects under our belt.\n\nI'd love to share how we helped a similar brand increase online sales by 40% in 3 months. Would you be open to a 15-minute call this week?\n\nBest, [Your Name]\n\n**Email 2: Follow-Up**\nSubject: Checking In — Our Proposal\n\nHi [Name],\n\nI wanted to follow up on the proposal I sent last Tuesday...\n\n**Email 3: Internal**\nSubject: 📅 New Project Kickoff — Tuesday 2 PM...",
      practiceTask:
        "Write professional emails for 3 real scenarios in your work life. Test different tones (formal, casual, persuasive) for the same email.",
      duration: "8 min",
    },
    {
      id: "3-2-market-research",
      title: "Lesson 3.2 – Market Research & Planning",
      description:
        "ChatGPT is a powerful brainstorming and research partner. While it shouldn't replace real data, it's excellent for:\n\n**Summarizing industry trends** — Ask for market overviews in specific sectors.\n**Generating business ideas** — Brainstorm validated concepts with pros/cons.\n**SWOT analysis** — Strengths, Weaknesses, Opportunities, Threats for any business.\n**Competitive analysis** — Compare features, pricing, and positioning.\n**Customer personas** — Create detailed buyer profiles.\n\n**Important:** Always verify ChatGPT's market data with real sources. Use it for structure and ideation, not as your sole data source.",
      examplePrompt:
        "Act as a business strategy consultant.\n\nI'm planning to launch a subscription-based meal kit delivery service targeting health-conscious millennials in urban areas.\n\n1. Create a SWOT analysis in table format.\n2. Identify my top 3 competitors and compare them.\n3. Suggest a unique value proposition that differentiates me.\n4. Estimate monthly operational costs for the first 3 months.",
      exampleOutput:
        "**SWOT Analysis:**\n| | Positive | Negative |\n|---|---|---|\n| Internal | Fresh, customizable meals; Trend alignment | High logistics costs; Perishable inventory |\n| External | Growing health food market ($15B+) | Intense competition (HelloFresh, Blue Apron) |\n\n**Top 3 Competitors:**\n1. HelloFresh — Largest market share, broad audience, $8-10/serving\n2. Blue Apron — Premium positioning, wine pairing, $9-12/serving\n3. Green Chef — Organic focus, USDA certified, $11-13/serving\n\n**Unique Value Proposition:**\n\"AI-personalized meal plans based on your fitness goals and dietary restrictions — delivered weekly.\"\n\n**Estimated Monthly Costs (Month 1-3):**\n• Ingredients & packaging: $5,000-8,000\n• Delivery logistics: $2,000-4,000...",
      practiceTask:
        "Choose a business idea you're interested in. Ask ChatGPT to create a complete SWOT analysis and competitive landscape. Then ask follow-up questions to refine the strategy.",
      duration: "10 min",
    },
    {
      id: "3-3-product-marketing",
      title: "Lesson 3.3 – Product Descriptions & Marketing Content",
      description:
        "Great product descriptions and marketing copy can make or break your sales. ChatGPT excels at:\n\n**Product descriptions** — Compelling, benefit-focused copy that converts.\n**Sales copy** — Headlines, bullet points, and CTAs.\n**Social media captions** — Platform-specific content with hashtags.\n**Landing page copy** — Hero sections, feature blocks, testimonials templates.\n\n**Key principles:**\n• Lead with benefits, not features.\n• Use power words (exclusive, proven, effortless, transform).\n• Include social proof elements.\n• Always have a clear CTA.",
      examplePrompt:
        "Write marketing copy for a premium wireless noise-cancelling headphone called \"SoundPro Elite\". Target audience: remote workers.\n\n1. Product description (150 words, benefit-focused)\n2. 3 Instagram captions (with emojis and hashtags)\n3. Landing page hero section (headline + subtext + CTA)",
      exampleOutput:
        "**1. Product Description:**\n🎧 SoundPro Elite — Your Focus, Amplified\n\nDesigned for the modern remote worker who refuses to compromise on audio quality. SoundPro Elite features industry-leading active noise cancellation that blocks out 99% of ambient noise — from barking dogs to construction sites.\n\nWith 40-hour battery life, cloud-soft memory foam ear cushions, and crystal-clear microphone for calls, you'll stay productive all day without fatigue. Seamlessly switch between your laptop, phone, and tablet with multipoint Bluetooth 5.3.\n\nYour best work starts with what you hear. ✨\n\n**2. Instagram Captions:**\n📸 Post 1: \"Silence is productive 🔇 Meet SoundPro Elite — 40hrs of pure focus. #RemoteWork #NoiseCancelling #WorkFromAnywhere\"...\n\n**3. Landing Page Hero:**\nHeadline: Work in Perfect Silence\nSubtext: Premium noise-cancelling headphones built for the remote worker who demands focus, comfort, and all-day battery.\nCTA: Shop Now — Free Shipping →",
      practiceTask:
        "Pick a product (real or imagined) and write: 1 product description, 3 social captions, and 1 landing page hero section. A/B test two versions of the product description by asking ChatGPT for alternatives.",
      duration: "8 min",
    },
    {
      id: "3-4-automating-workflow",
      title: "Lesson 3.4 – Automating Workflow",
      description:
        "ChatGPT can help you create systems that save hours every week.\n\n**Meeting notes & summaries:**\nPaste your rough notes → get structured summaries with action items, owners, and deadlines.\n\n**Task planning:**\nDescribe your week → get a prioritized, time-blocked schedule.\n\n**SOPs (Standard Operating Procedures):**\nDescribe a process → get a step-by-step SOP document.\n\n**Integration ideas:**\n• Google Docs — use ChatGPT to draft, then paste into Docs.\n• Notion — generate templates, databases, and wiki pages.\n• Slack — draft announcements, status updates, and channel descriptions.\n• Email — batch-create email sequences.\n\n**Pro tip:** Create a \"daily briefing\" prompt that you run every morning to plan your day.",
      examplePrompt:
        "Here are my rough meeting notes:\n\n- talked about Q1 goals\n- sarah will handle social media campaign\n- budget approved: $15k for marketing\n- new website launch moved to march 15\n- john needs to fix the payment bug by friday\n- next meeting: feb 20 at 10am\n- discussed hiring a content writer\n\nTurn these into a structured meeting summary with: attendees section, key decisions, action items with owners and deadlines, and next meeting details. Format professionally.",
      exampleOutput:
        "📋 **Meeting Summary — February 8, 2026**\n\n**Attendees:** [Team members present]\n\n**Key Decisions:**\n1. Q1 marketing budget approved: $15,000\n2. Website launch rescheduled to March 15\n3. Agreed to hire a content writer\n\n**Action Items:**\n| # | Task | Owner | Deadline |\n|---|------|-------|----------|\n| 1 | Launch social media campaign | Sarah | Feb 28 |\n| 2 | Fix payment processing bug | John | Feb 14 |\n| 3 | Post content writer job listing | [TBD] | Feb 15 |\n\n**Next Meeting:** February 20, 2026 at 10:00 AM",
      practiceTask:
        "Take notes from your most recent meeting (or make up realistic ones). Ask ChatGPT to create a professional summary. Then ask it to also create follow-up email drafts for each action item owner.",
      duration: "7 min",
    },
  ],
};

// ──────────────────────────────────────────────
// MODULE 4 — Freelancing & Content Creation
// ──────────────────────────────────────────────
const module4: Category = {
  id: "freelancing-content",
  title: "Module 4: Freelancing & Content Creation",
  description: "Win clients, create compelling content, and scale your freelance business with AI.",
  icon: Rocket,
  color: "hsl(25, 95%, 53%)",
  image: module4Image,
  level: "Intermediate",
  lessons: [
    {
      id: "4-1-proposals",
      title: "Lesson 4.1 – Proposals & Client Communication",
      description:
        "Winning freelance work starts with compelling proposals. ChatGPT can help you:\n\n**Proposal writing:**\n• Customize proposals for each client's specific needs.\n• Highlight relevant experience and results.\n• Include clear deliverables, timeline, and pricing.\n\n**Service descriptions:**\n• Write clear, benefit-focused descriptions of your services.\n• Create tiered packages (Basic, Standard, Premium).\n\n**Pricing messages:**\n• Communicate value before price.\n• Handle discount requests professionally.\n• Suggest upsells naturally.\n\n**Client onboarding:**\n• Welcome messages, questionnaires, and kickoff agendas.",
      examplePrompt:
        "I'm a freelance web developer specializing in React and e-commerce. A potential client runs a boutique fashion brand and wants to redesign their Shopify store.\n\nWrite a compelling proposal that includes:\n1. Personalized greeting referencing their brand\n2. Understanding of their needs\n3. My approach (3 phases)\n4. Deliverables list\n5. Timeline (6 weeks)\n6. Investment: $4,500\n7. Why choose me (social proof)\n8. Next steps CTA",
      exampleOutput:
        "**Proposal: Shopify Store Redesign for [Brand Name]**\n\nHi [Client Name],\n\nThank you for sharing your vision for [Brand Name]'s new online presence! I've explored your current store and social media, and I can see the incredible potential for a redesign that matches the quality of your products.\n\n**Understanding Your Needs:**\nYou need a modern, mobile-first Shopify store that reflects your brand's premium aesthetic and converts browsers into buyers.\n\n**My Approach:**\n• Phase 1 (Week 1-2): Discovery & Design — wireframes, mood board, your feedback\n• Phase 2 (Week 3-4): Development — custom theme, responsive design, integrations\n• Phase 3 (Week 5-6): Testing & Launch — QA, performance optimization, training\n\n**Investment: $4,500**\n50% upfront, 50% on completion.\n\n**Why Me:** 30+ e-commerce projects, 4.9★ rating on Upwork, avg. 25% conversion increase.\n\n**Next Steps:** Reply to schedule a free 30-min discovery call! 📞",
      practiceTask:
        "Write a proposal for a freelance project in your field. Then ask ChatGPT to write a professional follow-up message for 3 days after sending the proposal with no response.",
      duration: "8 min",
    },
    {
      id: "4-2-blog-social",
      title: "Lesson 4.2 – Blog & Social Media Content",
      description:
        "Content creation is one of ChatGPT's strongest use cases.\n\n**Blog writing:**\n• SEO-friendly articles with keyword integration.\n• How-to guides, listicles, opinion pieces.\n• Content outlines before full drafts.\n\n**Social media:**\n• Platform-specific content (Instagram ≠ LinkedIn ≠ Twitter).\n• Carousel scripts, reel hooks, story ideas.\n• Hashtag research and caption writing.\n\n**Video scripts:**\n• YouTube — hook, intro, sections, CTA structure.\n• TikTok/Reels — short-form hooks and punchy scripts.\n\n**Content calendars:**\n• Weekly/monthly planning with themes.\n• Content pillar strategy.\n• Repurposing: Blog → Social → Email → Video.",
      examplePrompt:
        "Create a complete content package for a fitness coaching brand:\n\n1. One 800-word SEO blog post about \"5 Morning Habits That Boost Energy\" (include keyword: morning routine for energy)\n2. 3 Instagram carousel slide scripts based on the blog\n3. 1 YouTube Shorts script (60 seconds) with a hook\n4. A 2-week content calendar in table format",
      exampleOutput:
        "**1. Blog Post: 5 Morning Habits That Boost Energy All Day**\n\nTired of hitting snooze and dragging through your morning? Your morning routine for energy doesn't need to be complicated...\n\n[Full 800-word article with H2 headings, tips, and CTA]\n\n**2. Instagram Carousel (5 slides):**\nSlide 1: \"5 Habits That Give You ALL-DAY Energy ⚡\" (hook)\nSlide 2: \"#1 — Hydrate before caffeine 💧\"\nSlide 3: \"#2 — 10 min movement (not the gym!) 🏃\"\n...\n\n**3. YouTube Shorts Script:**\n[HOOK — 3 sec]: \"Stop starting your morning wrong.\"\n[CONTENT — 50 sec]: \"Here's what high-energy people do differently...\" \n[CTA — 7 sec]: \"Follow for more energy tips!\"\n\n**4. Content Calendar:**\n| Day | Platform | Type | Topic |\n|-----|----------|------|-------|\n| Mon | Blog | Article | 5 Morning Habits... |...",
      practiceTask:
        "Create a content package for your own brand or a fictional one: 1 blog outline, 3 social captions, and 1 short video script. Test each in ChatGPT and refine.",
      duration: "10 min",
    },
    {
      id: "4-3-editing-rewriting",
      title: "Lesson 4.3 – Editing & Rewriting Content",
      description:
        "ChatGPT is an excellent editor. Use it to:\n\n**Improve grammar and style:**\n• Fix grammatical errors while preserving your voice.\n• Adjust reading level (simple ↔ academic).\n\n**Change tone:**\n• Convert formal to casual (or vice versa).\n• Make content more persuasive, empathetic, or authoritative.\n\n**Summarize or expand:**\n• Condense a 2000-word article to 200 words.\n• Expand bullet points into full paragraphs.\n\n**Repurpose content:**\n• Blog post → Twitter thread\n• Meeting notes → email summary\n• Long report → executive brief\n\n**Pro tip:** Always say \"preserve my original meaning\" when editing to prevent ChatGPT from changing your message.",
      examplePrompt:
        "Here's a rough blog paragraph I wrote:\n\n\"AI is really changing stuff in marketing. Like companies are using it for lots of things now. It can write copy and do research and figure out who to target. Its pretty cool and saves alot of time for marketers who are busy.\"\n\n1. Fix grammar and spelling errors\n2. Rewrite for a professional marketing blog\n3. Rewrite for a casual Instagram caption\n4. Expand into a full 150-word paragraph with data points",
      exampleOutput:
        "**1. Grammar Fix:**\n\"AI is really changing things in marketing. Companies are using it for many tasks now. It can write copy, conduct research, and determine target audiences. It's pretty cool and saves a lot of time for busy marketers.\"\n\n**2. Professional Blog Version:**\n\"Artificial intelligence is fundamentally transforming the marketing landscape. Organizations across industries are leveraging AI-powered tools for copywriting, market research, audience segmentation, and campaign optimization — dramatically reducing time-to-market while improving ROI.\"\n\n**3. Instagram Caption:**\n\"AI is literally changing the marketing game 🤖✨ From writing ad copy to finding your perfect audience — marketers are saving HOURS every week. Are you using AI yet? 👇 #AIMarketing #MarketingTips\"\n\n**4. Expanded (150 words):**\n\"Artificial intelligence is reshaping marketing at an unprecedented pace. According to recent studies, 73% of marketers now use AI tools...\"",
      practiceTask:
        "Take a piece of your own writing (email, blog draft, social post). Ask ChatGPT to: 1) fix grammar, 2) rewrite for a different audience, 3) make it half the length, 4) make it twice as detailed.",
      duration: "7 min",
    },
  ],
};

// ──────────────────────────────────────────────
// MODULE 5 — ChatGPT for Coding & Developers
// ──────────────────────────────────────────────
const module5: Category = {
  id: "coding-developers",
  title: "Module 5: Coding & Developers",
  description: "Write, debug, and understand code faster with ChatGPT as your AI pair programmer.",
  icon: Code,
  color: "hsl(142, 71%, 45%)",
  image: module5Image,
  level: "Advanced",
  lessons: [
    {
      id: "5-1-writing-code",
      title: "Lesson 5.1 – Writing Code",
      description:
        "ChatGPT can generate code in virtually any programming language. To get the best results:\n\n**Specify clearly:**\n• Programming language and framework.\n• What the code should do (input → output).\n• Style preferences (functional vs OOP, naming conventions).\n• Include comments or not.\n\n**Types of code generation:**\n• Full components / functions\n• Boilerplate / starter templates\n• Algorithm implementations\n• Database queries (SQL, NoSQL)\n• Configuration files\n• Test cases\n\n**Best practices:**\n1. Always review generated code before using it.\n2. Ask for explanations of complex parts.\n3. Request error handling and edge case coverage.\n4. Use it for first drafts, then refine.",
      examplePrompt:
        "Write a React component in TypeScript using Tailwind CSS for a responsive pricing table with 3 tiers:\n\n1. Starter — $9/mo — 5 projects, 1GB storage, email support\n2. Pro — $29/mo — unlimited projects, 50GB storage, priority support, API access\n3. Enterprise — Custom pricing — unlimited everything, dedicated manager, SLA\n\nHighlight the Pro plan as \"Most Popular\". Include hover animations and a \"Get Started\" button for each tier. Add proper TypeScript types.",
      exampleOutput:
        "```tsx\ninterface PricingTier {\n  name: string;\n  price: string;\n  period?: string;\n  features: string[];\n  highlighted?: boolean;\n  cta: string;\n}\n\nconst tiers: PricingTier[] = [\n  {\n    name: 'Starter',\n    price: '$9',\n    period: '/mo',\n    features: ['5 projects', '1GB storage', 'Email support'],\n    cta: 'Get Started',\n  },\n  {\n    name: 'Pro',\n    price: '$29',\n    period: '/mo',\n    features: ['Unlimited projects', '50GB storage', 'Priority support', 'API access'],\n    highlighted: true,\n    cta: 'Get Started',\n  },\n  // ... Enterprise tier\n];\n\nconst PricingTable = () => (\n  <div className=\"grid md:grid-cols-3 gap-6 max-w-5xl mx-auto\">\n    {tiers.map((tier) => (\n      <div key={tier.name} className={`rounded-2xl p-8 transition-all hover:-translate-y-2 hover:shadow-xl ${tier.highlighted ? 'bg-primary text-white ring-2 ring-primary' : 'bg-card border'}`}>\n        {tier.highlighted && <span className=\"text-xs font-bold uppercase\">Most Popular</span>}\n        <h3>{tier.name}</h3>\n        <p className=\"text-4xl font-bold\">{tier.price}<span className=\"text-sm\">{tier.period}</span></p>\n        ...\n      </div>\n    ))}\n  </div>\n);\n```",
      practiceTask:
        "Ask ChatGPT to generate a component or function you actually need for a current project. Review the code, test it, and ask ChatGPT to improve it based on any issues you find.",
      duration: "8 min",
    },
    {
      id: "5-2-debugging",
      title: "Lesson 5.2 – Debugging & Explaining Code",
      description:
        "Debugging is where ChatGPT truly shines. It can:\n\n**Find errors:**\n• Paste your code + error message → get an explanation and fix.\n• Identify logical errors that don't throw exceptions.\n• Spot performance issues and anti-patterns.\n\n**Explain code:**\n• Line-by-line explanations at any skill level.\n• Translate code logic into plain English.\n• Explain complex algorithms or design patterns.\n\n**Best debugging prompts:**\n1. Always include the FULL error message.\n2. Include the relevant code (not just the failing line).\n3. Describe what you EXPECTED vs what HAPPENED.\n4. Mention your tech stack and versions.",
      examplePrompt:
        "I'm getting this error in my React app:\n\n```\nTypeError: Cannot read properties of undefined (reading 'map')\n```\n\nHere's my component:\n```tsx\nconst UserList = () => {\n  const [users, setUsers] = useState();\n  \n  useEffect(() => {\n    fetch('/api/users').then(res => res.json()).then(setUsers);\n  }, []);\n  \n  return (\n    <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>\n  );\n};\n```\n\nExplain what's wrong and how to fix it. Show me the corrected code.",
      exampleOutput:
        "**The Problem:**\n`useState()` is called without an initial value, so `users` is `undefined` on the first render. When React tries to call `users.map()`, it crashes because `undefined` has no `.map()` method.\n\n**Two issues to fix:**\n1. Initialize state with an empty array: `useState<User[]>([])`\n2. Add error handling for the fetch call\n\n**Corrected Code:**\n```tsx\ninterface User {\n  id: string;\n  name: string;\n}\n\nconst UserList = () => {\n  const [users, setUsers] = useState<User[]>([]);\n  const [loading, setLoading] = useState(true);\n  \n  useEffect(() => {\n    fetch('/api/users')\n      .then(res => {\n        if (!res.ok) throw new Error('Failed to fetch');\n        return res.json();\n      })\n      .then(setUsers)\n      .catch(console.error)\n      .finally(() => setLoading(false));\n  }, []);\n  \n  if (loading) return <p>Loading...</p>;\n  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n};\n```",
      practiceTask:
        "Find a bug in your own code (or use a code snippet with a known error). Paste it into ChatGPT with the error message and ask for help debugging. Also ask it to explain any part of the fix you don't understand.",
      duration: "7 min",
    },
    {
      id: "5-3-project-api",
      title: "Lesson 5.3 – Project & API Integration",
      description:
        "ChatGPT can help you plan entire projects and integrate APIs.\n\n**Project planning:**\n• Generate project ideas based on your skill level.\n• Create full project structures (file trees, architecture).\n• Design database schemas.\n• Write README files and documentation.\n\n**API integration:**\n• Generate fetch/axios code for any REST API.\n• Create TypeScript types from API responses.\n• Build webhook handlers.\n• Write authentication flows (OAuth, JWT).\n\n**Automation scripts:**\n• Cron jobs for scheduled tasks.\n• Data processing pipelines.\n• File manipulation scripts.\n• Deployment configurations.",
      examplePrompt:
        "I want to build a simple weather dashboard using React and the OpenWeatherMap API.\n\n1. Create the project folder structure.\n2. Write a custom hook `useWeather(city)` that fetches current weather data.\n3. Generate TypeScript types for the API response.\n4. Create a WeatherCard component that displays the data.\n5. Add error handling and loading states.",
      exampleOutput:
        "**1. Project Structure:**\n```\nsrc/\n├── components/\n│   ├── WeatherCard.tsx\n│   ├── SearchBar.tsx\n│   └── ErrorMessage.tsx\n├── hooks/\n│   └── useWeather.ts\n├── types/\n│   └── weather.ts\n├── utils/\n│   └── api.ts\n└── App.tsx\n```\n\n**2. Custom Hook:**\n```tsx\nexport const useWeather = (city: string) => {\n  const [data, setData] = useState<WeatherData | null>(null);\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState<string | null>(null);\n  ...\n};\n```\n\n**3. Types:**\n```tsx\nexport interface WeatherData {\n  temp: number;\n  feels_like: number;\n  humidity: number;\n  description: string;\n  icon: string;\n  city: string;\n  country: string;\n}\n```\n...",
      practiceTask:
        "Pick a public API (weather, news, Pokemon, etc.) and ask ChatGPT to help you build a simple app that consumes it. Follow along step by step.",
      duration: "10 min",
    },
  ],
};

// ──────────────────────────────────────────────
// MODULE 6 — Daily Productivity & Personal Use
// ──────────────────────────────────────────────
const module6: Category = {
  id: "daily-productivity",
  title: "Module 6: Daily Productivity & Personal Use",
  description: "Plan your day, boost study sessions, optimize your resume, and handle personal tasks efficiently.",
  icon: Zap,
  color: "hsl(45, 93%, 47%)",
  image: module6Image,
  level: "Beginner",
  lessons: [
    {
      id: "6-1-task-planning",
      title: "Lesson 6.1 – Task Planning & Time Management",
      description:
        "ChatGPT can be your personal productivity coach.\n\n**Daily planning:**\n• List your tasks → get a prioritized, time-blocked schedule.\n• Use Eisenhower Matrix (urgent/important) for prioritization.\n• Create Pomodoro schedules for focused work.\n\n**Weekly/monthly planning:**\n• Set goals with actionable milestones.\n• Balance work, personal, and learning time.\n• Create habit trackers and routines.\n\n**Time management techniques:**\n• Pomodoro Technique (25 min work / 5 min break)\n• Time blocking (dedicated hours for specific tasks)\n• 2-Minute Rule (if it takes <2 min, do it now)\n• Eat the Frog (hardest task first)",
      examplePrompt:
        "I have these tasks for today:\n- Finish client presentation (2 hrs)\n- Reply to 15 emails (30 min)\n- Gym workout (1 hr)\n- Grocery shopping (45 min)\n- Read 30 pages of a book (30 min)\n- Call the dentist (5 min)\n- Prepare dinner (45 min)\n- Review team pull requests (1 hr)\n\nCreate a time-blocked schedule starting at 7 AM. Use the Eat the Frog method (hardest task first). Group similar tasks together. Include breaks.",
      exampleOutput:
        "🐸 **Daily Schedule — Eat the Frog Method**\n\n7:00 AM — Morning routine & breakfast\n7:30 AM — 🐸 Finish client presentation (deep work)\n9:30 AM — ☕ Break (15 min)\n9:45 AM — Review team pull requests\n10:45 AM — Reply to 15 emails + Call dentist (batch comms)\n11:30 AM — 🏋️ Gym workout\n12:30 PM — Lunch break\n1:15 PM — Grocery shopping\n2:00 PM — Read 30 pages (wind-down activity)\n2:30 PM — Free time / buffer\n5:30 PM — Prepare dinner\n6:15 PM — Evening free\n\n**Estimated productive hours: 5.5 hrs**\n**Breaks: 2.5 hrs**\n**Personal: 4 hrs**",
      practiceTask:
        "List all your tasks for tomorrow. Ask ChatGPT to create a time-blocked schedule using a method of your choice (Pomodoro, Eat the Frog, or Eisenhower Matrix). Follow it for one day and note what worked.",
      duration: "6 min",
    },
    {
      id: "6-2-study-personal",
      title: "Lesson 6.2 – Personal Writing & Study",
      description:
        "Whether you're a student or lifelong learner, ChatGPT is an incredible study tool.\n\n**Summarize notes & textbooks:**\n• Paste long content → get concise bullet points.\n• Create flashcard Q&A sets.\n• Generate mind maps in text format.\n\n**Study plans:**\n• Create schedules based on exam dates and topics.\n• Spaced repetition reminders.\n• Practice questions and mock tests.\n\n**Essay & research help:**\n• Generate outlines with thesis statements.\n• Research direction suggestions.\n• Grammar and style improvement.\n• Citation formatting.\n\n**Important:** Use ChatGPT as a study AID, not to write assignments for you. Academic integrity matters.",
      examplePrompt:
        "I have a Biology exam in 10 days. The topics are:\n- Cell structure and function\n- DNA and genetics\n- Evolution\n- Ecology and ecosystems\n\nI can study 2 hours per day. Create:\n1. A 10-day study plan with daily focus areas\n2. 5 flashcard questions for each topic\n3. A practice quiz (10 questions, multiple choice)",
      exampleOutput:
        "**10-Day Study Plan:**\nDay 1-2: Cell Structure & Function (organelles, membrane transport)\nDay 3-4: DNA & Genetics (replication, transcription, Mendel's laws)\nDay 5-6: Evolution (natural selection, evidence, speciation)\nDay 7-8: Ecology (food webs, biomes, nutrient cycles)\nDay 9: Full review + weak areas\nDay 10: Practice quizzes + final review\n\n**Flashcards — Cell Structure:**\nQ1: What is the function of mitochondria?\nA1: Cellular respiration — converting glucose to ATP (energy)\n...\n\n**Practice Quiz:**\n1. Which organelle is responsible for protein synthesis?\na) Mitochondria b) Ribosome c) Golgi apparatus d) Lysosome\n[Answer: b]...",
      practiceTask:
        "Choose a subject you're currently studying. Ask ChatGPT to create a study plan, flashcards, and a practice quiz. Test yourself with the quiz.",
      duration: "8 min",
    },
    {
      id: "6-3-resume-career",
      title: "Lesson 6.3 – Resume & Career Assistance",
      description:
        "ChatGPT can significantly improve your job search materials.\n\n**Resume optimization:**\n• Rewrite bullet points with action verbs and quantified results.\n• Tailor resumes for specific job descriptions.\n• ATS (Applicant Tracking System) keyword optimization.\n\n**Cover letters:**\n• Personalized, company-specific cover letters.\n• Highlight relevant experience and culture fit.\n\n**Job search messages:**\n• LinkedIn connection requests.\n• Follow-up messages after interviews.\n• Thank you notes.\n• Salary negotiation scripts.\n\n**Interview prep:**\n• Common questions and sample answers.\n• STAR method response practice.\n• Company research summaries.",
      examplePrompt:
        "I'm a frontend developer with 3 years of experience applying for a Senior React Developer position at a fintech company.\n\n1. Rewrite these resume bullet points to be more impactful:\n   - \"Built web pages using React\"\n   - \"Worked with the team on projects\"\n   - \"Fixed bugs in the code\"\n\n2. Write a 200-word cover letter tailored to a fintech company\n\n3. Give me 5 likely interview questions with sample STAR answers",
      exampleOutput:
        "**1. Improved Resume Bullet Points:**\n• \"Architected and developed 15+ responsive web applications using React and TypeScript, serving 50,000+ monthly active users with 99.9% uptime\"\n• \"Collaborated with cross-functional teams of 8+ engineers, designers, and PMs to deliver 3 major product launches on schedule and under budget\"\n• \"Identified and resolved 200+ production bugs, reducing customer-reported issues by 45% and improving app performance by 30%\"\n\n**2. Cover Letter:**\nDear Hiring Team,\n\nI'm excited to apply for the Senior React Developer position at [Company]. With 3 years of experience building performant, user-centric web applications, I'm particularly drawn to [Company]'s mission to democratize financial services...\n\n**3. Interview Questions + STAR Answers:**\nQ1: \"Tell me about a challenging bug you solved.\"\nS: Our payment form was dropping 15% of submissions...\nT: I was tasked with finding the root cause...\nA: I implemented...\nR: Submissions increased by 15%...",
      practiceTask:
        "Take your current resume and ask ChatGPT to improve 5 bullet points. Then ask it to generate a cover letter for a specific job you're interested in.",
      duration: "8 min",
    },
  ],
};

// ──────────────────────────────────────────────
// MODULE 7 — Advanced Customization (Premium)
// ──────────────────────────────────────────────
const module7: Category = {
  id: "advanced-customization",
  title: "Module 7: Advanced Customization",
  description: "Build custom AI assistants, automate workflows, and master advanced prompt engineering.",
  icon: Settings,
  color: "hsl(310, 70%, 55%)",
  image: module7Image,
  level: "Advanced",
  lessons: [
    {
      id: "7-1-custom-gpts",
      title: "Lesson 7.1 – Custom GPTs & Personal AI Assistants",
      description:
        "OpenAI allows Plus users to create Custom GPTs — specialized AI assistants tailored to specific tasks.\n\n**What are Custom GPTs?**\nThey're personalized versions of ChatGPT with:\n• Custom instructions baked in.\n• Specific knowledge files uploaded.\n• Defined behavior and personality.\n• Optional API connections (Actions).\n\n**Use cases:**\n• Marketing assistant — knows your brand voice, audience, and products.\n• Writing coach — follows your style guide and editorial standards.\n• Customer support bot — trained on your FAQ and policies.\n• Code reviewer — knows your tech stack and coding standards.\n• Personal tutor — adapts to your learning level and subjects.\n\n**How to build one:**\n1. Go to ChatGPT → Explore GPTs → Create\n2. Name it and write instructions\n3. Upload knowledge files (PDFs, docs)\n4. Configure conversation starters\n5. Optionally add Actions (API calls)",
      examplePrompt:
        "Help me design a Custom GPT for my role as a digital marketing manager.\n\n1. Write the system instructions (what it should know and how it should behave)\n2. Suggest 5 knowledge files I should upload\n3. Create 4 conversation starter suggestions\n4. Define its personality and tone",
      exampleOutput:
        "**System Instructions:**\nYou are MarketingPro, a senior digital marketing strategist with 10+ years of experience. You specialize in B2B SaaS marketing. You always:\n- Provide data-backed recommendations\n- Consider budget constraints\n- Suggest A/B test ideas\n- Reference current marketing trends\n- Format responses with clear headers and action items\n\nYou know our brand: [Company Name], targeting [audience], with a $[X]/month marketing budget.\n\n**Knowledge Files to Upload:**\n1. Brand style guide (PDF)\n2. Current marketing strategy document\n3. Competitor analysis spreadsheet\n4. Past campaign performance reports\n5. Customer persona profiles\n\n**Conversation Starters:**\n1. \"Help me plan next month's content calendar\"\n2. \"Analyze this campaign's performance: [paste data]\"\n3. \"Write ad copy for our new feature launch\"\n4. \"Suggest 5 ways to improve our LinkedIn engagement\"\n\n**Personality:** Professional, proactive, data-driven. Uses emojis sparingly. Always ends with actionable next steps.",
      practiceTask:
        "Design a Custom GPT for your specific role or business. Write the full system instructions, list knowledge files you'd upload, and create conversation starters. If you have ChatGPT Plus, build it!",
      duration: "10 min",
    },
    {
      id: "7-2-automations",
      title: "Lesson 7.2 – Automations & Integrations",
      description:
        "Combine ChatGPT with other tools to create powerful automated workflows.\n\n**Zapier + ChatGPT:**\n• New email → ChatGPT summarizes → sends to Slack.\n• New form submission → ChatGPT drafts response → saves to Google Sheets.\n• New blog post → ChatGPT creates social posts → schedules via Buffer.\n\n**Notion + ChatGPT:**\n• Generate wiki pages, meeting notes, project briefs.\n• Create database templates with formulas.\n• Build SOPs and knowledge bases.\n\n**Google Sheets + ChatGPT:**\n• Analyze data and create summaries.\n• Generate formulas and pivot table structures.\n• Clean and categorize data.\n\n**ChatGPT API:**\n• Build custom chatbots for your website.\n• Create automated email responders.\n• Generate personalized content at scale.",
      examplePrompt:
        "I want to create an automated workflow for my content business:\n\n1. When I publish a blog post, I need it automatically repurposed into:\n   - 3 Twitter/X posts\n   - 1 LinkedIn post\n   - 5 Instagram carousel slides\n   - 1 newsletter intro paragraph\n\n2. Design this workflow using Zapier + ChatGPT. Give me step-by-step setup instructions.\n\n3. Write the ChatGPT prompts that each Zapier step should use.",
      exampleOutput:
        "**Automated Content Repurposing Workflow:**\n\n**Trigger:** New blog post published (WordPress/Ghost webhook)\n\n**Step 1: Zapier catches the webhook**\nTrigger: Webhooks by Zapier → Catch Hook\nData received: title, body, URL, featured image\n\n**Step 2: ChatGPT — Generate Twitter Posts**\nPrompt: \"Based on this blog post, create 3 Twitter/X posts (under 280 chars each). Include relevant hashtags and a link. Blog: {{body}}\"\n\n**Step 3: ChatGPT — Generate LinkedIn Post**\nPrompt: \"Write a professional LinkedIn post (200-300 words) summarizing this blog post's key insights...\"\n\n**Step 4: Post to Buffer/Hootsuite**\nAction: Create social posts with scheduled times\n\n**Step 5: ChatGPT — Newsletter Intro**\nPrompt: \"Write a 100-word newsletter intro for this blog post...\"",
      practiceTask:
        "Map out an automation workflow for a repetitive task in your work. Write the ChatGPT prompts for each step. If you have Zapier, try building it!",
      duration: "9 min",
    },
    {
      id: "7-3-advanced-engineering",
      title: "Lesson 7.3 – Advanced Prompt Engineering",
      description:
        "Master the most sophisticated prompting techniques used by AI professionals.\n\n**1. Multi-step prompts:**\nChain multiple instructions in sequence for complex outputs. Number each step clearly.\n\n**2. Conditional logic:**\n\"If the user asks about X, respond with Y. If they ask about Z, respond with W.\"\nUseful for Custom GPTs and chatbot design.\n\n**3. System prompt design:**\nWrite instructions that define behavior, personality, knowledge boundaries, and response format.\n\n**4. Temperature and creativity control:**\n• \"Be creative and think outside the box\" → higher creativity\n• \"Be precise and factual, no speculation\" → lower creativity\n\n**5. Output consistency:**\n• Provide examples (few-shot learning)\n• Define exact formats (JSON, Markdown, tables)\n• Set constraints (word count, style, tone)\n\n**6. Meta-prompting:**\nAsk ChatGPT to write better prompts FOR you.\n\"I want to achieve X. Write the best possible prompt I should use.\"",
      examplePrompt:
        "I want to create a system prompt for a customer support chatbot for my SaaS product called \"TaskFlow\" (a project management tool).\n\nThe bot should:\n1. Answer FAQs about features, pricing, and setup\n2. Escalate complex issues to human support\n3. Never make up features that don't exist\n4. Be friendly but professional\n5. Collect user email before escalating\n\nWrite a complete system prompt with conditional logic, knowledge boundaries, and example interactions.",
      exampleOutput:
        "**System Prompt for TaskFlow Support Bot:**\n\nYou are TaskFlow's AI support assistant. Your name is \"Flow.\" You help users with questions about TaskFlow, a project management tool.\n\n**Personality:** Friendly, helpful, concise. Use emojis sparingly (max 1 per message). Always address users by name if provided.\n\n**Knowledge Boundaries:**\n- You know TaskFlow's features: task boards, timelines, team chat, file sharing, integrations, reports.\n- Plans: Free ($0, 3 projects), Pro ($15/mo, unlimited), Enterprise (custom).\n- You do NOT know internal company information, roadmap, or unreleased features.\n- If asked about something you don't know, say: \"I don't have information about that, but I can connect you with our team!\"\n\n**Conditional Logic:**\n- IF question is about billing/refunds → collect email → escalate to billing@taskflow.com\n- IF question is a bug report → collect: steps to reproduce, browser, screenshot → escalate to support\n- IF question is about features → answer directly from knowledge\n\n**Escalation Flow:**\n1. \"I'd love to help! Could you share your email so our team can follow up?\"\n2. After email: \"Thanks! I've flagged this for our [billing/support] team. They'll reach out within 24 hours.\"\n\n**Example:**\nUser: \"Can TaskFlow integrate with Slack?\"\nBot: \"Yes! TaskFlow integrates with Slack 🎉 You can get task notifications, create tasks from Slack messages, and sync channels with projects. Want me to walk you through the setup?\"",
      practiceTask:
        "Design a complete system prompt for an AI assistant in your field. Include personality, knowledge boundaries, conditional logic, and 3 example interactions. Test it as Custom Instructions in ChatGPT.",
      duration: "12 min",
    },
  ],
};

// ──────────────────────────────────────────────
// EXPORTS
// ──────────────────────────────────────────────
export const categories: Category[] = [
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  module7,
];

// ──────────────────────────────────────────────
// PROMPT LIBRARY (expanded)
// ──────────────────────────────────────────────
export const promptLibrary = [
  // Business
  { id: "p1", category: "Business", title: "Professional Email", prompt: "Write a professional [type] email to [recipient] about [topic]. Tone: [formal/casual]. Include a greeting, main message, call-to-action, and sign-off. Keep it under [word count] words." },
  { id: "p2", category: "Business", title: "Meeting Summary", prompt: "Turn these rough meeting notes into a structured summary with attendees, key decisions, action items (with owners and deadlines), and next meeting details:\n\n[paste notes]" },
  { id: "p3", category: "Business", title: "SWOT Analysis", prompt: "Act as a business strategist. Conduct a SWOT analysis for [business/product] in the [industry] market. Present in a table format. Be specific and actionable." },
  { id: "p4", category: "Business", title: "Business Idea Validator", prompt: "I have a business idea: [describe idea]. Act as a venture capital analyst and evaluate it. Score it 1-10 on: market size, competition, feasibility, profitability, and uniqueness. Provide a summary verdict." },
  // Content Creation
  { id: "p5", category: "Content Creation", title: "Blog Post", prompt: "Write a [word count]-word blog post about [topic] for [target audience]. Use a [tone] tone. Include: engaging intro, [number] sections with H2 headings, practical examples, and a CTA. Optimize for SEO keyword: [keyword]." },
  { id: "p6", category: "Content Creation", title: "Social Media Pack", prompt: "Create a social media content pack for [brand/topic]:\n1. 3 Instagram captions with hashtags\n2. 3 Twitter/X posts (under 280 chars)\n3. 1 LinkedIn post (200 words)\n\nTone: [tone]. Include CTAs." },
  { id: "p7", category: "Content Creation", title: "YouTube Script", prompt: "Write a script for a [duration]-minute YouTube video titled '[title]'. Include: a 5-second hook, intro, [number] main sections, transitions, and a CTA. Tone: [tone]." },
  { id: "p8", category: "Content Creation", title: "Content Calendar", prompt: "Create a [duration] content calendar for [brand/niche] on [platform]. Include: date, content type, topic, caption/brief, and hashtags. Mix educational, promotional, and engagement content." },
  // Coding
  { id: "p9", category: "Coding", title: "Code Generator", prompt: "Write a [language/framework] [component/function] that [what it does]. Include: TypeScript types, error handling, comments, and best practices. Style: [functional/OOP]." },
  { id: "p10", category: "Coding", title: "Debug Assistant", prompt: "I'm getting this error: [paste error]. Here's my code: [paste code]. My tech stack: [stack]. Explain what's wrong, why it happens, and show me the corrected code with comments." },
  { id: "p11", category: "Coding", title: "Code Explainer", prompt: "Explain the following code line by line. I'm a [beginner/intermediate/advanced] developer. Use simple language and analogies where helpful:\n\n[paste code]" },
  { id: "p12", category: "Coding", title: "API Integration", prompt: "Write a [language] function that integrates with the [API name] API. Include: authentication, error handling, TypeScript types for the response, and usage examples." },
  // Marketing
  { id: "p13", category: "Marketing", title: "Ad Copy Generator", prompt: "Write [number] ad variations for [product/service] targeting [audience] on [platform]. For each include: headline (under 40 chars), body text (under 125 chars), CTA, and A/B test suggestion." },
  { id: "p14", category: "Marketing", title: "Landing Page Copy", prompt: "Write landing page copy for [product/service]. Include: hero headline + subtext, 3 feature blocks with icons, social proof section, FAQ (5 questions), and CTA. Tone: [tone]." },
  { id: "p15", category: "Marketing", title: "Email Campaign", prompt: "Write a [number]-email sequence for [goal]. Target audience: [audience]. For each email include: subject line, preview text, body, and CTA. Space emails [days] apart." },
  { id: "p16", category: "Marketing", title: "Buyer Persona", prompt: "Create a detailed buyer persona for [product/service] targeting [demographic]. Include: name, age, role, income, goals, pain points, preferred channels, objections, and messaging that resonates." },
  // Students
  { id: "p17", category: "Students", title: "Study Plan", prompt: "I have a [subject] exam in [days] days. Topics: [list topics]. I can study [hours] hours per day. Create a day-by-day study plan with specific tasks, review sessions, and a practice quiz day." },
  { id: "p18", category: "Students", title: "Note Summarizer", prompt: "Summarize the following notes into key bullet points, then create [number] flashcard questions with answers:\n\n[paste notes]" },
  { id: "p19", category: "Students", title: "Essay Outline", prompt: "Create a detailed outline for a [word count]-word essay on '[topic]'. Include: thesis statement, [number] body paragraphs with arguments and evidence suggestions, counterargument, and conclusion." },
  { id: "p20", category: "Students", title: "Concept Explainer", prompt: "Explain [concept] in simple terms that a [grade/level] student would understand. Use 3 real-world analogies. Then provide 3 practice questions to test understanding." },
  // Freelancing
  { id: "p21", category: "Freelancing", title: "Project Proposal", prompt: "Write a freelance proposal for [project type]. Client: [description]. My experience: [relevant skills]. Include: greeting, understanding of needs, approach, deliverables, timeline, pricing ($[amount]), and CTA." },
  { id: "p22", category: "Freelancing", title: "Service Package", prompt: "Create 3-tier pricing packages for my [service] freelance business:\n- Basic: [features]\n- Standard: [features]\n- Premium: [features]\n\nWrite compelling descriptions for each. Target: [audience]." },
  // Productivity
  { id: "p23", category: "Productivity", title: "Daily Planner", prompt: "Organize these tasks by priority and create a time-blocked schedule starting at [time]. Use the [Pomodoro/Eat the Frog/Eisenhower] method. Include breaks:\n\n[list tasks]" },
  { id: "p24", category: "Productivity", title: "Resume Optimizer", prompt: "Rewrite these resume bullet points using action verbs and quantified results. Tailor for a [job title] position in [industry]:\n\n[paste bullet points]" },
  { id: "p25", category: "Productivity", title: "Cover Letter", prompt: "Write a [word count]-word cover letter for a [job title] position at [company]. My background: [experience]. Highlight: [key skills]. Tone: professional but personable." },
  // Prompt Writing
  { id: "p26", category: "Prompt Writing", title: "Prompt Improver", prompt: "Improve this ChatGPT prompt to get better results. Add: context, role, format, and constraints. Explain what you changed and why:\n\nOriginal: [paste prompt]" },
  { id: "p27", category: "Prompt Writing", title: "System Prompt Builder", prompt: "Help me create a system prompt for a Custom GPT that acts as a [role]. It should: [list behaviors]. Knowledge boundaries: [what it should/shouldn't know]. Include 4 conversation starters." },
  { id: "p28", category: "Prompt Writing", title: "Meta-Prompt", prompt: "I want to achieve [goal]. Write the most effective ChatGPT prompt I should use to get the best possible result. Include role, context, task, format, and constraints." },
];

// ──────────────────────────────────────────────
// RESOURCES (expanded)
// ──────────────────────────────────────────────
export const resources = [
  // AI Tools
  { title: "ChatGPT Official", url: "https://chat.openai.com", description: "The official ChatGPT interface by OpenAI.", category: "AI Tools" },
  { title: "OpenAI API", url: "https://platform.openai.com", description: "Build with ChatGPT using the OpenAI API.", category: "AI Tools" },
  { title: "Claude AI", url: "https://claude.ai", description: "Anthropic's AI assistant, excellent for long-form analysis.", category: "AI Tools" },
  { title: "Gemini", url: "https://gemini.google.com", description: "Google's AI assistant with real-time search integration.", category: "AI Tools" },
  { title: "Perplexity AI", url: "https://perplexity.ai", description: "AI-powered search engine with source citations.", category: "AI Tools" },
  { title: "Midjourney", url: "https://midjourney.com", description: "AI image generation for creative projects.", category: "AI Tools" },
  { title: "Runway ML", url: "https://runwayml.com", description: "AI video generation and editing tools.", category: "AI Tools" },
  // Extensions
  { title: "AIPRM for ChatGPT", url: "https://aiprm.com", description: "Chrome extension with curated prompt templates.", category: "Extensions" },
  { title: "WebChatGPT", url: "https://tools.zmo.ai/webchatgpt", description: "Add web results to ChatGPT responses.", category: "Extensions" },
  { title: "ChatGPT Writer", url: "https://chatgptwriter.ai", description: "Generate emails and messages directly in your browser.", category: "Extensions" },
  { title: "Merlin AI", url: "https://getmerlin.in", description: "Access AI on any website with a keyboard shortcut.", category: "Extensions" },
  // Workflows
  { title: "Morning Routine + ChatGPT", url: "#", description: "Use ChatGPT to plan and optimize your perfect morning routine.", category: "Workflows" },
  { title: "Content Repurposing Pipeline", url: "#", description: "Blog → Social → Email → Video — automate your content pipeline.", category: "Workflows" },
  { title: "Client Onboarding Flow", url: "#", description: "Streamline client onboarding with ChatGPT-powered templates and checklists.", category: "Workflows" },
  { title: "Meeting → Action Items", url: "#", description: "Turn messy meeting notes into structured summaries and follow-up emails.", category: "Workflows" },
  { title: "Research → Report", url: "#", description: "Go from raw research to polished executive report in minutes.", category: "Workflows" },
  // Tips
  { title: "Be Specific", url: "#", description: "The more specific your prompt, the better the result. Include context, format, and constraints.", category: "Tips" },
  { title: "Use the C-R-T-F-C Framework", url: "#", description: "Context + Role + Task + Format + Constraints = perfect prompts every time.", category: "Tips" },
  { title: "Iterate, Don't Settle", url: "#", description: "Refine responses with follow-ups: 'make it shorter', 'add examples', 'change tone'.", category: "Tips" },
  { title: "Chain Your Prompts", url: "#", description: "Break complex tasks into numbered steps for thorough, accurate results.", category: "Tips" },
  { title: "Use Few-Shot Learning", url: "#", description: "Provide examples of the output you want, then ask for more in the same style.", category: "Tips" },
  // Case Studies
  { title: "Freelancer: 10x Proposals", url: "#", description: "How a freelance designer used ChatGPT to write proposals 10x faster with a 40% higher win rate.", category: "Case Studies" },
  { title: "Student: Exam Prep in Half the Time", url: "#", description: "A college student used AI study plans and flashcards to cut study time in half while improving grades.", category: "Case Studies" },
  { title: "Startup: Content at Scale", url: "#", description: "A SaaS startup used ChatGPT to produce 30 blog posts/month and grow organic traffic by 300%.", category: "Case Studies" },
  { title: "Developer: Debug in Minutes", url: "#", description: "A junior developer used ChatGPT to debug issues 5x faster, accelerating their growth to mid-level in 6 months.", category: "Case Studies" },
];

// ──────────────────────────────────────────────
// USER GOALS (updated to match new modules)
// ──────────────────────────────────────────────
export const userGoals = [
  { id: "getting-started", label: "Getting Started (Beginner)", icon: BookOpen, categoryId: "getting-started" },
  { id: "prompt-mastery", label: "Prompt Mastery", icon: PenTool, categoryId: "prompt-mastery" },
  { id: "business-productivity", label: "Business & Productivity", icon: Briefcase, categoryId: "business-productivity" },
  { id: "freelancing-content", label: "Freelancing & Content", icon: Rocket, categoryId: "freelancing-content" },
  { id: "coding-developers", label: "Coding / Development", icon: Code, categoryId: "coding-developers" },
  { id: "daily-productivity", label: "Daily Productivity", icon: Zap, categoryId: "daily-productivity" },
  { id: "advanced-customization", label: "Advanced Customization", icon: Settings, categoryId: "advanced-customization" },
];

export const userLevels = [
  { id: "beginner", label: "Beginner", description: "I'm new to ChatGPT" },
  { id: "intermediate", label: "Intermediate", description: "I've used it a few times" },
  { id: "advanced", label: "Advanced", description: "I use it regularly" },
];
