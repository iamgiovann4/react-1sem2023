import React from 'react';
import ReactDOM from 'react-dom/client'; //biblioteca q o react forneceu
import './index.css';
import App from './App'; //importei o componente

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <div>Olá Mundo</div> */}
    <App />
  </React.StrictMode>
);