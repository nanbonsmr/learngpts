import type { Assignment } from "./modules/types";

// Assignments mapped by lesson ID
export const lessonAssignments: Record<string, Assignment> = {
  // Module 1: Getting Started
  "1-1-introduction": {
    instructions: "Complete the tasks below to demonstrate your understanding of ChatGPT fundamentals.",
    checklist: [
      { id: "1-1-a", label: "Visit chat.openai.com and explore the interface" },
      { id: "1-1-b", label: "Identify which version of ChatGPT you have access to (Free/Plus)" },
      { id: "1-1-c", label: "Read OpenAI's usage policies page" },
    ],
    textPrompt: "In your own words, explain one limitation of ChatGPT and why it matters.",
  },
  "1-2-setting-up": {
    instructions: "Set up your ChatGPT account properly by completing these steps.",
    checklist: [
      { id: "1-2-a", label: "Create or log into your ChatGPT account" },
      { id: "1-2-b", label: "Configure your custom instructions (name, role, preferences)" },
      { id: "1-2-c", label: "Try toggling between GPT models if available" },
      { id: "1-2-d", label: "Explore the Settings page and adjust preferences" },
    ],
  },
  "1-3-first-prompt": {
    instructions: "Practice writing your first effective prompts.",
    checklist: [
      { id: "1-3-a", label: "Write a vague prompt and note the output quality" },
      { id: "1-3-b", label: "Rewrite the same prompt with context, role, and format" },
      { id: "1-3-c", label: "Compare the two outputs side by side" },
    ],
    textPrompt: "Paste your improved prompt and the ChatGPT output below.",
  },

  // Module 2: Prompt Engineering
  "2-1-anatomy": {
    instructions: "Practice the C-R-T-F-C prompt framework with a real task.",
    checklist: [
      { id: "2-1-a", label: "Identify a real task you need help with" },
      { id: "2-1-b", label: "Write a prompt using the C-R-T-F-C framework" },
      { id: "2-1-c", label: "Test it in ChatGPT and evaluate the result" },
    ],
    textPrompt: "Paste your C-R-T-F-C formatted prompt here.",
  },
  "2-2-templates": {
    instructions: "Build your personal prompt template library.",
    checklist: [
      { id: "2-2-a", label: "Create 3 prompt templates for tasks you do regularly" },
      { id: "2-2-b", label: "Test each template with real inputs" },
      { id: "2-2-c", label: "Save your best templates for future use" },
    ],
    textPrompt: "Share your best prompt template and the output it produced.",
  },
  "2-3-bad-prompts": {
    instructions: "Learn to spot and fix weak prompts.",
    checklist: [
      { id: "2-3-a", label: "Identify 3 common mistakes in your past prompts" },
      { id: "2-3-b", label: "Rewrite a bad prompt into a good one" },
      { id: "2-3-c", label: "Compare outputs from both versions" },
    ],
    textPrompt: "Paste your before (bad) and after (improved) prompt pair.",
  },
  "2-4-advanced": {
    instructions: "Apply advanced prompting techniques.",
    checklist: [
      { id: "2-4-a", label: "Use chain-of-thought prompting on a complex task" },
      { id: "2-4-b", label: "Try few-shot learning with 2-3 examples" },
      { id: "2-4-c", label: "Experiment with temperature control language" },
    ],
    textPrompt: "Share your chain-of-thought prompt and the reasoning output.",
  },

  // Module 3: Business
  "3-1-email": {
    instructions: "Use ChatGPT to write professional business emails.",
    checklist: [
      { id: "3-1-a", label: "Write a professional email using ChatGPT for a real scenario" },
      { id: "3-1-b", label: "Generate 3 subject line variations" },
      { id: "3-1-c", label: "Proofread and refine the output before sending" },
    ],
    textPrompt: "Paste the final email you'd actually send.",
  },
  "3-2-research": {
    instructions: "Conduct AI-assisted research on a topic relevant to your work.",
    checklist: [
      { id: "3-2-a", label: "Choose a business topic to research" },
      { id: "3-2-b", label: "Use ChatGPT to generate a structured research summary" },
      { id: "3-2-c", label: "Fact-check at least 3 claims from the output" },
    ],
    textPrompt: "Paste your research prompt and summarize what you fact-checked.",
  },
  "3-3-marketing": {
    instructions: "Create a marketing asset using ChatGPT.",
    checklist: [
      { id: "3-3-a", label: "Write ad copy or social media content for a real product/service" },
      { id: "3-3-b", label: "Generate 3 variations for A/B testing" },
      { id: "3-3-c", label: "Create a one-week content calendar" },
    ],
    textPrompt: "Paste your best marketing copy and explain why you chose it.",
  },
  "3-4-automation": {
    instructions: "Design a business automation workflow.",
    checklist: [
      { id: "3-4-a", label: "Identify a repetitive task in your workflow" },
      { id: "3-4-b", label: "Design an automation plan with ChatGPT" },
      { id: "3-4-c", label: "Calculate the time savings (hours/week)" },
    ],
    textPrompt: "Describe the automation you designed and estimated time savings.",
  },

  // Module 4: Freelancing
  "4-1-proposals": {
    instructions: "Write a freelance proposal using ChatGPT.",
    checklist: [
      { id: "4-1-a", label: "Find a real or example freelance job posting" },
      { id: "4-1-b", label: "Use ChatGPT to draft a personalized proposal" },
      { id: "4-1-c", label: "Include pricing, timeline, and deliverables" },
    ],
    textPrompt: "Paste your final proposal draft.",
  },
  "4-2-blog-social": {
    instructions: "Create content for a client or your own brand.",
    checklist: [
      { id: "4-2-a", label: "Write a blog post outline with ChatGPT" },
      { id: "4-2-b", label: "Generate 5 social media posts from the blog content" },
      { id: "4-2-c", label: "Create hashtag sets for 2 different platforms" },
    ],
    textPrompt: "Share your blog outline and one social media post.",
  },
  "4-3-editing": {
    instructions: "Use ChatGPT to edit and improve existing content.",
    checklist: [
      { id: "4-3-a", label: "Take an existing piece of writing (yours or sample)" },
      { id: "4-3-b", label: "Ask ChatGPT to improve clarity, tone, and structure" },
      { id: "4-3-c", label: "Compare the original vs. edited version" },
    ],
    textPrompt: "Paste the original and improved versions side by side.",
  },

  // Module 5: Coding
  "5-1-code": {
    instructions: "Use ChatGPT to write or generate code.",
    checklist: [
      { id: "5-1-a", label: "Ask ChatGPT to generate a function or component" },
      { id: "5-1-b", label: "Test the generated code in your environment" },
      { id: "5-1-c", label: "Ask ChatGPT to add error handling and comments" },
    ],
    textPrompt: "Paste your prompt and the generated code output.",
  },
  "5-2-debug": {
    instructions: "Practice debugging with ChatGPT.",
    checklist: [
      { id: "5-2-a", label: "Find a real bug or error in your code" },
      { id: "5-2-b", label: "Ask ChatGPT to diagnose and fix it" },
      { id: "5-2-c", label: "Verify the fix works correctly" },
    ],
    textPrompt: "Paste the error message and ChatGPT's solution.",
  },
  "5-3-api": {
    instructions: "Use ChatGPT to integrate with an API.",
    checklist: [
      { id: "5-3-a", label: "Choose an API you want to integrate" },
      { id: "5-3-b", label: "Ask ChatGPT to write the integration code" },
      { id: "5-3-c", label: "Test at least one API endpoint" },
    ],
    textPrompt: "Share your API integration prompt and the generated code.",
  },

  // Module 6: Productivity
  "6-1-planning": {
    instructions: "Use ChatGPT to plan your day or week.",
    checklist: [
      { id: "6-1-a", label: "List all your tasks for the week" },
      { id: "6-1-b", label: "Ask ChatGPT to prioritize and time-block them" },
      { id: "6-1-c", label: "Follow the plan for at least one day" },
    ],
    textPrompt: "Paste the schedule ChatGPT generated for you.",
  },
  "6-2-study": {
    instructions: "Create an AI-powered study plan.",
    checklist: [
      { id: "6-2-a", label: "Choose a topic or exam you're preparing for" },
      { id: "6-2-b", label: "Ask ChatGPT to create a day-by-day study plan" },
      { id: "6-2-c", label: "Generate flashcard questions for one topic" },
    ],
    textPrompt: "Paste your study plan and 5 flashcard questions.",
  },
  "6-3-resume": {
    instructions: "Optimize your resume with ChatGPT.",
    checklist: [
      { id: "6-3-a", label: "Paste your resume bullet points into ChatGPT" },
      { id: "6-3-b", label: "Ask for action-verb and metrics improvements" },
      { id: "6-3-c", label: "Tailor the resume for a specific job listing" },
    ],
    textPrompt: "Paste your 3 best improved resume bullet points.",
  },

  // Module 7: Advanced
  "7-1-custom-gpts": {
    instructions: "Design a Custom GPT for your specific needs.",
    checklist: [
      { id: "7-1-a", label: "Define the role and purpose of your Custom GPT" },
      { id: "7-1-b", label: "Write system instructions using the P-K-B-F-E framework" },
      { id: "7-1-c", label: "Create 4 conversation starters" },
      { id: "7-1-d", label: "List 3 things the GPT should refuse to do" },
    ],
    textPrompt: "Paste your complete system instructions for the Custom GPT.",
  },
  "7-2-automations": {
    instructions: "Map out an automation workflow using Zapier + ChatGPT.",
    checklist: [
      { id: "7-2-a", label: "Identify 3 repetitive tasks in your workflow" },
      { id: "7-2-b", label: "Design an automation for the highest-volume task" },
      { id: "7-2-c", label: "Calculate the ROI (time saved × hourly rate)" },
    ],
    textPrompt: "Describe your automation workflow and estimated annual savings.",
  },
  "7-3-advanced-engineering": {
    instructions: "Build a professional system prompt using advanced techniques.",
    checklist: [
      { id: "7-3-a", label: "Write a system prompt using P-K-B-F-E framework" },
      { id: "7-3-b", label: "Add conditional logic for at least 3 scenarios" },
      { id: "7-3-c", label: "Include 2 example interactions" },
      { id: "7-3-d", label: "Test with 3 adversarial inputs" },
    ],
    textPrompt: "Paste your system prompt and one adversarial test result.",
  },

  // Module 8: Website Building
  "8-1-planning": {
    instructions: "Plan your website using ChatGPT before building anything.",
    checklist: [
      { id: "8-1-a", label: "Define your website's purpose and target audience" },
      { id: "8-1-b", label: "Generate a complete sitemap with ChatGPT" },
      { id: "8-1-c", label: "Write homepage copy (headline, subheadline, CTA)" },
      { id: "8-1-d", label: "Create 5 SEO meta descriptions" },
    ],
    textPrompt: "Paste your sitemap and homepage headline/subheadline.",
  },
  "8-2-lovable-ai": {
    instructions: "Build your website using Lovable AI.",
    checklist: [
      { id: "8-2-a", label: "Write a detailed Lovable AI prompt based on your plan" },
      { id: "8-2-b", label: "Generate your website on lovable.dev" },
      { id: "8-2-c", label: "Iterate on at least 3 design changes via chat" },
      { id: "8-2-d", label: "Add at least one interactive feature (form, gallery, etc.)" },
    ],
    textPrompt: "Paste the Lovable prompt you used and describe the result.",
  },
  "8-3-deploy-optimize": {
    instructions: "Deploy and optimize your website for growth.",
    checklist: [
      { id: "8-3-a", label: "Publish your site to a live URL" },
      { id: "8-3-b", label: "Run through the SEO checklist for your homepage" },
      { id: "8-3-c", label: "Test your site on mobile" },
      { id: "8-3-d", label: "Create a plan for your first blog post" },
    ],
    textPrompt: "Share your live URL and one SEO improvement you made.",
  },
};
