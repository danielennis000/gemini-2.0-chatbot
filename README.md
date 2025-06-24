# Gemini 2.0 Flash Chatbot

A simple web-based chatbot powered by Google's Gemini 2.0 Flash AI model.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure API Key:**
   - Edit the `.env` file
   - Replace `your_api_key_here` with your actual Gemini API key
   - To get a Gemini API key, visit: https://makersuite.google.com/app/apikey

3. **Start the application:**
   ```bash
   npm start
   ```
   or
   ```bash
   node server.js
   ```

4. **Open in browser:**
   - Navigate to `http://localhost:3000`
   - Start chatting with the AI!

## Features

- Simple and clean web interface
- Real-time chat with Gemini 2.0 Flash AI
- Mock responses when API key is not configured (for testing)
- Responsive design
- Error handling and loading indicators

## File Structure

```
├── server.js          # Express backend server
├── config.js          # API key configuration
├── .env              # Environment variables (API key)
├── package.json      # Node.js dependencies
└── public/
    └── index.html    # Frontend chat interface
```

## Testing

The application includes mock responses when the API key is not properly configured, so you can test the interface immediately. Once you add a valid Gemini API key, it will switch to real AI responses.

## Notes

- The server runs on port 3000 by default
- Make sure your `.env` file is not committed to version control
- The application uses CORS to allow frontend-backend communication 