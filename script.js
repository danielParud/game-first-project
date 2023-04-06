const playBtn = document.getElementById("play-btn");
const game = document.getElementById("game");
const scoreElem = document.getElementById("score");
const box = document.getElementById("game");
const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");

// Event listener for start button click
playBtn.addEventListener("click", () => {
    game.style.display = "block"; // Show the game page
    document.getElementById("start-screen").remove(); // Remove the initial page
    startGame(); // Start the 3-second countdown before the game starts
  });
  
  // Event listener for hole animation iteration
hole.addEventListener('animationiteration', () => {
    const random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
    scoreElem.textContent = counter;
  });

function startGame (){
let jumping = 0;
let counter = 0;

setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+2)+"px";
    }
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    const holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    const cTop = -(500-characterTop);
    // limit character's movement within box element
    const boxTop = parseInt(window.getComputedStyle(box).getPropertyValue("top"));
    const boxHeight = parseInt(window.getComputedStyle(box).getPropertyValue("height"));
   
    // check for collision with block or hole
    if (
        characterTop > 480 ||
        (blockLeft < 20) &&
         (blockLeft > -50) &&
          ((cTop < holeTop) || (cTop > holeTop + 130)) 
      ) {
        game.style.display = "none"; // Hide the game page
        const gameOver = document.getElementById("game-over");
        gameOver.style.display = "block"; // Show the game over page
        document.getElementById("scoreFinal").textContent = counter - 1; // Set the final score
        document.getElementById("restart-btn").addEventListener("click", () => {
          location.reload(); // Reload the page to restart the game
        });
        character.style.top = 100 + "px";
        counter = 0;
      }
    },10);
    
     // Event listener for hole animation iteration
     hole.addEventListener('animationiteration', () => {
       const random = -((Math.random()*300)+150);
       hole.style.top = random + "px";
       counter++;
       scoreElem.textContent = counter;
  });}

function jump(){ 
    jumping = 1;
    let jumpCount = 0;
    const jumpInterval = setInterval(function(){
         characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
        }
        if      (jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}