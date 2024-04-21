const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const continueButton1 = document.getElementById("continueButton1");
const mainButtons = document.getElementsByClassName("mainButtons");
const arrowButton = document.getElementById("arrow");
const minimizeButton = document.getElementById("minimize");
const scrollButton = document.getElementById("miniOrder");

const mainMenu = document.getElementById("mainMenu");
const counterViewT = document.getElementById("couterT");
const workshopViewT = document.getElementById("workshopT");
const lore = document.getElementById("Lore");
const prolog = document.getElementById("prolog");
const prologPart2 = document.getElementById("part1");
const prologPart3 = document.getElementById("part2");
const prologPart4 = document.getElementById("part3");
const prologPart5 = document.getElementById("part4");
const prologPart6 = document.getElementById("part5");
const order = document.getElementById("orders");

const Unknown = document.getElementsByClassName("UnknownPerson");
const Rey = document.getElementById("Reynauld");

const creator = document.getElementById("creator");

let gameOn = 0;
let numberOfClicks = 0;
let orderNumber = 0;

window.onload = async () => {
  document.body.style.backgroundImage = "url(./res/img/mainMenu.jpg)";
  try{const file = await fetch("./res/json/weapon.json");
  const data = await file.json();
  const file2 = await fetch("./res/json/customerParts.json");
  const data2 = await file2.json();

  }
  catch(err){
    location.reload();
  }
};

startButton.onclick = () => {
  creator.style.display = "none";
  mainMenu.style.display = "none";
  lore.style.display = "block";
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "black";
};

continueButton.onclick = () => {
  document.body.style.backgroundImage = "url(./res/img/shopView.jpg)";
  lore.style.display = "none";
  continueButton1.style.display = "block ";
  prolog.style.display = "block";
};

continueButton1.onclick = () => {
  numberOfClicks++;
  switch (numberOfClicks) {
    case 1:
      prologPart2.style.display = "block";
      prolog.style.display = "none";
      continueButton1.style.marginTop = "28vh";
      break;
    case 2:
      prologPart2.style.display = "none";
      prologPart3.style.display = "block";
      continueButton1.style.marginTop = "23vh";

      break;
    case 3:
      document.body.style.backgroundImage = "url(./res/img/workshopView.png)";
      prologPart3.style.display = "none";
      prologPart4.style.display = "block";
      continueButton1.style.marginTop = "19vh";
      break;
    case 4:
      document.body.style.backgroundImage = "url(./res/img/shopView.jpg)";
      prologPart4.style.display = "none";
      prologPart5.style.display = "block";
      continueButton1.style.marginTop = "51vh";
      continueButton1.style.marginLeft = "8vw";
      Unknown[0].style.display = "block";
      break;
    case 5:
      Rey.style.display = "block";
      Unknown[0].style.display = "none";
      break;
    case 6:
      prologPart5.style.display = "none";
      prologPart6.style.display = "block";
      continueButton1.style.display = "none";
      mainButtons[0].style.display = "block";
      mainButtons[1].style.display = "block";
      mainButtons[2].style.display = "block";

      mainButtons[0].onclick = () => {
        document.body.style.backgroundImage = "url(./res/img/shopView.jpg)";
        counterViewT.style.display = "block";
        workshopViewT.style.display = "none";
        arrowButton.style.display = "none";
        if (orderNumber % 2 == 0) {
          mainButtons[2].style.display = "block";
        } else {
          mainButtons[2].style.display = "none";
        }
      };
      mainButtons[1].onclick = () => {
        document.body.style.backgroundImage = "url(./res/img/workshopView.png)";
        counterViewT.style.display = "none";
        workshopViewT.style.display = "block";
        arrowButton.style.display = "block";
        mainButtons[2].style.display = "none";
      };
      mainButtons[2].onclick = () => {
        mainButtons[2].style.display = "none";
        prologPart6.style.display = "none";
        order.style.display = "block";
        minimizeButton.style.display = "block";
        orderNumber++;
        let m = Math.floor(Math.random() * 3 + 1);
        let t = Math.floor(Math.random() * 3 + 1);
        let st = Math.floor(Math.random() * 2 + 1);
      };

      break;
  }
  arrowButton.onclick = () => {
    document.body.style.backgroundImage = "url(./res/img/forgeView.jpg)";
    workshopViewT.style.display = "none";
  };

  minimizeButton.onclick = () => {
    order.style.display = "none";
    scrollButton.style.display = "block";
  };

  scrollButton.onclick = () => {
    order.style.display = "block";
    scrollButton.style.display = "none";
  }
};
