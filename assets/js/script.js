
/* clicked button to play */ 
function letsPlay() {

    let message2;
    document.getElementById("message").innerHTML = "Nice, lets play! Enter your name to start"
    let name=document.querySelector("#name-section");
    name.style.display = "block";
    document.getElementById("input-name").style.display = "inline";
    document.getElementById("start-button").style.display = "inline";
    
    let welcome=document.querySelector("#welcome-section");
    welcome.style.display= "none";
}

/* clicked button not to play */ 
function dontPlay() {
    let message2;
    document.getElementById("message").innerHTML = "That's too bad.. Maybee another time!"  

    let name=document.querySelector("#name-section");
    name.style.display = "none";
    let welcome=document.querySelector("#welcome-section");
    welcome.style.display= "none";
}

/* Enter your name and start game */
function start() {
    if(document.getElementById("input-name").value.length == 0)
    {
        alert("please enter your name to play")

    }
    else 
    {
        let div = document.getElementById("fist-page");
        let display = 0; 
    
        if(display ==1)
        {
            div.style.display = 'block';
            display = 0;
        }
        else 
        {
            div.style.display = 'none';
            display = 1;
        }

        gameSection()
        let game=document.querySelector("#game-section");
        game.style.display = "block";

        /* Get the username from player and put it to board as player 2 */ 
        let username = document.getElementById("input-name").value;
        document.getElementById("displayName").innerHTML = `<h2>${username}</h2>`;
        
    }

}

function gameSection() {

}



