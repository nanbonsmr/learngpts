import { Settings } from "lucide-react";
import module7Image from "@/assets/module-7-advanced.jpg";
import lesson71Image from "@/assets/lessons/lesson-7-1-custom-gpts.jpg";
import lesson72Image from "@/assets/lessons/lesson-7-2-automations.jpg";
import lesson73Image from "@/assets/lessons/lesson-7-3-engineering.jpg";
import content71CustomGpts from "@/assets/lessons/content/content-7-1-custom-gpts.jpg";
import content72Automations from "@/assets/lessons/content/content-7-2-automations.jpg";
import content73Engineering from "@/assets/lessons/content/content-7-3-engineering.jpg";
import type { Category } from "./types";

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
      image: lesson71Image,
      contentImages: [
        { src: content71CustomGpts, alt: "Custom GPT automation workflow with connected integrations", caption: "Build specialized AI assistants with custom instructions, knowledge files, and API integrations" },
      ],
      description:
        "OpenAI allows Plus users to create Custom GPTs — specialized AI assistants tailored to specific tasks. Over 3 million Custom GPTs have been created since the feature launched, demonstrating massive demand for specialized AI.\n\n**What are Custom GPTs?**\nPersonalized versions of ChatGPT with:\n• Custom instructions permanently baked in.\n• Specific knowledge files uploaded (PDFs, docs, spreadsheets — up to 20 files).\n• Defined behavior, personality, and response style.\n• Optional API connections (Actions) for real-time data.\n• Custom conversation starters for guided interactions.\n\n**High-Value Use Cases:**\n• **Marketing assistant** — Knows your brand voice, audience personas, and campaign history.\n• **Writing coach** — Follows your style guide, editorial standards, and tone preferences.\n• **Customer support bot** — Trained on your FAQ, policies, and product catalog.\n• **Code reviewer** — Knows your tech stack, coding standards, and architecture patterns.\n• **Personal tutor** — Adapts to your learning level, preferred analogies, and weak areas.\n• **Sales assistant** — Knows your product, pricing, competitors, and objection responses.\n\n**How to Build One:**\n1. Go to ChatGPT → Explore GPTs → Create.\n2. Name it and write system instructions (personality, knowledge, boundaries).\n3. Upload knowledge files (PDFs, docs, data).\n4. Configure conversation starters.\n5. Optionally add Actions (API calls for live data).\n6. Test thoroughly with edge cases.\n7. Publish (private, shared link, or GPT Store).\n\n**System Prompt Design:**\nThe system prompt is the most important part. It should define:\n• Who the GPT is (role, expertise, personality)\n• What it knows and doesn't know (knowledge boundaries)\n• How it responds (format, tone, length)\n• What it refuses to do (safety boundaries)\n• Escalation procedures (when to hand off to humans)",
      examplePrompt:
        "Help me design a Custom GPT for my role as a digital marketing manager.\n\n1. Write the complete system instructions\n2. Suggest 5 knowledge files I should upload\n3. Create 4 conversation starters\n4. Define personality and response style\n5. Include 3 things the GPT should refuse to do",
      exampleOutput:
        "**System Instructions:**\nYou are MarketingPro, a senior digital marketing strategist with 10+ years of experience in B2B SaaS...\n\n**Knowledge Files:**\n1. Brand style guide (PDF)\n2. Current marketing strategy document\n3. Competitor analysis spreadsheet\n4. Past campaign performance reports\n5. Customer persona profiles\n\n**Conversation Starters:**\n1. \"Help me plan next month's content calendar\"\n2. \"Analyze this campaign's performance\"\n3. \"Write ad copy for our new feature launch\"\n4. \"Suggest ways to improve LinkedIn engagement\"\n\n**Refuses to:**\n1. Share competitor pricing or confidential info\n2. Make budget decisions without manager approval\n3. Generate misleading marketing claims",
      practiceTask:
        "Design a Custom GPT for your specific role. Write complete system instructions, list knowledge files, create starters, and define 3 refusal boundaries. If you have Plus, build it and test with 10 real scenarios.",
      duration: "12 min",
      realData: {
        title: "Custom GPT & AI Assistant Statistics",
        points: [
          "Over 3 million Custom GPTs have been created since the feature launched in November 2023 (OpenAI, 2024).",
          "Companies using custom AI assistants report 47% faster internal communication and 35% reduction in repetitive questions (Deloitte AI Survey).",
          "The GPT Store receives 500K+ weekly visits, with business/productivity GPTs being the most popular category at 34% (OpenAI marketplace data).",
          "Custom GPTs with well-written system prompts (500+ words) perform 2.8x better on task completion than those with minimal instructions (AI UX research).",
          "Organizations deploying custom AI assistants save an average of $75,000/year per department in productivity gains (McKinsey AI Impact Report, 2024).",
        ],
        source: "OpenAI announcements, Deloitte AI Survey, GPT Store analytics, AI UX research labs, McKinsey AI Impact Report 2024",
      },
      caseStudy: {
        title: "HR Department Automates 70% of Employee Questions",
        scenario: "The HR department at a 500-person tech company was overwhelmed — their 3-person team was answering 200+ repetitive employee questions per week about PTO policies, benefits, onboarding, and expense reports. They built a Custom GPT called 'HR Helper' with uploaded knowledge files: employee handbook, benefits guide, expense policy, and onboarding checklist.",
        result: "HR Helper correctly answered 70% of employee questions without human intervention. The HR team's ticket volume dropped from 200 to 60 per week. Employee satisfaction with HR response time improved from 2.4/5 to 4.7/5 (responses went from 24 hours to instant). The team redirected 25 hours/week to strategic initiatives like retention programs and culture building.",
        keyTakeaway: "Custom GPTs shine when given specific, bounded knowledge. HR Helper worked because the knowledge domain was well-defined (company policies = finite, documented information). The key success factor was thorough knowledge file preparation and clear system instructions about when to escalate to a human (\"If the question involves personal circumstances or isn't covered in your documents, say: 'Let me connect you with our HR team for this one.'\").",
      },
    },
    {
      id: "7-2-automations",
      title: "Lesson 7.2 – Automations & Integrations",
      image: lesson72Image,
      contentImages: [
        { src: content72Automations, alt: "Connected app integrations with flowing data streams", caption: "Zapier + ChatGPT: automate content repurposing, email responses, and report generation" },
      ],
      description:
        "Combine ChatGPT with other tools to create powerful automated workflows. The integration ecosystem has exploded — Zapier alone has 6,000+ app integrations that can connect to ChatGPT.\n\n**Zapier + ChatGPT Automations:**\n• New email → ChatGPT summarizes → sends to Slack.\n• New form submission → ChatGPT drafts response → saves to Google Sheets.\n• New blog post → ChatGPT creates social posts → schedules via Buffer.\n• Support ticket → ChatGPT categorizes + suggests response → assigns to team.\n• Calendar event created → ChatGPT generates agenda → sends to attendees.\n\n**Notion + ChatGPT:**\n• Generate database templates with formulas and relations.\n• Create wiki pages, meeting notes, project briefs.\n• Build SOPs and knowledge bases.\n• Auto-populate project templates.\n\n**Google Sheets + ChatGPT:**\n• Analyze datasets and create narrative summaries.\n• Generate complex formulas with explanations.\n• Clean and categorize data automatically.\n• Create pivot table structures and reporting frameworks.\n\n**ChatGPT API for Developers:**\n• Build custom chatbots for your website.\n• Create automated email responders.\n• Generate personalized content at scale.\n• Power recommendation engines.\n\n**The Automation ROI Formula:**\nTime saved per task × Number of occurrences per week × 52 weeks = Annual hours saved.\nAnnual hours saved × Hourly rate = Annual dollar value.\n\nExample: 15 min/email × 20 emails/week × 52 weeks = 260 hours/year. At $50/hour = $13,000/year saved on ONE automation.",
      examplePrompt:
        "I want to create an automated content repurposing workflow:\n\nWhen I publish a blog post, I need it automatically repurposed into:\n- 3 Twitter/X posts\n- 1 LinkedIn post\n- 5 Instagram carousel slides\n- 1 newsletter intro paragraph\n\nDesign this using Zapier + ChatGPT with:\n1. Step-by-step setup instructions\n2. The exact ChatGPT prompts for each step\n3. Estimated time savings per week",
      exampleOutput:
        "**Automated Content Repurposing Workflow:**\n\n**Trigger:** New blog post published (webhook)\n\n**Step 1:** Zapier catches webhook with title, body, URL\n**Step 2:** ChatGPT generates 3 Twitter posts (under 280 chars, with hashtags)\n**Step 3:** ChatGPT generates LinkedIn post (200-300 words, professional)\n**Step 4:** Posts scheduled via Buffer\n**Step 5:** ChatGPT generates newsletter intro (100 words)\n\n**Time Savings:**\n• Manual repurposing: 2.5 hours/post\n• Automated: 10 minutes review\n• At 4 posts/month: saves 9.3 hours/month = $465/month at $50/hr",
      practiceTask:
        "Map out 3 automation workflows for repetitive tasks in your work. For each, calculate: manual time, automated time, and annual ROI. Build one using Zapier (free tier) or design the system prompt for each step.",
      duration: "10 min",
      realData: {
        title: "Workflow Automation Statistics",
        points: [
          "Zapier processes over 2 billion tasks per month, with ChatGPT being the fastest-growing integration in 2024 (Zapier annual report).",
          "Companies using workflow automation save an average of $46,000 per employee per year in productivity gains (Forrester Total Economic Impact study).",
          "Marketing teams using automated content repurposing produce 4.2x more content across platforms while reducing team workload by 35% (CoSchedule automation study).",
          "The average business has 10-15 repetitive processes that could be automated, saving 20+ hours/week organization-wide (McKinsey Operations Report).",
          "No-code automation tools (Zapier, Make, n8n) have seen 300% growth since 2023, driven largely by AI integration capabilities (Gartner, 2024).",
        ],
        source: "Zapier annual report, Forrester TEI study, CoSchedule, McKinsey Operations, Gartner 2024",
      },
      caseStudy: {
        title: "Agency Eliminates 120 Hours/Month of Repetitive Work",
        scenario: "Digital Spark, a 20-person marketing agency, had staff spending 120+ hours/month on repetitive tasks: social media repurposing, report generation, client update emails, and meeting summaries. The operations manager built 8 Zapier workflows connecting ChatGPT with their existing tools (Slack, Gmail, Google Sheets, Notion, Buffer).",
        result: "Repetitive work dropped from 120 hours/month to 18 hours/month — an 85% reduction. Key automations: blog → social repurposing (saved 40 hrs), meeting notes → summaries + emails (saved 32 hrs), client data → monthly reports (saved 28 hrs), inbox triage → categorized responses (saved 20 hrs). Annual savings: $172,000 in labor costs. Zero new hires needed despite 40% client growth.",
        keyTakeaway: "Automation ROI is exponential — the more workflows you connect, the more time you save. Digital Spark's secret was starting with the highest-volume tasks first (social repurposing at 40 hrs/month) and using the saved time to build the next automation. Within 3 months, the automation system was self-funding through the productivity gains it created.",
      },
    },
    {
      id: "7-3-advanced-engineering",
      title: "Lesson 7.3 – Advanced Prompt Engineering",
      image: lesson73Image,
      contentImages: [
        { src: content73Engineering, alt: "System prompt architecture with persona, knowledge, behavior, and fallback layers", caption: "P-K-B-F-E Framework: the professional system prompt architecture for AI assistants" },
      ],
      description:
        "Master the most sophisticated prompting techniques used by professional AI engineers and researchers. These techniques are what separate casual users from AI power users.\n\n**1. Multi-step Sequential Prompts:**\nChain multiple instructions in sequence for complex outputs. Number each step and use explicit handoff language (\"Now that you've completed Step 1...\").\n\n**2. Conditional Logic in Prompts:**\n\"If the user asks about X, respond with Y. If they ask about Z, respond with W.\"\nEssential for Custom GPTs, chatbot design, and automated workflows.\n\n**3. System Prompt Architecture:**\nProfessional system prompts follow the P-K-B-F-E framework:\n• **Persona** — Who the AI is (role, personality, expertise level)\n• **Knowledge** — What it knows and doesn't know (boundaries)\n• **Behavior** — How it responds (format, tone, length rules)\n• **Fallbacks** — What to do when uncertain (escalation, clarification)\n• **Examples** — Sample interactions showing desired behavior\n\n**4. Temperature Control Through Language:**\n• \"Be creative and divergent\" → higher randomness\n• \"Be precise and factual\" → lower randomness\n• \"Give me unconventional approaches\" → exploratory\n• \"Stick strictly to established practices\" → conservative\n\n**5. Output Consistency Techniques:**\n• Few-shot examples (show 2-3 examples of desired format)\n• JSON/structured output specification\n• Constraint lists (must include X, must not include Y)\n• Word count and section count requirements\n\n**6. Meta-Prompting:**\nAsk ChatGPT to write better prompts FOR you:\n\"I want to achieve X. Write the most effective prompt I should use, including role, context, task, format, and constraints.\"\n\n**7. Adversarial Testing:**\nTest your prompts with edge cases: \"What happens if someone asks about [off-topic]? What if they try to make you [break character]? What if the input is [malformed]?\"",
      examplePrompt:
        "I want to create a system prompt for a customer support chatbot for \"TaskFlow\" (a project management SaaS).\n\nThe bot should:\n1. Answer FAQs about features, pricing, and setup\n2. Escalate complex issues to humans\n3. Never make up features that don't exist\n4. Be friendly but professional\n5. Collect user email before escalating\n\nWrite a complete system prompt using the P-K-B-F-E framework. Include conditional logic, 3 example interactions, and 5 adversarial test cases.",
      exampleOutput:
        "**System Prompt (P-K-B-F-E Framework):**\n\n**Persona:** You are Flow, TaskFlow's friendly AI assistant...\n\n**Knowledge Boundaries:**\n- Features: task boards, timelines, chat, files, integrations\n- Plans: Free ($0), Pro ($15/mo), Enterprise (custom)\n- You do NOT know: internal roadmap, unreleased features\n\n**Behavior Rules:**\n- Max 150 words per response\n- Use 1 emoji per message maximum\n- Always offer next steps\n\n**Fallback Logic:**\nIF billing/refunds → collect email → escalate\nIF bug report → collect steps + browser → escalate\nIF unknown → \"Let me connect you with our team!\"\n\n**Examples:**\nUser: \"Can TaskFlow integrate with Slack?\"\nBot: \"Yes! 🎉 You can get task notifications and create tasks from Slack...\"",
      practiceTask:
        "Design a complete system prompt using P-K-B-F-E for an AI assistant in your field. Include: 5+ conditional logic rules, 3 example interactions, 5 adversarial test cases. Test it as Custom Instructions and try to break it.",
      duration: "14 min",
      realData: {
        title: "Professional Prompt Engineering Data",
        points: [
          "The prompt engineering job market grew 500% in 2024, with senior roles paying $175K-$335K annually (LinkedIn Jobs data, 2024).",
          "System prompts following structured frameworks (like P-K-B-F-E) produce 3.4x more consistent outputs than unstructured instructions (Anthropic research).",
          "Companies with dedicated prompt engineering teams report 4.7x higher ROI from AI investments (Deloitte AI Maturity Survey, 2024).",
          "The average enterprise chatbot handles 73% of customer queries without human intervention when powered by well-engineered prompts (Gartner, 2024).",
          "Meta-prompting (asking AI to write prompts) produces prompts rated 28% more effective than those written from scratch by non-experts (MIT CSAIL study, 2024).",
        ],
        source: "LinkedIn Jobs data, Anthropic research, Deloitte AI Maturity Survey, Gartner 2024, MIT CSAIL",
      },
      caseStudy: {
        title: "E-commerce Company Saves $2.1M with AI Customer Support",
        scenario: "ShopNova, an e-commerce company doing $50M/year in revenue, was spending $2.8M/year on a 35-person customer support team handling 15,000 tickets/month. They deployed an AI chatbot with a professionally engineered system prompt: 500+ words of instructions, 150+ FAQ pairs as knowledge, conditional logic for 12 escalation scenarios, and integration with their order management system.",
        result: "The chatbot resolved 78% of tickets without human intervention (up from 0%). Human agents were reduced from 35 to 12 (handling only complex/emotional cases). Annual support costs dropped from $2.8M to $700K — a $2.1M savings. Customer satisfaction actually improved from 3.9/5 to 4.4/5 because response time went from 4 hours to instant.",
        keyTakeaway: "The difference between a mediocre chatbot and a $2.1M cost-saver is prompt engineering quality. ShopNova's success factors: 1) Exhaustive knowledge base, 2) Conditional logic for 12 escalation scenarios, 3) Personality that matched their brand, 4) Clear boundaries (never makes up order status), 5) Continuous improvement — they updated the prompt weekly based on cases the bot couldn't handle.",
      },
    },
  ],
  quiz: [
    { id: "q7-1", question: "What is a Custom GPT?", options: ["A cheaper version of ChatGPT", "A personalized ChatGPT with custom instructions, knowledge files, and defined behavior", "A way to use ChatGPT without internet", "A mobile-only version"], correctIndex: 1, explanation: "Custom GPTs are personalized versions with baked-in instructions, uploaded knowledge, and defined behavior." },
    { id: "q7-2", question: "What does Zapier + ChatGPT enable?", options: ["Free access to Plus", "Automated workflows connecting ChatGPT with other tools", "Faster internet", "Access to source code"], correctIndex: 1, explanation: "Zapier connects ChatGPT with hundreds of apps, enabling automated workflows." },
    { id: "q7-3", question: "What is 'meta-prompting'?", options: ["Using ChatGPT on Meta devices", "Asking ChatGPT to write the best possible prompt for your goal", "Prompting in a different language", "Using multiple accounts"], correctIndex: 1, explanation: "Meta-prompting means asking ChatGPT to generate optimal prompts for your goals." },
    { id: "q7-4", question: "What is conditional logic in prompt design?", options: ["Using if/else code", "Defining different responses based on different user inputs", "Only allowing one question type", "Making prompts shorter"], correctIndex: 1, explanation: "Conditional logic means defining different behavior paths based on user input types." },
    { id: "q7-5", question: "How can you control ChatGPT's creativity level?", options: ["By changing internet speed", "By using phrases like 'be creative' or 'be precise and factual'", "By paying for a higher plan", "Creativity cannot be controlled"], correctIndex: 1, explanation: "You can guide creativity through instructions that signal creative or conservative behavior." },
  ],
};

export default module7;
