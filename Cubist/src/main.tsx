import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Timer from './Timer.tsx'
import './styles.css'
import getRandomMove from './scramble3'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Timer time={0} />
    <Scramble3 />
  </StrictMode>,
)
