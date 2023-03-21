// Get Buttons
let yesBtn = document.querySelector('#yes')
let noBtn = document.querySelector('#no')
let restartBtn = document.getElementById('restartbtn')

let winningMessage = document.getElementById('winningMessage')

// Get array from boxes in gameboard
let boxes = Array.from(document.getElementsByClassName('box'))
let spaces = Array(9).fill(null)

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

/* clicked button to play */
function letsPlay() {

    document.getElementById("message").innerHTML = "Thats fun! Enter your name to start"
    let name = document.querySelector("#name-section");
    name.style.display = "block";
    document.getElementById("input-name").style.display = "inline";
    document.getElementById("input-name2").style.display = "inline";
    document.getElementById("start-button").style.display = "inline";

    let welcome = document.querySelector("#welcome-section");
    welcome.style.display = "none";
}

/* clicked button not to play */
function dontPlay() {
    document.getElementById("message").innerHTML = "That's too bad.. Maybee another time!"

    let name = document.querySelector("#name-section");
    name.style.display = "none";
    let welcome = document.querySelector("#welcome-section");
    welcome.style.display = "none";
}
/* Enter your name and start game */
function start() {
    if (document.getElementById("input-name").value.length == 0) {
        alert("please enter your name to play")

    } else {
        let div = document.getElementById("fist-page");
        let display = 0;

        if (display == 1) {
            div.style.display = 'block';
            display = 0;
        } else {
            div.style.display = 'none';
            display = 1;
        }

        let game = document.querySelector("#game-section");
        game.style.display = "block";
        let players = document.querySelector("#player-section");
        players.style.display = "block";

        /* will display name on player when enter game */
        let player1= document.getElementById("input-name").value;
        document.getElementById("displayName").innerHTML = `<h2>${player1}</h2>`;

        let player2 = document.getElementById("input-name2").value;
        document.getElementById("displayName2").innerHTML = `<h2>${player2}</h2>`;
    }
}

/* Start game when clicking on board */

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))

}

function boxClicked(square) {
    document.getElementById('restartbtn').style.display = "block";
    const id = square.target.id

    if (!spaces[id]) {
        spaces[id] = currentPlayer
        square.target.innerText = currentPlayer

        if (playerHasWon()) {
            winningMessage.textContent = `${currentPlayer} has won!`;
        }

        currentPlayer = (currentPlayer == "X") ? "O" : "X";
        winningMessage.textContent = `${currentPlayer}'s turn`;
    }

}

/* restart buttun will clear the board */

restartBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText = ""
    })

    winningMessage = 'Tic Tac Toe'
    currentPlayer = X_TEXT

}

function playerHasWon() {


}





startGame()