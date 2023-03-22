// Get Buttons
let yesBtn = document.querySelector('#yesBtn')
let noBtn = document.querySelector('#noBtn')
let restartBtn = document.getElementById('restartbtn')

let winningMessage = document.getElementById('winningMessage')

// will get all boxes in gameboard 
const boxes = document.querySelectorAll('.box');

const Player_1 = "O"
const Player_2 = "X"
let currentPlayer = Player_2
let running = false;

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
let options = ["", "", "", "", "", "", "", "", ""];

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
    if (document.getElementById("input-name").value.length == 0 || document.getElementById("input-name2").value.length == 0) {
        alert("please enter your name to play")

    } else {
        let section = document.getElementById("fist-page");
        let display = 0;

        if (display == 1) {
            section.style.display = 'block';
            display = 0;
        } else {
            section.style.display = 'none';
            display = 1;
        }

        let game = document.querySelector("#game-section");
        game.style.display = "block";
        let players = document.querySelector("#player-section");
        players.style.display = "block";

        /* will display name on player when enter game */
        let player1 = document.getElementById("input-name").value;
        document.getElementById("displayName").innerHTML = `<h2>${player1}</h2>play's:`;

        let player2 = document.getElementById("input-name2").value;
        document.getElementById("displayName2").innerHTML = `<h2>${player2}</h2>play's:`;

        // will Show that is X's turn
        winningMessage.textContent = `${currentPlayer}'s turn`;


    }
}

/* Start game when clicking on board */

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
    restartBtn.addEventListener('click', restartGame);
    running = true;

}

function boxClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if (options[cellIndex] != "" || !running) {
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();

}

function updateCell(box, index) {
    options[index] = currentPlayer;
    box.textContent = currentPlayer;
    
}

function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    winningMessage.textContent = `${currentPlayer}'s turn`;


}

function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winningCombos.length; i++) {
        const condition = winningCombos[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        let winner = `${currentPlayer}`;
        if (winner === "X") {
            playerxScore();
            let username = document.getElementById("input-name").value;
            winningMessage.textContent = `The winner is ${username}!`;
            running = false;
            document.getElementById('restartbtn').style.display = "block";
        } else if (winner === "O") {
            playeroScore();
            let username2 = document.getElementById("input-name2").value;
            winningMessage.textContent = `The winner is ${username2}!`;
            running = false;
            document.getElementById('restartbtn').style.display = "block";
        } 
    } else if (!options.includes("")) {
        winningMessage.textContent = `Draw!`;
        running = false;
        document.getElementById('restartbtn').style.display = "block";
    } else {
        changePlayer();
    }

}

function playerxScore() {
    let oldScore = parseInt(document.getElementById("player2-score").innerText);
    document.getElementById("player2-score").innerText = ++oldScore;

}

function playeroScore() {
    let oldScore = parseInt(document.getElementById("player1-score").innerText);
    document.getElementById("player1-score").innerText = ++oldScore;

}

/* restart buttun will clear the board */

restartBtn.addEventListener('click', restartGame)

function restartGame() {
    currentPlayer = "O";
    options = ["", "", "", "", "", "", "", "", ""];
    winningMessage.textContent = `${currentPlayer}'s turn`;
    boxes.forEach(box => box.textContent = "");
    running = true;

    document.getElementById('restartbtn').style.display = "none";

}



startGame()