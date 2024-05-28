import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Framework7 from 'framework7/lite-bundle';
import Framework7React from 'framework7-react';
Framework7.use(Framework7React);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
