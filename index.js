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
//Function that handles the game proper
function whoWins() {
    if(player == opponent) {
        return "Tie. Play again.";
    }
        else if(opponent == "Paper") {
            return (player == "Scissors") ? "Victory! Well done!" : "Failure!"
        }
        else if(opponent == "Scissors") {
            return (player == "Rock") ? "Victory! Well done!" : "Failure!"
        }
        else if(opponent == "Rock") {
            return (player == "Paper") ? "Victory! Well done!" : "Failure!"
        }
    }
