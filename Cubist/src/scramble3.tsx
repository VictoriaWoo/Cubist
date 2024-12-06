import React, { useState, useEffect } from 'react';
import kociemba from 'kociemba';
import { Cube } from 'rubiks-cube-solver';

const moves = ['U', 'U\'', 'U2', 'D', 'D\'', 'D2', 'L', 'L\'', 'L2', 'R', 'R\'', 'R2', 'F', 'F\'', 'F2', 'B', 'B\'', 'B2',];

function getRandomMove(): string {
  return moves[Math.floor(Math.random() * moves.length)];
}

function getFace(move: string): string {
  return move.charAt(0);
}

function applyMove(cube: string, move: string): string {
  const cubeInstance = new Cube(cube);
  cubeInstance.move(move);
  return cubeInstance.getState();
}

function solveCube(cubeState: string): string {
  try {
    return kociemba.solve(cubeState);
  } catch (error) {
    console.error('Error solving cube:', error);
    return '';
  }
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

const Scramble3: React.FC = () => {
  const [scramble, setScramble] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        setToggle((prevToggle) => !prevToggle);
        if (!toggle) {
          const newScramble = generateScramble(20);
          setScramble(newScramble);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggle]);

  return (
    <div>
      <p>{scramble}</p>
    </div>
  );
};

export default Scramble3;