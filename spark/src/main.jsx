import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css';
//import App from './App.jsx'
import SwipePage from './SwipePage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SwipePage />
  </StrictMode>,
)
