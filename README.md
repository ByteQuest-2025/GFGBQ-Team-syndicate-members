# 🛡️ ScamShield - AI-Powered Real-Time Fraud Detection

<div align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" alt="Status">
  <img src="https://img.shields.io/badge/Version-2.0-blue" alt="Version">
  <img src="https://img.shields.io/badge/License-MIT-yellow" alt="License">
  <img src="https://img.shields.io/badge/Platform-Web%20%7C%20Mobile-lightgrey" alt="Platform">
</div>

## 🚀 Overview

**ScamShield** is an advanced AI-powered system that provides real-time protection against fraud calls. Using sophisticated speech recognition, natural language processing, and multi-factor risk analysis, it helps protect vulnerable users (especially elderly) from financial scams.

### ✨ Key Features

- 🎤 **Real-time Speech Recognition** - Browser-based speech-to-text conversion
- 🧠 **AI-Powered Analysis** - Multi-factor fraud detection algorithm
- 📱 **Elderly-Friendly UI** - Large text, clear colors, simple messaging
- ⚡ **Instant Alerts** - Immediate warnings for high-risk calls
- 📊 **Comprehensive Database** - 25+ real-world scam patterns
- 🕒 **Time-based Analysis** - Detects suspicious calling patterns
- 📞 **Phone Number Verification** - Identifies suspicious number formats

## 🏗️ Architecture

```
Audio Input → Speech-to-Text → Text Normalization → Pattern Matching → Risk Scoring → Alert Generation
```

### Technology Stack

**Frontend:**
- React.js with vanilla JavaScript
- Web Speech API for real-time transcription
- Responsive design with CSS3 animations
- Modern gradient-based UI

**Backend:**
- Node.js with Express.js
- RESTful API architecture
- Multi-factor risk analysis engine
- Real-time fraud detection pipeline

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Modern web browser with microphone access
- Internet connection for API calls

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/scamshield.git
   cd scamshield
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm start
   ```
   Server runs on `http://localhost:5000`

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm start
   ```
   App runs on `http://localhost:3000`

## 🎯 Usage

1. **Start Protection** - Click "Start Protection" to begin monitoring
2. **Grant Permissions** - Allow microphone access when prompted
3. **Real-time Analysis** - System analyzes speech in real-time
4. **Instant Alerts** - Receive immediate warnings for suspicious calls
5. **Stay Safe** - Follow the system's recommendations

## 🔍 API Documentation

### Analyze Text
```http
POST /analyze-text
Content-Type: application/json

{
  "transcript": "Hello, this is urgent regarding your account",
  "phoneNumber": "+91-9876543210"
}
```

**Response:**
```json
{
  "riskLevel": "High",
  "confidence": 0.9,
  "message": "SCAM ALERT: Do not share OTP or bank details",
  "detectedKeywords": ["urgent", "account"],
  "warnings": ["High risk scam detected"],
  "analysis": {
    "textRisk": "High",
    "phoneRisk": 0,
    "timeRisk": 1
  }
}
```

### Report Scam
```http
POST /report-scam
Content-Type: application/json

{
  "phoneNumber": "+91-9876543210",
  "transcript": "Scam call transcript",
  "userLocation": "Mumbai, India"
}
```

## 🛡️ Security Features

- **Multi-factor Analysis** - Text, phone number, and timing analysis
- **Real-world Patterns** - Database of 25+ actual scam techniques
- **Privacy First** - No personal data storage
- **Local Processing** - Speech recognition happens in browser

## 📊 Fraud Detection Patterns

| Category | Examples | Risk Weight |
|----------|----------|-------------|
| Financial | "transfer money", "account blocked" | High (4-5) |
| Credentials | "OTP", "verify details" | High (4-5) |
| Threats | "police case", "arrest warrant" | Critical (5) |
| Impersonation | "bank officer", "income tax" | High (4) |
| Urgency | "urgent", "immediate action" | Medium (3) |

## 🎨 UI/UX Highlights

- **Modern Design** - Gradient backgrounds and smooth animations
- **Accessibility** - Large fonts and high contrast for elderly users
- **Visual Feedback** - Color-coded risk levels (Red/Yellow/Green)
- **Responsive** - Works on desktop and mobile devices
- **Intuitive** - Simple two-button interface

## 🔮 Future Roadmap

- [ ] Mobile app development (Android/iOS)
- [ ] Machine learning model integration
- [ ] Voice pattern analysis
- [ ] Government database integration
- [ ] Multi-language support
- [ ] Community reporting features
- [ ] Smart home integration

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Web Speech API for real-time transcription
- React.js community for excellent documentation
- Fraud research organizations for pattern data
- Beta testers and elderly user feedback

## 📞 Support

For support, email support@scamshield.com or join our [Discord community](https://discord.gg/scamshield).

---

<div align="center">
  <strong>🛡️ Protecting millions from fraud, one call at a time</strong>
</div>