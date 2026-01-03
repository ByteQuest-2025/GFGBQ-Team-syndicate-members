import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [riskLevel, setRiskLevel] = useState('Low');
  const [confidence, setConfidence] = useState(0);
  const [message, setMessage] = useState('System ready');
  const intervalRef = useRef(null);

  // Simulated speech-to-text phrases
  const simulatedPhrases = [
    'Hello, this is regarding your account',
    'Your account has been blocked urgent action required',
    'Please share your OTP immediately',
    'I am calling from the bank officer department',
    'You need to transfer money to secure your account',
    'This is a routine security check',
    'Please verify your details'
  ];

  // Analyze transcript with backend
  const analyzeAudio = async (text) => {
    try {
      const response = await fetch('http://localhost:5000/analyze-audio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transcript: text })
      });
      const result = await response.json();
      setRiskLevel(result.riskLevel);
      setConfidence(result.confidence);
      setMessage(result.message);
    } catch (error) {
      setMessage('Connection error');
    }
  };

  // Start monitoring
  const startMonitoring = async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsMonitoring(true);
      setMessage('Monitoring active...');
      
      // Simulate speech-to-text every 3 seconds
      intervalRef.current = setInterval(() => {
        const randomPhrase = simulatedPhrases[Math.floor(Math.random() * simulatedPhrases.length)];
        const newTranscript = transcript + ' ' + randomPhrase;
        setTranscript(newTranscript);
        analyzeAudio(newTranscript);
      }, 3000);
    } catch (error) {
      setMessage('Microphone access denied');
    }
  };

  // Stop monitoring
  const stopMonitoring = () => {
    setIsMonitoring(false);
    setMessage('Monitoring stopped');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Styles
  const styles = {
    container: {
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '28px',
      fontWeight: 'bold'
    },
    controls: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '30px'
    },
    button: {
      padding: '12px 24px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold'
    },
    startButton: {
      backgroundColor: '#4CAF50',
      color: 'white'
    },
    stopButton: {
      backgroundColor: '#f44336',
      color: 'white'
    },
    panel: {
      backgroundColor: '#2d2d2d',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '20px',
      border: '1px solid #444'
    },
    transcript: {
      backgroundColor: '#333',
      padding: '15px',
      borderRadius: '8px',
      minHeight: '100px',
      maxHeight: '200px',
      overflow: 'auto',
      fontSize: '14px',
      lineHeight: '1.5'
    },
    riskIndicator: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '15px'
    },
    riskBadge: {
      padding: '8px 16px',
      borderRadius: '20px',
      fontWeight: 'bold',
      fontSize: '14px'
    },
    lowRisk: {
      backgroundColor: '#4CAF50',
      color: 'white'
    },
    mediumRisk: {
      backgroundColor: '#FF9800',
      color: 'white'
    },
    highRisk: {
      backgroundColor: '#f44336',
      color: 'white'
    },
    warning: {
      backgroundColor: '#f44336',
      color: 'white',
      padding: '15px',
      borderRadius: '8px',
      marginBottom: '20px',
      fontSize: '16px',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    status: {
      textAlign: 'center',
      fontSize: '14px',
      color: '#aaa'
    }
  };

  const getRiskStyle = () => {
    switch (riskLevel) {
      case 'High': return { ...styles.riskBadge, ...styles.highRisk };
      case 'Medium': return { ...styles.riskBadge, ...styles.mediumRisk };
      default: return { ...styles.riskBadge, ...styles.lowRisk };
    }
  };

  return React.createElement('div', { style: styles.container }, [
    React.createElement('h1', { key: 'header', style: styles.header }, 'Real-Time Scam Call Detection'),
    
    React.createElement('div', { key: 'controls', style: styles.controls }, [
      React.createElement('button', {
        key: 'start',
        style: { ...styles.button, ...styles.startButton },
        onClick: startMonitoring,
        disabled: isMonitoring
      }, 'Start Monitoring'),
      React.createElement('button', {
        key: 'stop',
        style: { ...styles.button, ...styles.stopButton },
        onClick: stopMonitoring,
        disabled: !isMonitoring
      }, 'Stop Monitoring')
    ]),

    (riskLevel === 'Medium' || riskLevel === 'High') && React.createElement('div', {
      key: 'warning',
      style: styles.warning
    }, '⚠ Possible scam detected. Do not share sensitive information.'),

    React.createElement('div', { key: 'risk-panel', style: styles.panel }, [
      React.createElement('h3', { key: 'risk-title' }, 'Risk Assessment'),
      React.createElement('div', { key: 'risk-indicator', style: styles.riskIndicator }, [
        React.createElement('span', { key: 'risk-badge', style: getRiskStyle() }, `${riskLevel} Risk`),
        React.createElement('span', { key: 'confidence' }, `Confidence: ${Math.round(confidence * 100)}%`)
      ]),
      React.createElement('p', { key: 'message' }, message)
    ]),

    React.createElement('div', { key: 'transcript-panel', style: styles.panel }, [
      React.createElement('h3', { key: 'transcript-title' }, 'Live Transcript'),
      React.createElement('div', { key: 'transcript-content', style: styles.transcript }, 
        transcript || 'Transcript will appear here when monitoring starts...'
      )
    ]),

    React.createElement('div', { key: 'status', style: styles.status }, 
      `System Status: ${isMonitoring ? 'Active' : 'Inactive'}`
    )
  ]);
};

export default App;