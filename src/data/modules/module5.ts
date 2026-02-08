import { Code } from "lucide-react";
import module5Image from "@/assets/module-5-coding.jpg";
import lesson51Image from "@/assets/lessons/lesson-5-1-code.jpg";
import lesson52Image from "@/assets/lessons/lesson-5-2-debug.jpg";
import lesson53Image from "@/assets/lessons/lesson-5-3-api.jpg";
import type { Category } from "./types";

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
      image: lesson51Image,
      description:
        "ChatGPT can generate code in virtually any programming language. GitHub reports that developers using AI coding assistants are 55% more productive and complete tasks 55% faster.\n\n**Specify Clearly for Best Results:**\n• Programming language, framework, and version.\n• Input/output specifications and data types.\n• Error handling and edge case requirements.\n• Style preferences (functional vs OOP, naming conventions).\n• Testing requirements (unit tests, integration tests).\n\n**Types of Code Generation:**\n• Full components, hooks, and modules\n• Boilerplate and starter templates\n• Algorithm implementations with complexity analysis\n• Database queries (SQL, NoSQL, ORMs)\n• Configuration files (Docker, CI/CD, env)\n• Test suites with coverage targets\n• API endpoints with validation\n\n**The Code Generation Workflow:**\n1. Describe the requirement in plain English\n2. Specify language, framework, and constraints\n3. Review the generated code (NEVER blindly copy-paste)\n4. Ask for explanations of complex parts\n5. Request error handling and edge cases\n6. Ask for unit tests\n\n**Best Practices:**\n1. Always review generated code before using it — AI can introduce subtle bugs.\n2. Ask for TypeScript types and interfaces upfront.\n3. Request comments for complex logic.\n4. Ask for performance considerations.\n5. Use it for first drafts, then refine with your domain knowledge.",
      examplePrompt:
        "Write a React component in TypeScript using Tailwind CSS for a responsive pricing table with 3 tiers:\n\n1. Starter — $9/mo — 5 projects, 1GB storage, email support\n2. Pro — $29/mo — unlimited projects, 50GB storage, priority support, API access\n3. Enterprise — Custom pricing — unlimited everything, dedicated manager, SLA\n\nHighlight the Pro plan as \"Most Popular\". Include hover animations, proper TypeScript types, and accessibility attributes.",
      exampleOutput:
        "```tsx\ninterface PricingTier {\n  name: string;\n  price: string;\n  period?: string;\n  features: string[];\n  highlighted?: boolean;\n  cta: string;\n}\n\nconst PricingTable = () => (\n  <div className=\"grid md:grid-cols-3 gap-6 max-w-5xl mx-auto\">\n    {tiers.map((tier) => (\n      <div key={tier.name} className={`rounded-2xl p-8 transition-all hover:-translate-y-2...`}>\n        ...\n      </div>\n    ))}\n  </div>\n);\n```",
      practiceTask:
        "Ask ChatGPT to generate a component you actually need. Review it line by line. Ask for: 1) Error handling, 2) Unit tests, 3) Performance optimization. Note which suggestions you kept and which you modified.",
      duration: "10 min",
      realData: {
        title: "AI-Assisted Coding Statistics",
        points: [
          "Developers using GitHub Copilot complete tasks 55% faster on average (GitHub study of 2,000 developers, 2024).",
          "AI-assisted developers ship code with 40% fewer bugs when using AI for code review alongside generation (Google internal study, 2024).",
          "70% of developers report using AI coding tools regularly, up from 44% in 2023 (Stack Overflow Developer Survey 2024).",
          "The most common AI coding use cases: code generation (82%), debugging (67%), code explanation (54%), test writing (41%) (JetBrains Survey 2024).",
          "ChatGPT can generate working code in 40+ programming languages, with highest accuracy in Python (92%), JavaScript/TypeScript (89%), and SQL (87%) (LLM benchmark studies).",
        ],
        source: "GitHub Copilot study, Google internal research, Stack Overflow Developer Survey 2024, JetBrains, LLM benchmark papers",
      },
      caseStudy: {
        title: "Junior Developer Ships Feature 3x Faster Than Senior Estimate",
        scenario: "Tyler Kim, a junior developer (8 months experience) at a fintech startup, was assigned to build a complex data visualization dashboard. The senior developer estimated 3 weeks. Tyler used ChatGPT to: generate React component structure, write D3.js chart code, create TypeScript interfaces from the API response, and build unit tests.",
        result: "Tyler delivered the feature in 1 week — 3x faster than the senior estimate. Code review revealed clean architecture with proper typing and error handling. Two minor bugs were found (and fixed in 30 minutes). His tech lead commented: \"The code quality was better than what most mid-level developers produce.\" Tyler was promoted to mid-level within 6 months.",
        keyTakeaway: "AI doesn't replace programming knowledge — it accelerates learning. Tyler still needed to understand React, read documentation, and make architectural decisions. But ChatGPT eliminated the blank-page problem and provided production-quality starting points. The key was his thorough code review: he understood every line before committing it.",
      },
    },
    {
      id: "5-2-debugging",
      title: "Lesson 5.2 – Debugging & Explaining Code",
      image: lesson52Image,
      description:
        "Debugging is where ChatGPT truly shines — and where it saves developers the most time. Studies show developers spend 35-50% of their time debugging (Cambridge University), making this AI's highest-ROI coding use case.\n\n**Finding Errors:**\n• Paste your code + error message → get explanation and fix.\n• Identify logical errors that don't throw exceptions.\n• Spot performance anti-patterns and memory leaks.\n• Detect security vulnerabilities (SQL injection, XSS, etc.).\n\n**Explaining Code:**\n• Line-by-line explanations at any skill level.\n• Translate code logic into plain English.\n• Explain complex algorithms, design patterns, and architectures.\n• Understand legacy code or unfamiliar codebases.\n\n**The Debugging Prompt Formula:**\n1. **Error message** — Include the FULL error, including stack trace.\n2. **Code context** — Not just the failing line, but surrounding functions.\n3. **Expected vs actual** — \"I expected X to happen, but Y happened instead.\"\n4. **Environment** — Language version, framework, OS, relevant packages.\n5. **What you've tried** — Prevents ChatGPT from suggesting things you've already done.\n\n**Security Review:**\nAsk ChatGPT: \"Review this code for security vulnerabilities. Check for: SQL injection, XSS, CSRF, authentication bypasses, and data exposure.\" This catches issues that many developers miss.",
      examplePrompt:
        "I'm getting this error in my React app:\n\n```\nTypeError: Cannot read properties of undefined (reading 'map')\n```\n\nHere's my component:\n```tsx\nconst UserList = () => {\n  const [users, setUsers] = useState();\n  useEffect(() => {\n    fetch('/api/users').then(res => res.json()).then(setUsers);\n  }, []);\n  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n};\n```\n\nExplain what's wrong, why it happens, and show corrected code with error handling and loading state.",
      exampleOutput:
        "**The Problem:**\n`useState()` without initial value = `users` is `undefined` on first render. `undefined.map()` crashes.\n\n**Two fixes needed:**\n1. Initialize state: `useState<User[]>([])`\n2. Add error handling for fetch\n\n**Corrected:**\n```tsx\nconst [users, setUsers] = useState<User[]>([]);\nconst [loading, setLoading] = useState(true);\n// ...with proper error handling\n```",
      practiceTask:
        "Find a bug in your own code (or use a known error). Paste it with full context using the 5-point debugging formula. Then ask: \"Also review this code for potential security vulnerabilities.\" Compare AI suggestions with your initial diagnosis.",
      duration: "9 min",
      realData: {
        title: "Debugging & Code Quality Statistics",
        points: [
          "Developers spend 35-50% of their time debugging and maintaining code (Cambridge University study on software defects).",
          "AI-assisted debugging resolves issues 62% faster on average, with the biggest gains in unfamiliar codebases (Microsoft DevDiv research, 2024).",
          "The most common JavaScript/TypeScript errors: TypeError (42%), ReferenceError (18%), SyntaxError (15%) — all highly debuggable with AI (Sentry error tracking data).",
          "Code review with AI catches 31% more bugs than human-only review, including 2.3x more security vulnerabilities (Google code review study, 2024).",
          "The average cost of a production bug is $4,500 for small companies and $100K+ for enterprises (IBM Systems Sciences Institute).",
        ],
        source: "Cambridge University, Microsoft DevDiv, Sentry, Google code review studies, IBM Systems Sciences Institute",
      },
      caseStudy: {
        title: "Developer Solves 3-Day Bug in 15 Minutes with AI",
        scenario: "Maria Rodriguez, a backend developer at a healthcare startup, was stuck on a critical production bug for 3 days. User data was intermittently disappearing from the database. Traditional debugging (logs, breakpoints, code review) hadn't identified the issue. She pasted the relevant code, error logs, and database schema into ChatGPT.",
        result: "ChatGPT identified the issue in 2 minutes: a race condition in the database connection pool under high concurrent load. The model explained the exact sequence of events causing data loss and provided a fix using proper transaction isolation. Total fix time: 15 minutes including testing. The bug had been causing an estimated $12K/day in support costs.",
        keyTakeaway: "AI excels at pattern recognition in code — it has 'seen' millions of similar bugs in its training data. For common errors (race conditions, memory leaks, null references), ChatGPT often identifies the root cause faster than manual debugging because it recognizes the pattern immediately. The key is providing sufficient context: error messages, code, and expected vs actual behavior.",
      },
    },
    {
      id: "5-3-project-api",
      title: "Lesson 5.3 – Project & API Integration",
      image: lesson53Image,
      description:
        "ChatGPT can help you plan entire projects and integrate APIs — tasks that traditionally require senior-level experience.\n\n**Project Planning:**\n• Generate project ideas based on your skill level and interests.\n• Create full project structures (file trees, architecture diagrams).\n• Design database schemas with relationships and indexes.\n• Write README files, documentation, and contributing guides.\n• Plan sprint structures and user stories.\n\n**API Integration:**\n• Generate fetch/axios code for any REST API with proper error handling.\n• Create TypeScript types from API documentation or sample responses.\n• Build webhook handlers with validation and security.\n• Implement authentication flows (OAuth 2.0, JWT, API keys).\n• Handle pagination, rate limiting, and retry logic.\n\n**Automation Scripts:**\n• Cron jobs for scheduled tasks (data backups, report generation).\n• Data processing pipelines (CSV → Database, API → Spreadsheet).\n• File manipulation scripts (batch rename, format conversion).\n• Deployment configurations (Docker, GitHub Actions, Vercel).\n\n**The Full-Stack ChatGPT Workflow:**\n1. Describe your project idea in detail.\n2. Ask for architecture recommendations.\n3. Generate the folder structure and boilerplate.\n4. Build feature by feature with AI assistance.\n5. Add tests and error handling.\n6. Generate documentation.",
      examplePrompt:
        "I want to build a weather dashboard using React and the OpenWeatherMap API.\n\n1. Create the project folder structure.\n2. Write a custom hook `useWeather(city)` with TypeScript types.\n3. Create a WeatherCard component.\n4. Add error handling, loading states, and caching.\n5. Write unit tests for the hook.",
      exampleOutput:
        "**1. Project Structure:**\n```\nsrc/\n├── components/WeatherCard.tsx, SearchBar.tsx\n├── hooks/useWeather.ts\n├── types/weather.ts\n├── utils/api.ts\n└── App.tsx\n```\n\n**2. Custom Hook with Types:**\n```tsx\nexport const useWeather = (city: string) => {\n  const [data, setData] = useState<WeatherData | null>(null);\n  ...\n};\n```\n...",
      practiceTask:
        "Pick a public API (weather, news, Pokemon, etc.) and ask ChatGPT to help build a simple app. Follow the full-stack workflow: plan → structure → implement → test → document. Track how long each phase takes.",
      duration: "12 min",
      realData: {
        title: "API & Project Development Statistics",
        points: [
          "97% of developers use APIs in their projects, with an average of 15 APIs per application (Postman State of APIs, 2024).",
          "AI-assisted project setup reduces initial configuration time by 73%, getting developers to productive coding 4x faster (Developer Productivity study, 2024).",
          "Documentation written with AI assistance is rated 34% more helpful by end users compared to developer-written docs (GitHub Docs analysis).",
          "The average developer spends 3.5 hours/week writing boilerplate code that AI can generate in minutes (JetBrains Developer Survey).",
          "Projects using AI for code generation have 28% better test coverage because developers request tests alongside code (Codecov analysis, 2024).",
        ],
        source: "Postman State of APIs 2024, Developer Productivity Research, GitHub Docs, JetBrains Survey, Codecov",
      },
      caseStudy: {
        title: "Solo Developer Launches SaaS Product in 30 Days",
        scenario: "Alex Rivera, a frontend developer with 2 years of React experience but no backend knowledge, wanted to build a SaaS invoicing tool. Using ChatGPT, he planned the architecture, learned Supabase for the backend, built API integrations with Stripe for payments, and implemented user authentication — all skills he didn't have before.",
        result: "Alex launched InvoiceFlow in 30 days (vs. his original estimate of 4-6 months). The app reached 500 paying users within 3 months, generating $4,200/month in MRR. His tech stack: React, TypeScript, Supabase, Stripe, Vercel. He estimated ChatGPT saved him 200+ hours of learning and coding time, which he valued at $15,000.",
        keyTakeaway: "ChatGPT is the great equalizer for developers. Alex didn't become a backend expert — he became effective enough to build and ship. The AI bridged his knowledge gaps in real-time: database design, authentication flows, payment integration. The combination of AI assistance + existing React skills + willingness to learn created a viable product in record time.",
      },
    },
  ],
  quiz: [
    { id: "q5-1", question: "What should you always do before using code generated by ChatGPT?", options: ["Deploy immediately", "Review and test the code thoroughly", "Delete your existing code", "Share publicly without checking"], correctIndex: 1, explanation: "Always review generated code for correctness, security, and best practices." },
    { id: "q5-2", question: "What information helps ChatGPT debug effectively?", options: ["Just the file name", "Full error message, relevant code, expected vs actual behavior, and tech stack", "Only the line number", "A screenshot"], correctIndex: 1, explanation: "Including full context gives ChatGPT the information needed for accurate debugging." },
    { id: "q5-3", question: "What is a common cause of 'Cannot read properties of undefined' in React?", options: ["Too many components", "Not initializing state with a default value", "Too many CSS classes", "Using TypeScript"], correctIndex: 1, explanation: "This error commonly occurs when state is undefined on first render." },
    { id: "q5-4", question: "How can ChatGPT help with API integration?", options: ["It hosts your API", "It generates fetch code, types, error handling, and auth flows", "It replaces the need for an API", "It connects to all APIs automatically"], correctIndex: 1, explanation: "ChatGPT can generate complete API integration code including authentication and error handling." },
    { id: "q5-5", question: "What is the benefit of asking ChatGPT to explain code 'line by line'?", options: ["It makes code run faster", "It helps you understand each part and learn from it", "It fixes all errors", "It converts to another language"], correctIndex: 1, explanation: "Line-by-line explanations help you understand what each part does, making you a better programmer." },
  ],
};

export default module5;
