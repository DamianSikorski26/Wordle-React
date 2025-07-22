import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Wordle from './component/wordle/wordle'

const mots = [
  "arbre",
  "chat",
  "voiture",
  "maison",
  "ordinateur",
  "nuage",
  "musique",
  "livre",
  "fleur",
  "lumière"
];


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    
  // </StrictMode>,
  <Wordle listeMots = {mots}/>
)
