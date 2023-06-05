import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RemeshRoot } from 'remesh-react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RemeshRoot>
      <App />
    </RemeshRoot>
  </React.StrictMode>,
)
