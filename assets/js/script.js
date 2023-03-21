
/* clicked button to play */
function letsPlay() {

    document.getElementById("message").innerHTML = "Nice, lets play! Enter your name to start"
    let name = document.querySelector("#name-section");
    name.style.display = "block";
    document.getElementById("input-name").style.display = "inline";
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
    }
}


let restartBtn = document.getElementById('restartbtn')
let boxes = Array.from(document.getElementsByClassName('box'))

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(square) {
    const id = square.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        square.target.innerText = currentPlayer

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }

}

startGame()