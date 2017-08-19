// https://en.wikipedia.org/wiki/Round-robin_tournament
function bergerTable(n) {
    const numberOfRounds = n % 2 === 0 ? n-1 : n;
    const gamesPerRound = Math.floor(n/2);
    let count = 0;
    let rounds = Array.from({length: numberOfRounds}).map((_, i) => {
        return Array.from({length: gamesPerRound}).map((_, k) => {
            return {
                round: i+1,
                game: k+1,
                teamA: count++ % n + 1,
                teamB: null
            }
        })
    });
    let index = 0;
    let teams = Array.from({length: n}).map((_, i) => i+1).reverse();
    return rounds.map(round => {
        return round.map(game => {
            let teamB = teams[index++];
            if (index > n-1) {
                index = 0;
                teams.push(teams.shift());
            }
            game.teamB = teamB !== game.teamA ? teamB : teams[index++];
            return game;
        })
    })
}

module.exports = bergerTable;