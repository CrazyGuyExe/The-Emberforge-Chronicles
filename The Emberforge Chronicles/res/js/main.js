const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const mainMenu = document.getElementById("mainMenu");
const lore = document.getElementById("Lore");


let gameOn = 0;


window.onload = () => {
    document.body.style.backgroundImage = "url(./res/img/mainMenu.jpg)";
};

startButton.onclick= () => {
    mainMenu.style.display = "none";
    lore.style.display = "block";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "black";

};

continueButton.onclick= () => {
    document.body.style.backgroundImage = "url(./res/img/shopView.jpg)";
    lore.style.display = "none";
}




