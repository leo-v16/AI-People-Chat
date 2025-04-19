import { GoogleGenAI } from "@google/genai";
import { $ADAM, $NATASHA } from './model.character.config.mjs'
const AI = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });


const botConifg = async (history) => {
    const adam = AI.chats.create({
        model: "gemini-2.0-flash",
        config: {
            maxOutputTokens: 100,
            temperature: 0.1,
            systemInstruction:{ parts: [{ text: $ADAM }],}
        },
        history: history
    })
    return adam
}

export const sendAdam = async (history, message) => {
    const chat = await botConifg(history)
    const response = await chat.sendMessage({
        message: message
    })
    // console.log('WORKING', history, response.text);
    return response.text
}