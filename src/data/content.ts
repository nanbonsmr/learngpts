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
