// Re-export types
export type { Lesson, Category, QuizQuestion, CaseStudy, RealData } from "./modules/types";

import {
  BookOpen, Briefcase, Code, Edit3, GraduationCap, Lightbulb,
  Megaphone, PenTool, Rocket, Target, Users, Zap, Clock,
  TrendingUp, Shield, Star, CheckCircle, Settings, Cpu, Wrench
} from "lucide-react";

import module1 from "./modules/module1";
import module2 from "./modules/module2";
import module3 from "./modules/module3";
import module4 from "./modules/module4";
import module5 from "./modules/module5";
import module6 from "./modules/module6";
import module7 from "./modules/module7";

// ──────────────────────────────────────────────
// EXPORTS
// ──────────────────────────────────────────────
export const categories = [
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
  { id: "p29", category: "Business", title: "Competitor Analysis", prompt: "Act as a market research analyst. Compare [my product/company] against [competitor 1], [competitor 2], and [competitor 3]. Create a comparison table covering: pricing, key features, target audience, strengths, weaknesses, and market positioning. End with strategic recommendations." },
  { id: "p30", category: "Business", title: "OKR Generator", prompt: "Act as a strategic planning consultant. I'm the [role] at a [size] [industry] company. Our annual goal is [goal]. Create 3 Objectives with 3-4 Key Results each using the OKR framework. Make KRs measurable with specific targets and deadlines." },
  { id: "p31", category: "Business", title: "Investor Pitch Deck Outline", prompt: "I'm building a pitch deck for [startup/product]. Target investors: [type]. We solve [problem] for [audience] with [solution]. Create a 12-slide outline with: title, content bullets, and speaker notes for each slide. Include a compelling narrative arc." },
  { id: "p32", category: "Business", title: "Risk Assessment", prompt: "Act as a risk management consultant. Identify the top 10 risks for [project/business]. For each risk, provide: likelihood (1-5), impact (1-5), risk score, mitigation strategy, and owner. Present as a risk matrix table." },
  // Content Creation
  { id: "p5", category: "Content Creation", title: "Blog Post", prompt: "Write a [word count]-word blog post about [topic] for [target audience]. Use a [tone] tone. Include: engaging intro, [number] sections with H2 headings, practical examples, and a CTA. Optimize for SEO keyword: [keyword]." },
  { id: "p6", category: "Content Creation", title: "Social Media Pack", prompt: "Create a social media content pack for [brand/topic]:\n1. 3 Instagram captions with hashtags\n2. 3 Twitter/X posts (under 280 chars)\n3. 1 LinkedIn post (200 words)\n\nTone: [tone]. Include CTAs." },
  { id: "p7", category: "Content Creation", title: "YouTube Script", prompt: "Write a script for a [duration]-minute YouTube video titled '[title]'. Include: a 5-second hook, intro, [number] main sections, transitions, and a CTA. Tone: [tone]." },
  { id: "p8", category: "Content Creation", title: "Content Calendar", prompt: "Create a [duration] content calendar for [brand/niche] on [platform]. Include: date, content type, topic, caption/brief, and hashtags. Mix educational, promotional, and engagement content." },
  { id: "p33", category: "Content Creation", title: "Newsletter Writer", prompt: "Write a weekly newsletter edition for [brand/niche]. Subject line options (3). Sections: 1) Opening hook (2 sentences), 2) Main story (200 words), 3) Quick tips (3 bullet points), 4) Resource of the week, 5) CTA. Tone: [tone]. Audience: [audience]." },
  { id: "p34", category: "Content Creation", title: "Podcast Show Notes", prompt: "Create detailed show notes for a podcast episode titled '[title]' with guest [name]. Include: episode summary (100 words), timestamps for [number] segments, key quotes (3), resources mentioned, guest bio, and 3 social media teasers." },
  { id: "p35", category: "Content Creation", title: "Case Study Writer", prompt: "Write a compelling case study about [client/project]. Structure: 1) Client background, 2) Challenge they faced, 3) Our solution and approach, 4) Implementation details, 5) Results with specific metrics, 6) Client quote, 7) Key takeaways. Length: [word count] words." },
  { id: "p36", category: "Content Creation", title: "Viral Hook Generator", prompt: "Generate 15 scroll-stopping hooks for [topic/niche] content on [platform]. Mix these formats: controversial opinion, surprising statistic, story opener, question hook, and challenge hook. Each should be under 20 words and create curiosity." },
  // Coding
  { id: "p9", category: "Coding", title: "Code Generator", prompt: "Write a [language/framework] [component/function] that [what it does]. Include: TypeScript types, error handling, comments, and best practices. Style: [functional/OOP]." },
  { id: "p10", category: "Coding", title: "Debug Assistant", prompt: "I'm getting this error: [paste error]. Here's my code: [paste code]. My tech stack: [stack]. Explain what's wrong, why it happens, and show me the corrected code with comments." },
  { id: "p11", category: "Coding", title: "Code Explainer", prompt: "Explain the following code line by line. I'm a [beginner/intermediate/advanced] developer. Use simple language and analogies where helpful:\n\n[paste code]" },
  { id: "p12", category: "Coding", title: "API Integration", prompt: "Write a [language] function that integrates with the [API name] API. Include: authentication, error handling, TypeScript types for the response, and usage examples." },
  { id: "p37", category: "Coding", title: "Database Schema Designer", prompt: "Design a database schema for a [type of application]. Include: table names, columns with data types, primary/foreign keys, indexes, and relationships. Use [SQL/NoSQL]. Add sample seed data for each table (3 rows). Consider normalization and query performance." },
  { id: "p38", category: "Coding", title: "Code Refactoring", prompt: "Refactor this [language] code to follow SOLID principles and modern best practices. Current code:\n\n[paste code]\n\nProvide: 1) List of code smells identified, 2) Refactored code with comments, 3) Explanation of each change, 4) Performance implications, 5) Before/after complexity analysis." },
  { id: "p39", category: "Coding", title: "Unit Test Generator", prompt: "Write comprehensive unit tests for this [language/framework] code using [testing library]. Cover: happy paths, edge cases, error scenarios, and boundary values. Aim for >90% coverage. Include: test descriptions, setup/teardown, mocks where needed.\n\n[paste code]" },
  { id: "p40", category: "Coding", title: "System Architecture", prompt: "Design a system architecture for [application type] that handles [requirements]. Include: 1) High-level architecture diagram (text), 2) Component breakdown, 3) Data flow, 4) Tech stack recommendations with justifications, 5) Scalability considerations, 6) Security measures, 7) Estimated infrastructure costs." },
  { id: "p41", category: "Coding", title: "Git Commit Messages", prompt: "I made these code changes:\n\n[describe changes]\n\nWrite 5 conventional commit messages following the format: type(scope): description. Types: feat, fix, refactor, docs, test, chore. Keep under 72 characters. Include a longer body description for the best option." },
  { id: "p42", category: "Coding", title: "Regex Generator", prompt: "Create a regex pattern that [describe what to match]. Language: [language]. Provide: 1) The regex pattern, 2) Explanation of each part, 3) 5 examples that should match, 4) 5 examples that should NOT match, 5) Common edge cases, 6) Code snippet using the regex." },
  // Marketing
  { id: "p13", category: "Marketing", title: "Ad Copy Generator", prompt: "Write [number] ad variations for [product/service] targeting [audience] on [platform]. For each include: headline (under 40 chars), body text (under 125 chars), CTA, and A/B test suggestion." },
  { id: "p14", category: "Marketing", title: "Landing Page Copy", prompt: "Write landing page copy for [product/service]. Include: hero headline + subtext, 3 feature blocks with icons, social proof section, FAQ (5 questions), and CTA. Tone: [tone]." },
  { id: "p15", category: "Marketing", title: "Email Campaign", prompt: "Write a [number]-email sequence for [goal]. Target audience: [audience]. For each email include: subject line, preview text, body, and CTA. Space emails [days] apart." },
  { id: "p16", category: "Marketing", title: "Buyer Persona", prompt: "Create a detailed buyer persona for [product/service] targeting [demographic]. Include: name, age, role, income, goals, pain points, preferred channels, objections, and messaging that resonates." },
  { id: "p43", category: "Marketing", title: "SEO Content Strategy", prompt: "Act as an SEO strategist. For the keyword cluster around '[main keyword]', create: 1) 10 long-tail keyword variations with search intent, 2) Content pillar and cluster plan, 3) Suggested article titles with target word counts, 4) Internal linking strategy, 5) Featured snippet optimization tips." },
  { id: "p44", category: "Marketing", title: "Product Launch Plan", prompt: "Create a 30-day product launch plan for [product] targeting [audience]. Include: pre-launch (days 1-10), launch week (days 11-17), post-launch (days 18-30). For each phase: marketing channels, content pieces, email sequences, social posts, and KPIs to track." },
  { id: "p45", category: "Marketing", title: "Customer Testimonial Framework", prompt: "Create 5 customer testimonial request templates for [product/service]. Include: initial ask email, follow-up if no response, structured questionnaire (10 questions), consent form template, and a guide for turning raw testimonials into polished marketing copy." },
  // Students
  { id: "p17", category: "Students", title: "Study Plan", prompt: "I have a [subject] exam in [days] days. Topics: [list topics]. I can study [hours] hours per day. Create a day-by-day study plan with specific tasks, review sessions, and a practice quiz day." },
  { id: "p18", category: "Students", title: "Note Summarizer", prompt: "Summarize the following notes into key bullet points, then create [number] flashcard questions with answers:\n\n[paste notes]" },
  { id: "p19", category: "Students", title: "Essay Outline", prompt: "Create a detailed outline for a [word count]-word essay on '[topic]'. Include: thesis statement, [number] body paragraphs with arguments and evidence suggestions, counterargument, and conclusion." },
  { id: "p20", category: "Students", title: "Concept Explainer", prompt: "Explain [concept] in simple terms that a [grade/level] student would understand. Use 3 real-world analogies. Then provide 3 practice questions to test understanding." },
  { id: "p46", category: "Students", title: "Research Paper Assistant", prompt: "Help me structure a research paper on '[topic]'. 1) Suggest a compelling thesis statement, 2) Outline 5 main sections with sub-points, 3) Recommend 10 search queries to find credible sources, 4) Create a methodology section template, 5) Write an abstract template (250 words)." },
  { id: "p47", category: "Students", title: "Debate Prep Coach", prompt: "I'm preparing for a debate on '[topic]'. My position: [for/against]. Create: 1) 5 strongest arguments for my position with evidence, 2) 5 likely counterarguments and rebuttals, 3) Opening statement (2 min), 4) Closing statement (1 min), 5) 3 tricky questions the opposition might ask with answers." },
  { id: "p48", category: "Students", title: "Math Problem Solver", prompt: "Solve this math problem step-by-step. Show ALL work. Explain each step as if teaching a student who is struggling with [topic]. After solving, provide 2 similar practice problems with answers:\n\n[paste problem]" },
  // Freelancing
  { id: "p21", category: "Freelancing", title: "Project Proposal", prompt: "Write a freelance proposal for [project type]. Client: [description]. My experience: [relevant skills]. Include: greeting, understanding of needs, approach, deliverables, timeline, pricing ($[amount]), and CTA." },
  { id: "p22", category: "Freelancing", title: "Service Package", prompt: "Create 3-tier pricing packages for my [service] freelance business:\n- Basic: [features]\n- Standard: [features]\n- Premium: [features]\n\nWrite compelling descriptions for each. Target: [audience]." },
  { id: "p49", category: "Freelancing", title: "Client Scope Manager", prompt: "A client is requesting [describe scope creep]. Original scope: [describe]. Contract price: $[amount]. Write: 1) A diplomatic email explaining this is outside scope, 2) A change order document with new pricing, 3) An updated timeline, 4) A prevention strategy for future scope creep." },
  { id: "p50", category: "Freelancing", title: "Portfolio Case Study", prompt: "Write a portfolio case study for my [service] work with [client type]. Project: [describe]. Include: 1) Project overview (50 words), 2) Challenge, 3) My process (4 steps), 4) Key deliverables, 5) Results with metrics, 6) Client testimonial prompt, 7) Tools used. Format for a portfolio website." },
  { id: "p51", category: "Freelancing", title: "Rate Calculator Script", prompt: "Help me calculate my freelance rate. I want to earn $[annual income]/year. I work [hours/week] billable hours. Account for: taxes ([%]), insurance ($[amount]/mo), tools ($[amount]/mo), vacation ([weeks]), sick days ([days]). Calculate my hourly, daily, and project rates. Show the math." },
  // Productivity
  { id: "p23", category: "Productivity", title: "Daily Planner", prompt: "Organize these tasks by priority and create a time-blocked schedule starting at [time]. Use the [Pomodoro/Eat the Frog/Eisenhower] method. Include breaks:\n\n[list tasks]" },
  { id: "p24", category: "Productivity", title: "Resume Optimizer", prompt: "Rewrite these resume bullet points using action verbs and quantified results. Tailor for a [job title] position in [industry]:\n\n[paste bullet points]" },
  { id: "p25", category: "Productivity", title: "Cover Letter", prompt: "Write a [word count]-word cover letter for a [job title] position at [company]. My background: [experience]. Highlight: [key skills]. Tone: professional but personable." },
  { id: "p52", category: "Productivity", title: "Decision Matrix", prompt: "Help me decide between [option A], [option B], and [option C] for [context]. Create a weighted decision matrix with these criteria: [list criteria]. Score each option 1-10 per criterion. Calculate weighted totals. Provide a clear recommendation with reasoning." },
  { id: "p53", category: "Productivity", title: "Email Declutter System", prompt: "I have [number] unread emails and I'm overwhelmed. Help me create a triage system: 1) Categories for sorting (with rules), 2) Template responses for common emails (5 types), 3) Unsubscribe criteria, 4) A 30-minute daily email routine, 5) Automation rules for Gmail/Outlook." },
  { id: "p54", category: "Productivity", title: "Goal Breakdown", prompt: "My goal is: [describe goal] by [deadline]. Break this into: 1) Monthly milestones, 2) Weekly tasks for the first month, 3) Daily habits that support this goal, 4) Potential obstacles and solutions, 5) Accountability check-in template, 6) Celebration milestones along the way." },
  { id: "p55", category: "Productivity", title: "Meeting Agenda Builder", prompt: "Create an agenda for a [duration]-minute [meeting type] meeting. Participants: [list]. Goal: [objective]. Include: time allocations per topic, discussion questions, pre-meeting prep tasks for attendees, decision points, and a follow-up action item template." },
  // Prompt Writing
  { id: "p26", category: "Prompt Writing", title: "Prompt Improver", prompt: "Improve this ChatGPT prompt to get better results. Add: context, role, format, and constraints. Explain what you changed and why:\n\nOriginal: [paste prompt]" },
  { id: "p27", category: "Prompt Writing", title: "System Prompt Builder", prompt: "Help me create a system prompt for a Custom GPT that acts as a [role]. It should: [list behaviors]. Knowledge boundaries: [what it should/shouldn't know]. Include 4 conversation starters." },
  { id: "p28", category: "Prompt Writing", title: "Meta-Prompt", prompt: "I want to achieve [goal]. Write the most effective ChatGPT prompt I should use to get the best possible result. Include role, context, task, format, and constraints." },
  { id: "p56", category: "Prompt Writing", title: "Chain of Thought Prompt", prompt: "Transform this task into a chain-of-thought prompt that forces step-by-step reasoning:\n\nTask: [describe task]\n\nCreate 3 versions: 1) Zero-shot CoT (add 'think step by step'), 2) Few-shot CoT (with 2 examples showing reasoning), 3) Tree-of-thought (explore multiple reasoning paths). Explain when to use each." },
  { id: "p57", category: "Prompt Writing", title: "Few-Shot Learning Template", prompt: "I need ChatGPT to [task] in a specific style. Here are 2 examples of the desired output:\n\nExample 1: [paste]\nExample 2: [paste]\n\nCreate a few-shot prompt that will consistently reproduce this style. Include: system instructions, the examples formatted optimally, and the task instruction." },
  { id: "p58", category: "Prompt Writing", title: "Prompt Testing Framework", prompt: "I wrote this prompt: [paste prompt]. Create a testing framework: 1) 5 test inputs (easy, medium, hard, edge case, adversarial), 2) Expected outputs for each, 3) Scoring rubric (accuracy, format, tone, completeness), 4) 3 variations of the prompt to A/B test, 5) Common failure modes to watch for." },
  // Advanced & AI Strategy
  { id: "p59", category: "Advanced", title: "AI Workflow Architect", prompt: "Design an AI-powered workflow for [business process]. Include: 1) Current process map, 2) AI integration points, 3) Tools needed (ChatGPT, Zapier, etc.), 4) Prompts for each AI step, 5) Human review checkpoints, 6) ROI calculation, 7) Implementation timeline (4 weeks), 8) Risk mitigation plan." },
  { id: "p60", category: "Advanced", title: "Custom GPT System Prompt", prompt: "Write a production-ready system prompt for a Custom GPT that serves as a [role] for [company type]. Include: personality definition, knowledge boundaries, response format rules, safety guardrails, escalation triggers, 6 conversation starters, and handling for edge cases." },
  { id: "p61", category: "Advanced", title: "AI Ethics Reviewer", prompt: "Act as an AI ethics consultant. Review this AI use case: [describe]. Evaluate: 1) Bias risks, 2) Privacy concerns, 3) Transparency requirements, 4) Accountability framework, 5) Impact on employment, 6) Compliance with [regulation]. Provide a risk score (1-10) and mitigation recommendations." },
  { id: "p62", category: "Advanced", title: "Prompt Chain Designer", prompt: "I need to accomplish [complex task]. Design a multi-step prompt chain where each prompt builds on the previous output. Include: 1) Step-by-step prompt sequence (5-7 prompts), 2) What to pass between prompts, 3) Quality checkpoints, 4) Fallback prompts if a step fails, 5) Final assembly instructions." },
  { id: "p63", category: "Advanced", title: "AI Training Data Curator", prompt: "I'm fine-tuning a model for [use case]. Help me: 1) Define 20 diverse training examples in the ideal format, 2) Create data quality criteria, 3) Identify potential biases in my examples, 4) Suggest edge cases to include, 5) Write a data labeling guide for my team." },
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
