import React, { useEffect } from "react";
import "./GameOverScreen.css";

const GameOverScreen = ({ winner, resetGame }) => {
  useEffect(() => {
    if (winner) {
      // Native feature: Vibration feedback (if supported)
      if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]); // Vibrate when game ends
      }

      // Native feature: Browser notifications (if permission granted)
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification(`Game Over! ${winner === "Tie" ? "It's a tie!" : `${winner} wins!`}`);
      }

      // Native feature: Play sound effect
      const sound = new Audio("path/to/your/soundfile.mp3"); // Replace with actual sound file
      sound.play();
    }
  }, [winner]);

  // Request Notification permission if not already granted
  const requestNotificationPermission = () => {
    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        console.log(`Notification permission: ${permission}`);
      });
    }
  };

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <div className="game-over-screen">
      <h2>GAME OVER</h2>
      <h2>{winner === "Tie" ? "It's a tie!" : `${winner} WIN!`}</h2>
      <button onClick={resetGame}>PLAY AGAIN </button>
    </div>
  );
};

export default GameOverScreen;
