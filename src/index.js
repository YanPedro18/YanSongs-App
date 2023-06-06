import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const teste2 = document.querySelector(".cards")
// const teste = document.createElement("p");
// teste.textContent = "olha"


// teste2.insertAdjacentHTML("beforeend", teste)