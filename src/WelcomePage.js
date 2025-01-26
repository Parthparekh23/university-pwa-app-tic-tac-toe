import React, { useState } from 'react';
import App from './App'; // Import your App component
import './WelcomePage.css'; // Import the new CSS file for styling

const WelcomePage = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true); // Change state to show the game screen
  };

  return (
    <div className="welcome-page">
      {!gameStarted ? (
        <div className="welcome-content">
          <h1 className="welcome-title">Tic-Tac-Toe</h1>
          <button className="start-btn" onClick={startGame}>START GAME</button>
        </div>
      ) : (
        <App /> // Render the App component (game screen)
      )}
    </div>
  );
};

export default WelcomePage;
