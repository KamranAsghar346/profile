import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "AI Engineer (Computer Vision + Generative AI)",
    company: "StreetApp",
    startDate: "Nov 2024",
    isCurrentJob: true,
    location: "Lahore, Pakistan",
    description: [
      "Developed an AI-driven ad creation system using vision models for product identification",
      "Integrated OpenAI and Claude AI with vector database for enhanced product recognition",
      "Automated text generation and optimized resale price suggestions",
      "Built streamlined selling experience enabling instant ad generation from product images",
    ],
  },
  {
    designation: "Backend Engineer",
    company: "CAPA",
    startDate: "Aug 2024",
    isCurrentJob: true,
    location: "Lahore, Pakistan",
    description: [
      "Built and deployed robust platform for automotive dealerships",
      "Optimized operational efficiency through process automation",
      "Enhanced dealership profitability through systematic improvements",
    ],
  },
  {
    designation: "AI Engineer (Generative AI)",
    company: "BreastAware (MVP)",
    startDate: "Aug 2024",
    endDate: "Nov 2024",
    isCurrentJob: false,
    location: "Lahore, Pakistan",
    description: [
      "Developed FastAPI-based diagnostic system using OpenAI models and Pinecone vector database",
      "Implemented NLP for symptom analysis and AI-driven risk predictions",
      "Created breast cancer risk assessment system based on patient symptoms",
    ],
  },
  {
    designation: "AI Engineer (Generative AI + TTS + STT)",
    company: "DeftGPT",
    startDate: "Jun 2023",
    endDate: "Aug 2024",
    isCurrentJob: false,
    location: "Lahore, Pakistan",
    description: [
      "Integrated multiple AI models including Stability AI, DALL·E, and various GPT models",
      "Implemented Anthropic's Claude, Mistral, Google's PaLM, and Llama models",
      "Enhanced platform's language understanding and generation capabilities",
    ],
  },
  {
    designation: "AI Engineer (Computer Vision + Generative AI)",
    company: "CHEX.AI",
    startDate: "Mar 2022",
    endDate: "Jun 2023",
    isCurrentJob: false,
    location: "Lahore, Pakistan",
    description: [
      "Developed AI-powered vehicle inspection system using YOLOv8",
      "Implemented damage detection for scratches and broken mirrors",
      "Integrated OCR technology for license plate number extraction",
      "Enhanced automated inspection processes through AI implementation",
    ],
  },
  
];

export default experiences;
