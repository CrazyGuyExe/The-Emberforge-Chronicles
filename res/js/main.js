const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const mainMenu = document.getElementById("mainMenu");
const lore = document.getElementById("Lore");
const mainButtons = document.getElementsByClassName("mainButtons");
const creator = document.getElementById("creator");



let gameOn = 0;
let numberOfClicks = 0


window.onload = () => {
    document.body.style.backgroundImage = "url(./res/img/mainMenu.jpg)";
};

startButton.onclick = () => {
    creator.style.display = "none"
    mainMenu.style.display = "none";
    lore.style.display = "block";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "black";

};

continueButton.onclick = () => {
    document.body.style.backgroundImage = "url(./res/img/shopView.jpg)";
    lore.style.display = "none";
    mainButtons[0].style.display = "block";
    mainButtons[1].style.display = "block";


};




