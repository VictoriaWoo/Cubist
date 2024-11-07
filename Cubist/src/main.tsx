import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Timer from './Timer.tsx'
import './styles.css'

interface AppState {
  time: number;
  timer: number | undefined;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Timer time={0} />
  </StrictMode>,
)
