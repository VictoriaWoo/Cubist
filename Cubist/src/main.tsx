import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Timer from './timer.tsx'
import './styles.css'
import Scramble3 from './scramble3'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Timer time={0} />
    <Scramble3 />
  </StrictMode>,
)
