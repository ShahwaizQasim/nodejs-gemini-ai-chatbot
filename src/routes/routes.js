import express from 'express'
import { ChatGemini } from '../controllers/ChatWithGemini.js';

const router = express.Router();
router.post('/chat/ai', ChatGemini)

export default router; 