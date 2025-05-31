import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173", // 👈 Replace with your dev server URL
    "X-Title": "Movie Recommender App (Dev)", // 👈 Any name for your project
  },
});

export default openai;
