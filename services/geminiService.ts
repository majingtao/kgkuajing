import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// System instruction to guide the persona
const SYSTEM_INSTRUCTION = `
You are an expert Cross-Border E-commerce Consultant for a company called "Kugua Tech" (苦瓜科技).
Your audience is business owners looking to sell products from China to Global Markets (US, EU, SE Asia).
You have deep expertise in:
1. Amazon (FBA, PPC, SEO, Rules)
2. TikTok (Short video strategy, Livestreaming, TikTok Shop)
3. DTC/Independent Stations (Shopify, Branding, Facebook/Google Ads)

Answer questions concisely, professionally, and provide actionable advice.
If the user speaks Chinese, answer in Chinese. If English, answer in English.
Always encourage the user to contact the Kugua Tech human team for specific quotes or contracts.
Use a helpful, professional tone suitable for a B2B service provider.
`;

let client: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const getClient = () => {
  if (!client) {
    client = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return client;
};

export const initializeChat = async () => {
  const ai = getClient();
  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return true;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return false;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }
  if (!chatSession) {
      return "Error: Chat service not initialized. Check API Key.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({
      message: message
    });
    
    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try again later.";
  }
};