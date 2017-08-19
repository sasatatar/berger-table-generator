# Berger table (round-robin) generator for tournaments

```
npm install --save berger-table-generator
```
```
import {bergerTable} from 'berger-table-generator';

let rounds = bergerTable(7);

console.log(rounds);
/*
[ [ { round: 1, game: 1, teamA: 1, teamB: 7 },
    { round: 1, game: 2, teamA: 2, teamB: 6 },
    { round: 1, game: 3, teamA: 3, teamB: 5 } ],
  [ { round: 2, game: 1, teamA: 4, teamB: 3 },
    { round: 2, game: 2, teamA: 5, teamB: 2 },
    { round: 2, game: 3, teamA: 6, teamB: 1 } ],
  [ { round: 3, game: 1, teamA: 7, teamB: 6 },
    { round: 3, game: 2, teamA: 1, teamB: 5 },
    { round: 3, game: 3, teamA: 2, teamB: 4 } ],
  [ { round: 4, game: 1, teamA: 3, teamB: 2 },
    { round: 4, game: 2, teamA: 4, teamB: 1 },
    { round: 4, game: 3, teamA: 5, teamB: 7 } ],
  [ { round: 5, game: 1, teamA: 6, teamB: 5 },
    { round: 5, game: 2, teamA: 7, teamB: 4 },
    { round: 5, game: 3, teamA: 1, teamB: 3 } ],
  [ { round: 6, game: 1, teamA: 2, teamB: 1 },
    { round: 6, game: 2, teamA: 3, teamB: 7 },
    { round: 6, game: 3, teamA: 4, teamB: 6 } ],
  [ { round: 7, game: 1, teamA: 5, teamB: 4 },
    { round: 7, game: 2, teamA: 6, teamB: 3 },
    { round: 7, game: 3, teamA: 7, teamB: 2 } ] ]
*/
```