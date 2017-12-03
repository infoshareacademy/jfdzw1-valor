let scoreboard = [];

initScoreboard();

function initScoreboard() {
  insertPlayer(createPlayer("Nebula", 5000));
  insertPlayer(createPlayer("Punisher", 4000));
  insertPlayer(createPlayer("Spider", 166));
  insertPlayer(createPlayer("Dardevil", 3000));
  insertPlayer(createPlayer("Jesica", 4000));
  insertPlayer(createPlayer("Groot", 3500));
  console.log(scoreboard);
}

function createPlayer(name, score) {
  return {
    name: name,
    score: score
  }
}

function insertPlayer(player) {
  let i = 0;
  for (i; i < scoreboard.length; i++) {
    if (player.score > scoreboard[i].score) {
      scoreboard.splice(i, 0, player);
      if (scoreboard.length > 5) {
        scoreboard.pop();
      }
      return;
    }
  }
  scoreboard.splice(i + 1, 0, player);
  if (scoreboard.length > 5) {
    scoreboard.pop();
  }
}

function getResults() {

}