# Real-Time Audio Fraud Detection

## Setup Instructions

### Backend Setup
```bash
cd backend
npm install
npm start
```
Server runs on http://localhost:5000

### Frontend Setup
```bash
cd frontend
npm install
npm start
```
App runs on http://localhost:3000

## Features
- Real-time audio monitoring simulation
- Scam keyword detection
- Risk level assessment (Low/Medium/High)
- Visual alerts for potential scams
- Dark theme UI with inline styles

## API Endpoint
POST /analyze-audio
Body: { "transcript": "string" }
Response: { "riskLevel": "Low|Medium|High", "confidence": number, "message": "string" }