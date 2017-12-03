let scoreboard = [];

initScoreboard();

function initScoreboard() {
  scoreboard.push(createPlayer("Nebula", 5000));
  scoreboard.push(createPlayer("Punisher", 4000));
  scoreboard.push(createPlayer("Dardevil", 3000));
  scoreboard.push(createPlayer("Jesica", 2000));
  scoreboard.push(createPlayer("Groot", 1000));
}

function createPlayer(name, score) {
  return {
    name: name,
    score: score
  }
}

function insertPlayer(player) {
  for (let i = 0; i < scoreboard.length; i++) {
    if (player.score > scoreboard[i].score) {
      scoreboard.splice(i, 0, player);
      scoreboard.pop();
      return;
    }
  }
}

function getResults() {

}