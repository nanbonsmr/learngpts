import { Globe } from "lucide-react";
import module8Image from "@/assets/module-8-website-building.jpg";
import lesson81Image from "@/assets/lessons/lesson-8-1-planning.jpg";
import lesson82Image from "@/assets/lessons/lesson-8-2-lovable.jpg";
import lesson83Image from "@/assets/lessons/lesson-8-3-deploy.jpg";
import content81Planning from "@/assets/lessons/content/content-8-1-planning.jpg";
import content82Lovable from "@/assets/lessons/content/content-8-2-lovable.jpg";
import content83Deploy from "@/assets/lessons/content/content-8-3-deploy.jpg";
import type { Category } from "./types";

const module8: Category = {
  id: "website-building",
  title: "Module 8: Build a Website with ChatGPT & Lovable",
  description: "Go from idea to live website without coding — use ChatGPT for content and planning, then Lovable AI to build and deploy.",
  icon: Globe,
  color: "hsl(190, 80%, 45%)",
  image: module8Image,
  level: "Beginner",
  lessons: [
    {
      id: "8-1-planning",
      title: "Lesson 8.1 – Planning Your Website with ChatGPT",
      image: lesson81Image,
      contentImages: [
        { src: content81Planning, alt: "Website planning process using ChatGPT to generate sitemap, copy, and content strategy", caption: "Use ChatGPT to plan your entire website — from sitemap to page copy — before building anything" },
      ],
      description:
        "Before you build a single page, you need a plan. ChatGPT is the ultimate website planning partner — it can generate your sitemap, write every page's copy, define your brand voice, and create a content strategy in minutes instead of days.\n\n**Why Planning First Matters**\nA 2024 Orbit Media study found that websites planned with a clear content strategy convert 2.4x better than those built without one. Yet 68% of small businesses skip the planning phase entirely.\n\n**Step 1: Define Your Website's Purpose**\nAsk ChatGPT to help clarify your goals:\n• Who is your target audience? (demographics, pain points, desires)\n• What action should visitors take? (buy, sign up, contact, learn)\n• What makes you different from competitors?\n• What pages do you need?\n\n**Step 2: Generate Your Sitemap**\nChatGPT can create a complete site structure based on your niche. A typical small business site needs: Home, About, Services/Products, Testimonials, Blog, Contact. An e-commerce site adds: Shop, Categories, Cart, Checkout, FAQ.\n\n**Step 3: Write All Your Page Copy**\nThis is where ChatGPT truly shines. For each page, prompt it to write:\n• Headlines and subheadlines (H1, H2, H3 hierarchy)\n• Body copy with benefit-driven language\n• Calls-to-action (CTAs) that drive conversions\n• Meta titles and descriptions for SEO\n\n**Step 4: Content Strategy**\n• Blog post ideas (20+ titles with target keywords)\n• FAQ content (10+ questions your audience actually asks)\n• Social proof — testimonial request templates\n• Lead magnet ideas (free downloads, checklists, guides)\n\n**Step 5: Brand Voice Definition**\nAsk ChatGPT: \"Help me define a brand voice for a [type] business targeting [audience]. Include tone, vocabulary, do's and don'ts, and 3 example sentences.\"\n\n**Pro Tip: The Master Planning Prompt**\nOne comprehensive prompt can generate your entire website plan in a single response — sitemap, page outlines, SEO strategy, and content calendar.",
      examplePrompt:
        "I'm starting a freelance graphic design business called \"PixelCraft Studio\". My services: logo design, brand identity, social media graphics, and website mockups. Target audience: startups and small businesses with budgets of $500–$5,000.\n\nCreate a complete website plan:\n1. Sitemap with all pages I need\n2. For each page, write the headline, subheadline, and 2-3 paragraphs of copy\n3. 5 meta descriptions optimized for SEO\n4. 10 blog post ideas with target keywords\n5. 3 call-to-action variations for my services page\n6. A brand voice guide (tone, vocabulary, examples)",
      exampleOutput:
        "**PIXELCRAFT STUDIO — COMPLETE WEBSITE PLAN**\n\n**Sitemap:**\n1. Home\n2. Services (with sub-sections for each service)\n3. Portfolio\n4. About\n5. Blog\n6. Contact\n7. Pricing\n\n**HOME PAGE:**\nH1: \"Design That Makes Startups Stand Out\"\nSubheadline: \"Logo, brand identity, and graphics that turn heads — crafted for businesses ready to grow.\"\n\nBody: \"Your brand is your first impression. At PixelCraft Studio, we create visual identities that capture what makes your business unique...\"\n\n**META DESCRIPTIONS:**\n1. Home: \"PixelCraft Studio — Professional logo design & brand identity for startups. Get designs that convert. Free consultation.\"\n2. Services: \"Logo design, brand kits, social media graphics & website mockups starting at $500. Fast turnaround for startups.\"\n...\n\n**BRAND VOICE:**\nTone: Confident, approachable, creative-but-professional\nVocabulary: \"craft\", \"elevate\", \"stand out\", \"pixel-perfect\"\nDo: Use short sentences, active voice, specific outcomes\nDon't: Use jargon, be overly formal, use passive voice",
      practiceTask:
        "Plan your own website (business, portfolio, or personal project). Use ChatGPT to generate: 1) A complete sitemap, 2) Copy for your homepage and one other page, 3) 5 SEO meta descriptions, 4) A brand voice guide. Save everything — you'll use it in the next lesson to actually build the site.",
      duration: "12 min",
      realData: {
        title: "Website Planning & AI Statistics",
        points: [
          "68% of small businesses launch their website without a documented content strategy, leading to 2.4x lower conversion rates (Orbit Media, 2024).",
          "AI-assisted copywriting reduces website content creation time by 75% — from an average of 40 hours to 10 hours for a full site (HubSpot Content Trends Report, 2024).",
          "Websites with clear H1-H3 hierarchy rank 2.3x higher in Google search results than those with unstructured content (Ahrefs SEO Study, 2024).",
          "Pages with compelling CTAs see 83% higher click-through rates than those with generic 'Learn More' buttons (Unbounce Conversion Benchmark Report).",
          "89% of consumers say they've been convinced to buy a product or service by reading a brand's blog content (DemandGen Report, 2024).",
        ],
        source: "Orbit Media, HubSpot, Ahrefs, Unbounce, DemandGen Report 2024",
      },
      caseStudy: {
        title: "Freelance Photographer Plans and Launches Website in 1 Day",
        scenario: "Sarah, a freelance photographer, had been putting off building a website for 6 months because she didn't know where to start. She used ChatGPT to plan her entire site in one afternoon: sitemap (7 pages), all page copy, SEO meta descriptions, 15 blog post ideas, and a brand voice guide. Total planning time: 2 hours (vs. the 2-3 weeks she'd been quoted by a copywriter for $3,000).",
        result: "Sarah's ChatGPT-planned website launched within 24 hours. Within 3 months, her site ranked on page 1 for 'wedding photographer [her city]', generated 47 inquiries, and booked $28,000 in projects. The blog posts ChatGPT helped her outline drove 60% of her organic traffic.",
        keyTakeaway: "The biggest barrier to launching a website isn't building — it's planning. Most people get stuck on 'what should I write?' ChatGPT eliminates this bottleneck entirely. The key is using comprehensive prompts that generate everything at once, so you have all your content ready before you start building.",
      },
    },
    {
      id: "8-2-lovable-ai",
      title: "Lesson 8.2 – Building with Lovable AI",
      image: lesson82Image,
      contentImages: [
        { src: content82Lovable, alt: "Lovable AI transforming a text prompt into a fully designed responsive website", caption: "Lovable AI turns your description into a production-ready website — no coding required" },
      ],
      description:
        "Lovable AI is a revolutionary platform that lets you build full-stack web applications by simply describing what you want in natural language. No coding required — the AI writes the code, designs the UI, and handles the backend for you.\n\n**What is Lovable AI?**\nLovable is an AI-powered website and app builder that:\n• Takes natural language descriptions and converts them into fully functional websites\n• Generates clean, modern React code with Tailwind CSS\n• Handles responsive design automatically (mobile, tablet, desktop)\n• Integrates backend features like databases, authentication, and file storage\n• Deploys your site with one click to a live URL\n• Lets you iterate by chatting — just describe changes and they appear instantly\n\n**How It Works:**\n1. **Describe your project** — Tell Lovable what you want to build (e.g., \"A portfolio website for a graphic designer with a dark theme, project gallery, contact form, and testimonials section\")\n2. **AI builds it** — Lovable generates the complete website with professional design, responsive layout, and all the components you described\n3. **Iterate with chat** — Don't like the color? Want another section? Just tell Lovable in plain English and watch the changes appear in real-time\n4. **Add backend features** — Need a contact form that saves submissions? User accounts? A blog with a CMS? Just ask\n5. **Publish** — One-click deployment to a live URL you can share with the world\n\n**What You Can Build with Lovable:**\n• Business websites and landing pages\n• Personal portfolios and resume sites\n• E-commerce stores\n• SaaS applications\n• Blogs and content platforms\n• Dashboards and admin panels\n• Educational platforms (like this one!)\n\n**Pro Tips for Better Results:**\n• **Be specific** — \"A modern portfolio with a dark navy background, animated hero section, and a 3-column project grid\" beats \"make me a portfolio\"\n• **Iterate incrementally** — Ask for one change at a time for best results\n• **Reference designs** — \"Make the hero section similar to Apple's product pages\" gives Lovable a clear direction\n• **Use ChatGPT first** — Plan your content and copy with ChatGPT, then paste it into Lovable for the build phase\n\n**ChatGPT + Lovable Workflow:**\n1. Use ChatGPT to plan: sitemap, copy, brand voice, content\n2. Open Lovable and describe your site using the ChatGPT plan\n3. Iterate section by section, pasting ChatGPT-written copy\n4. Add backend features (forms, auth, database) via chat\n5. Publish and share",
      examplePrompt:
        "I'm going to use Lovable AI to build my website. Help me write the perfect Lovable prompt based on my website plan.\n\nBusiness: PixelCraft Studio (freelance graphic design)\nPages: Home, Services, Portfolio, About, Contact, Pricing\nStyle: Modern, clean, dark theme with purple accents\nFeatures needed: Contact form, project gallery with filters, testimonials carousel, pricing table\n\nWrite a detailed Lovable AI prompt that will generate the best possible website, including:\n1. Overall design direction\n2. Each page's content and layout\n3. Interactive features\n4. Mobile responsiveness requirements",
      exampleOutput:
        "**YOUR LOVABLE AI PROMPT:**\n\n\"Build a professional portfolio website for PixelCraft Studio, a freelance graphic design business.\n\n**Design:** Dark navy (#0a0f1c) background with purple (#7c3aed) accents. Use a modern sans-serif font. Clean, spacious layout with subtle animations on scroll.\n\n**Home Page:**\n- Hero section with animated headline 'Design That Makes Startups Stand Out' and a CTA button 'View Our Work'\n- Services overview (4 cards: Logo Design, Brand Identity, Social Media Graphics, Website Mockups)\n- Featured portfolio pieces (3 project cards with hover effects)\n- Testimonials carousel with 3 client quotes\n- CTA banner 'Ready to stand out?'\n\n**Services Page:** Detailed cards for each service with pricing starting points...\n\n**Portfolio Page:** Filterable gallery grid (All, Logos, Branding, Social, Web) with modal previews...\n\n**Contact Page:** Form with Name, Email, Project Type dropdown, Budget range, and Message fields...\n\n**Mobile:** Fully responsive with hamburger menu, stacked layouts, and touch-friendly interactions.\"\n\n**TIPS:** Paste this into Lovable, then iterate — 'Make the hero taller', 'Add a blog page', 'Change purple to teal'. Each change takes seconds.",
      practiceTask:
        "Take your website plan from Lesson 8.1 and rewrite it as a detailed Lovable AI prompt. Include: design direction (colors, fonts, style), layout for each page, interactive features, and content. Then go to lovable.dev and paste it in to build your site. Spend 20 minutes iterating on the design by chatting with Lovable.",
      duration: "15 min",
      realData: {
        title: "AI Website Building Statistics",
        points: [
          "AI-powered website builders reduce development time by 90% — from weeks to hours for a professional-quality site (Forrester Digital Experience Report, 2024).",
          "73% of small businesses that launched a website using AI tools reported breaking even on their investment within the first month (Small Business Web Trends, 2024).",
          "The average cost of a professionally built website is $5,000–$15,000. AI builders achieve comparable quality at 95% lower cost (Web Design Industry Report, 2024).",
          "Websites built with modern frameworks (React, Tailwind) load 2.1x faster than WordPress sites with plugins, improving SEO rankings (Core Web Vitals Study, 2024).",
          "No-code and AI-code platforms are projected to power 70% of new web applications by 2026 (Gartner Low-Code Forecast, 2024).",
        ],
        source: "Forrester, Small Business Web Trends, Web Design Industry Report, Core Web Vitals Study, Gartner 2024",
      },
      caseStudy: {
        title: "Startup Launches Full Website in 3 Hours Using ChatGPT + Lovable",
        scenario: "FreshBite, a meal-prep delivery startup, needed a website before their investor demo in 48 hours. The founder had no coding experience and no budget for a developer. They used ChatGPT to plan the entire site (sitemap, copy for 6 pages, SEO metadata, pricing page content) in 1 hour. Then they pasted the plan into Lovable AI and built the complete website in 2 hours — including a hero section, how-it-works flow, pricing table, testimonials, FAQ, and a working contact form.",
        result: "The website was live in 3 hours total. The investor demo went perfectly — investors commented that the site looked 'professionally built.' Within 2 weeks of launch, the site generated 340 email signups, 89 meal plan orders ($4,450 revenue), and ranked on page 1 for 'meal prep delivery [city].' Total cost: $0 (used free tiers). Comparable agency quote: $8,000.",
        keyTakeaway: "The ChatGPT + Lovable workflow is the fastest path from idea to live website. ChatGPT handles the thinking (planning, copy, strategy) while Lovable handles the building (design, code, deployment). Together they eliminate the two biggest barriers: 'what should I write?' and 'how do I build this?' The key is thorough planning with ChatGPT — the better your content, the better Lovable's output.",
      },
    },
    {
      id: "8-3-deploy-optimize",
      title: "Lesson 8.3 – Deploy, Optimize & Grow",
      image: lesson83Image,
      contentImages: [
        { src: content83Deploy, alt: "Website deployment and optimization checklist covering SEO, mobile, analytics, and performance", caption: "The post-launch checklist: SEO, analytics, mobile optimization, and growth strategies" },
      ],
      description:
        "Building the website is only half the battle. In this lesson, you'll learn how to deploy your site, optimize it for search engines, track performance, and grow your audience — all using ChatGPT as your ongoing assistant.\n\n**Step 1: Deploy Your Website**\nWith Lovable AI, deployment is one click:\n• Click 'Publish' in Lovable to get a live URL\n• Connect a custom domain (e.g., yourbusiness.com)\n• Your site is now live with HTTPS, CDN, and global distribution\n\n**Step 2: SEO Optimization**\nUse ChatGPT to optimize every page:\n• **Title tags** — Under 60 characters, include your main keyword\n• **Meta descriptions** — Under 160 characters, compelling and click-worthy\n• **Header hierarchy** — One H1 per page, logical H2/H3 structure\n• **Image alt text** — Descriptive text for every image\n• **Internal linking** — Connect related pages to each other\n• **Schema markup** — Structured data for rich search results\n\n**Step 3: Mobile Optimization**\nGoogle uses mobile-first indexing — your mobile experience IS your SEO:\n• Test on real devices (not just browser resize)\n• Ensure tap targets are at least 44x44px\n• Check loading speed on 3G/4G connections\n• Verify text is readable without zooming\n\n**Step 4: Analytics Setup**\nAsk ChatGPT: \"What should I track on my [type] website?\" Key metrics:\n• **Traffic sources** — Where are visitors coming from?\n• **Bounce rate** — Are people staying or leaving?\n• **Conversion rate** — Are visitors taking the desired action?\n• **Page speed** — Is your site loading fast enough?\n• **Top pages** — What content performs best?\n\n**Step 5: Ongoing Content Strategy**\nYour website is a living asset. Use ChatGPT to:\n• Write weekly blog posts targeting long-tail keywords\n• Create lead magnets (free downloads, checklists)\n• Draft email newsletter content\n• Generate social media posts that drive traffic back to your site\n• Update existing content to keep it fresh and ranking\n\n**Step 6: Growth Tactics**\n• **Google Business Profile** — Essential for local businesses\n• **Social media linking** — Drive followers to your site\n• **Guest blogging** — Write for other sites with links back\n• **Email list building** — Capture visitors before they leave\n• **A/B testing** — Test headlines, CTAs, and layouts for better conversions",
      examplePrompt:
        "My PixelCraft Studio website is now live. Help me create a complete post-launch optimization plan:\n\n1. Write an SEO checklist I can follow page-by-page\n2. Create a 30-day content calendar (blog posts + social media)\n3. Write 5 blog post outlines with target keywords for my niche (freelance graphic design)\n4. Create an email capture strategy (what lead magnet should I offer?)\n5. List 10 directories/platforms where I should list my website\n6. Write my Google Business Profile description",
      exampleOutput:
        "**SEO CHECKLIST (per page):**\n☐ Title tag under 60 chars with primary keyword\n☐ Meta description under 160 chars with CTA\n☐ One H1 tag matching page intent\n☐ Alt text on all images\n☐ Internal links to 2+ related pages\n☐ External link to 1 authoritative source\n☐ URL is clean and descriptive\n☐ Page loads in under 3 seconds\n\n**30-DAY CONTENT CALENDAR:**\nWeek 1: \"5 Logo Design Trends Dominating 2025\" + 3 Instagram carousel posts\nWeek 2: \"How Much Does a Brand Identity Cost?\" + LinkedIn article...\n\n**LEAD MAGNET:** Free \"Brand Identity Checklist: 25 Things Every Startup Needs\" PDF\n\n**DIRECTORIES:**\n1. Dribbble\n2. Behance\n3. Clutch.co\n4. DesignRush\n5. Yelp (local)\n...\n\n**GOOGLE BUSINESS PROFILE:**\n\"PixelCraft Studio is a freelance graphic design studio specializing in logo design, brand identity, and marketing graphics for startups...\"",
      practiceTask:
        "After building your site with Lovable (Lesson 8.2), complete these post-launch tasks: 1) Run through the SEO checklist for your homepage, 2) Use ChatGPT to write your first blog post, 3) Create a lead magnet idea with ChatGPT, 4) Set up Google Analytics (ask ChatGPT for step-by-step instructions for your platform). Document your results and share your live URL!",
      duration: "10 min",
      realData: {
        title: "Website Optimization & Growth Statistics",
        points: [
          "53% of mobile visitors abandon a site that takes longer than 3 seconds to load (Google Core Web Vitals, 2024).",
          "Websites that blog regularly receive 67% more leads than those that don't (HubSpot Marketing Statistics, 2024).",
          "The first 5 organic search results on Google receive 67.6% of all clicks — SEO optimization is critical (Backlinko CTR Study, 2024).",
          "Businesses with a Google Business Profile are 70% more likely to attract local visits and 50% more likely to be considered for purchases (Google Local Search Report).",
          "A/B testing headlines alone can improve conversion rates by 10-30% — yet only 17% of small business websites use A/B testing (VWO Conversion Report, 2024).",
        ],
        source: "Google Core Web Vitals, HubSpot, Backlinko, Google Local Search, VWO 2024",
      },
      caseStudy: {
        title: "Local Bakery Goes from 0 to 500 Monthly Website Visitors in 60 Days",
        scenario: "Sweet Crumbs Bakery built their website using ChatGPT + Lovable in one afternoon. But after launch, they got almost zero traffic. The owner used ChatGPT to create a post-launch growth plan: optimized all page SEO, wrote 8 blog posts targeting local keywords ('best birthday cakes in [city]', 'custom wedding cakes [city]'), created a Google Business Profile, and posted weekly on Instagram linking back to their site.",
        result: "In 60 days, Sweet Crumbs went from 0 to 500 monthly visitors. 3 blog posts ranked on Google's first page. Google Business Profile drove 150 monthly website clicks. Online cake orders (which didn't exist before) generated $6,200/month in additional revenue — a 31% increase in total sales. The SEO-optimized site now generates more leads than their Instagram account.",
        keyTakeaway: "Building a website is step one. The real ROI comes from the optimization and content strategy that follows. ChatGPT makes this accessible to anyone — you don't need an SEO expert or content team. The bakery's success came from consistency: 2 blog posts per week, daily Google Business updates, and weekly SEO reviews. All content was drafted by ChatGPT and refined by the owner in minutes.",
      },
    },
  ],
  quiz: [
    { id: "q8-1", question: "What should you do BEFORE building a website?", options: ["Start coding immediately", "Plan your sitemap, content, and brand voice using ChatGPT", "Buy the most expensive domain", "Hire a full development team"], correctIndex: 1, explanation: "Planning your sitemap, copy, and content strategy with ChatGPT before building leads to 2.4x better conversion rates." },
    { id: "q8-2", question: "What is Lovable AI?", options: ["A social media platform", "An AI-powered platform that builds websites from natural language descriptions", "A photo editing tool", "A domain registrar"], correctIndex: 1, explanation: "Lovable AI lets you build full-stack web applications by describing what you want in plain English — no coding required." },
    { id: "q8-3", question: "What is the recommended workflow for building a website with AI?", options: ["Code everything from scratch", "Use ChatGPT for planning and content, then Lovable AI for building and deployment", "Only use templates", "Hire a developer and tell them to use AI"], correctIndex: 1, explanation: "The most effective workflow is: ChatGPT handles the thinking (planning, copy, strategy) while Lovable handles the building (design, code, deployment)." },
    { id: "q8-4", question: "What is mobile-first indexing?", options: ["Building mobile apps first", "Google primarily uses the mobile version of your site for ranking and indexing", "Only allowing mobile users", "A phone-only SEO tool"], correctIndex: 1, explanation: "Google uses mobile-first indexing, meaning your mobile site experience directly impacts your search rankings." },
    { id: "q8-5", question: "After launching a website, what should you focus on?", options: ["Nothing — just wait for traffic", "SEO optimization, content creation, and analytics tracking", "Immediately rebuild it", "Only paid advertising"], correctIndex: 1, explanation: "Post-launch success requires ongoing SEO optimization, regular content creation (blogs), analytics tracking, and growth strategies." },
  ],
};

export default module8;
