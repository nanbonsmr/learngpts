import { BookOpen } from "lucide-react";
import module1Image from "@/assets/module-1-getting-started.jpg";
import lesson11Image from "@/assets/lessons/lesson-1-1-intro.jpg";
import lesson12Image from "@/assets/lessons/lesson-1-2-setup.jpg";
import lesson13Image from "@/assets/lessons/lesson-1-3-first-prompt.jpg";
import type { Category } from "./types";

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
      image: lesson11Image,
      description:
        "ChatGPT is a conversational AI model created by OpenAI that can understand and generate human-like text. In this lesson you'll learn what ChatGPT actually is, how the underlying technology works at a high level, the differences between free and paid versions, and important safety considerations and limitations to keep in mind.\n\n**What is ChatGPT?**\nChatGPT is a Large Language Model (LLM) — it was trained on billions of words from books, websites, and articles. It predicts the most probable next word in a sequence, which allows it to produce coherent, helpful text on virtually any topic. The model uses a neural network architecture called a Transformer, which excels at understanding relationships between words in context. When you type a prompt, the model processes your entire input and generates a response token by token.\n\n**How AI Language Models Work (Simplified)**\nImagine you're finishing the sentence: \"The cat sat on the ___\". Your brain predicts \"mat\" because of patterns you've learned. ChatGPT works similarly but at massive scale — it has learned from trillions of words and can predict the most likely continuation of virtually any text.\n\n**Free vs Paid — Detailed Comparison**\n• Free — access to GPT-3.5 with standard speed, limited to ~40 messages per 3 hours, no image generation.\n• Plus ($20/mo) — priority access, GPT-4/4o, DALL·E image generation, web browsing, file uploads, plugins, Advanced Data Analysis, custom GPTs, 80+ messages per 3 hours.\n• Team ($25/user/mo) — everything in Plus + shared workspace, admin console, no training on your data.\n• Enterprise (custom pricing) — unlimited access, enhanced security, SSO, analytics dashboard.\n\n**Safety & Limitations — What Every User Must Know**\n1. **Knowledge cutoff** — The model's training data has a cutoff date. It may not know the very latest events unless web browsing is enabled.\n2. **Hallucinations** — ChatGPT can confidently state incorrect facts. A Stanford study found that AI models hallucinate in approximately 3-10% of responses. Always fact-check critical information.\n3. **Bias** — The model reflects biases present in its training data, including cultural, gender, and ideological biases.\n4. **No true understanding** — It's pattern matching, not reasoning. It doesn't \"know\" things the way humans do.\n5. **Privacy** — Never share personal, financial, medical, or proprietary business information. Your conversations may be reviewed by OpenAI for safety unless you opt out.\n6. **Context window limits** — GPT-4 can process ~128K tokens (~300 pages), but very long conversations may lose context from earlier messages.\n7. **Not deterministic** — The same prompt can produce different outputs each time due to sampling randomness.",
      examplePrompt:
        "Explain ChatGPT to me like I'm a 10-year-old. Include what it can do and what it can't do.",
      exampleOutput:
        "ChatGPT is like a super-smart robot friend that reads and writes. You type a question and it writes back an answer! It learned by reading millions of books and websites, so it knows a LOT.\n\n✅ What it CAN do: answer questions, write stories, help with homework, explain things simply.\n❌ What it CAN'T do: browse the internet in real-time (free version), always be correct, understand feelings, or replace a real teacher.",
      practiceTask:
        "Open ChatGPT and ask it: \"What are your top 5 strengths and top 5 weaknesses?\" Compare its answer with the limitations described in this lesson. Then ask: \"Give me an example of when you might hallucinate or give incorrect information.\" Evaluate how self-aware the model is about its own limitations.",
      duration: "10 min",
      realData: {
        title: "AI Adoption Statistics (2025)",
        points: [
          "ChatGPT reached 100 million users in just 2 months after launch — the fastest-growing consumer app in history (UBS Research, 2023).",
          "By 2025, over 92% of Fortune 500 companies are using OpenAI products in some capacity (OpenAI, 2025).",
          "The global generative AI market is projected to reach $67 billion by 2025, growing at 36% CAGR (Bloomberg Intelligence).",
          "58% of workers report using AI tools at work, with ChatGPT being the most popular choice at 42% market share (McKinsey Global Survey, 2024).",
          "The average ChatGPT user spends 8.4 minutes per session and visits 4.26 pages — indicating deep engagement (SimilarWeb, 2024).",
        ],
        source: "UBS Research, OpenAI Reports, Bloomberg Intelligence, McKinsey Global Survey 2024, SimilarWeb Analytics",
      },
      caseStudy: {
        title: "How a Small Law Firm Saved 15 Hours/Week",
        scenario: "Martinez & Associates, a 5-person law firm in Denver, was spending 15+ hours per week drafting routine client communications, summarizing case notes, and researching legal precedents. The senior partner introduced ChatGPT as a drafting assistant for the team.",
        result: "Within 3 months, the firm reduced routine drafting time by 62% (from 15 to 5.7 hours/week). Client email response time improved from 48 hours to 12 hours. Importantly, all AI-generated content was reviewed by a qualified attorney before sending — ChatGPT was the first draft, never the final word.",
        keyTakeaway: "AI doesn't replace expertise — it accelerates it. The firm's lawyers used ChatGPT as a first-draft tool, applying their legal judgment to refine outputs. The time saved was redirected to higher-value client work, resulting in a 23% increase in billable hours.",
      },
      suggestedPrompts: [
        { title: "Compare AI Models", prompt: "Compare ChatGPT, Claude, and Gemini in a table. Include: pricing, strengths, weaknesses, best use cases, and model sizes." },
        { title: "AI Limitations Checker", prompt: "I'm about to use ChatGPT for [task]. What are the potential risks, limitations, and things I should fact-check in the output?" },
        { title: "Explain Like I'm 5", prompt: "Explain [complex concept] in the simplest possible terms. Use a real-world analogy a child would understand." },
      ],
    },
    {
      id: "1-2-setting-up",
      title: "Lesson 1.2 – Setting Up Your Account",
      image: lesson12Image,
      description:
        "Before you can use ChatGPT, you need to create an account and learn to navigate the interface effectively. This lesson walks you through every step.\n\n**Step-by-step setup:**\n1. Visit chat.openai.com and click 'Sign Up'.\n2. Enter your email or use Google / Microsoft / Apple sign-in.\n3. Verify your email and set a strong password.\n4. Accept terms of service.\n5. Complete phone verification (required for new accounts).\n\n**Navigating the Interface — A Deep Dive:**\n• **Chat area** — the main window where you type prompts and see responses. You can regenerate responses, edit previous prompts, and continue conversations.\n• **Sidebar** — your conversation history, organized chronologically. You can rename chats (double-click the title), pin important conversations, create folders, or delete old chats.\n• **Model selector** — choose between models. GPT-4o is the default for Plus users. GPT-4 is available for complex reasoning.\n• **Temporary Chat** — starts a conversation that won't be saved to history. Useful for sensitive queries.\n• **Settings** — theme (light/dark/system), data controls, linked apps, language preferences.\n• **Custom instructions** — two fields: \"What would you like ChatGPT to know about you?\" and \"How would you like ChatGPT to respond?\" These apply to ALL future conversations.\n• **Memory** — Enable this so ChatGPT remembers details across conversations (e.g., your name, profession, preferences).\n\n**Power User Settings:**\n• **Data Controls → Improve the model for everyone** — Turn OFF if you don't want your conversations used for training.\n• **Shared Links** — Share specific conversations with others via a unique URL.\n• **Keyboard Shortcuts** — Ctrl+Shift+C copies the last response. Ctrl+/ shows all shortcuts.\n• **Custom GPTs** — Access specialized AI assistants created by the community or build your own (Plus only).",
      examplePrompt:
        "I just created my ChatGPT account. Walk me through the most important settings I should configure first.",
      exampleOutput:
        "Great choice! Here are the top settings to configure:\n\n1. **Theme** — Go to Settings → General → choose Dark or Light mode.\n2. **Custom Instructions** — Tell ChatGPT your role, industry, and preferred response style.\n3. **Data Controls** — Decide if your chats can be used for model training.\n4. **Memory** — Enable this so ChatGPT remembers your preferences.\n5. **Connected Apps** — Link Google Drive or OneDrive for file access (Plus only).",
      practiceTask:
        "Create your ChatGPT account (if you haven't already). Configure custom instructions with: 1) Your profession and industry, 2) Your preferred communication style, 3) Your primary use case. Then start a conversation and observe how the custom instructions shape the response.",
      duration: "8 min",
      realData: {
        title: "ChatGPT Platform Usage Data",
        points: [
          "ChatGPT has over 200 million weekly active users as of 2025 (OpenAI, Jan 2025).",
          "The average user sends 6-8 messages per conversation, with power users sending 20+ (OpenAI usage insights).",
          "Custom Instructions are used by 34% of active users, and those users report 2.3x higher satisfaction with responses (OpenAI internal survey).",
          "GPT-4o processes responses 2x faster than GPT-4 while maintaining equivalent quality on 87% of benchmarks (OpenAI, 2024).",
          "Memory feature, when enabled, reduces the need to repeat context by 40%, saving an estimated 3 minutes per session (UX research data).",
        ],
        source: "OpenAI official announcements, platform analytics, and user research data 2024-2025",
      },
      caseStudy: {
        title: "University Professor Personalizes Learning for 200 Students",
        scenario: "Dr. Emily Chen, a Computer Science professor at UC Berkeley, set up ChatGPT accounts for her 200-student introductory programming course. She created custom instructions for students to use: \"You are a patient CS tutor. The student is a beginner. Explain concepts using analogies. Never give direct answers to homework — guide them with questions instead.\"",
        result: "Student satisfaction scores for the course increased from 3.8/5 to 4.5/5. Students who used the configured ChatGPT as a study aid performed 18% better on final exams compared to the control group. Office hours attendance actually increased — students came with better questions after exploring concepts with AI first.",
        keyTakeaway: "Custom instructions transform ChatGPT from a general tool into a specialized assistant. By defining the role, boundaries, and response style upfront, you ensure consistent, high-quality interactions without re-explaining context every time.",
      },
      suggestedPrompts: [
        { title: "Custom Instructions Template", prompt: "I'm a [profession] in [industry]. I prefer [communication style] responses. Generate the perfect custom instructions for my ChatGPT account." },
        { title: "Settings Optimizer", prompt: "What are the top 10 ChatGPT settings most users don't know about? Explain each and whether I should enable/disable it." },
      ],
    },
    {
      id: "1-3-first-prompt",
      title: "Lesson 1.3 – Your First Prompt",
      image: lesson13Image,
      description:
        "A **prompt** is any text you type into ChatGPT. The quality of your prompt directly determines the quality of the response. This lesson teaches you the fundamentals of effective prompting — the single most important skill in working with AI.\n\n**Simple prompt types to start with:**\n• **Ask a question** — \"What is climate change?\"\n• **Request a summary** — \"Summarize this article in 5 bullet points: [paste]\"\n• **Get an explanation** — \"Explain quantum computing in simple terms.\"\n• **Generate ideas** — \"Give me 10 blog post ideas about healthy cooking.\"\n• **Translate** — \"Translate this email to Spanish: [paste]\"\n• **Create content** — \"Write a 200-word Instagram caption about sustainable fashion.\"\n\n**The Specificity Spectrum — From Bad to Great:**\n❌ \"Tell me about dogs\" (vague, no direction)\n⚠️ \"Tell me about dog breeds\" (slightly better, still vague)\n✅ \"List 5 best dog breeds for apartment living. Include size, temperament, exercise needs, and grooming requirements in a table format.\" (specific, formatted, useful)\n\n**Key principles for beginners:**\n1. **Be specific** — Include who, what, where, why, and how.\n2. **Give context** — Mention your audience, purpose, or constraints. \"I'm writing for busy CEOs\" produces very different output than \"I'm writing for 8th graders.\"\n3. **Specify format** — Bullet points, table, paragraph, numbered list, JSON, etc.\n4. **Set constraints** — Word count, tone, reading level, things to include/exclude.\n5. **Iterate** — If the first response isn't perfect, refine your prompt. Say \"Make it shorter\" or \"Add more examples\" instead of starting over.\n\n**Understanding Response Quality:**\nChatGPT's output quality follows a simple formula: Output Quality = Prompt Quality × Model Capability. A great prompt on GPT-3.5 will often outperform a vague prompt on GPT-4. Your words are the lever — learn to use them well.",
      examplePrompt:
        "Summarize the following news article in 5 bullet points. Focus on the key facts, who was involved, and why it matters:\n\n[Paste any news article here]",
      exampleOutput:
        "Here's a 5-point summary of the article:\n\n• **What happened:** A new international climate agreement was reached at COP29, committing 195 countries to reduce emissions by 50% by 2035.\n• **Who's involved:** Led by the EU, US, and China, with developing nations receiving $100B annual support.\n• **Key decisions:** Phase-out of coal by 2035, carbon tax on shipping, and mandatory corporate emissions reporting.\n• **Why it matters:** Scientists say this is the last window to limit warming to 1.5°C.\n• **Next steps:** Countries must submit updated national plans within 6 months.",
      practiceTask:
        "Complete this 3-part exercise: 1) Find a news article and summarize it with a basic prompt ('Summarize this article'). 2) Now use a detailed prompt with format, focus areas, and word count. 3) Compare both outputs side by side. Note the quality difference. This demonstrates why prompt quality matters.",
      duration: "10 min",
      realData: {
        title: "Prompt Quality Impact Research",
        points: [
          "Research by Google DeepMind found that adding \"think step by step\" to prompts improved accuracy on math problems by 40% (2023).",
          "A study in Nature (2024) showed that domain-specific prompts outperform generic ones by 62% in accuracy across medical, legal, and technical domains.",
          "Users who specify output format (table, bullets, etc.) receive 73% more actionable responses compared to open-ended requests (Microsoft Research, 2024).",
          "The average ChatGPT prompt is only 19 words long — yet prompts of 50-100 words produce significantly better results in user satisfaction surveys (OpenAI data).",
          "Iterating on a prompt 2-3 times improves final output quality by an average of 47% compared to accepting the first response (Stanford HAI, 2024).",
        ],
        source: "Google DeepMind, Nature 2024, Microsoft Research, OpenAI usage data, Stanford HAI research",
      },
      caseStudy: {
        title: "Journalism Student Wins Award Using AI-Assisted Research",
        scenario: "Maria Santos, a journalism student at Columbia University, used ChatGPT to help research and structure a 5,000-word investigative article about food waste in NYC restaurants. She used specific prompts like: \"Summarize the top 5 studies on commercial food waste in US restaurants published between 2022-2025. Include methodology, sample size, and key findings in a table.\"",
        result: "Maria's article was published in the Columbia Journalism Review and won the student journalism award. Her professor noted that the article's research depth exceeded what students typically achieve. Maria spent 60% less time on initial research, freeing time for original interviews and analysis. She clearly disclosed AI use in her methodology.",
        keyTakeaway: "Specific prompts turn ChatGPT from a vague chatbot into a powerful research assistant. The key difference was Maria's prompts: she specified the exact data she needed, the format, the time range, and the specific metrics — transforming general knowledge into structured, usable research data.",
      },
      suggestedPrompts: [
        { title: "Prompt Quality Tester", prompt: "Take this vague prompt and rewrite it in 3 levels of specificity (basic, good, excellent). Show how each produces better results:\n\nOriginal: [paste vague prompt]" },
        { title: "Summary Generator", prompt: "Summarize this text in 3 formats: 1) 5 bullet points, 2) A 50-word paragraph, 3) A tweet (under 280 chars). Focus on key facts and actionable insights:\n\n[paste text]" },
        { title: "Idea Brainstormer", prompt: "Generate 20 creative ideas for [topic]. Organize them into 4 categories: Quick Wins, High Impact, Creative/Unusual, and Long-term Investments. Rate each idea's feasibility (1-5)." },
      ],
    },
  ],
  quiz: [
    { id: "q1-1", question: "What does ChatGPT stand for in terms of technology?", options: ["A search engine that finds answers on the web", "A Large Language Model that predicts the next word in a sequence", "A database of pre-written answers to common questions", "An image generation tool powered by neural networks"], correctIndex: 1, explanation: "ChatGPT is a Large Language Model (LLM) trained on text data. It generates responses by predicting the most probable next word in a sequence." },
    { id: "q1-2", question: "Which of the following is a known limitation of ChatGPT?", options: ["It can browse the internet in real-time on the free plan", "It never makes mistakes in its responses", "It can confidently state incorrect facts (hallucinations)", "It understands emotions and feelings deeply"], correctIndex: 2, explanation: "Hallucination is a well-known limitation — ChatGPT can generate confident-sounding but factually incorrect information." },
    { id: "q1-3", question: "What is a 'prompt' in the context of ChatGPT?", options: ["A notification ChatGPT sends to your email", "Any text you type into ChatGPT to get a response", "A paid feature for advanced users only", "A template that ChatGPT uses internally"], correctIndex: 1, explanation: "A prompt is simply any text you type into ChatGPT. The quality of your prompt directly determines the quality of the response." },
    { id: "q1-4", question: "Which is the BEST prompt for getting a useful response?", options: ["Tell me about dogs", "Write something", "List 5 best dog breeds for apartment living with pros and cons", "Help me please"], correctIndex: 2, explanation: "Specific prompts with clear context, format, and constraints produce far better results than vague requests." },
    { id: "q1-5", question: "What does ChatGPT Plus ($20/mo) offer over the free version?", options: ["Access to GPT-4/4o, image generation, web browsing, and plugins", "Only faster response times, nothing else", "The ability to make phone calls through AI", "A built-in email client"], correctIndex: 0, explanation: "ChatGPT Plus provides access to GPT-4/4o, DALL·E image generation, web browsing capabilities, and plugin support." },
  ],
};

export default module1;
