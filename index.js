const playerTxt = document.querySelector("player");
const opponentTxt = document.querySelector("opponent");
const gameResultTxt = document.querySelector("result");
const moveSelectTxt = document.querySelectorAll("moveSelect");

let player;
let opponent;
let gameResult;

moveSelectTxt.forEach(
    button => button.addEventListener("click", () => {
        player = button.textContent;
        opponentTurn();
    })
    );

function opponentTurn() {
    
    const randomSelect = Math.floor(Math.random() * 3 ) +1;

    switch(randomSelect) {
        case 1:
            opponent = "Paper";
            break;
    
        case 2:
            opponent = "Scissors";
            break;
    
        case 3:
            opponent = "Rock";
            break;
    }
}