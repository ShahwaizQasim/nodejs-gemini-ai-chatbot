import { generateResponse } from "../services/geminiServcies.js";

const ChatGemini = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const response = await generateResponse(prompt);

    res.status(200).json({
      success: true,
      response: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

export { ChatGemini };
