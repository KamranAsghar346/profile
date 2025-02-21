import { IProjectItem, ProjectType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "streetapp-ai",
    title: "StreetApp - AI-Powered Ad Creation System",
    description:
      "Developed an advanced AI-driven platform that automates product listing creation. The system uses computer vision models for product identification, integrates with OpenAI and Claude for intelligent text generation, and features a vector database for enhanced product recognition and pricing optimization.",
    icon: "/skills/Dall-e_3_(jan_'24)_artificial_intelligence_icon.png",
    projectType: ProjectType.Professional,
    url: "https://streetapp.com/",
    tags: [
      "Computer Vision",
      "OpenAI",
      "Claude AI",
      "Vector Database",
      "Product Recognition",
      "Automated Text Generation",
    ],
  },
  {
    id: "capa-automotive",
    title: "CAPA - Automotive Dealership Platform",
    description:
      "Built a comprehensive platform for automotive dealerships that streamlines operations and enhances profitability. The system features automated processes for inventory management, order processing, and dealership operations optimization.",
    icon: "/skills/nextjs.png",
    projectType: ProjectType.Professional,
    url: "https://ordering.coastlineeps.com/",
    tags: [
      "Backend Development",
      "Process Automation",
      "Inventory Management",
      "Order Processing",
      "Dealership Operations",
    ],
  },
  {
    id: "breastaware-ai",
    title: "BreastAware - AI Diagnostic System",
    description:
      "Developed a FastAPI-based diagnostic system that leverages OpenAI models and Pinecone vector database for breast cancer risk assessment. The system analyzes patient symptoms using advanced NLP techniques to provide AI-driven risk predictions.",
    icon: "/skills/Dall-e_3_(jan_'24)_artificial_intelligence_icon.png",
    projectType: ProjectType.Professional,
    tags: [
      "FastAPI",
      "OpenAI",
      "Pinecone",
      "Vector Database",
      "NLP",
      "Healthcare AI",
    ],
  },
  {
    id: "deftgpt",
    title: "DeftGPT - Multi-Model AI Platform",
    description:
      "Created a versatile AI platform integrating multiple state-of-the-art language and image generation models. Features include Stability AI's image generation, DALL·E integration, and various LLMs including Claude, Mistral, PaLM, and Llama, with text-to-speech and speech-to-text capabilities.",
    icon: "/skills/Dall-e_3_(jan_'24)_artificial_intelligence_icon.png",
    projectType: ProjectType.Professional,
    url: "https://deftgpt.com/",
    tags: [
      "LLM Integration",
      "DALL·E",
      "Claude AI",
      "Mistral",
      "PaLM",
      "Llama",
      "TTS/STT",
    ],
  },
  {
    id: "chex-ai",
    title: "Chex.AI - Vehicle Inspection System",
    description:
      "Engineered an AI-powered vehicle inspection system utilizing YOLOv8 for damage detection. The system can identify various types of vehicle damage including scratches and broken mirrors, and features OCR technology for automated license plate recognition.",
    icon: "/skills/Dall-e_3_(jan_'24)_artificial_intelligence_icon.png",
    projectType: ProjectType.Professional,
    url: "https://www.chex.ai/",
    tags: [
      "YOLOv8",
      "Computer Vision",
      "OCR",
      "Damage Detection",
      "Vehicle Inspection",
      "AI Implementation",
    ],
  },
];

export default projects;
