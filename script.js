let movesCards = document.querySelectorAll(".move-card");
let angle = 0;

function rotate(){
    angle += 6;

    movesCards.forEach( card => {
        card.style.transform = `rotate(${angle}deg)`;
    });
    

    requestAnimationFrame(rotate);
}

  requestAnimationFrame(rotate);