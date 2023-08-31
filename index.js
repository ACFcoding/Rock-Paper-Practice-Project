const playerTxt = document.querySelector("player");
const opponentTxt = document.querySelector("opponent");
const gameResultTxt = document.querySelector("result");
const moveSelectTxt = document.querySelectorAll("moveSelect");

let player;
let opponent;
let gameResult;

//experiment with this later
moveSelectTxt.forEach(
    button => button.addEventListener("click", () => {
        player = button.textContent;
        opponentTurn();
        playerTxt.textContent = `Player: ${player}`;
        opponentTxt.textContent = `Opponent: ${opponent}`;
        gameResultTxt.textContent = whoWins();
    })
    );

function opponentTurn() {
    
    const randomSelect = Math.floor(Math.random() * 3 ) +1;

    //Switch cases for opponent move selection
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
function whoWins( {
    
})