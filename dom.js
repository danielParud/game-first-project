const playBtn = document.getElementById("play-btn");
const game = document.getElementById("game");
const scoreElem = document.getElementById("score");
const box = document.getElementById("game");
const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");

playBtn.addEventListener("click", () => {
  game.style.display = "block";
  document.getElementById("start-screen").remove();
  startGame();
});

hole.addEventListener('animationiteration', () => {
  const random = -((Math.random()*300)+150);
  hole.style.top = random + "px";
  counter++;
  scoreElem.textContent = counter;
});