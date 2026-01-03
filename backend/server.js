const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Scam detection keywords
const SCAM_KEYWORDS = ['urgent', 'otp', 'account blocked', 'transfer money', 'bank officer'];

// Fraud detection logic
function analyzeTranscript(transcript) {
  const lowerTranscript = transcript.toLowerCase();
  const detectedKeywords = SCAM_KEYWORDS.filter(keyword => 
    lowerTranscript.includes(keyword)
  );
  
  const keywordCount = detectedKeywords.length;
  
  if (keywordCount >= 2) {
    return {
      riskLevel: 'High',
      confidence: 0.9,
      message: 'Multiple scam indicators detected'
    };
  } else if (keywordCount === 1) {
    return {
      riskLevel: 'Medium',
      confidence: 0.6,
      message: 'Potential scam indicator found'
    };
  } else {
    return {
      riskLevel: 'Low',
      confidence: 0.1,
      message: 'No scam indicators detected'
    };
  }
}

// API endpoint
app.post('/analyze-audio', (req, res) => {
  const { transcript } = req.body;
  
  if (!transcript) {
    return res.status(400).json({ error: 'Transcript is required' });
  }
  
  const analysis = analyzeTranscript(transcript);
  res.json(analysis);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});