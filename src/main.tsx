import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/global.css'
import PersonProvider from './contexts/PersonContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <PersonProvider>
        <App />
      </PersonProvider>
  </React.StrictMode>
)
