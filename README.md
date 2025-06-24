# Gemini 2.0 Flash Chatbot 🚀

A modern web-based chatbot powered by Google's Gemini 2.0 Flash AI model with a beautiful 3D animated background UI.

![Gemini 2.0 Flash Chatbot](https://github.com/danielennis000/gemini-2.0-chatbot/raw/main/screenshots/preview.png)

## 🌟 Features

- **Interactive 3D Background**: Floating geometric shapes with smooth animations
- **Modern UI**: Glass-morphism design with gradient effects and animations
- **Real-time AI Chat**: Powered by Google's Gemini 2.0 Flash model
- **Responsive Design**: Works on desktop and mobile devices
- **Error Handling**: Graceful error handling with loading indicators
- **Mock Mode**: Test without API key using mock responses

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/danielennis000/gemini-2.0-chatbot.git
cd gemini-2.0-chatbot
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure API Key
Create a `.env` file in the root directory based on the `.env.example` template:
```bash
cp .env.example .env
```

Edit the `.env` file and replace the placeholder with your actual Gemini API key:
```
GEMINI_API_KEY=your_actual_api_key_here
```

> 🔑 Get a Gemini API key from: [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)

### 4. Start the application
```bash
npm start
```

### 5. Open in browser
Navigate to `http://localhost:3000` and start chatting with the AI!

## 📁 Project Structure

```
├── server.js         # Express backend server
├── config.js         # API key configuration
├── .env              # Environment variables (API key) - not in repo
├── .env.example      # Template for environment variables
├── package.json      # Node.js dependencies
├── .gitignore        # Git ignore configuration
└── public/
    └── index.html    # Frontend chat interface with 3D UI
```

## 🧪 Testing

You can test the application without a valid Gemini API key:
- The app includes mock responses for testing the interface
- When a proper API key is added, it will switch to real AI responses
- Test the API endpoint directly with: `curl -X POST http://localhost:3000/chat -H "Content-Type: application/json" -d '{"message": "Hello"}'`

## ⚙️ Customization

- Change the port in `server.js` by modifying the `PORT` constant
- Adjust the UI colors and animations in `public/index.html`
- Modify the server's error handling in the `/chat` endpoint
- Add additional middleware or routes as needed

## ⚠️ Important Notes

- Keep your API key secure - never commit the `.env` file to version control
- For production use, consider adding rate limiting and additional security measures
- The default port is 3000, ensure it's not already in use
- Gemini API may be subject to usage limits depending on your API key

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using Node.js, Express, and Google's Gemini AI 