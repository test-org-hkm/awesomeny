import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedApp, setSelectedApp] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const rideApps = [
    { id: 'namma-yatri', name: 'Namma Yatri', color: '#FF6B6B', emoji: '🚗' },
    { id: 'uber', name: 'Uber', color: '#000000', emoji: '🚕' },
    { id: 'ola', name: 'Ola', color: '#FF6B6B', emoji: '🏍️' },
    { id: 'rapido', name: 'Rapido', color: '#FF6B6B', emoji: '🛵' }
  ];

  const handleSelection = (appId) => {
    setSelectedApp(appId);
    setIsAnimating(true);
    setTimeout(() => {
      setShowMessage(true);
      setIsAnimating(false);
    }, 1000);
  };

  const getFunMessage = () => {
    const messages = [
      "We knew Namma Yatri is the best! Thanks for believing in us! 🚗✨",
      "Smart choice! Namma Yatri is the way to go! 🎉",
      "You've got great taste! Namma Yatri rocks! 🚀",
      "Another satisfied Namma Yatri fan! Welcome aboard! 🎊",
      "Great minds think alike! Namma Yatri is indeed the best! 🌟",
      "You've made the right choice! Namma Yatri is the future! 🎯"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">🚗 Which Ride-Hailing App Do You Prefer? 🚗</h1>
        <div className="app-selection">
          {rideApps.map((app) => (
            <button
              key={app.id}
              className={`app-button ${selectedApp === app.id ? 'selected' : ''} ${isAnimating ? 'animating' : ''}`}
              style={{ backgroundColor: app.color }}
              onClick={() => handleSelection(app.id)}
            >
              <span className="emoji">{app.emoji}</span>
              {app.name}
            </button>
          ))}
        </div>
        
        {showMessage && (
          <div className="message-container">
            <h2 className="message">{getFunMessage()}</h2>
            <div className="celebration">
              🎉 🎊 🎈 🎉
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App; 