// Event listener for start button click
playBtn.addEventListener("click", () => {
    game.style.display = "block"; // Show the game page
    document.getElementById("start-screen").remove(); // Remove the initial page
    startCountdown(); // Start the 3-second countdown before the game starts
  });

function startCountdown() {
    let countdownNum = 3; // Set the countdown number to 3
    const countdownElem = document.getElementById("countdown");
  
    // Decrement the countdown number every second
    const countdownInterval = setInterval(() => {
      countdownNum--;
      countdownElem.textContent = countdownNum;
  
      // When the countdown reaches 0, clear the interval and start the game
      if (countdownNum === 0) {
        clearInterval(countdownInterval);
        startGame();
      }
    }, 1000);
  }

let jumping = 0;
let counter = 0;

hole.addEventListener('animationiteration', () => {
    const random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});
setInterval(function(){
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    const holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    const cTop = -(500-characterTop);
    // limit character's movement within box element
    const boxTop = parseInt(window.getComputedStyle(box).getPropertyValue("top"));
    const boxHeight = parseInt(window.getComputedStyle(box).getPropertyValue("height"));
   
    if (
        characterTop > 480 ||
        (blockLeft < -50 &&
          blockLeft > 20 &&
          (cTop < holeTop || cTop > holeTop + 80)) 
      ) {
        alert("Game over. Score: " + 8 * (counter - 1)); 
        character.style.top = 100 + "px";
        counter = 0;
      }



},10);

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
