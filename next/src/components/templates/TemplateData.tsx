import {
  FaAppleAlt,
  FaBlog,
  FaBook,
  FaBookOpen,
  FaBookReader,
  FaCalendarAlt,
  FaChartLine,
  FaDumbbell,
  FaFileAlt,
  FaGamepad,
  FaGraduationCap,
  FaHashtag,
  FaLaptopCode,
  FaMoneyBillWave,
  FaPalette,
  FaPlaneDeparture,
  FaRegEnvelope,
  FaRegNewspaper,
  FaShoppingCart,
  FaStarAndCrescent,
} from "react-icons/fa";

export const TEMPLATE_DATA: TemplateModel[] = [
  {
    name: "Software Engineer",
    icon: <FaLaptopCode />,
    category: "Technology and Engineering",
    description: "Develop and maintain software applications",
    promptTemplate:
      "Design and implement a software application that manages a library's inventory. The application should allow users to check out books, return books, and search for books by title or author. Include a user-friendly interface and ensure the application is secure and efficient.",
    placeholder: "Library Inventory Management",
  },
  {
    name: "Market Researcher",
    icon: <FaBookReader />,
    category: "Business and Professional",
    description: "Generate a comprehensive market analysis report",
    promptTemplate:
      "Compile a comprehensive report on the SaaS market, touching on its key players, growth trends, and future predictions. Include recent research findings and statistics.",
    placeholder: "SaaS Market",
  },
  {
    name: "Brand Analyst",
    icon: <FaShoppingCart />,
    category: "Business and Professional",
    description: "Evaluate a company's brand performance and market position",
    promptTemplate:
      "Provide an in-depth analysis of the Microsoft brand, assessing its current market status, consumer perception, competitive positioning, and future outlook. Include potential strategies for growth.",
    placeholder: "Microsoft",
  },
  {
    name: "Industry Analyst",
    icon: <FaBook />,
    category: "Business and Professional",
    description:
      "Present a comprehensive review of a tech industry, covering key trends, players, and future predictions",
    promptTemplate:
      "Conduct an in-depth examination of the AI industry, detailing its current market status, emerging trends, significant challenges, and opportunities. Make sure to include data and statistics, a list of major players, a forecast for the industry, and how current events or developments could influence it.",
    placeholder: "AI Industry",
  },
  {
    name: "Social Media Strategist",
    icon: <FaHashtag />,
    category: "Marketing and Social",
    description: "Create engaging captions and hashtags for your company's social media posts",
    promptTemplate:
      "Create an engaging caption and appropriate hashtags for a social media post announcing the launch of our new product.",
    placeholder: "Product Launch",
  },
  {
    name: "PR Relations",
    icon: <FaRegEnvelope />,
    category: "Business and Professional",
    description: "Compose a concise and detailed business email",
    promptTemplate:
      "Compose a clear and succinct email to update the team about the progress of our current project, discussing completed milestones, forthcoming tasks, and any challenges encountered.",
    placeholder: "Project Update",
  },
  {
    name: "Marketing Strategist",
    icon: <FaChartLine />,
    category: "Business and Professional",
    description: "Design a comprehensive marketing strategy for your business",
    promptTemplate:
      "Develop a 6-month marketing plan for our Tech Startup. Include marketing objectives, target audience analysis, promotional strategies, budget allocation, timelines, and performance indicators.",
    placeholder: "Tech Startup",
  },
  {
    name: "Financial Planner",
    icon: <FaMoneyBillWave />,
    category: "Business and Professional",
    description: "Prepare a detailed budget for a business project",
    promptTemplate:
      "Create a detailed budget for our upcoming product launch, including expenses for marketing, production, logistics, and any contingencies.",
    placeholder: "Product Launch",
  },
  {
    name: "Tech News Reporter",
    icon: <FaRegNewspaper />,
    category: "Other",
    description: "Author a detailed news article on a selected tech topic",
    promptTemplate:
      "Write a detailed news article discussing recent advancements in AI, including their implications for businesses and the economy.",
    placeholder: "AI Advancements",
  },
  {
    name: "Event Coordinator",
    icon: <FaCalendarAlt />,
    category: "Other",
    description: "Organize a detailed schedule for your forthcoming business event",
    promptTemplate:
      "Plan a detailed schedule for our upcoming business conference, including potential speakers to invite and restaurants for client meetings.",
    placeholder: "Business Conference",
  },
  {
    name: "Business Blogger",
    icon: <FaBlog />,
    category: "Business Execution",
    description: "Write a blog post on a selected business topic",
    promptTemplate:
      "Write an engaging blog post about the future of remote work, discussing recent trends, challenges, and opportunities.",
    placeholder: "Remote Work",
  },
];

export interface TemplateModel {
  name: string;
  icon: JSX.Element;
  category: string;
  description: string;
  promptTemplate: string;
  placeholder: string;
}
