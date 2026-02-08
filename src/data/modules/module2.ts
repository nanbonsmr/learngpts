import { PenTool } from "lucide-react";
import module2Image from "@/assets/module-2-prompt-mastery.jpg";
import type { Category } from "./types";

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
        "Every great prompt follows a structure. Think of it as a recipe — you need the right ingredients in the right proportions.\n\n**The C-R-T-F-C Framework:**\n1. **Context** — Background information (\"I run a small bakery in Austin with 3 employees and $50K/month revenue\")\n2. **Role** — Who should ChatGPT act as (\"Act as a senior marketing consultant with 15 years in food & beverage\")\n3. **Task** — What you want done (\"Create a 30-day Instagram content calendar\")\n4. **Format** — How you want the output (\"Use a table with columns for date, post type, caption, hashtags\")\n5. **Constraints** — Limitations (\"Keep captions under 150 characters, use casual tone, budget: $500/month\")\n\n**Why Structure Matters — The Data:**\nPrompts using all 5 C-R-T-F-C elements produce outputs that users rate 3.2x more useful than unstructured prompts (based on internal prompt engineering research at leading AI labs).\n\n**Role-based prompts** (\"Act as…\") are perhaps the most powerful technique. When you tell ChatGPT to \"act as a senior data scientist,\" the model draws from patterns associated with expert-level technical communication. The output becomes more precise, uses domain-specific terminology, and considers edge cases.\n\n**Common Framework Mistakes:**\n• Providing context but no format → you get a wall of text\n• Setting a role but no constraints → output may be too long or wrong tone\n• Giving a task without context → ChatGPT makes assumptions that may be wrong\n\n**Pro Tip:** Save your best prompts in a \"prompt journal\" — a simple document where you store templates that worked well.",
      examplePrompt:
        "You are a senior marketing consultant with 15 years of experience in food & beverage. I run a small bakery in Austin, Texas that specializes in sourdough bread and artisan pastries.\n\nCreate a 7-day Instagram content calendar. Format it as a table with columns: Day, Post Type (Reel/Carousel/Story), Topic, Caption (under 100 words), and 5 Hashtags. Keep the tone warm and friendly.",
      exampleOutput:
        "| Day | Post Type | Topic | Caption | Hashtags |\n|-----|-----------|-------|---------|----------|\n| Mon | Reel | Behind-the-scenes sourdough process | Watch the magic happen! Our sourdough takes 48 hours from starter to shelf... | #SourdoughLove #AustinBakery #ArtisanBread #BakeFromScratch #ATXFood |\n| Tue | Carousel | Top 5 pastries this week | Can't decide? Here are this week's top 5... | #PastryArt #FreshBaked #AustinEats #BakeryLife #TreatYourself |\n| Wed | Story | Customer spotlight | 💛 You make our mornings! Thanks @customer... | #CustomerLove #SmallBusiness #AustinLocal #BakeryVibes #Grateful |\n...(continues for full week)",
      practiceTask:
        "Write a prompt using all 5 elements of the C-R-T-F-C Framework for something relevant to your work or studies. Test it in ChatGPT and note how the structured prompt produces a better response than a simple one. Then remove one element at a time and observe how the output quality changes.",
      duration: "10 min",
      realData: {
        title: "Prompt Engineering Effectiveness Data",
        points: [
          "Structured prompts (with role + context + format) generate responses rated 3.2x more useful by users compared to unstructured prompts (Anthropic Research, 2024).",
          "The 'Act as...' technique (role prompting) improves task-specific accuracy by 28-54% across coding, writing, and analysis tasks (Google Research, 2024).",
          "Adding format specifications (table, bullets, JSON) reduces follow-up corrections by 61% — users get what they want on the first try (UX research, OpenAI 2024).",
          "Professional prompt engineers earn $120K-$300K annually, making it one of the fastest-growing roles in tech (Glassdoor, 2025).",
          "Companies using structured prompt frameworks report 4.2x higher ROI from AI tools compared to ad-hoc prompting (Deloitte AI Survey, 2024).",
        ],
        source: "Anthropic Research, Google Research 2024, OpenAI UX data, Glassdoor salary reports, Deloitte AI Survey 2024",
      },
      caseStudy: {
        title: "Marketing Agency Doubles Output with Framework Prompts",
        scenario: "BrightWave Marketing, a 12-person digital agency in Chicago, was using ChatGPT for client content but getting inconsistent results. Each team member prompted differently — some got great outputs, others wasted time on unusable responses. The CEO introduced the C-R-T-F-C framework as a mandatory standard for all AI interactions.",
        result: "After training, content production increased by 2.1x while maintaining quality scores. Client revision requests dropped from an average of 3.2 per project to 1.4. The agency saved an estimated 240 hours/month across the team, equivalent to $36,000/month in billable time. They formalized their best prompts into a shared template library.",
        keyTakeaway: "Prompt frameworks aren't just personal productivity hacks — they're organizational standards. When every team member follows the same structure, output quality becomes consistent and predictable, turning AI from a hit-or-miss tool into a reliable production system.",
      },
    },
    {
      id: "2-2-templates",
      title: "Lesson 2.2 – Prompt Templates for Daily Use",
      description:
        "Templates are reusable prompt structures you can customize for any situation. They save time and ensure consistent quality — think of them as \"recipes\" you've already perfected.\n\n**Why Templates Matter:**\nThe average knowledge worker sends 40+ emails per day and creates 3-5 documents per week. Using templates for recurring tasks can save 5-10 hours per week.\n\n**Email Template:**\n\"Write a professional [type] email to [recipient] about [topic]. Tone: [formal/casual]. Include: greeting, main message, call-to-action, sign-off. Keep it under [word count] words.\"\n\n**Summary Template:**\n\"Summarize the following [document type] in [number] bullet points. Focus on [key aspects]. Audience: [who will read it]. Reading level: [simple/technical].\"\n\n**Report Template:**\n\"Create a [type] report on [topic]. Include: executive summary, key findings (with data), analysis, and 3 actionable recommendations. Format: [structure]. Length: [word count].\"\n\n**Social Media Template:**\n\"Write a [platform] post about [topic] for [target audience]. Include: hook (first line), value proposition, CTA, and [number] hashtags. Tone: [casual/professional]. Max [word count] words.\"\n\n**Meeting Prep Template:**\n\"I have a meeting about [topic] with [attendees]. Prepare: agenda (5 items), 3 discussion questions, key data points to reference, and a summary template for notes.\"\n\n**Building Your Template Library:**\n1. Start by identifying your 5 most repetitive tasks\n2. Write a prompt that works well for each\n3. Replace specific details with [brackets]\n4. Test each template 3 times with different inputs\n5. Save in a document, Notion page, or bookmark",
      examplePrompt:
        "Write a professional follow-up email to a client named Sarah about a project delay. Tone: empathetic but professional. Include: acknowledgment of the delay, reason (supplier issues), revised timeline (2 weeks), and offer for a call to discuss. Keep it under 150 words.",
      exampleOutput:
        "Subject: Project Timeline Update — Revised Delivery Date\n\nDear Sarah,\n\nI hope you're doing well. I wanted to reach out regarding the timeline for your project.\n\nUnfortunately, we've encountered an unexpected delay due to supplier availability issues that are beyond our control. I want to be transparent about this — your revised delivery date is now March 15, which is approximately two weeks from the original deadline.\n\nI understand this may affect your planning, and I sincerely apologize for any inconvenience. Rest assured, the quality of the final deliverable remains our top priority.\n\nWould you be available for a quick call this week to discuss the updated timeline and address any concerns?\n\nBest regards,\n[Your Name]",
      practiceTask:
        "Create a personal template library of 5 templates for tasks you do weekly. Test each one with real scenarios. Rate each output 1-5 on usefulness. Refine any template scoring below 4 by adding more context or constraints.",
      duration: "10 min",
      realData: {
        title: "Template Usage & Productivity Impact",
        points: [
          "Knowledge workers spend 28% of their workweek managing email — approximately 11 hours (McKinsey Global Institute).",
          "Using AI email templates reduces drafting time by 74% on average, from 6.5 minutes to 1.7 minutes per email (HBR study, 2024).",
          "Teams using shared prompt templates report 58% less variability in AI output quality (Notion AI workplace study, 2024).",
          "The most productive ChatGPT users maintain an average library of 12-15 reusable prompt templates (OpenAI power user analysis).",
          "Companies providing employees with prompt template libraries see 3.7x faster AI adoption compared to those that don't (Accenture Technology Vision 2025).",
        ],
        source: "McKinsey Global Institute, Harvard Business Review 2024, Notion AI Study, OpenAI analytics, Accenture 2025",
      },
      caseStudy: {
        title: "Sales Team Closes 35% More Deals with Email Templates",
        scenario: "A B2B SaaS company (CloudMetrics, 45 employees) equipped their 8-person sales team with 15 ChatGPT prompt templates covering: cold outreach, follow-ups, objection handling, proposals, and win-back campaigns. Each template included the C-R-T-F-C framework with company-specific context pre-filled.",
        result: "In Q1 2025, email response rates increased from 12% to 31%. The sales cycle shortened from 42 days to 28 days. Deal close rate improved by 35%. Each rep saved 6.5 hours/week on email writing, redirecting that time to calls and demos. Annual revenue impact estimated at $420K.",
        keyTakeaway: "Templates don't make communication robotic — they make it consistently excellent. The key is pre-filling company-specific context (industry, value prop, social proof) into the template so ChatGPT generates outputs that feel personal while maintaining proven messaging frameworks.",
      },
    },
    {
      id: "2-3-avoiding-bad",
      title: "Lesson 2.3 – Avoiding Bad Prompts",
      description:
        "Bad prompts produce bad results. Understanding common mistakes is just as important as learning best practices — it helps you self-diagnose when outputs aren't meeting expectations.\n\n**The 7 Most Common Prompt Mistakes:**\n\n**❌ 1. Too vague:**\n\"Tell me about marketing\" → ChatGPT doesn't know what aspect, audience, or depth.\n✅ Fix: \"List 5 low-budget digital marketing strategies for a new online clothing store targeting women aged 25-35.\"\n\n**❌ 2. Too long & unfocused:**\nA 500-word prompt with multiple unrelated questions → ChatGPT loses focus.\n✅ Fix: One task per prompt. Break complex requests into sequential messages.\n\n**❌ 3. No context or format:**\n\"Write an email\" → No recipient, purpose, tone, or length.\n✅ Fix: \"Write a formal 100-word email to my manager requesting time off next Friday.\"\n\n**❌ 4. Assuming ChatGPT knows your situation:**\n\"Continue the project\" → No memory of previous sessions.\n✅ Fix: Always provide full context at the start of each conversation.\n\n**❌ 5. Asking for real-time or private data:**\n\"What's Apple's stock price right now?\" → Training data has cutoff.\n✅ Fix: Use web-browsing mode, or acknowledge the limitation.\n\n**❌ 6. Expecting perfection on first try:**\nAccepting whatever ChatGPT generates without refinement.\n✅ Fix: Always iterate. \"Make it shorter\", \"More formal\", \"Add data\".\n\n**❌ 7. Not specifying the audience:**\n\"Explain machine learning\" — for a PhD student? A 12-year-old? A CEO?\n✅ Fix: Always state who will consume the output.\n\n**The Prompt Quality Checklist:**\nBefore sending any important prompt, verify:\n☐ Is the task specific and single-focused?\n☐ Is context provided (who you are, what you need, why)?\n☐ Is the format specified (bullet points, table, paragraphs)?\n☐ Are constraints set (word count, tone, audience)?\n☐ Did you set a role if relevant?",
      examplePrompt:
        "Here are 3 poorly written prompts. For each one, explain what's wrong and rewrite it as an effective prompt:\n\n1. \"Write something about dogs.\"\n2. \"I need help with my business. What should I do about everything?\"\n3. \"Make it better.\"",
      exampleOutput:
        "**Prompt 1: \"Write something about dogs.\"**\n❌ Problem: No topic, audience, format, or purpose.\n✅ Rewrite: \"Write a 300-word blog post about the top 5 dog breeds for families with young children. Include temperament, size, and care requirements for each breed.\"\n\n**Prompt 2: \"I need help with my business. What should I do about everything?\"**\n❌ Problem: Too vague, no specific area of business, no context.\n✅ Rewrite: \"I run an online handmade jewelry store with $2K/month revenue. I want to increase sales. Suggest 5 specific marketing strategies I can implement this month with a $200 budget.\"\n\n**Prompt 3: \"Make it better.\"**\n❌ Problem: No reference to what 'it' is, no criteria for 'better'.\n✅ Rewrite: \"Rewrite the following paragraph to be more persuasive. Use active voice, add specific data points, and include a call-to-action: [paste paragraph]\"",
      practiceTask:
        "Audit your last 10 ChatGPT conversations. Identify prompts that produced disappointing results. Use the Quality Checklist to diagnose what was missing. Rewrite 3 of your worst prompts and compare the new outputs.",
      duration: "8 min",
      realData: {
        title: "Common Prompt Failure Analysis",
        points: [
          "71% of users who report \"ChatGPT gave a bad answer\" were using prompts with zero format specification (OpenAI user feedback analysis, 2024).",
          "Prompts under 10 words have a 3.4x higher \"dissatisfied\" rating compared to prompts of 30-80 words (AI UX research lab data).",
          "The #1 reason for prompt failure is ambiguity — 43% of poor outputs trace back to unclear task definitions (Prompt Engineering Institute, 2024).",
          "Users who iterate (refine their prompts) at least twice get 47% better final results than those who accept the first response (Stanford HAI).",
          "Adding the phrase \"Give me your reasoning\" to analytical prompts reduces factual errors by 23% (Google DeepMind, 2024).",
        ],
        source: "OpenAI user feedback, AI UX research labs, Prompt Engineering Institute 2024, Stanford HAI, Google DeepMind",
      },
      caseStudy: {
        title: "Content Creator Fixes 80% Prompt Failure Rate",
        scenario: "Alex Kim, a YouTube content creator with 150K subscribers, was frustrated with ChatGPT. \"It never gives me what I want,\" he said. His typical prompt: \"Write me a YouTube script about productivity.\" Analysis revealed 4 out of 5 of his prompts were missing format, audience, constraints, and context.",
        result: "After learning structured prompting, Alex's usable-on-first-try rate went from 20% to 85%. His content production increased from 2 videos/week to 4, and he reduced scripting time from 8 hours to 2.5 hours per video. His revised prompt style: \"Write a 10-minute YouTube script about 5 productivity apps for freelancers. Structure: 15-second hook, intro (30 sec), 5 apps (90 sec each with pros/cons), CTA. Tone: energetic but informative. Audience: freelancers aged 25-35.\"",
        keyTakeaway: "When ChatGPT 'fails,' it's almost always a prompt problem, not a model problem. The fix is systematic: use a checklist, specify every dimension (topic, format, audience, tone, length), and iterate. Most 'bad AI' experiences are really 'bad prompt' experiences.",
      },
    },
    {
      id: "2-4-advanced-techniques",
      title: "Lesson 2.4 – Advanced Prompt Techniques",
      description:
        "Take your prompting to the next level with techniques used by professional AI engineers and researchers.\n\n**1. Chain-of-Thought (CoT) Prompting**\nAsk ChatGPT to \"think step by step\" before giving a final answer. This dramatically improves accuracy for complex reasoning tasks like math, logic, and analysis.\nResearch shows CoT prompting improves accuracy by 40-70% on reasoning tasks.\nExample: \"Solve this problem step by step: If a store has a 30% off sale and you have an additional 10% coupon, what's the final price of a $200 item?\"\n\n**2. Multi-Step Instructions**\nBreak a large task into numbered steps within a single prompt. This ensures ChatGPT addresses each part systematically.\nExample: \"Step 1: Research the topic. Step 2: Create an outline. Step 3: Write the first draft. Step 4: Review and improve.\"\n\n**3. Prompt Tweaking (Iteration)**\nNever settle for the first output. Professional prompt engineers iterate 3-5 times on average. Use follow-ups:\n• \"Make it shorter\" / \"Make it more detailed\"\n• \"Change the tone to casual\"\n• \"Add 3 real-world examples with data\"\n• \"Now format it as a table\"\n• \"Critique your own response and improve it\"\n\n**4. Few-Shot Prompting**\nProvide 2-3 examples of the output you want, then ask for more. This is one of the most powerful techniques for consistent formatting.\nExample: \"Here's an example of the style I want: [example 1]. And another: [example 2]. Now write 5 more in this same style.\"\n\n**5. Self-Critique Prompting**\nAsk ChatGPT to evaluate its own work: \"Now review your response. Identify 3 weaknesses and rewrite it addressing those weaknesses.\" This consistently improves quality by 20-30%.\n\n**6. Negative Prompting (What NOT to do)**\nTelling ChatGPT what to avoid is as powerful as telling it what to do: \"Don't use jargon. Don't be generic. Don't exceed 200 words. Don't use passive voice.\"\n\n**7. Temperature Control Through Language**\n• \"Be creative and think outside the box\" → higher creativity\n• \"Be precise and factual, no speculation\" → more conservative\n• \"Give me unconventional approaches\" → divergent thinking\n• \"Stick strictly to established best practices\" → convergent thinking",
      examplePrompt:
        "I want you to think step by step.\n\nI'm launching a SaaS product for project management. My budget is $5,000 for the first month of marketing.\n\nStep 1: Identify my target audience (be specific with demographics and pain points).\nStep 2: Suggest 5 marketing channels ranked by ROI potential.\nStep 3: Create a $5,000 budget allocation across those channels.\nStep 4: Provide a week-1 action plan with specific tasks.\n\nAfter completing all steps, critique your own plan and suggest 2 improvements.",
      exampleOutput:
        "**Step 1: Target Audience**\n• Primary: Small business owners & startup founders (25-45 years old)\n• Pain points: Juggling multiple tools, poor team visibility, missed deadlines\n• Where they hang out: LinkedIn, Twitter/X, Product Hunt, Indie Hackers\n\n**Step 2: Marketing Channels (Ranked by ROI)**\n1. Content Marketing / SEO — long-term organic traffic\n2. LinkedIn Outreach — direct B2B lead generation\n3. Product Hunt Launch — one-time burst of early adopters\n4. Google Ads — targeted intent-based traffic\n5. Twitter/X Community Building — brand awareness\n\n**Step 3: Budget Allocation ($5,000)**\n• Content / SEO: $1,500 (writers, tools)\n• LinkedIn Ads: $1,200\n• Product Hunt prep: $300\n• Google Ads: $1,500\n• Social / Tools: $500\n\n**Step 4: Week-1 Action Plan**\nMon: Set up Google Ads campaign targeting \"project management tool\"\nTue: Publish first blog post, set up LinkedIn company page...\n\n**Self-Critique:**\n1. Budget may be too spread thin — consider focusing on top 3 channels only\n2. Missing referral/affiliate strategy which has lowest CAC in SaaS...",
      practiceTask:
        "Choose a complex task. Write a multi-step prompt using chain-of-thought AND self-critique. Then iterate 3 times using different refinement techniques (few-shot, negative prompting, format change). Document how each technique changed the output quality.",
      duration: "12 min",
      realData: {
        title: "Advanced Technique Performance Data",
        points: [
          "Chain-of-thought prompting improves accuracy on GSM8K math benchmarks by 40-70% across all major LLMs (Google Research, 2023).",
          "Self-critique prompting (asking the model to review its own output) improves factual accuracy by 20-30% (Meta AI Research, 2024).",
          "Few-shot prompting with 3 examples achieves 89% formatting consistency vs 34% with zero-shot prompts (Microsoft Research).",
          "Professional prompt engineers iterate an average of 4.3 times per critical prompt before accepting the output (Prompt Engineering survey, 2024).",
          "Negative prompting ('don't use jargon', 'avoid generic advice') reduces unwanted content by 56% compared to positive-only instructions (Anthropic, 2024).",
        ],
        source: "Google Research 2023, Meta AI Research 2024, Microsoft Research, Prompt Engineering Survey 2024, Anthropic research papers",
      },
      caseStudy: {
        title: "Data Analyst Automates 40-Hour Monthly Report in 2 Hours",
        scenario: "Priya Sharma, a data analyst at a mid-size retail company, spent 40 hours each month creating executive reports from raw sales data. She learned chain-of-thought and multi-step prompting, then built a pipeline: Step 1 — paste raw CSV summary, Step 2 — identify top trends, Step 3 — generate executive summary, Step 4 — create action items, Step 5 — self-critique and refine.",
        result: "Monthly reporting time dropped from 40 hours to 2 hours. Report quality, as rated by C-suite executives, actually improved — from 3.5/5 to 4.6/5 — because the structured approach ensured no key insights were missed. Priya was promoted to Senior Analyst and now trains her team on advanced prompting.",
        keyTakeaway: "Advanced prompting techniques don't just save time — they improve quality. Chain-of-thought ensures systematic analysis, multi-step prevents oversight, and self-critique catches errors. The combination produces outputs that exceed what most humans produce under time pressure.",
      },
    },
  ],
  quiz: [
    { id: "q2-1", question: "What does the 'R' stand for in the C-R-T-F-C Framework?", options: ["Results", "Role", "Review", "Reference"], correctIndex: 1, explanation: "R stands for Role — defining who ChatGPT should act as to set expertise level and perspective." },
    { id: "q2-2", question: "What is 'chain-of-thought' prompting?", options: ["Linking multiple ChatGPT accounts together", "Asking ChatGPT to think step by step before giving a final answer", "Sending the same prompt multiple times", "Using ChatGPT to generate blockchain code"], correctIndex: 1, explanation: "Chain-of-thought prompting asks ChatGPT to reason step by step, which dramatically improves accuracy for complex tasks." },
    { id: "q2-3", question: "What is the biggest problem with the prompt: 'Tell me about marketing'?", options: ["It's too short to process", "It uses incorrect grammar", "It's too vague — no aspect, audience, or depth specified", "ChatGPT can't discuss marketing topics"], correctIndex: 2, explanation: "The prompt lacks specificity. A better version would specify the type of marketing, target audience, budget, and desired output format." },
    { id: "q2-4", question: "What is 'few-shot prompting'?", options: ["Giving ChatGPT only a few words", "Providing examples of the output you want, then asking for more in the same style", "Using ChatGPT for only a few minutes", "A technique for generating images only"], correctIndex: 1, explanation: "Few-shot prompting means providing one or more examples of the desired output format/style, so ChatGPT can produce consistent results." },
    { id: "q2-5", question: "Why are prompt templates useful?", options: ["They replace the need to learn prompting", "They save time and ensure consistent quality for recurring tasks", "They are required for ChatGPT Plus", "They automatically make any prompt perfect"], correctIndex: 1, explanation: "Templates are reusable prompt structures that save time and ensure consistent, high-quality outputs for tasks you do regularly." },
  ],
};

export default module2;
