import type { SuggestedPrompt } from "./modules/types";

// Suggested prompts mapped by lesson ID for in-lesson prompt suggestions
export const lessonSuggestedPrompts: Record<string, SuggestedPrompt[]> = {
  // Module 1: Getting Started
  "1-1-introduction": [
    { title: "Compare AI Models", prompt: "Compare ChatGPT, Claude, and Gemini in a table. Include: pricing, strengths, weaknesses, best use cases, and model sizes. Which is best for [my use case]?" },
    { title: "AI Limitations Checker", prompt: "I'm about to use ChatGPT for [task]. What are the potential risks, limitations, and things I should fact-check in the output?" },
    { title: "Explain Like I'm 5", prompt: "Explain [complex concept] in the simplest possible terms. Use a real-world analogy a child would understand. Then explain it again for a college student." },
  ],
  "1-2-setting-up": [
    { title: "Custom Instructions Template", prompt: "I'm a [profession] in [industry]. I prefer [communication style] responses. Generate the perfect custom instructions for my ChatGPT account that will improve every conversation." },
    { title: "Settings Optimizer", prompt: "What are the top 10 ChatGPT settings and features most users don't know about? Explain each and whether I should enable or disable it for maximum productivity." },
    { title: "Memory Setup Guide", prompt: "I want ChatGPT to remember my preferences. Create a list of 15 things I should tell it about myself for the best personalized experience. Categories: work, communication style, expertise level." },
  ],
  "1-3-first-prompt": [
    { title: "Prompt Quality Tester", prompt: "Take this vague prompt and rewrite it in 3 levels of specificity (basic, good, excellent). Show how each version produces better results:\n\nOriginal: [paste vague prompt]" },
    { title: "Summary Multi-Format", prompt: "Summarize this text in 3 formats: 1) 5 bullet points, 2) A 50-word paragraph, 3) A tweet under 280 chars. Focus on key facts:\n\n[paste text]" },
    { title: "Idea Brainstormer", prompt: "Generate 20 creative ideas for [topic]. Organize into 4 categories: Quick Wins, High Impact, Creative/Unusual, Long-term. Rate each idea's feasibility 1-5." },
  ],

  // Module 2: Prompt Mastery
  "2-1-anatomy": [
    { title: "C-R-T-F-C Builder", prompt: "I need help with [task]. Build me a perfect prompt using the C-R-T-F-C framework:\n- Context: [my situation]\n- Role: suggest the best expert role\n- Task: [what I need]\n- Format: suggest the best output format\n- Constraints: suggest smart limitations" },
    { title: "Role Prompt Generator", prompt: "Generate 10 expert roles I can use for my work as a [profession]. For each role, write a one-line 'Act as...' prompt and explain when to use it." },
    { title: "Prompt A/B Tester", prompt: "Write two versions of a prompt for [task]: one using the C-R-T-F-C framework and one without structure. Predict which will give better results and explain why." },
  ],
  "2-2-templates": [
    { title: "Industry Prompt Pack", prompt: "Create 10 reusable prompt templates for a [industry/profession] professional. Each should include: title, the template with [placeholders], example of filled-in version, and when to use it." },
    { title: "Daily Prompt Toolkit", prompt: "Build a daily prompt toolkit with 5 prompts I can use every workday as a [role]: morning planning, email drafting, meeting prep, problem-solving, and end-of-day review." },
    { title: "Prompt Cheat Sheet", prompt: "Create a one-page prompt cheat sheet with: 10 power phrases that improve any prompt, 5 output format options, 5 tone modifiers, and 5 constraint examples." },
  ],
  "2-3-bad-prompts": [
    { title: "Prompt Doctor", prompt: "Here's a prompt that gave me bad results: [paste prompt]. Diagnose what's wrong (be specific), then rewrite it 3 ways — each fixing a different issue. Explain each fix." },
    { title: "Hallucination Detector", prompt: "I got this response from ChatGPT: [paste response]. Identify any statements that might be hallucinated or inaccurate. Rate your confidence in each claim (1-10) and suggest verification steps." },
    { title: "Anti-Pattern Guide", prompt: "List the top 15 ChatGPT prompt anti-patterns (things people do wrong). For each, show a bad example and the corrected version. Organize from most common to least." },
  ],
  "2-4-advanced": [
    { title: "Chain of Thought", prompt: "I need to [complex task]. Create a chain-of-thought prompt that forces step-by-step reasoning. Include: initial analysis, consideration of alternatives, evaluation criteria, and final recommendation." },
    { title: "Few-Shot Template", prompt: "I want outputs that look like this:\nExample 1: [paste]\nExample 2: [paste]\n\nCreate a few-shot prompt template that consistently produces this style. Include system context and 3 example pairs." },
    { title: "Mega-Prompt Builder", prompt: "Build a detailed mega-prompt for [complex project]. Include: role assignment, context dump, multi-step task breakdown, output format specification, quality criteria, and iteration instructions. Make it 200+ words." },
  ],

  // Module 3: Business & Productivity
  "3-1-email-communication": [
    { title: "Email Tone Adjuster", prompt: "Rewrite this email in 3 different tones: formal, friendly-professional, and casual. Keep the core message the same but adjust language, greeting, and sign-off:\n\n[paste email]" },
    { title: "Cold Email Sequence", prompt: "Write a 4-email cold outreach sequence for [product/service] targeting [audience]. Include: subject lines, body text, follow-up timing, and personalization placeholders. Track open/reply rate expectations." },
    { title: "Crisis Email Template", prompt: "Our [product/service] just experienced [issue]. Write 3 versions of an apology email: one for affected customers, one for all customers, one for internal team. Include: what happened, impact, fix timeline, and compensation offer." },
  ],
  "3-2-market-research": [
    { title: "Market Analysis Framework", prompt: "Conduct a comprehensive market analysis for [industry/product]. Include: TAM/SAM/SOM estimates, top 5 competitors with positioning, customer segments, pricing landscape, and 3-year growth projections." },
    { title: "Customer Interview Script", prompt: "Create a 20-question customer discovery interview script for [product/idea]. Mix: demographic, behavioral, pain point, and willingness-to-pay questions. Include follow-up probes for each question." },
    { title: "Trend Report Generator", prompt: "Write a 2025 trend report for [industry]. Include: 10 emerging trends, impact scores (1-10), timeline to mainstream adoption, opportunities for [my business type], and 5 actionable recommendations." },
  ],
  "3-3-marketing-content": [
    { title: "Product Description Pack", prompt: "Write product descriptions for [product] in 5 formats: 1) Amazon listing, 2) Website hero copy, 3) Social media post, 4) Email feature announcement, 5) Google ad. Target audience: [audience]." },
    { title: "Brand Voice Guide", prompt: "Help me define my brand voice for [brand/business]. Create: tone attributes (3 words), voice do's and don'ts (5 each), sample paragraphs in our voice, and a messaging hierarchy for key topics." },
    { title: "Conversion Copy Formula", prompt: "Write high-converting copy for [product/service] landing page using the AIDA framework. Include: 5 headline options, hero subtext, 3 benefit blocks, objection handlers, urgency element, and CTA variations." },
  ],
  "3-4-workflow-automation": [
    { title: "Process Automation Map", prompt: "Map out my [workflow/process] and identify 10 points where AI can save time. For each: current time spent, AI solution, estimated time saved, difficulty to implement (1-5), and recommended tools." },
    { title: "SOP Generator", prompt: "Create a detailed Standard Operating Procedure for [process]. Include: purpose, scope, responsibilities, step-by-step instructions with screenshots placeholders, quality checkpoints, and troubleshooting guide." },
    { title: "Meeting-to-Actions Pipeline", prompt: "Transform these raw meeting notes into: 1) Structured summary, 2) Action items with owners and deadlines, 3) Decisions made, 4) Follow-up email draft, 5) Calendar invites for next steps:\n\n[paste notes]" },
  ],

  // Module 4: Freelancing & Content
  "4-1-proposals": [
    { title: "Proposal Personalizer", prompt: "The client posted this job: [paste job post]. Write a winning proposal that: mirrors their language, addresses their specific pain points, includes relevant portfolio pieces, and creates urgency. Budget: $[amount]." },
    { title: "Objection Handler Kit", prompt: "As a [freelance role], create responses for these 10 common client objections: too expensive, need it faster, can someone else do it cheaper, want unlimited revisions, scope creep requests, late payments, and 4 more. Professional but firm tone." },
    { title: "Client Onboarding Sequence", prompt: "Create a 5-email client onboarding sequence for my [service] business. Include: welcome email, project questionnaire, kickoff agenda, expectation-setting document, and first milestone check-in." },
  ],
  "4-2-blog-social": [
    { title: "Content Repurposer", prompt: "Take this blog post and repurpose it into: 3 LinkedIn posts, 5 Twitter/X threads, 2 Instagram carousel scripts, 1 newsletter section, and 1 YouTube short script. Maintain key messages:\n\n[paste blog post]" },
    { title: "Viral Content Analyzer", prompt: "Analyze why this content went viral: [paste or describe viral content]. Break down: hook quality, emotional triggers, shareability factors, timing, and format. Then create 3 similar content pieces for [my niche]." },
    { title: "SEO Blog Outline", prompt: "Create a detailed SEO-optimized blog outline for '[keyword]'. Include: title tag, meta description, H2/H3 structure, word count per section, internal linking opportunities, and 3 featured snippet targets." },
  ],
  "4-3-editing-rewriting": [
    { title: "Writing Style Matcher", prompt: "Analyze the writing style of this sample: [paste 200+ words]. Identify: tone, sentence structure, vocabulary level, and rhetorical devices. Then rewrite [this text] in the same style." },
    { title: "Readability Optimizer", prompt: "Rewrite this text to a [grade level] reading level. Current text:\n\n[paste text]\n\nKeep the core message but simplify vocabulary, shorten sentences, and add transitional phrases. Score readability before and after." },
    { title: "Editing Checklist Runner", prompt: "Run this text through a 10-point editing checklist: grammar, clarity, conciseness, tone consistency, active voice, jargon removal, flow, headline strength, CTA effectiveness, and SEO optimization. Score each 1-10:\n\n[paste text]" },
  ],

  // Module 5: Coding
  "5-1-writing-code": [
    { title: "Full-Stack Component", prompt: "Build a complete [feature] using [tech stack]. Include: TypeScript types/interfaces, React component with proper hooks, API route handler, database query, error states, loading states, and unit tests." },
    { title: "Code Architecture Planner", prompt: "I'm building [app type]. Design the folder structure, component hierarchy, state management approach, and data flow. Include: file names, key interfaces, and dependency diagram. Stack: [tech stack]." },
    { title: "Performance Optimizer", prompt: "Review this code for performance issues. Identify: unnecessary re-renders, memory leaks, N+1 queries, missing memoization, and bundle size concerns. Provide optimized version with before/after benchmarks:\n\n[paste code]" },
  ],
  "5-2-debugging": [
    { title: "Error Message Decoder", prompt: "Decode this error message and fix it:\n\nError: [paste full error with stack trace]\nCode: [paste relevant code]\nContext: [what you were trying to do]\n\nExplain: what caused it, why it happens, the fix, and how to prevent it." },
    { title: "Code Review Checklist", prompt: "Review this code as a senior developer. Check for: bugs, security vulnerabilities, performance issues, code smells, missing error handling, accessibility issues, and test coverage gaps. Severity-rate each issue:\n\n[paste code]" },
    { title: "Debug Strategy Generator", prompt: "I have a bug where [describe unexpected behavior]. Expected: [expected behavior]. Stack: [tech stack]. Create a debugging strategy: 5 hypotheses ranked by likelihood, test for each hypothesis, and console.log placement suggestions." },
  ],
  "5-3-api-integration": [
    { title: "API Client Generator", prompt: "Generate a complete TypeScript API client for [API name]. Include: base configuration, authentication helper, typed request/response interfaces, error handling wrapper, retry logic, and rate limiting. Add JSDoc comments." },
    { title: "API Documentation Writer", prompt: "Write API documentation for these endpoints:\n\n[list endpoints]\n\nFor each: method, URL, request body (with types), response body (with types), error codes, rate limits, and 2 code examples (cURL and JavaScript)." },
    { title: "Webhook Handler Builder", prompt: "Build a webhook handler for [service] events in [framework]. Include: signature verification, event type routing, idempotency handling, error recovery, logging, and retry dead letter queue. TypeScript with full types." },
  ],

  // Module 6: Daily Productivity
  "6-1-task-planning": [
    { title: "Weekly Review Template", prompt: "Create a weekly review template. Sections: 1) Wins this week (5), 2) Challenges faced, 3) Key metrics check, 4) Unfinished tasks (carry over or drop?), 5) Top 3 priorities next week, 6) One thing to improve, 7) Gratitude list." },
    { title: "Energy Management Plan", prompt: "I'm a [chronotype: early bird/night owl]. I work [hours]. Create an energy-optimized daily schedule that matches: deep work to peak energy, meetings to social energy, admin to low energy. Include meal timing and breaks." },
    { title: "Delegation Decision Maker", prompt: "Here are my current tasks:\n\n[list tasks]\n\nFor each, decide: Do (myself), Delegate (and to whom), Defer (when), or Delete (why). Use the 80/20 rule — which 20% of tasks drive 80% of results?" },
  ],
  "6-2-study-learning": [
    { title: "Spaced Repetition Planner", prompt: "Create a spaced repetition study schedule for [subject] over [weeks]. Topics: [list]. Use intervals: Day 1, Day 3, Day 7, Day 14, Day 30. Format as a calendar with daily tasks and review sessions." },
    { title: "Feynman Technique Coach", prompt: "I'm trying to understand [concept]. Walk me through the Feynman Technique: 1) I'll explain it to you simply, 2) You identify gaps in my understanding, 3) I refine my explanation, 4) You quiz me. Start by asking me to explain it." },
    { title: "Practice Exam Generator", prompt: "Create a 20-question practice exam for [subject/topic]. Mix: 10 multiple choice, 5 short answer, 3 scenario-based, 2 essay questions. Include an answer key with detailed explanations. Difficulty: [level]." },
  ],
  "6-3-resume-career": [
    { title: "Resume Bullet Transformer", prompt: "Transform these job responsibilities into achievement-focused resume bullets. Use action verbs, add metrics (estimate if needed), and quantify impact. Target role: [job title]:\n\n[paste responsibilities]" },
    { title: "Interview Prep Coach", prompt: "I'm interviewing for [position] at [company]. Generate: 10 likely interview questions (behavioral + technical), STAR-format answers for the top 5, 5 questions I should ask the interviewer, and a 60-second elevator pitch." },
    { title: "LinkedIn Profile Optimizer", prompt: "Rewrite my LinkedIn profile for [target role]. Current headline: [paste]. Current summary: [paste]. Create: 5 headline options, an engaging summary (300 words), and 3 featured section ideas. Optimize for keywords: [list]." },
  ],

  // Module 7: Advanced
  "7-1-custom-gpts": [
    { title: "GPT System Prompt Writer", prompt: "Write a complete system prompt for a Custom GPT that acts as [role] for [industry/use case]. Include: personality traits, knowledge scope, response format rules, safety guardrails, escalation triggers, and 6 conversation starters." },
    { title: "Knowledge Base Creator", prompt: "I want to build a Custom GPT for [purpose]. Help me: 1) List 10 documents I should upload as knowledge, 2) Write a knowledge organization schema, 3) Create test queries to verify accuracy, 4) Design fallback responses for unknown topics." },
    { title: "GPT Store Listing", prompt: "Write a GPT Store listing for my Custom GPT: [name] — [one-line description]. Include: compelling description (200 words), 5 key features, 4 conversation starters, target audience, and 3 sample interactions showing its value." },
  ],
  "7-2-automations": [
    { title: "Zapier Workflow Designer", prompt: "Design a [number]-step automation workflow for [business process]. For each step: trigger/action, app/tool, data mapping, error handling, and estimated time saved. Include: setup instructions, testing checklist, and monitoring dashboard." },
    { title: "API Automation Pipeline", prompt: "Design an automation pipeline: [trigger event] → [process data] → [take action] → [notify]. Include: API endpoints, data transformations, error handling, retry logic, and monitoring. Provide code for the core logic in [language]." },
    { title: "AI Workflow ROI Calculator", prompt: "I'm considering automating [process]. Current: [hours/week], [team members involved], [cost/hour]. Calculate: implementation cost, time to ROI, annual savings, productivity gain %, and 3-year projection. Include risks and hidden costs." },
  ],
  "7-3-prompt-engineering": [
    { title: "Advanced Prompt Patterns", prompt: "Demonstrate 7 advanced prompt engineering patterns with examples: Chain of Thought, Tree of Thought, Self-Consistency, ReAct, Reflexion, Constitutional AI, and Meta-Prompting. For each: explain when to use it, provide a template, and show expected output improvement." },
    { title: "Prompt Optimization Lab", prompt: "I have this prompt: [paste]. Run it through a 5-step optimization process: 1) Identify weaknesses, 2) Apply C-R-T-F-C framework, 3) Add chain-of-thought reasoning, 4) Include few-shot examples, 5) Add self-evaluation criteria. Show before/after." },
    { title: "Enterprise Prompt Library", prompt: "Build a 20-prompt enterprise library for a [industry] company. Categories: customer service, internal ops, content, data analysis, and strategy. Each prompt: title, template with placeholders, example filled-in, and expected output format." },
  ],
};
