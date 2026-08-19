import { GoogleGenAI } from "@google/genai";
import { ENV } from "./constant.js";

const ai = new GoogleGenAI({
  apiKey: ENV.API_KEY,
});

export default ai;
