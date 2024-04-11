import React from 'react';
import ReactDOM from 'react-dom/client';
import { AddProvider } from './context';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddProvider>
      <App />
    </AddProvider>
  </React.StrictMode>
);