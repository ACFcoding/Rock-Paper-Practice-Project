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
    
}