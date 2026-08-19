import ai from "../config/gemini.js";

export const generateResponse = async (prompt) => {
 try {
   const response = await ai.models.generateContent({
     model: "gemini-3.6-flash",
     contents: prompt,
   });
  return response.text;

 } catch (error) {
  console.log("Gemini Api Error", error);  
 }
};