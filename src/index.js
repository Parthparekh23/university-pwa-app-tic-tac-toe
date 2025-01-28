import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import WelcomePage from './WelcomePage';

ReactDOM.render(
  <React.StrictMode>
    <WelcomePage/>
   
  </React.StrictMode>,
  document.getElementById('root')
);
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered", registration.scope);
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}