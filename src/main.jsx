import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { startFavicon } from './favicon.js'
import './styles/style.css'

const stopFavicon = startFavicon()
// Without this, each hot reload would stack another animation timer.
import.meta.hot?.dispose(stopFavicon)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
