import { useEffect } from "react";

useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.code === "Space") {
            
        }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
}, [])

function Box() {
    return 
}