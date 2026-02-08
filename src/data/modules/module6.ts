import { Zap } from "lucide-react";
import module6Image from "@/assets/module-6-productivity.jpg";
import type { Category } from "./types";

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
        "ChatGPT can be your personal productivity coach. The average person wastes 2.1 hours/day on context switching and poor planning (Asana). AI-assisted planning can reclaim this time.\n\n**Daily Planning Methods:**\n• **Eisenhower Matrix** — Sort tasks by Urgent/Important to focus on what matters.\n• **Pomodoro Technique** — 25 min focused work + 5 min break, repeat 4x then take 15 min.\n• **Eat the Frog** — Do the hardest, most impactful task first when energy is highest.\n• **Time Blocking** — Dedicate specific hours to specific types of work.\n• **2-Minute Rule** — If it takes less than 2 minutes, do it immediately.\n\n**The Morning Briefing Prompt:**\nBuild a prompt you run every morning: \"Here are my tasks, meetings, and deadlines for today: [list]. Create a time-blocked schedule starting at [time]. Use the [method] approach. Include: energy-appropriate task ordering, buffer time between meetings, and identify which tasks I should delegate or eliminate.\"\n\n**Weekly & Monthly Planning:**\n• Set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound).\n• Break quarterly goals into weekly milestones.\n• Create habit trackers and accountability frameworks.\n• Build routines for high-energy mornings and wind-down evenings.\n\n**The Compound Effect of AI Planning:**\nSaving 30 minutes/day = 182.5 hours/year = 22+ full working days. At $40/hour, that's $7,300/year in reclaimed productivity per person.",
      examplePrompt:
        "I have these tasks for today:\n- Finish client presentation (2 hrs)\n- Reply to 15 emails (30 min)\n- Gym workout (1 hr)\n- Grocery shopping (45 min)\n- Read 30 pages of a book (30 min)\n- Call the dentist (5 min)\n- Prepare dinner (45 min)\n- Review team pull requests (1 hr)\n\nCreate a time-blocked schedule starting at 7 AM using Eat the Frog. Group similar tasks, include breaks, and rate each task's priority (1-5).",
      exampleOutput:
        "🐸 **Daily Schedule — Eat the Frog Method**\n\n7:00 AM — Morning routine & breakfast\n7:30 AM — 🐸 Finish client presentation (deep work, priority 5)\n9:30 AM — ☕ Break (15 min)\n9:45 AM — Review team pull requests (priority 4)\n10:45 AM — Reply to emails + Call dentist (batch comms, priority 3)\n11:30 AM — 🏋️ Gym workout (energy break)\n12:30 PM — Lunch\n1:15 PM — Grocery shopping (priority 2)\n2:00 PM — Read 30 pages (wind-down, priority 2)\n5:30 PM — Prepare dinner (priority 3)\n\n**Productive hours: 5.5 hrs | Breaks: 2.5 hrs | Personal: 4 hrs**",
      practiceTask:
        "List ALL your tasks for tomorrow. Ask ChatGPT to create schedules using 3 different methods (Pomodoro, Eat the Frog, Eisenhower). Follow the one that resonates most. At end of day, rate how productive you felt (1-10) and calculate time saved.",
      duration: "8 min",
      realData: {
        title: "Productivity & Time Management Data",
        points: [
          "The average knowledge worker loses 2.1 hours/day to context switching — AI-planned schedules reduce this by 34% (Asana Work Index, 2024).",
          "Workers who time-block their schedule are 18% more productive than those who don't (Cal Newport, verified by RescueTime data).",
          "Only 18% of people have a reliable time management system. Those who do earn an average of 20% more than peers (Harvard Business Review).",
          "The Pomodoro Technique improves focus and reduces procrastination by 25% in controlled studies (Journal of Educational Psychology).",
          "AI-assisted daily planning saves an average of 40 minutes/day in decision fatigue about 'what to do next' (Todoist productivity research, 2024).",
        ],
        source: "Asana Work Index 2024, Cal Newport/RescueTime, Harvard Business Review, Journal of Educational Psychology, Todoist Research",
      },
      caseStudy: {
        title: "Overwhelmed Manager Goes from 60-Hour to 45-Hour Weeks",
        scenario: "David Park, a marketing manager at a 200-person company, was consistently working 60+ hour weeks and missing family dinners. He started using ChatGPT every morning with a planning prompt that included: today's meetings, inbox count, project deadlines, and personal commitments. The AI created a time-blocked schedule and identified tasks to delegate.",
        result: "Within 2 months, David reduced his work week from 60 to 45 hours while maintaining the same output. Key insight: ChatGPT identified that 12 hours/week of his work could be delegated to his team. He started sleeping 7+ hours (up from 5.5) and reported a 40% reduction in stress (self-assessed). His manager noted improved decision-making quality.",
        keyTakeaway: "Productivity isn't about working more hours — it's about working on the right things. ChatGPT excels at identifying low-value tasks and suggesting delegation or elimination. David's biggest gains came not from doing things faster, but from stopping doing things that didn't matter.",
      },
    },
    {
      id: "6-2-study-personal",
      title: "Lesson 6.2 – Personal Writing & Study",
      description:
        "Whether you're a student or lifelong learner, ChatGPT is an incredible study tool. Research shows that active recall and spaced repetition are the two most effective study techniques — and ChatGPT excels at both.\n\n**Summarize Notes & Textbooks:**\n• Paste long content → get concise bullet points at your level.\n• Create flashcard Q&A sets for active recall practice.\n• Generate mind maps in text format for visual learners.\n• Convert notes into different formats (tables, timelines, comparison charts).\n\n**Study Plans:**\n• Create custom schedules based on exam dates and topic complexity.\n• Implement spaced repetition schedules (review on days 1, 3, 7, 14, 30).\n• Generate practice questions at increasing difficulty levels.\n• Create mock exams with answer keys and explanations.\n\n**Essay & Research Help:**\n• Generate outlines with thesis statements and argument structure.\n• Research direction suggestions with source recommendations.\n• Grammar, style, and coherence improvement.\n• Citation formatting (APA, MLA, Chicago, Harvard).\n\n**The Feynman Technique with AI:**\nAsk ChatGPT: \"I'm going to explain [concept] to you. Point out any errors, gaps, or oversimplifications in my explanation.\" Then explain the concept in your own words. This is one of the most effective learning methods.\n\n**Important:** Use ChatGPT as a study AID, not to write assignments for you. Academic integrity matters — and you learn nothing from copying.",
      examplePrompt:
        "I have a Biology exam in 10 days covering: cell structure, DNA/genetics, evolution, ecology.\n\nI can study 2 hours/day. Create:\n1. A 10-day spaced repetition study plan\n2. 5 flashcard questions per topic (increasing difficulty)\n3. A practice quiz (10 questions, multiple choice with explanations)\n4. A one-page cheat sheet summarizing all four topics",
      exampleOutput:
        "**10-Day Spaced Repetition Plan:**\nDay 1-2: Cell Structure (new) + Day 3: Review\nDay 3-4: DNA & Genetics (new) + Day 5: Review Cells + DNA\nDay 5-6: Evolution (new)\nDay 7-8: Ecology (new) + Review all\nDay 9: Full review + weak areas\nDay 10: Practice quizzes + final review\n\n**Flashcards — Cell Structure (Progressive):**\nQ1 (Easy): What is the function of mitochondria?\nQ2 (Medium): Compare passive vs active transport\nQ3 (Hard): Explain how mitochondria support the endosymbiotic theory...",
      practiceTask:
        "Choose a subject you're studying. Create: 1) A spaced repetition plan, 2) 20 flashcards, 3) A mock exam, 4) A cheat sheet. Use the Feynman Technique on your weakest topic — explain it to ChatGPT and ask for feedback.",
      duration: "10 min",
      realData: {
        title: "Study Methods & AI-Assisted Learning Data",
        points: [
          "Active recall (testing yourself) improves retention by 50% compared to re-reading notes (Roediger & Butler, 2011, replicated 2024).",
          "Spaced repetition increases long-term retention by 200% vs. cramming — forgetting curve research spans 130+ years (Ebbinghaus → modern replication).",
          "Students using AI study tools (flashcards, practice quizzes) score 23% higher on average in controlled studies (EdTech Research Journal, 2024).",
          "The Feynman Technique is rated the #1 learning method by neuroscientists for deep understanding (Learning Scientists meta-analysis).",
          "78% of university students now use AI tools for study assistance, with ChatGPT being the most popular at 64% (Educause Student Survey, 2024).",
        ],
        source: "Roediger & Butler, Ebbinghaus research, EdTech Research Journal, Learning Scientists, Educause Survey 2024",
      },
      caseStudy: {
        title: "Medical Student Passes Board Exam with AI Study System",
        scenario: "Dr. Aisha Patel (then a medical student) was preparing for USMLE Step 1, one of the most challenging exams in medical education. She used ChatGPT to create: a 90-day spaced repetition study plan covering 19 organ systems, 500+ flashcard pairs, weekly practice quizzes that adapted to her weak areas, and plain-English explanations of complex pathophysiology.",
        result: "Aisha scored in the 92nd percentile on USMLE Step 1, significantly above her practice test baseline (70th percentile). She credited the spaced repetition system for long-term retention and the Feynman Technique practice (explaining concepts to ChatGPT) for deep understanding. Study time: 6 hours/day (down from classmates' average of 8+ hours) while maintaining higher scores.",
        keyTakeaway: "AI doesn't replace studying — it makes studying more efficient and more effective. Aisha's success came from using evidence-based study methods (spaced repetition, active recall, Feynman Technique) that ChatGPT implemented perfectly. The AI didn't give her the answers — it gave her the system to learn them.",
      },
    },
    {
      id: "6-3-resume-career",
      title: "Lesson 6.3 – Resume & Career Assistance",
      description:
        "ChatGPT can significantly improve every aspect of your job search. The average job search takes 5 months, and 75% of resumes are rejected by ATS (Applicant Tracking Systems) before a human ever sees them.\n\n**Resume Optimization:**\n• Rewrite bullet points with action verbs and quantified results.\n• Tailor resumes for specific job descriptions (keyword matching).\n• ATS optimization — ensure your resume passes automated filters.\n• Format suggestions for maximum readability.\n\n**The STAR Method for Bullet Points:**\nSituation → Task → Action → Result\n\"Managed\" → \"Spearheaded a cross-functional team of 12 to redesign the customer onboarding flow, reducing churn by 28% and increasing NPS from 32 to 61.\"\n\n**Cover Letters:**\n• Personalized, company-specific letters (never generic).\n• Highlight relevant experience with specific achievements.\n• Show culture fit with company values and mission.\n• Keep under 300 words — hiring managers spend 7 seconds scanning.\n\n**Job Search Messages:**\n• LinkedIn connection requests (personalized, not generic).\n• Post-interview thank-you notes (within 24 hours).\n• Salary negotiation scripts (data-driven, confident).\n• Networking outreach (warm introductions, value-first).\n\n**Interview Preparation:**\n• Common questions with tailored STAR answers.\n• Company-specific research summaries.\n• Questions to ask the interviewer (shows engagement).\n• Mock interview with ChatGPT as interviewer.",
      examplePrompt:
        "I'm a frontend developer with 3 years of experience applying for a Senior React Developer position at a fintech company.\n\n1. Rewrite these weak resume bullet points using the STAR method with quantified results:\n   - \"Built web pages using React\"\n   - \"Worked with the team on projects\"\n   - \"Fixed bugs in the code\"\n\n2. Write a 200-word cover letter tailored to a fintech company\n3. Give me 5 likely interview questions with STAR-formatted sample answers",
      exampleOutput:
        "**1. Improved Resume Bullets (STAR Method):**\n• \"Architected 15+ responsive web applications using React and TypeScript, serving 50,000+ MAU with 99.9% uptime\"\n• \"Collaborated with cross-functional teams of 8+ engineers and designers to deliver 3 major product launches on schedule\"\n• \"Identified and resolved 200+ production bugs, reducing customer-reported issues by 45%\"\n\n**2. Cover Letter:**\nDear Hiring Team, I'm excited to apply for the Senior React Developer position...\n\n**3. Interview Questions + STAR Answers:**\nQ1: \"Tell me about a challenging bug you solved.\"\nS: Our payment form was dropping 15% of submissions...",
      practiceTask:
        "Take your actual resume and: 1) Rewrite 5 bullet points using the STAR method, 2) Generate a cover letter for a specific job listing, 3) Run a mock interview with ChatGPT (5 questions). Track which version of your bullet points is stronger.",
      duration: "10 min",
      realData: {
        title: "Job Search & Resume Statistics",
        points: [
          "75% of resumes are rejected by ATS software before a human sees them (Jobscan, 2024). AI-optimized resumes pass ATS 3.2x more often.",
          "Resumes with quantified achievements get 40% more interview callbacks than those without (TopResume study of 100K resumes).",
          "The average recruiter spends 7.4 seconds scanning a resume. Clear formatting and strong opening bullets are critical (Ladders eye-tracking study).",
          "Candidates who send post-interview thank-you notes within 24 hours are 22% more likely to receive an offer (Robert Half survey).",
          "AI-assisted job seekers report finding employment 23% faster than non-AI users (Indeed Hiring Lab, 2024).",
        ],
        source: "Jobscan 2024, TopResume, Ladders eye-tracking, Robert Half International, Indeed Hiring Lab",
      },
      caseStudy: {
        title: "Career Changer Lands $40K Raise with AI-Optimized Application",
        scenario: "Jennifer Wu, a high school English teacher for 8 years, wanted to transition to corporate Learning & Development (L&D). She had no corporate resume, no tech experience, and no network. She used ChatGPT to: translate her teaching experience into corporate L&D language, ATS-optimize her resume for specific job postings, write personalized cover letters, and prepare for interviews with industry-specific STAR answers.",
        result: "Jennifer received interviews at 5 of the 12 companies she applied to (42% hit rate vs. the average 8%). She accepted an L&D Manager position at a Fortune 500 company with a salary of $95K — a $40K increase from her teaching salary. Her ChatGPT-rewritten bullet point: \"Designed and delivered 200+ differentiated learning experiences for diverse groups of 30+ learners, achieving 94% proficiency rates on standardized assessments\" (originally: \"Taught English classes\").",
        keyTakeaway: "ChatGPT excels at translation — not language translation, but skill translation. Jennifer's teaching skills were directly relevant to L&D, but her resume language was education-specific. AI bridged the vocabulary gap, making her transferable skills visible to corporate recruiters. The quantification (200+ experiences, 94% proficiency) was the game-changer.",
      },
    },
  ],
  quiz: [
    { id: "q6-1", question: "What is the 'Eat the Frog' productivity method?", options: ["Doing the easiest tasks first", "Tackling the hardest task first thing in the day", "Working without breaks", "Only doing tasks you enjoy"], correctIndex: 1, explanation: "'Eat the Frog' means doing your hardest task first. Once done, everything else feels easier." },
    { id: "q6-2", question: "How should you use ChatGPT for studying?", options: ["Have it write all assignments", "As a study aid for summaries, flashcards, and practice quizzes", "Copy answers directly into exams", "Replace attending lectures"], correctIndex: 1, explanation: "ChatGPT should be used as a study AID for creating study materials, not to write assignments." },
    { id: "q6-3", question: "What makes a resume bullet point more impactful?", options: ["Passive voice and vague descriptions", "Action verbs and quantified results", "Making it as long as possible", "Listing every technology ever used"], correctIndex: 1, explanation: "Action verbs and quantified results demonstrate real impact and make bullet points stand out." },
    { id: "q6-4", question: "What is the Pomodoro Technique?", options: ["A cooking method", "25-minute work sessions followed by 5-minute breaks", "A social media strategy", "Organizing emails by color"], correctIndex: 1, explanation: "Pomodoro involves focused 25-minute work sessions followed by 5-minute breaks." },
    { id: "q6-5", question: "What is ATS optimization for resumes?", options: ["Making resumes artistic", "Including keywords that Applicant Tracking Systems scan for", "Writing in all caps", "Adding photos"], correctIndex: 1, explanation: "ATS optimization means including relevant keywords from the job description so automated systems don't filter out your resume." },
  ],
};

export default module6;
