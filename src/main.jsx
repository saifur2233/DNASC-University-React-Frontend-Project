import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/css/bootstrap.min.css';
import './assets/css/fontawesome.css';
import './assets/css/animate.css';
import './assets/css/swiper.min.css';
import './assets/css/odometer.css';
import './assets/css/magnific-popup.css';
import './assets/css/recoleta-font.css';
import './assets/css/nice-select.css';
import './assets/css/main.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
