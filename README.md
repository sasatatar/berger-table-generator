# Berger table (round-robin) generator for tournaments

### Function signature
`bergerTable: (teams: number | Array<any>, useDummy?: boolean, dummy?: any) => [Array<{ round: number, game: number, teamA: any, teamB: any }>];`

If an array of objects is passed as an argument, the function will not perform any mutations on it. However, the output will contain the same object references that were passed in. Any changes made on them will have the same effect as changing the original `Team` objects.
If `useDummy` is set to `true`, empty object or the provided `dummy` value will be used in case the number of teams is odd. Default value is `false`, meaning, teams without a pair will be ommited in each round.

```
npm install --save berger-table-generator
```
```
import bergerTable from 'berger-table-generator';

console.log(bergerTable(5));
console.log();
console.log(bergerTable(['Bob', 'Joe', 'Anna', 'Maria', 'Jane']));
console.log();
console.log(bergerTable(['Bob', 'Joe', 'Anna', 'Maria', 'Jane'], true, 'DUMMY'));
/*
[ [ { round: 1, game: 1, teamA: 0, teamB: 3 },
    { round: 1, game: 2, teamA: 1, teamB: 4 } ],
  [ { round: 2, game: 1, teamA: 0, teamB: 4 },
    { round: 2, game: 2, teamA: 1, teamB: 2 } ],
  [ { round: 3, game: 1, teamA: 4, teamB: 2 },
    { round: 3, game: 2, teamA: 3, teamB: 1 } ],
  [ { round: 4, game: 1, teamA: 0, teamB: 2 },
    { round: 4, game: 2, teamA: 4, teamB: 3 } ],
  [ { round: 5, game: 1, teamA: 0, teamB: 1 },
    { round: 5, game: 2, teamA: 2, teamB: 3 } ] ]

[ [ { round: 1, game: 1, teamA: 'Bob', teamB: 'Maria' },
    { round: 1, game: 2, teamA: 'Joe', teamB: 'Jane' } ],
  [ { round: 2, game: 1, teamA: 'Bob', teamB: 'Jane' },
    { round: 2, game: 2, teamA: 'Joe', teamB: 'Anna' } ],
  [ { round: 3, game: 1, teamA: 'Jane', teamB: 'Anna' },
    { round: 3, game: 2, teamA: 'Maria', teamB: 'Joe' } ],
  [ { round: 4, game: 1, teamA: 'Bob', teamB: 'Anna' },
    { round: 4, game: 2, teamA: 'Jane', teamB: 'Maria' } ],
  [ { round: 5, game: 1, teamA: 'Bob', teamB: 'Joe' },
    { round: 5, game: 2, teamA: 'Anna', teamB: 'Maria' } ] ]

[ [ { round: 1, game: 1, teamA: 'Bob', teamB: 'Maria' },
    { round: 1, game: 2, teamA: 'Joe', teamB: 'Jane' },
    { round: 1, game: 3, teamA: 'Anna', teamB: 'DUMMY' } ],
  [ { round: 2, game: 1, teamA: 'Bob', teamB: 'Jane' },
    { round: 2, game: 2, teamA: 'Maria', teamB: 'DUMMY' },
    { round: 2, game: 3, teamA: 'Joe', teamB: 'Anna' } ],
  [ { round: 3, game: 1, teamA: 'Bob', teamB: 'DUMMY' },
    { round: 3, game: 2, teamA: 'Jane', teamB: 'Anna' },
    { round: 3, game: 3, teamA: 'Maria', teamB: 'Joe' } ],
  [ { round: 4, game: 1, teamA: 'Bob', teamB: 'Anna' },
    { round: 4, game: 2, teamA: 'DUMMY', teamB: 'Joe' },
    { round: 4, game: 3, teamA: 'Jane', teamB: 'Maria' } ],
  [ { round: 5, game: 1, teamA: 'Bob', teamB: 'Joe' },
    { round: 5, game: 2, teamA: 'Anna', teamB: 'Maria' },
    { round: 5, game: 3, teamA: 'DUMMY', teamB: 'Jane' } ] ]
*/
```