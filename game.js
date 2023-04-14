let jumping = 0;
let counter = 0;

function startGame() {
  setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping == 0) {
      character.style.top = (characterTop+2) + "px";
    }
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    const holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    const cTop = -(500-characterTop);
    const boxTop = parseInt(window.getComputedStyle(box).getPropertyValue("top"));
    const boxHeight = parseInt(window.getComputedStyle(box).getPropertyValue("height"));

    if (
      characterTop > 480 ||
      (blockLeft < 20) &&
      (blockLeft > -50) &&
      ((cTop < holeTop) || (cTop > holeTop + 130)) 
    ) {
      alert("Game over. Score: "+(counter-1));
        character.style.top = 210 + "px";
        counter=0;
    }
  },10);

  hole.addEventListener('animationiteration', () => {
    const random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    scoreElem.textContent = counter;
  });
}

function jump() {
  jumping = 1;
  let jumpCount = 0;
  const jumpInterval = setInterval(function() {
    characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if((characterTop>6)&&(jumpCount<15)) {
      character.style.top = (characterTop-5) + "px";
    }
    if(jumpCount>20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
    }
    jumpCount++;
  },10);
}
