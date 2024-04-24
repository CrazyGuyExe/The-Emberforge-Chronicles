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

const BA = document.getElementById("partSchema");
const customerBody = document.getElementById("customerBody")
const customerHead = document.getElementById("customerHead")

const Unknown = document.getElementsByClassName("UnknownPerson");
const Rey = document.getElementById("Reynauld");

const creator = document.getElementById("creator");

let gameOn = 0;
let numberOfClicks = 0;
let orderNumber = 0;
let y = Math.floor(Math.random() * 3 + 1);

let dataWeapons = new Object();
let dataCustomer = new Object();

window.onload = async () => {
  document.body.style.backgroundImage = "url(./res/img/mainMenu.jpg)";
  try {
    const file = await fetch("./res/json/weapon.json");

    dataWeapons = await file.json();

    const file2 = await fetch("./res/json/customerParts.json");

    dataCustomer = await file2.json();
  } catch (err) {
    location.reload();
  }
};

function headChosing(){
  switch (y) {
    case 1:
      customerHead.style.backgroundImage = `url(${dataCustomer.head[0].img})`;
      break;
      case 2:
        customerHead.style.backgroundImage = `url(${dataCustomer.head[1].img})`;
      break;
      case 3:
        customerHead.style.backgroundImage = `url(${dataCustomer.head[2].img})`;
        break;
      }
}


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
        let t = Math.floor(Math.random() * 6 + 1);

        switch (t) {
          case 1:
            BA.style.backgroundImage = `url(${dataWeapons.weapons[0].img})`;
            break;
          case 2:
            BA.style.backgroundImage = `url(${dataWeapons.weapons[1].img})`;
            break;
          case 3:
            BA.style.backgroundImage = `url(${dataWeapons.weapons[2].img})`;
            break;
          case 4:
            BA.style.backgroundImage = `url(${dataWeapons.weapons[3].img})`;
            break;
          case 5:
            BA.style.backgroundImage = `url(${dataWeapons.weapons[4].img})`;
            break;
          case 6:
            BA.style.backgroundImage = `url(${dataWeapons.weapons[5].img})`;
            break;
        }
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
  };
};



function newCustomer(){
  let t = Math.floor(Math.random() * 3 + 1);
  
switch (t) {
  case 1:
    customerBody.style.backgroundImage = `url(${dataCustomer.body[0].img})`;
    headChosing();
    break;
    case 2:
      customerBody.style.backgroundImage = `url(${dataCustomer.body[1].img})`;
      headChosing();
         
    break;
    case 3:
      customerBody.style.backgroundImage = `url(${dataCustomer.body[2].img})`;
      headChosing();
    break;
    
}
}