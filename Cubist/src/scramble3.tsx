import React, { useState, useEffect, useRef } from 'react';

const moves = ['U', 'U\'', 'U2', 'D', 'D\'', 'D2', 'L', 'L\'', 'L2', 'R', 'R\'', 'R2', 'F', 'F\'', 'F2', 'B', 'B\'', 'B2',];

function getRandomMove(): string {
  return moves[Math.floor(Math.random() * moves.length)];
}

function getFace(move: string): string {
  return move.charAt(0);
}

function generateScramble(length: number): string {
  let scramble = '';
  let lastMove: string | null = null;

  for (let i = 0; i < length; i++) {
    let move: string;

    do {
      move = getRandomMove();
    } while (lastMove && getFace(move) === getFace(lastMove));

    scramble += move + ' ';
    lastMove = move;
  }

  return scramble;
}

function Scramble3 ({
  scrambleCreated,
  setScrambleCreated,
}: {
  scrambleCreated: string;
  setScrambleCreated: React.Dispatch<React.SetStateAction<string>>  
}) {

  const [toggle, setToggle] = useState<boolean>(true);
  const prevToggleRef = useRef<boolean>(toggle);

  useEffect(() => {
    const initialScramble = generateScramble(20);
    setScrambleCreated(initialScramble);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        if (prevToggleRef.current == false) {
          const newScramble = generateScramble(20);
          setScrambleCreated(newScramble);
        }
        prevToggleRef.current = !prevToggleRef.current;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggle]);

  return (
    <div className='scramble'>
      <p>{scrambleCreated}</p>
    </div>
  );
};

export default Scramble3;