const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { geminiApiKey } = require('./config');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    // Check if API key is properly configured
    if (!geminiApiKey || geminiApiKey === 'your_api_key_here') {
      // Provide a mock response for testing
      const mockReplies = [
        `I received your message: "${message}". This is a mock response because the Gemini API key is not configured yet.`,
        `Hello! I'm a demo chatbot. You said: "${message}". Please configure your Gemini API key in the .env file to enable real AI responses.`,
        `Thanks for testing the chatbot! Your message was: "${message}". To get real AI responses, please add your Gemini API key to the .env file.`
      ];
      const reply = mockReplies[Math.floor(Math.random() * mockReplies.length)];
      res.json({ reply });
      return;
    }
    
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent',
      {
        contents: [{ parts: [{ text: message }] }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': geminiApiKey
        }
      }
    );
    
    const reply = response.data.candidates[0].content.parts[0].text;
    res.json({ reply });
  } catch (error) {
    console.error('Error calling Gemini API:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get response from AI' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 