const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const continueButton1 = document.getElementById("continueButton1");
const mainButtons = document.getElementsByClassName("mainButtons");
const arrowButton = document.getElementById("arrow");
const minimizeButton = document.getElementById("minimize");
const scrollButton = document.getElementById("miniOrder");
const casts = document.getElementsByClassName("weaponCasts");
const ores = document.getElementsByClassName("oreChoose");
const castsMain = document.getElementById("casts");
const oresMain = document.getElementById("ores");
const oreText = document.getElementById("oreText")
const markTimer = document.getElementById("mark")
const takeOut = document.getElementById("smeltingButton")

const mainMenu = document.getElementById("mainMenu");
const counterViewT = document.getElementById("couterT");
const workshopViewT = document.getElementById("workshopT");
const forgeView = document.getElementById("forgery");
const lore = document.getElementById("Lore");
const prolog = document.getElementById("prolog");
const prologPart2 = document.getElementById("part1");
const prologPart3 = document.getElementById("part2");
const prologPart4 = document.getElementById("part3");
const prologPart5 = document.getElementById("part4");
const prologPart6 = document.getElementById("part5");
const order = document.getElementById("orders");

const BA = document.getElementById("partSchema");
const BAN = document.getElementById("partName");
const castedWeapon = document.getElementById("castedWeapons")
const customerBody = document.getElementById("customerBody");
const customerHead = document.getElementById("customerHead");
const crucible = document.getElementById("crucible");

const Unknown = document.getElementsByClassName("UnknownPerson");
const Rey = document.getElementById("Reynauld");

const creator = document.getElementById("creator");

let gameOn = 0;
let numberOfClicks = 0;
let orderNumber = 0;
let crucibleState = 0;
let weapon = 0;
let ore = 0;
let timeToSmelt = 0;
let smeltingFinish = 0;
let wellSmelted = 0;

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

function smeltingEvaluation(){
  if(smeltingFinish == 1){
    if(wellSmelted==2){
      switch(weapon){
        case 1:
          switch(ore){
            case 1:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[0].castedImg})`;
          break;
          case 2:
            castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[0].castedImg2})`;
            break;
            case 3:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[0].castedImg3})`;
              break;
          }
          break;
        case 2:
            switch(ore){
              case 1:castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[1].castedImg})`;
            break;
            case 2:castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[1].castedImg2})`;
              break;
              case 3:castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[1].castedImg3})`;
              break;
            }
            break;
          case 3:
              switch(ore){
                case 1:castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[2].castedImg})`;
              break;
              case 2:castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[2].castedImg2})`;
                break;
                case 3:castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[2].castedImg3})`;
                break;
              }
          break;
          case 4:
            switch(ore){
              case 1:castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[3].castedImg})`;
            break;
            case 2:castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[3].castedImg2})`;
              break;
              case 3:castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[3].castedImg3})`;
              break;
            }
          break;
          case 5:
            switch(ore){
              case 1:castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[4].castedImg})`;
            break;
            case 2:castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[4].castedImg2})`;
              break;
              case 3:castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[4].castedImg3})`;
              break;
            }
          break;
          case 6:
            switch(ore){
              case 1:castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[5].castedImg})`;
            break;
            case 2:castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[5].castedImg2})`;
              break;
              case 3:castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[5].castedImg3})`;
              break;
            }
          break;
      }
    }else{

    }
  }else{

  }
}

function smeltingTimer(){
const interval =  setInterval(() => {
timeToSmelt++
if(timeToSmelt<=15){
markTimer.style.backgroundColor="orange";
}else if(timeToSmelt<=25){
  markTimer.style.backgroundColor="green";
  takeOut.style.display = "flex";
}else{
  markTimer.style.backgroundColor="red";
  
}
  }, 1000)
}

function crucibleValidation() {
  switch (crucibleState) {
    case 1:
      crucible.style.backgroundImage = "url(./res/img/kotlík.png)";

      crucible.style.width = "20vw";
      crucible.style.height = "35vh";
      crucible.style.marginTop = "30vh";
      crucible.style.marginLeft = "40vw";
      break;
    case 2:
      crucible.style.backgroundImage = "url(./res/img/kotlíkTavení.png)";
      crucible.style.width = "8vw";
      crucible.style.height = "18vh";
      crucible.style.marginTop = "57vh";
      crucible.style.marginLeft = "52vw";
      break;
    case 3:
      crucible.style.backgroundImage = "url(./res/img/kotlík.png)";

      crucible.style.width = "20vw";
      crucible.style.height = "35vh";
      crucible.style.marginTop = "30vh";
      crucible.style.marginLeft = "40vw";
      break;
  }
}

