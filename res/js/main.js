const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const continueButton1 = document.getElementById("continueButton1");
const mainButtons = document.getElementsByClassName("mainButtons");

const mainMenu = document.getElementById("mainMenu");
const lore = document.getElementById("Lore");
const prolog = document.getElementById("prolog")
const prologPart2 = document.getElementById("part1");

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
    continueButton1.style.display = "block ";
    prolog.style.display ="block";


};

continueButton1.onclick = () => {
    numberOfClicks++
    switch(numberOfClicks){
        case 1:
            prologPart2.style.display ="block";
            prolog.style.display ="none";
            continueButton1.style.marginTop ="27.5vh"  ;
            break;
        case 2:
            prologPart2.style.display ="none";


    }

};




