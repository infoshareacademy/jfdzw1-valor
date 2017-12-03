let scoreboard = [];

function initScoreboard() {

}

function createPlayer(name, score) {
  let player = {
    name: name,
    score: score
  }
}

function insertPlayer(player) {
  for (let i = 0; i < 5; i++) {
    if (player.score > scoreboard[i].score) {
      scoreboard.splice(i, 0, player);
      scoreboard.pop();
    }
  }
}

function getResults() {

}
