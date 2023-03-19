

function letsPlay() {

    let message2;
    document.getElementById("message2").innerHTML = "Nice, lets play! Enter your name to start"
    let name=document.querySelector("#name-section");
    name.style.display = "block";
    document.getElementById("input-name").style.display = "inline";
    document.getElementById("start-button").style.display = "inline";
}

function dontPlay() {
    let message2;
    document.getElementById("message2").innerHTML = "That's too bad.. Maybee another time!"  
    let name=document.querySelector("#name-section");
    name.style.display = "none";
}

function start() {
    let message=document.querySelector("#message-section");
    message.style.display = "none";
    let name=document.querySelector("#name-section");
    name.style.display = "none";
    let welcome=document.querySelector("#welcome-section");
    welcome.style.display = "none";
}