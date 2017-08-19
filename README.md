# Berger table (round-robin) generator for tournaments

### Function signature
`bergerTable: (n: number) => [Array<{ round: number, game: number, teamA: number, teamB: number }>];`
`bergerTable<Team>: (teams: Array<Team>) => [Array<{ round: number, game: number, teamA: Team, teamB: Team }>];`

If an array of objects is passed as an argument, the function will not perform any mutations on it. However, the output will contain the same object references that were passed in. Any changes made on them will have the same effect as changing the original `Team` objects.

```
npm install --save berger-table-generator
```
```
import bergerTable from 'berger-table-generator';

console.log(bergerTable(5));
console.log();
console.log(bergerTable(['Bob', 'Joe', 'Anna', 'Maria', 'Jane']));
/*
[ [ { round: 1, game: 1, teamA: 1, teamB: 5 },
    { round: 1, game: 2, teamA: 2, teamB: 4 } ],
  [ { round: 2, game: 1, teamA: 3, teamB: 2 },
    { round: 2, game: 2, teamA: 4, teamB: 1 } ],
  [ { round: 3, game: 1, teamA: 5, teamB: 4 },
    { round: 3, game: 2, teamA: 1, teamB: 3 } ],
  [ { round: 4, game: 1, teamA: 2, teamB: 1 },
    { round: 4, game: 2, teamA: 3, teamB: 5 } ],
  [ { round: 5, game: 1, teamA: 4, teamB: 3 },
    { round: 5, game: 2, teamA: 5, teamB: 2 } ] ]

[ [ { round: 1, game: 1, teamA: 'Bob', teamB: 'Jane' },
    { round: 1, game: 2, teamA: 'Joe', teamB: 'Maria' } ],
  [ { round: 2, game: 1, teamA: 'Anna', teamB: 'Joe' },
    { round: 2, game: 2, teamA: 'Maria', teamB: 'Bob' } ],
  [ { round: 3, game: 1, teamA: 'Jane', teamB: 'Maria' },
    { round: 3, game: 2, teamA: 'Bob', teamB: 'Anna' } ],
  [ { round: 4, game: 1, teamA: 'Joe', teamB: 'Bob' },
    { round: 4, game: 2, teamA: 'Anna', teamB: 'Jane' } ],
  [ { round: 5, game: 1, teamA: 'Maria', teamB: 'Anna' },
    { round: 5, game: 2, teamA: 'Jane', teamB: 'Joe' } ] ]
*/
```