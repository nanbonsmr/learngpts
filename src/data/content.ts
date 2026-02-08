import {
  BookOpen, Briefcase, Code, Edit3, GraduationCap, Lightbulb,
  Megaphone, PenTool, Rocket, Target, Users, Zap, Clock,
  TrendingUp, Shield, Star, CheckCircle
} from "lucide-react";

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
  lessons: Lesson[];
}

export const categories: Category[] = [
  {
    id: "beginner-basics",
    title: "Beginner Basics",
    description: "Start from zero — learn what ChatGPT is, how it works, and how to get started.",
    icon: BookOpen,
    color: "hsl(250, 75%, 57%)",
    lessons: [
      {
        id: "what-is-chatgpt",
        title: "What is ChatGPT?",
        description: "ChatGPT is an AI language model created by OpenAI. It can understand and generate human-like text based on the input you provide. Think of it as a highly intelligent assistant that can help you with writing, research, coding, brainstorming, and much more.",
        examplePrompt: "Explain ChatGPT to me like I'm 10 years old.",
        exampleOutput: "ChatGPT is like a super smart robot friend that can read and write. You type a question or ask it to help with something, and it writes back an answer. It learned from reading millions of books, websites, and articles, so it knows a LOT of stuff! But remember, it's not perfect — sometimes it makes mistakes, just like us.",
        practiceTask: "Ask ChatGPT to explain itself in one paragraph. Then ask it to explain in three bullet points.",
        duration: "5 min",
      },
      {
        id: "how-chatgpt-works",
        title: "How ChatGPT Works",
        description: "ChatGPT uses a technology called a large language model (LLM). It was trained on massive amounts of text data and uses patterns to predict and generate relevant responses. It doesn't 'think' like a human, but it's remarkably good at producing useful text.",
        examplePrompt: "How does ChatGPT generate its responses?",
        exampleOutput: "ChatGPT generates responses by predicting the most likely next word in a sequence based on the input you provide. It uses a neural network architecture called a Transformer, trained on billions of words from books, websites, and other text sources. It doesn't actually understand meaning the way humans do — instead, it recognizes patterns in language to produce coherent and relevant responses.",
        practiceTask: "Ask ChatGPT: 'Are you actually thinking when you respond, or just predicting words?'",
        duration: "5 min",
      },
      {
        id: "interface-guide",
        title: "Interface Guide",
        description: "Learn how to navigate the ChatGPT interface — from the chat window to settings, conversation history, and model selection.",
        examplePrompt: "What features are available in the ChatGPT interface?",
        exampleOutput: "The ChatGPT interface includes: a chat input field, conversation history sidebar, model selector (GPT-3.5, GPT-4, etc.), settings for themes and data controls, and the ability to start new conversations, rename them, or delete them.",
        practiceTask: "Open ChatGPT and explore: start a new chat, rename it, switch models if available, and check your settings.",
        duration: "5 min",
      },
      {
        id: "free-vs-paid",
        title: "Free vs Paid Plans",
        description: "Understand the differences between ChatGPT Free, Plus, and Team plans so you can decide which one fits your needs.",
        examplePrompt: "What are the differences between ChatGPT Free and ChatGPT Plus?",
        exampleOutput: "ChatGPT Free gives you access to GPT-3.5 with standard speed and availability. ChatGPT Plus ($20/month) gives you priority access, faster response times, access to GPT-4 and GPT-4o, plugins, and advanced features like image generation and web browsing.",
        practiceTask: "Ask ChatGPT to create a comparison table of Free vs Plus features.",
        duration: "4 min",
      },
      {
        id: "limitations",
        title: "Limitations of ChatGPT",
        description: "ChatGPT is powerful but not perfect. Learn about its limitations including outdated knowledge, hallucinations, and bias.",
        examplePrompt: "What are the main limitations of ChatGPT?",
        exampleOutput: "Key limitations include: 1) Knowledge cutoff — it may not know very recent events, 2) Hallucinations — it can confidently give wrong answers, 3) No real understanding — it predicts text patterns, not meaning, 4) Bias — it can reflect biases from its training data, 5) No internet access (in base model) — it can't browse or verify information in real-time.",
        practiceTask: "Ask ChatGPT a question about a very recent event and evaluate if its response is accurate.",
        duration: "5 min",
      },
      {
        id: "safety-best-practices",
        title: "Safety and Best Practices",
        description: "Learn how to use ChatGPT responsibly — including privacy tips, fact-checking, and avoiding misuse.",
        examplePrompt: "What are the best safety practices when using ChatGPT?",
        exampleOutput: "Best practices include: 1) Never share personal, financial, or sensitive information, 2) Always fact-check important claims, 3) Don't rely on it for medical or legal advice, 4) Be aware of potential biases in responses, 5) Use it as a tool, not a replacement for critical thinking, 6) Review OpenAI's usage policies.",
        practiceTask: "Create a personal safety checklist for using ChatGPT. Ask ChatGPT to help you make one.",
        duration: "5 min",
      },
    ],
  },
  {
    id: "prompt-writing",
    title: "Prompt Writing",
    description: "Master the art of writing effective prompts — the key to getting great results from ChatGPT.",
    icon: PenTool,
    color: "hsl(280, 80%, 60%)",
    lessons: [
      {
        id: "what-is-a-prompt",
        title: "What is a Prompt?",
        description: "A prompt is the input text you give to ChatGPT. The quality of your prompt directly affects the quality of the response you get back.",
        examplePrompt: "What makes a good ChatGPT prompt?",
        exampleOutput: "A good prompt is: 1) Specific — clearly state what you want, 2) Contextual — provide background info, 3) Structured — use a clear format, 4) Purposeful — define the desired outcome, 5) Concise — avoid unnecessary words while being thorough.",
        practiceTask: "Write three prompts about the same topic: one vague, one decent, and one excellent. Compare the results.",
        duration: "5 min",
      },
      {
        id: "good-vs-bad-prompts",
        title: "Good vs Bad Prompts",
        description: "See real examples of weak prompts vs strong prompts and understand why the difference matters.",
        examplePrompt: "Show me examples of bad prompts and their improved versions.",
        exampleOutput: "Bad: 'Tell me about marketing.' → Good: 'Give me 5 low-budget digital marketing strategies for a new online clothing store targeting women aged 25-35.'\n\nBad: 'Write an email.' → Good: 'Write a professional follow-up email to a client who hasn't responded in 2 weeks about our web design proposal. Keep it friendly but firm.'",
        practiceTask: "Take 3 bad prompts and rewrite them as great prompts. Test both versions in ChatGPT.",
        duration: "6 min",
      },
      {
        id: "prompt-structure",
        title: "Prompt Structure",
        description: "Learn the anatomy of a great prompt: Context + Role + Task + Format + Constraints.",
        examplePrompt: "You are a senior marketing consultant. I run a small bakery in Austin, Texas. Create a 30-day social media content calendar for Instagram. Include post ideas, captions, and hashtags. Keep it beginner-friendly.",
        exampleOutput: "Here's your 30-day Instagram content calendar for your Austin bakery:\n\nWeek 1 - Brand Introduction\nDay 1: Behind-the-scenes of your kitchen...\nDay 2: Your signature item close-up...\n(Continues with full calendar, captions, and hashtags)",
        practiceTask: "Write a prompt using the full structure: Context + Role + Task + Format + Constraints. Test it in ChatGPT.",
        duration: "7 min",
      },
      {
        id: "role-based-prompts",
        title: "Role-Based Prompts",
        description: "Assign ChatGPT a specific role or persona to get more targeted, expert-level responses.",
        examplePrompt: "Act as a senior UX designer with 10 years of experience. Review this landing page description and suggest 5 improvements for better user experience and conversion.",
        exampleOutput: "As a UX professional, here are my recommendations:\n1. Simplify the hero section — one clear CTA, not three...\n2. Add social proof above the fold...\n3. Reduce form fields to minimize friction...\n4. Use progressive disclosure for complex information...\n5. Add micro-interactions for better engagement...",
        practiceTask: "Ask ChatGPT to act as three different roles (teacher, CEO, comedian) and answer the same question. Compare the responses.",
        duration: "5 min",
      },
      {
        id: "step-by-step-prompts",
        title: "Step-by-Step Prompts",
        description: "Learn how to chain prompts and break complex tasks into smaller steps for better results.",
        examplePrompt: "Let's create a business plan step by step. Start with step 1: Help me define my target audience for an online tutoring platform for high school students.",
        exampleOutput: "Step 1: Target Audience Definition\n\nPrimary audience: High school students (ages 14-18)\n- Students struggling with specific subjects (math, science, English)\n- Students preparing for SAT/ACT exams...\n\nSecondary audience: Parents of high school students\n- Looking for affordable tutoring options...",
        practiceTask: "Choose a complex task and break it into 5 steps. Feed each step to ChatGPT one by one.",
        duration: "8 min",
      },
      {
        id: "prompt-templates",
        title: "Prompt Templates",
        description: "Ready-to-use prompt templates you can customize for different situations.",
        examplePrompt: "Give me a reusable prompt template for writing blog posts.",
        exampleOutput: "Template: 'Write a [word count] blog post about [topic] for [target audience]. Use a [tone] tone. Include: an engaging introduction, [number] main sections with subheadings, practical examples, and a conclusion with a call-to-action. Optimize for SEO with the keyword [keyword].'",
        practiceTask: "Use the blog post template to generate an article on a topic of your choice. Modify the template to fit your needs.",
        duration: "6 min",
      },
    ],
  },
  {
    id: "business",
    title: "Business",
    description: "Use ChatGPT to streamline business operations, communication, and strategy.",
    icon: Briefcase,
    color: "hsl(199, 89%, 48%)",
    lessons: [
      { id: "professional-emails", title: "Professional Emails", description: "Write polished business emails for any situation — introductions, follow-ups, negotiations, and more.", examplePrompt: "Write a professional email to a potential client introducing our web development services. Highlight our 5 years of experience and 50+ completed projects.", exampleOutput: "Subject: Expert Web Development Services — Let's Build Your Digital Presence\n\nDear [Name],\n\nI hope this message finds you well. I'm reaching out from [Company], where we've spent the past 5 years helping businesses transform their online presence...", practiceTask: "Write a follow-up email to a client who hasn't responded in a week.", duration: "5 min" },
      { id: "customer-support", title: "Customer Support Replies", description: "Create helpful, empathetic customer support responses that resolve issues efficiently.", examplePrompt: "A customer is frustrated because their order arrived damaged. Write a professional and empathetic response offering a replacement.", exampleOutput: "Dear [Customer],\n\nI'm truly sorry to hear that your order arrived damaged. I completely understand how frustrating this must be, and I want to make this right immediately...", practiceTask: "Write responses for 3 different customer complaint scenarios.", duration: "5 min" },
      { id: "market-research", title: "Market Research", description: "Use ChatGPT to analyze markets, competitors, and trends for better business decisions.", examplePrompt: "Conduct a basic market analysis for a subscription-based meal kit delivery service targeting health-conscious millennials in urban areas.", exampleOutput: "Market Analysis: Health-Focused Meal Kit Delivery\n\n1. Market Size & Growth: The meal kit market is valued at $15B+ with 12% annual growth...", practiceTask: "Analyze the market for a business idea you're interested in.", duration: "7 min" },
      { id: "product-descriptions", title: "Product Descriptions", description: "Generate compelling product descriptions that convert browsers into buyers.", examplePrompt: "Write a product description for a premium wireless noise-cancelling headphone. Target: remote workers. Highlight comfort, battery life, and sound quality.", exampleOutput: "🎧 ProSound Elite Wireless Headphones\n\nDesigned for the modern remote worker who demands exceptional audio quality and all-day comfort...", practiceTask: "Write product descriptions for 3 different products in your niche.", duration: "5 min" },
      { id: "business-ideas", title: "Business Ideas", description: "Brainstorm and validate business ideas using ChatGPT's analytical capabilities.", examplePrompt: "Generate 5 online business ideas that require less than $500 to start and can generate passive income within 6 months.", exampleOutput: "1. Digital Template Shop — Create Canva/Notion templates...\n2. Niche Blog with Affiliate Marketing...\n3. Print-on-Demand Store...", practiceTask: "Pick one business idea and ask ChatGPT to create a one-page business plan.", duration: "6 min" },
      { id: "meeting-summaries", title: "Meeting Summaries", description: "Turn meeting notes into clear, actionable summaries with next steps.", examplePrompt: "Here are my rough meeting notes: [paste notes]. Turn them into a structured meeting summary with attendees, key decisions, action items, and deadlines.", exampleOutput: "Meeting Summary — [Date]\n\nAttendees: ...\nKey Discussion Points: ...\nDecisions Made: ...\nAction Items:\n- [Person]: [Task] — Due [Date]...", practiceTask: "Take notes from your last meeting and convert them to a professional summary.", duration: "5 min" },
    ],
  },
  {
    id: "freelancing",
    title: "Freelancers",
    description: "Win more clients and work smarter with ChatGPT as your freelancing assistant.",
    icon: Rocket,
    color: "hsl(340, 82%, 52%)",
    lessons: [
      { id: "proposal-writing", title: "Proposal Writing", description: "Write winning project proposals that stand out from the competition.", examplePrompt: "Write a freelance proposal for a logo design project. The client is a new coffee shop wanting a modern, minimalist brand identity. Budget: $300-500.", exampleOutput: "Hi [Client],\n\nThank you for sharing your vision for your coffee shop's brand identity! I'd love to help you create a modern, minimalist logo that captures the essence of your business...", practiceTask: "Write a proposal for a project on your favorite freelance platform.", duration: "6 min" },
      { id: "client-communication", title: "Client Communication", description: "Handle client conversations professionally — from onboarding to difficult conversations.", examplePrompt: "Write a message to a client asking for project scope changes. Be professional but firm about additional costs.", exampleOutput: "Hi [Client],\n\nThank you for your enthusiasm about the project! I've reviewed the additional features you'd like to include...", practiceTask: "Draft messages for: project kickoff, scope change request, and final delivery.", duration: "5 min" },
      { id: "portfolio-content", title: "Portfolio Content", description: "Create compelling portfolio descriptions and case studies.", examplePrompt: "Write a portfolio case study for a website redesign project. Include the challenge, solution, and results.", exampleOutput: "Case Study: E-Commerce Website Redesign\n\nChallenge: The client's outdated website had a 70% bounce rate and poor mobile experience...", practiceTask: "Create a case study for one of your completed projects.", duration: "7 min" },
      { id: "service-descriptions", title: "Service Descriptions", description: "Write clear, compelling service descriptions that attract ideal clients.", examplePrompt: "Write a service description for 'Social Media Management' targeting small business owners. Include what's included and expected results.", exampleOutput: "📱 Social Media Management — Grow Your Brand Online\n\nStop spending hours on social media. Let me handle your online presence while you focus on running your business...", practiceTask: "Write service descriptions for your top 3 freelance services.", duration: "5 min" },
      { id: "pricing-messages", title: "Pricing Messages", description: "Communicate your pricing confidently and handle negotiation conversations.", examplePrompt: "A potential client is asking for a discount on my $2000 web design package. Write a professional response that maintains my value while being flexible.", exampleOutput: "Hi [Client],\n\nI appreciate your interest in working together! I understand budget is an important factor...", practiceTask: "Draft pricing responses for: initial quote, discount request, and package upgrade suggestion.", duration: "5 min" },
    ],
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "Create engaging content for blogs, social media, YouTube, and more.",
    icon: Edit3,
    color: "hsl(25, 95%, 53%)",
    lessons: [
      { id: "blog-writing", title: "Blog Writing", description: "Write engaging, well-structured blog posts on any topic.", examplePrompt: "Write a 1000-word blog post about '10 Productivity Hacks for Remote Workers'. Use a conversational tone, include practical tips, and optimize for SEO.", exampleOutput: "# 10 Productivity Hacks for Remote Workers That Actually Work\n\nRemote work is amazing — until your couch starts calling your name at 2 PM...", practiceTask: "Write a complete blog post on a topic in your niche.", duration: "8 min" },
      { id: "social-media-posts", title: "Social Media Posts", description: "Create scroll-stopping social media content for any platform.", examplePrompt: "Create 5 Instagram post ideas with captions for a fitness brand. Mix educational, inspirational, and promotional content.", exampleOutput: "Post 1 (Educational): '5 Exercises You're Doing Wrong'\nCaption: Stop wasting your time at the gym 🏋️...", practiceTask: "Create a week's worth of social media content for a brand of your choice.", duration: "6 min" },
      { id: "youtube-scripts", title: "YouTube Scripts", description: "Write engaging video scripts with hooks, storytelling, and calls to action.", examplePrompt: "Write a YouTube script for a 10-minute video titled 'How I Grew My Business to $10K/Month Using AI'. Include a strong hook, 3 main sections, and a CTA.", exampleOutput: "HOOK: What if I told you that a free AI tool helped me go from $0 to $10K per month in just 6 months?...", practiceTask: "Write a script for a 5-minute YouTube video on a topic you're passionate about.", duration: "8 min" },
      { id: "seo-ideas", title: "SEO Content Ideas", description: "Generate keyword-rich content ideas that can rank in search engines.", examplePrompt: "Generate 20 SEO blog post ideas for a personal finance website targeting beginners. Include suggested keywords.", exampleOutput: "1. 'How to Start Budgeting in 2024: A Complete Beginner's Guide' — Keywords: budgeting for beginners, how to budget...", practiceTask: "Generate 15 SEO content ideas for a website in your niche.", duration: "5 min" },
      { id: "content-planning", title: "Content Planning", description: "Create content calendars and strategy plans for consistent publishing.", examplePrompt: "Create a 30-day content calendar for a SaaS startup's blog. Include topics, content type, target keyword, and publishing schedule.", exampleOutput: "Week 1:\nMon: Blog Post — 'Getting Started with [Product]' (Tutorial)\nWed: Case Study — 'How Company X Increased Efficiency by 40%'...", practiceTask: "Create a 2-week content calendar for your blog or social media.", duration: "7 min" },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Supercharge your marketing with AI-powered copy, campaigns, and strategy.",
    icon: Megaphone,
    color: "hsl(172, 66%, 40%)",
    lessons: [
      { id: "ad-copy", title: "Ad Copy", description: "Write compelling ad copy for social media, Google Ads, and more.", examplePrompt: "Write 5 Facebook ad variations for an online course about freelancing. Target: people aged 25-40 wanting to leave their 9-5. Include headline, body, and CTA.", exampleOutput: "Ad 1:\nHeadline: Tired of Your 9-5? Start Freelancing in 30 Days\nBody: Join 5,000+ students who turned their skills into a full-time freelance career...\nCTA: Start Your Free Trial →", practiceTask: "Write ad copy for 3 different platforms: Facebook, Google, and LinkedIn.", duration: "6 min" },
      { id: "landing-page-copy", title: "Landing Page Copy", description: "Write high-converting landing page copy that turns visitors into customers.", examplePrompt: "Write landing page copy for an AI writing tool. Include: hero headline, subtext, 3 feature blocks, testimonial section placeholder, and CTA.", exampleOutput: "HERO:\nWrite 10x Faster with AI\nThe smartest writing assistant that helps you create blog posts, emails, and social content in minutes, not hours.", practiceTask: "Write landing page copy for a product or service of your choice.", duration: "7 min" },
      { id: "email-campaigns", title: "Email Campaigns", description: "Create email sequences that nurture leads and drive conversions.", examplePrompt: "Write a 5-email welcome sequence for a SaaS product. Include: welcome email, product tour, case study, FAQ, and trial ending reminder.", exampleOutput: "Email 1 — Welcome\nSubject: Welcome to [Product]! Here's what's next 🎉\n\nHi [Name],\n\nWe're thrilled to have you on board!...", practiceTask: "Design a 3-email sequence for a product launch.", duration: "8 min" },
      { id: "audience-research", title: "Audience Research", description: "Use ChatGPT to understand your target audience deeply.", examplePrompt: "Create a detailed buyer persona for a SaaS project management tool targeting small marketing agencies with 5-20 employees.", exampleOutput: "Buyer Persona: 'Agency Alex'\nAge: 32 | Role: Agency Owner/Manager\nTeam Size: 8-15 people...", practiceTask: "Create 2 detailed buyer personas for your business.", duration: "6 min" },
      { id: "funnel-ideas", title: "Funnel Ideas", description: "Design marketing funnels that guide prospects from awareness to purchase.", examplePrompt: "Design a complete marketing funnel for an online fitness coaching program. Include awareness, consideration, and conversion stages.", exampleOutput: "AWARENESS STAGE:\n- Instagram Reels: Quick workout tips and transformations\n- Blog posts: SEO-optimized fitness guides...\n\nCONSIDERATION STAGE:...", practiceTask: "Map out a marketing funnel for your business or a client's business.", duration: "7 min" },
    ],
  },
  {
    id: "coding",
    title: "Coding / Developers",
    description: "Use ChatGPT to write, debug, explain, and improve your code.",
    icon: Code,
    color: "hsl(142, 71%, 45%)",
    lessons: [
      { id: "generate-code", title: "Generate Code", description: "Let ChatGPT write code for you — from simple functions to full components.", examplePrompt: "Write a React component for a responsive pricing table with 3 tiers: Basic ($9/mo), Pro ($29/mo), and Enterprise (custom). Use Tailwind CSS.", exampleOutput: "```tsx\nconst PricingTable = () => {\n  const plans = [\n    { name: 'Basic', price: '$9', features: [...] },\n    ...\n  ];\n  return (...);\n};\n```", practiceTask: "Ask ChatGPT to generate a component you need for your current project.", duration: "6 min" },
      { id: "debugging", title: "Debugging", description: "Use ChatGPT to find and fix bugs in your code quickly.", examplePrompt: "I'm getting this error: 'TypeError: Cannot read property map of undefined'. Here's my code: [paste code]. Help me debug it.", exampleOutput: "The issue is that your data variable is undefined when the component first renders. The .map() is called before the API response arrives...\n\nSolution: Add a loading check or default value...", practiceTask: "Take a real bug you're facing and ask ChatGPT to help debug it.", duration: "5 min" },
      { id: "explain-code", title: "Explain Code", description: "Get clear explanations of code you don't understand.", examplePrompt: "Explain this code line by line: [paste code]. I'm a beginner in JavaScript.", exampleOutput: "Let me break this down:\n\nLine 1: const fetchData = async () => {\n→ This creates an 'async' function, which means it can wait for things like API calls...", practiceTask: "Find a code snippet you don't understand and ask ChatGPT to explain it.", duration: "5 min" },
      { id: "api-examples", title: "API Examples", description: "Generate API integration code for popular services.", examplePrompt: "Show me how to fetch data from a REST API using JavaScript fetch, with error handling and loading state in a React component.", exampleOutput: "```tsx\nconst [data, setData] = useState(null);\nconst [loading, setLoading] = useState(true);\n\nuseEffect(() => {\n  fetch('https://api.example.com/data')\n    .then(res => res.json())\n    .then(data => setData(data))\n    .catch(err => console.error(err))\n    .finally(() => setLoading(false));\n}, []);\n```", practiceTask: "Generate API integration code for a service you want to use in your project.", duration: "7 min" },
      { id: "project-ideas", title: "Project Ideas", description: "Get creative project ideas to build and improve your skills.", examplePrompt: "Give me 5 beginner-friendly web development project ideas with descriptions of what I'll learn from each.", exampleOutput: "1. Todo App — Learn CRUD operations, state management, and local storage...\n2. Weather Dashboard — Learn API integration, async/await...", practiceTask: "Pick a project idea and ask ChatGPT to outline the complete tech stack and file structure.", duration: "5 min" },
    ],
  },
  {
    id: "students",
    title: "Students",
    description: "Study smarter with ChatGPT — from note summaries to study plans.",
    icon: GraduationCap,
    color: "hsl(45, 93%, 47%)",
    lessons: [
      { id: "summarize-notes", title: "Summarize Notes", description: "Turn long lecture notes or textbook chapters into concise summaries.", examplePrompt: "Summarize the following notes on photosynthesis into 5 key bullet points: [paste notes]", exampleOutput: "Key Points on Photosynthesis:\n1. Photosynthesis converts sunlight, CO₂, and water into glucose and oxygen\n2. Occurs primarily in chloroplasts...", practiceTask: "Paste your latest class notes and ask ChatGPT to summarize them.", duration: "5 min" },
      { id: "explain-topics", title: "Explain Topics", description: "Get clear, simple explanations of complex academic topics.", examplePrompt: "Explain the theory of relativity in simple terms that a high school student would understand. Use analogies.", exampleOutput: "Imagine you're on a train moving super fast — close to the speed of light. Something weird happens: time actually slows down for you compared to someone standing still outside...", practiceTask: "Ask ChatGPT to explain a concept you're struggling with using simple analogies.", duration: "5 min" },
      { id: "study-plans", title: "Study Plans", description: "Create structured study plans and schedules for exams or courses.", examplePrompt: "Create a 2-week study plan for a Biology midterm. Topics include: cell biology, genetics, evolution, and ecology. I can study 2 hours per day.", exampleOutput: "2-Week Biology Midterm Study Plan\n\nWeek 1:\nMon: Cell Structure & Function (2 hrs) — Read ch. 3, create flashcards...", practiceTask: "Create a study plan for your next exam.", duration: "6 min" },
      { id: "essay-outlines", title: "Essay Outlines", description: "Generate structured essay outlines before you start writing.", examplePrompt: "Create an outline for a 1500-word essay on 'The Impact of Social Media on Mental Health'. Include thesis, 4 body paragraphs, and conclusion.", exampleOutput: "Essay Outline: The Impact of Social Media on Mental Health\n\nI. Introduction\n- Hook: Statistics on social media usage...\n- Thesis: While social media offers connection...", practiceTask: "Generate an outline for an upcoming essay assignment.", duration: "5 min" },
      { id: "research-help", title: "Research Help", description: "Use ChatGPT to find research directions, summarize papers, and organize citations.", examplePrompt: "I'm writing a research paper on renewable energy. Suggest 5 specific research questions I could explore, with brief descriptions.", exampleOutput: "Research Questions:\n1. How does solar panel efficiency vary across different climate zones?\n2. What is the economic viability of offshore wind farms vs. onshore?...", practiceTask: "Define your research topic and ask ChatGPT to help you narrow down your research question.", duration: "6 min" },
    ],
  },
  {
    id: "daily-productivity",
    title: "Daily Productivity",
    description: "Use ChatGPT to plan your day, boost productivity, and handle daily tasks.",
    icon: Zap,
    color: "hsl(310, 70%, 55%)",
    lessons: [
      { id: "task-planning", title: "Task Planning", description: "Use ChatGPT to organize your daily tasks and priorities effectively.", examplePrompt: "I have these tasks today: respond to emails, finish project report, grocery shopping, gym, prepare presentation, call plumber. Organize these by priority and create a time-blocked schedule starting at 8 AM.", exampleOutput: "Daily Schedule — Priority-Based Time Blocks\n\n8:00-9:00 AM: Finish project report (High Priority — deep work)\n9:00-9:30 AM: Respond to emails...", practiceTask: "List all your tasks for tomorrow and ask ChatGPT to create a time-blocked schedule.", duration: "5 min" },
      { id: "time-management", title: "Time Management", description: "Learn time management techniques and let ChatGPT help you implement them.", examplePrompt: "Teach me the Pomodoro Technique and create a Pomodoro schedule for a 4-hour study session on web development.", exampleOutput: "The Pomodoro Technique:\n1. Work for 25 minutes (1 Pomodoro)\n2. Take a 5-minute break...\n\nYour 4-Hour Pomodoro Schedule:\nPomodoro 1 (25 min): HTML structure...", practiceTask: "Try the Pomodoro schedule ChatGPT creates for you today.", duration: "5 min" },
      { id: "resume-writing", title: "Resume Writing", description: "Create professional, tailored resumes that get interviews.", examplePrompt: "Rewrite this resume bullet point to be more impactful using action verbs and quantified results: 'Helped increase sales at the company.'", exampleOutput: "Revised: 'Drove a 35% increase in quarterly sales revenue by implementing a targeted outreach strategy and mentoring a team of 5 junior sales representatives.'", practiceTask: "Take 3 bullet points from your resume and ask ChatGPT to improve them.", duration: "6 min" },
      { id: "job-search", title: "Job Search Messages", description: "Write professional job application messages, cover letters, and LinkedIn outreach.", examplePrompt: "Write a LinkedIn connection request message to a hiring manager at a tech company. I'm a frontend developer looking for new opportunities.", exampleOutput: "Hi [Name],\n\nI came across [Company]'s recent work on [project/product] and was really impressed by [specific detail]. As a frontend developer with experience in React and TypeScript...", practiceTask: "Write a LinkedIn message to a specific person you'd like to connect with.", duration: "5 min" },
      { id: "personal-productivity-prompts", title: "Personal Productivity Prompts", description: "A collection of ready-to-use prompts for everyday productivity.", examplePrompt: "Give me a morning routine checklist for maximum productivity, personalized for someone who works remotely and exercises in the morning.", exampleOutput: "🌅 Remote Worker Morning Routine\n\n6:00 AM — Wake up, hydrate (500ml water)\n6:15 AM — Exercise (30-45 min)\n7:00 AM — Shower & get ready...", practiceTask: "Ask ChatGPT to create a personalized weekly routine for your specific lifestyle.", duration: "5 min" },
    ],
  },
];

export const promptLibrary = [
  { id: "p1", category: "Business", title: "Professional Email", prompt: "Write a professional email to [recipient] about [topic]. Keep it concise, friendly, and include a clear call-to-action." },
  { id: "p2", category: "Business", title: "Meeting Agenda", prompt: "Create a structured meeting agenda for a [duration] meeting about [topic]. Include time allocations, discussion points, and action items." },
  { id: "p3", category: "Content Creation", title: "Blog Post", prompt: "Write a [word count]-word blog post about [topic] for [target audience]. Use a [tone] tone with SEO keyword [keyword]." },
  { id: "p4", category: "Content Creation", title: "Social Media Caption", prompt: "Write 5 engaging [platform] captions for a [business type]. Include relevant hashtags and a call-to-action." },
  { id: "p5", category: "Coding", title: "Code Review", prompt: "Review the following code for bugs, performance issues, and best practices. Suggest improvements:\n\n[paste code]" },
  { id: "p6", category: "Coding", title: "API Integration", prompt: "Write a [language] function that integrates with [API name]. Include error handling, types, and comments." },
  { id: "p7", category: "Marketing", title: "Ad Copy", prompt: "Write [number] ad variations for [product/service] targeting [audience] on [platform]. Include headline, body text, and CTA." },
  { id: "p8", category: "Marketing", title: "Email Campaign", prompt: "Write a [number]-email sequence for [goal]. Target audience: [audience]. Include subject lines and preview text." },
  { id: "p9", category: "Students", title: "Study Summary", prompt: "Summarize the following notes into key bullet points and create 5 flashcard questions:\n\n[paste notes]" },
  { id: "p10", category: "Students", title: "Essay Outline", prompt: "Create a detailed outline for a [word count]-word essay on [topic]. Include thesis, [number] body paragraphs, and conclusion." },
  { id: "p11", category: "Freelancing", title: "Project Proposal", prompt: "Write a freelance proposal for [project type]. Client: [client description]. My experience: [relevant experience]. Budget: [range]." },
  { id: "p12", category: "Freelancing", title: "Client Follow-Up", prompt: "Write a professional follow-up message to a client who [situation]. Keep it friendly and suggest next steps." },
  { id: "p13", category: "Productivity", title: "Daily Planner", prompt: "Organize these tasks by priority and create a time-blocked schedule starting at [time]:\n\n[list tasks]" },
  { id: "p14", category: "Productivity", title: "Resume Bullet Points", prompt: "Rewrite these resume bullet points using action verbs and quantified results:\n\n[paste bullet points]" },
  { id: "p15", category: "Prompt Writing", title: "Prompt Improver", prompt: "Improve this ChatGPT prompt to get better results. Add context, role, format, and constraints:\n\nOriginal: [paste prompt]" },
  { id: "p16", category: "Business", title: "SWOT Analysis", prompt: "Conduct a SWOT analysis for [business/product] in the [industry] market. Be specific and actionable." },
  { id: "p17", category: "Content Creation", title: "YouTube Script", prompt: "Write a script for a [duration]-minute YouTube video about [topic]. Include hook, intro, [number] sections, and CTA." },
  { id: "p18", category: "Marketing", title: "Landing Page Copy", prompt: "Write landing page copy for [product]. Include: hero section, 3 feature blocks, social proof section, FAQ, and CTA." },
];

export const resources = [
  { title: "ChatGPT Official", url: "https://chat.openai.com", description: "The official ChatGPT interface by OpenAI.", category: "AI Tools" },
  { title: "OpenAI API", url: "https://platform.openai.com", description: "Build with ChatGPT using the OpenAI API.", category: "AI Tools" },
  { title: "Claude AI", url: "https://claude.ai", description: "Anthropic's AI assistant, great for long-form content.", category: "AI Tools" },
  { title: "Midjourney", url: "https://midjourney.com", description: "AI image generation for creative projects.", category: "AI Tools" },
  { title: "Perplexity AI", url: "https://perplexity.ai", description: "AI-powered search engine with citations.", category: "AI Tools" },
  { title: "AIPRM for ChatGPT", url: "https://aiprm.com", description: "Chrome extension with curated prompt templates.", category: "Extensions" },
  { title: "WebChatGPT", url: "https://tools.zmo.ai/webchatgpt", description: "Add web results to ChatGPT responses.", category: "Extensions" },
  { title: "ChatGPT Writer", url: "https://chatgptwriter.ai", description: "Generate emails and messages using AI.", category: "Extensions" },
  { title: "Morning Routine + ChatGPT", url: "#", description: "Use ChatGPT to plan your perfect morning routine.", category: "Workflows" },
  { title: "Content Pipeline", url: "#", description: "Blog → Social → Email — automate your content pipeline with AI.", category: "Workflows" },
  { title: "Client Onboarding", url: "#", description: "Streamline client onboarding with ChatGPT templates.", category: "Workflows" },
  { title: "Be Specific", url: "#", description: "The more specific your prompt, the better the result.", category: "Tips" },
  { title: "Use Role Prompts", url: "#", description: "Assign ChatGPT a role for expert-level answers.", category: "Tips" },
  { title: "Iterate", url: "#", description: "Don't settle for the first response — refine and improve.", category: "Tips" },
  { title: "Chain Prompts", url: "#", description: "Break complex tasks into step-by-step prompts.", category: "Tips" },
];

export const userGoals = [
  { id: "students", label: "Study / Students", icon: GraduationCap, categoryId: "students" },
  { id: "business", label: "Business", icon: Briefcase, categoryId: "business" },
  { id: "freelancing", label: "Freelancing", icon: Rocket, categoryId: "freelancing" },
  { id: "content-creation", label: "Content Creation", icon: Edit3, categoryId: "content-creation" },
  { id: "marketing", label: "Marketing", icon: Megaphone, categoryId: "marketing" },
  { id: "coding", label: "Coding / Development", icon: Code, categoryId: "coding" },
  { id: "daily-productivity", label: "Daily Productivity", icon: Zap, categoryId: "daily-productivity" },
];

export const userLevels = [
  { id: "beginner", label: "Beginner", description: "I'm new to ChatGPT" },
  { id: "intermediate", label: "Intermediate", description: "I've used it a few times" },
  { id: "advanced", label: "Advanced", description: "I use it regularly" },
];