function headChosing() {
  let y = Math.floor(Math.random() * 3 + 1);
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
        forgeView.style.display = "none";
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
        forgeView.style.display = "none";
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
            BA.style.marginTop = "10vh";
            BA.style.marginLeft = "7vw";

            break;
          case 2:
            BA.style.backgroundImage = `url(${dataWeapons.weapons[1].img})`;
            BA.style.marginTop = "10vh";
            BA.style.marginLeft = "6vw";

            break;
          case 3:
            BA.style.backgroundImage = `url(${dataWeapons.weapons[2].img})`;
            BA.style.marginTop = "10vh";
            BA.style.marginLeft = "9vw";

            break;
          case 4:
            BA.style.backgroundImage = `url(${dataWeapons.weapons[3].img})`;
            BA.style.marginTop = "10vh";
            BA.style.marginLeft = "9vw";
            break;
          case 5:
            BA.style.backgroundImage = `url(${dataWeapons.weapons[4].img})`;
            BA.style.marginTop = "10vh";
            BA.style.marginLeft = "4vw";

            break;
          case 6:
            BA.style.backgroundImage = `url(${dataWeapons.weapons[5].img})`;
            BA.style.marginTop = "10vh";
            BA.style.marginLeft = "7vw";
            break;
        }
      };

      break;
  }
  arrowButton.onclick = () => {
    document.body.style.backgroundImage = "url(./res/img/forgeView.jpg)";
    crucibleValidation();
    forgeView.style.display = "block";
    workshopViewT.style.display = "none";
  };

  casts[0].onclick = () => {
    weapon = 1;
    crucibleState = 1;
    crucibleValidation();
    castsMain.style.display = "none";
    oreText.style.display = "block";
    ores[0].style.display = "flex";
    ores[1].style.display = "flex";
    ores[2].style.display = "flex";
  };
  casts[1].onclick = () => {
    weapon = 2;
    crucibleState = 1;
    crucibleValidation();
    castsMain.style.display = "none";
    oreText.style.display = "block";
    ores[0].style.display = "flex";
    ores[1].style.display = "flex";
    ores[2].style.display = "flex";
  };
  casts[2].onclick = () => {
    weapon = 3;
    crucibleState = 1;
    crucibleValidation();
    castsMain.style.display = "none";
    oreText.style.display = "block";
    ores[0].style.display = "flex";
    ores[1].style.display = "flex";
    ores[2].style.display = "flex";
  };
  casts[3].onclick = () => {
    weapon = 4;
    crucibleState = 1;
    crucibleValidation();
    castsMain.style.display = "none";
    oreText.style.display = "block";
    ores[0].style.display = "flex";
    ores[1].style.display = "flex";
    ores[2].style.display = "flex";
  };
  casts[4].onclick = () => {
    weapon = 5;
    crucibleState = 1;
    crucibleValidation();
    castsMain.style.display = "none";
    oreText.style.display = "block";
    ores[0].style.display = "flex";
    ores[1].style.display = "flex";
    ores[2].style.display = "flex";
  };
  casts[5].onclick = () => {
    weapon = 6;
    crucibleState = 1;
    crucibleValidation();
    castsMain.style.display = "none";
    oreText.style.display = "block";
    ores[0].style.display = "flex";
    ores[1].style.display = "flex";
    ores[2].style.display = "flex";
  };

  ores[0].onclick = () => {
    ore = 1;
    oresMain.style.display = "none";
    crucibleState = 2;
    crucibleValidation();
    markTimer.style.display="block";
    smeltingTimer();
  };
  ores[1].onclick = () => {
    ore = 2;
    oresMain.style.display = "none";
    crucibleState = 2;
    crucibleValidation();
    markTimer.style.display="block";
    smeltingTimer();
  };
  ores[2].onclick = () => {
    ore = 3;
    oresMain.style.display = "none";
    crucibleState = 2;
    crucibleValidation();
    markTimer.style.display="block";
    smeltingTimer();
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

takeOut.onclick = ()=> {
takeOut.style.display = "none";
crucibleState = 3;
smeltingFinish = 1;

crucibleValidation();
markTimer.style.display = "none";

};

function newCustomer() {
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
