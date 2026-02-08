import { Rocket } from "lucide-react";
import module4Image from "@/assets/module-4-freelancing.jpg";
import lesson41Image from "@/assets/lessons/lesson-4-1-proposals.jpg";
import lesson42Image from "@/assets/lessons/lesson-4-2-blog-social.jpg";
import lesson43Image from "@/assets/lessons/lesson-4-3-editing.jpg";
import type { Category } from "./types";

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
      image: lesson41Image,
      description:
        "Winning freelance work starts with compelling proposals. The freelance economy represents $1.57 trillion in the US alone, with 73.3 million freelancers — competition is fierce.\n\n**Proposal Writing with ChatGPT:**\n• Customize proposals for each client's specific needs and language.\n• Highlight relevant experience with quantified results.\n• Include clear deliverables, phased timeline, and transparent pricing.\n• Mirror the client's tone and terminology from their job post.\n\n**The Winning Proposal Structure:**\n1. **Personalized greeting** — Reference their specific project or company.\n2. **Understanding statement** — Prove you read their brief (\"I see you need X because Y\").\n3. **Your approach** — 3-4 phases with brief descriptions.\n4. **Deliverables list** — Exact items they'll receive.\n5. **Timeline** — Realistic with milestones.\n6. **Investment** — Frame as investment, not cost. Include payment terms.\n7. **Social proof** — Relevant results, testimonials, portfolio links.\n8. **Next steps** — Clear, low-friction CTA.\n\n**Service Descriptions:**\nCreate clear, benefit-focused descriptions with tiered packages (Basic/Standard/Premium). Tiered pricing increases average deal size by 30% (pricing psychology research).\n\n**Pricing Communication:**\n• Lead with value before revealing price.\n• Handle discount requests by adjusting scope, not rate.\n• Use anchoring — present premium option first.\n\n**Client Onboarding:**\nAutomate welcome sequences: questionnaires, kickoff agendas, expectation-setting messages.",
      examplePrompt:
        "I'm a freelance web developer specializing in React and e-commerce. A potential client runs a boutique fashion brand and wants to redesign their Shopify store.\n\nWrite a compelling proposal that includes:\n1. Personalized greeting referencing their brand\n2. Understanding of their needs\n3. My approach (3 phases)\n4. Deliverables list\n5. Timeline (6 weeks)\n6. Investment: $4,500\n7. Why choose me (social proof)\n8. Next steps CTA",
      exampleOutput:
        "**Proposal: Shopify Store Redesign for [Brand Name]**\n\nHi [Client Name],\n\nThank you for sharing your vision for [Brand Name]'s new online presence!\n\n**Understanding Your Needs:**\nYou need a modern, mobile-first Shopify store that converts.\n\n**My Approach:**\n• Phase 1 (Week 1-2): Discovery & Design\n• Phase 2 (Week 3-4): Development\n• Phase 3 (Week 5-6): Testing & Launch\n\n**Investment: $4,500** (50% upfront, 50% on completion)\n\n**Why Me:** 30+ e-commerce projects, 4.9★ rating, avg. 25% conversion increase.\n\n**Next Steps:** Reply to schedule a free 30-min discovery call! 📞",
      practiceTask:
        "Write a proposal for a freelance project in your field using the 8-point structure. Then ask ChatGPT to critique it and suggest improvements. Finally, create a follow-up email for 3 days, 7 days, and 14 days after sending with no response.",
      duration: "10 min",
      realData: {
        title: "Freelancing Economy Data",
        points: [
          "The US freelance economy is worth $1.57 trillion, with 73.3 million freelancers as of 2024 (Upwork Freelance Forward Report).",
          "Freelancers who send personalized proposals (vs. templates) have a 3.4x higher win rate (Upwork marketplace data).",
          "The average freelancer spends 14 hours/week on non-billable work (proposals, admin, invoicing). AI reduces this by 60% (Bonsai freelance survey).",
          "Proposals mentioning specific results (\"increased traffic by 42%\") win 52% more often than those using vague language (Fiverr research).",
          "Tiered pricing packages increase average deal size by 30% compared to single-price quotes (pricing psychology research, ConvertKit).",
        ],
        source: "Upwork Freelance Forward 2024, Bonsai survey, Fiverr marketplace research, ConvertKit pricing study",
      },
      caseStudy: {
        title: "Freelance Designer Triples Win Rate with AI Proposals",
        scenario: "Sam Chen, a freelance UI/UX designer on Upwork, had a 12% proposal win rate. He was sending generic proposals, spending 30 minutes each. He started using ChatGPT with a structured template: each proposal included the client's specific pain points (pulled from their job post), his relevant portfolio pieces, quantified results, and a phased approach.",
        result: "Win rate increased from 12% to 38% — more than triple. Average project value increased from $1,200 to $2,800 (thanks to tiered pricing). Monthly revenue grew from $3,600 to $11,200. Proposal writing time decreased from 30 minutes to 8 minutes per proposal. Sam now earns $135K/year as a solo freelancer.",
        keyTakeaway: "The secret isn't writing more proposals — it's writing better ones faster. ChatGPT's power lies in personalization at scale: each proposal feels custom-written (because the prompt includes unique client data), but takes 1/4 the time. Quality + volume = dramatically higher win rates.",
      },
    },
    {
      id: "4-2-blog-social",
      title: "Lesson 4.2 – Blog & Social Media Content",
      image: lesson42Image,
      description:
        "Content creation is one of ChatGPT's strongest use cases. Businesses that blog get 67% more leads than those that don't (HubSpot), and consistent social media presence drives 78% of purchase decisions.\n\n**Blog Writing with ChatGPT:**\n• **SEO-friendly articles** — Include target keywords, meta descriptions, internal linking suggestions.\n• **How-to guides** — Step-by-step tutorials with screenshots descriptions.\n• **Listicles** — \"Top 10...\" formats that get 2x more shares.\n• **Thought leadership** — Industry analysis with original perspectives.\n• **Content outlines** — Structure first, fill in content later.\n\n**The Content Repurposing Pipeline:**\nOne blog post → 5+ social posts → 1 email newsletter → 1 video script → 1 podcast outline. This 1-to-many approach is how top creators maintain consistency without burnout.\n\n**Social Media Platform Specifics:**\n• **Instagram:** Visual-first, 125-150 word captions, 20-30 hashtags (research shows this is optimal), carousel posts get 3x engagement.\n• **LinkedIn:** Professional tone, 1200-1500 characters optimal, personal stories perform best, no hashtags overload (3-5 max).\n• **Twitter/X:** Under 280 chars, thread format for long-form, questions drive replies.\n• **TikTok/Reels:** Hook in first 3 seconds, text overlay scripts, trend-aligned.\n\n**Video Scripts:**\n• YouTube — Hook (5 sec) → Intro (15 sec) → Content sections → CTA structure.\n• Shorts/Reels — Hook (3 sec) → Rapid-fire value → CTA (3 sec).\n\n**Content Calendar Strategy:**\nMix content pillars: 40% educational, 30% entertaining, 20% promotional, 10% personal. This ratio maximizes engagement while driving sales.",
      examplePrompt:
        "Create a complete content package for a fitness coaching brand:\n\n1. One 800-word SEO blog post about \"5 Morning Habits That Boost Energy\" (keyword: morning routine for energy)\n2. 3 Instagram carousel scripts (5 slides each) based on the blog\n3. 1 YouTube Shorts script (60 seconds) with a hook\n4. A 2-week content calendar mixing educational, entertaining, and promotional posts",
      exampleOutput:
        "**1. Blog Post: 5 Morning Habits That Boost Energy All Day**\n[Full 800-word SEO article with H2 headings, internal links, and meta description]\n\n**2. Instagram Carousel (5 slides):**\nSlide 1: \"5 Habits That Give You ALL-DAY Energy ⚡\" (hook)\nSlide 2: \"#1 — Hydrate before caffeine 💧\"\nSlide 3: \"#2 — 10 min movement 🏃\"\n...\n\n**3. YouTube Shorts Script:**\n[HOOK]: \"Stop starting your morning wrong.\"\n[CONTENT]: \"Here's what high-energy people do differently...\"\n\n**4. Content Calendar:**\n| Day | Platform | Type | Topic |\n|-----|----------|------|-------|...",
      practiceTask:
        "Create a complete content package for your brand or niche: 1 blog outline (with SEO keywords), 3 platform-specific social posts, 1 video script, and a 1-week content calendar. Track which content type ChatGPT generates best for your use case.",
      duration: "12 min",
      realData: {
        title: "Content Marketing ROI Data",
        points: [
          "Companies that blog generate 67% more leads per month than those that don't (HubSpot State of Marketing, 2024).",
          "Instagram carousel posts get 3.1x more engagement than single images (Socialinsider, 2024 analysis of 9.8M posts).",
          "AI-assisted content creation reduces production time by 50-70% while maintaining engagement rates within 8% of human-only content (Jasper AI, 2024).",
          "LinkedIn posts with personal stories get 3x more engagement than corporate updates (LinkedIn algorithm study, 2024).",
          "Businesses maintaining a consistent content calendar for 12+ months see 330% more traffic than those posting sporadically (Content Marketing Institute).",
        ],
        source: "HubSpot 2024, Socialinsider, Jasper AI benchmarks, LinkedIn algorithm research, Content Marketing Institute",
      },
      caseStudy: {
        title: "Fitness Coach Grows from 500 to 50K Followers in 6 Months",
        scenario: "Lisa Martinez, a certified personal trainer with 500 Instagram followers, used ChatGPT to build a content engine. She created templates for: daily educational carousels, weekly YouTube scripts, monthly blog posts, and a content calendar. Her prompt always included: target audience (busy moms 30-45), content pillar (at-home workouts), and platform-specific formatting.",
        result: "In 6 months: Instagram grew from 500 to 50,000 followers. YouTube hit 12K subscribers. Blog traffic: 0 to 15,000/month. She launched an online coaching program that generated $8,400/month by month 6. Content production time: 2 hours/day (down from 6 hours when writing everything manually). Posted 5x/week across 3 platforms.",
        keyTakeaway: "Consistency beats perfection in content marketing. ChatGPT enabled Lisa to maintain a 5x/week posting schedule that would be impossible solo. The content repurposing pipeline (blog → carousels → video) meant one hour of ideation created a full week of content across platforms.",
      },
    },
    {
      id: "4-3-editing-rewriting",
      title: "Lesson 4.3 – Editing & Rewriting Content",
      image: lesson43Image,
      description:
        "ChatGPT is an excellent editor — often better than it is as a writer. Editing existing content is where AI truly shines because it has a starting point to work with.\n\n**Grammar & Style Improvement:**\n• Fix grammatical errors while preserving your unique voice.\n• Adjust reading level (Flesch-Kincaid grade 6 for general public, grade 12+ for academic).\n• Eliminate passive voice, filler words, and redundancy.\n\n**Tone Transformation:**\n• Formal → Casual (and vice versa)\n• Persuasive → Informative\n• Technical → Simple\n• Professional → Empathetic\n\n**Content Compression & Expansion:**\n• Compress: Condense a 2000-word report to a 200-word executive summary.\n• Expand: Turn bullet points into full paragraphs with examples and data.\n• Distill: Extract the 3 most important points from a long document.\n\n**Content Repurposing:**\n• Blog post → Twitter thread (key insights as individual tweets)\n• Meeting notes → Email summary\n• Long report → Executive brief\n• Academic paper → Blog post\n• Podcast transcript → Article\n\n**Critical Rule:** Always say \"preserve my original meaning and voice\" when editing. This prevents ChatGPT from changing your message or inserting its own style.\n\n**The Editing Workflow:**\n1. \"Fix grammar and spelling only\" (preserves everything else)\n2. \"Improve clarity and conciseness\" (structural improvements)\n3. \"Adjust tone to [target]\" (voice transformation)\n4. \"Add data points and examples\" (enrichment)\n5. \"Review for logical flow\" (coherence check)",
      examplePrompt:
        "Here's a rough blog paragraph I wrote:\n\n\"AI is really changing stuff in marketing. Like companies are using it for lots of things now. It can write copy and do research and figure out who to target. Its pretty cool and saves alot of time for marketers who are busy.\"\n\n1. Fix grammar and spelling only\n2. Rewrite for a professional marketing blog (preserve my core message)\n3. Rewrite as a casual Instagram caption with emojis\n4. Expand into a 150-word paragraph with real statistics",
      exampleOutput:
        "**1. Grammar Fix:**\n\"AI is really changing things in marketing. Companies are using it for many tasks now. It can write copy, conduct research, and determine target audiences. It's pretty cool and saves a lot of time for busy marketers.\"\n\n**2. Professional Version:**\n\"Artificial intelligence is fundamentally transforming the marketing landscape. Organizations across industries are leveraging AI-powered tools for copywriting, market research, and audience segmentation — dramatically reducing time-to-market while improving ROI.\"\n\n**3. Instagram Caption:**\n\"AI is literally changing the marketing game 🤖✨ #AIMarketing #MarketingTips\"\n\n**4. Expanded with Stats:**\n\"According to McKinsey, 73% of marketers now use AI tools daily...\"",
      practiceTask:
        "Take 3 pieces of your own writing and run them through the 5-step editing workflow. For each, note: What changed at each step? Which step made the biggest improvement? Save the before/after for your portfolio.",
      duration: "9 min",
      realData: {
        title: "Content Editing & Rewriting Impact",
        points: [
          "73% of B2B buyers say content quality is a key factor in evaluating vendors (Demand Gen Report, 2024).",
          "AI editing tools reduce proofreading time by 82% and catch 34% more errors than manual review (Grammarly Business data, 2024).",
          "Content that has been professionally edited receives 2.5x more shares and 3.1x more backlinks (Orbit Media blogging survey).",
          "Repurposed content generates 60% more reach at 75% less effort compared to creating new content from scratch (CoSchedule study).",
          "Reading level optimization (Grade 7-8 vs. Grade 12+) increases engagement by 36% for general audiences (Nielsen Norman Group).",
        ],
        source: "Demand Gen Report, Grammarly Business, Orbit Media, CoSchedule, Nielsen Norman Group",
      },
      caseStudy: {
        title: "Non-Native English Speaker Publishes in Harvard Business Review",
        scenario: "Dr. Kenji Tanaka, a Japanese business professor, had excellent research insights but struggled with English writing for international publications. He wrote drafts in his natural style, then used ChatGPT for: grammar correction (step 1), academic tone refinement (step 2), conciseness editing (step 3), and citation formatting (step 4) — always with \"preserve my original argument and perspective.\"",
        result: "His article was accepted by Harvard Business Review — his first English-language publication in a major outlet. Editing time dropped from 40 hours (with a human editor) to 6 hours (AI-assisted + final human review). He has since published 4 more articles and been invited to speak at 2 international conferences.",
        keyTakeaway: "AI editing democratizes professional writing. Dr. Tanaka's ideas were always brilliant — language barriers were the only obstacle. ChatGPT didn't write his articles; it polished them to publication quality while preserving his unique academic voice. The key was the multi-step workflow: each editing pass had a single, clear objective.",
      },
    },
  ],
  quiz: [
    { id: "q4-1", question: "What should a strong freelance proposal include?", options: ["Just the price and your name", "Personalized greeting, understanding of needs, approach, deliverables, timeline, and pricing", "A generic template sent to all clients", "Only your portfolio link"], correctIndex: 1, explanation: "A compelling proposal should be personalized and include understanding of client needs, approach, deliverables, timeline, pricing, and social proof." },
    { id: "q4-2", question: "Why should content be tailored differently for Instagram vs LinkedIn?", options: ["They use different programming languages", "Each platform has different audience expectations, formats, and tones", "Instagram doesn't support text", "LinkedIn only allows video"], correctIndex: 1, explanation: "Each platform has a unique audience and content format — Instagram favors visual, casual content while LinkedIn expects professional, insightful posts." },
    { id: "q4-3", question: "What should you always tell ChatGPT when asking it to edit your writing?", options: ["Make it longer", "Preserve my original meaning", "Use as many adjectives as possible", "Write in a different language"], correctIndex: 1, explanation: "Saying 'preserve my original meaning' prevents ChatGPT from changing your message while it improves grammar, style, or tone." },
    { id: "q4-4", question: "What is content repurposing?", options: ["Deleting old content", "Transforming one piece of content into multiple formats for different platforms", "Copying someone else's content", "Only posting content once"], correctIndex: 1, explanation: "Content repurposing means adapting one piece of content into multiple formats, maximizing reach and efficiency." },
    { id: "q4-5", question: "What is SEO-friendly content?", options: ["Content with the most images", "Content optimized with keywords, structure, and metadata to rank in search engines", "Content that is very short", "Content written entirely in uppercase"], correctIndex: 1, explanation: "SEO-friendly content uses relevant keywords, proper heading structure, and engaging writing to rank higher in search results." },
  ],
};

export default module4;
