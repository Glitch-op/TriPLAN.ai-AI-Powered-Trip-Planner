import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: import.meta.env.VITE_GEMINI_API_KEY },);

async function main(Prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: Prompt,
    config: {
      thinkingConfig: {
        thinkingBudget: 0, // Disables thinking
      },
      temperature: 0.2,
      responseMimeType: "application/json",
    }
  });
  return (response.text);
}

export default main;