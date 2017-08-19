// https://en.wikipedia.org/wiki/Round-robin_tournament
function bergerTable(teams) {
    const isArray = Array.isArray(teams);
    if (isArray) 
        teams = [...teams]; // copy array to avoid side effects
    const n = isArray ? teams.length : teams;

    const numberOfRounds = n % 2 === 0 ? n-1 : n;
    const gamesPerRound = Math.floor(n/2);
    let count = 0;
    let rounds = Array.from({length: numberOfRounds}).map((_, i) => {
        return Array.from({length: gamesPerRound}).map((_, k) => {
            return {
                round: i+1,
                game: k+1,
                teamA: isArray ? teams[count++ % n] : count++ % n + 1,
                teamB: null
            }
        })
    });
    let index = 0;
    let players = isArray ? teams : Array.from({length: n}).map((_, i) => i+1);
    players.reverse();
    return rounds.map(round => {
        return round.map(game => {
            let teamB = players[index++];
            if (index > n-1) {
                index = 0;
                players.push(players.shift());
            }
            game.teamB = teamB !== game.teamA ? teamB : players[index++];
            return game;
        })
    })
}

module.exports = bergerTable;