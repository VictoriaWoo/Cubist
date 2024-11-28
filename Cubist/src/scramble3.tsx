// import * as React from "react";

const edges = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const corners = [0, 1, 2 ,3, 4, 5, 6, 7];

const moves = [ 'U', 'U\'', 'U2', 'D', 'D\'', 'D2', 'L', 'L\'', 'L2', 'R', 'R\'', 'R2', 'F', 'F\'', 'F2', 'B', 'B\'', 'B2',];

function getRandomMove(): string {
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

console.log(getRandomMove());