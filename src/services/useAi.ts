import { GoogleGenerativeAI } from '@google/generative-ai';

export const useAi = () => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    return {
        genAI,
        model
    }
}