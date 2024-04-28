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
const oreText = document.getElementById("oreText");
const markTimer = document.getElementById("mark");
const takeOut = document.getElementById("smeltingButton");
const deleteWeapon = document.getElementById("deleteButton");
const smithingButton = document.getElementsByClassName("smithingButton");

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
const sliderShow = document.getElementsByClassName("slidecontainer");
const partOfWeapon = document.getElementsByClassName("partOfWeapon");

const BA = document.getElementById("partSchema");
const BAN = document.getElementById("partName");
const castedWeapon = document.getElementById("castedWeapons");
const customerBody = document.getElementById("customerBody");
const customerHead = document.getElementById("customerHead");
const crucible = document.getElementById("crucible");

const Unknown = document.getElementsByClassName("UnknownPerson");
const Rey = document.getElementById("Reynauld");

const creator = document.getElementById("creator");

const slider = document.getElementById("myRange");
const slider2 = document.getElementById("myRange2");
let maxValidation = 0;
let maxValidation2 = 0;

let gameOn = 0;
let numberOfClicks = 0;
let orderNumber = 0;
let crucibleState = 0;
let weapon = 0;
let ore = 0;
let timeToSmelt = 0;
let timeToCast = 0;
let smeltingFinish = 0;
let wellSmelted = 0;
let takeOutState = 0;
let interval = Number();
let interval2 = Number();
let blowerValidation = true;
let notGenerated = true;
let smithed = 0;
let seen = 0;

let speedOfCasting = 10;
let castFullnes = 0;
let castReadines = true;

let dataWeapons = new Object();
let dataCustomer = new Object();

let castingValidation = true;

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

slider.oninput = function () {
  maxValidation = this.value;
  blower();
};

slider2.oninput = function () {
  maxValidation2 = this.value;
  casting();
};

function blower() {
  if (maxValidation >= 70 && blowerValidation) {
    timeToSmelt++;
    timeToSmelt++;
    console.log(timeToSmelt);
    blowerValidation = false;
    console.log("ano");
  } else if (maxValidation <= 30) {
    blowerValidation = true;
    console.log("ne");
  }
}

function casting() {
  if (castingValidation) {
    castingTimer();
    castingValidation = false;
  }
  if (speedOfCasting > 100) {
    clearInterval(interval2);
  }
  if (castFullnes >= 90) {
    slider2.style.display = "none";
    wellSmelted = 2;
    castReadines = false;
    smeltingEvaluation();
  }
  if (castFullnes > speedOfCasting && castReadines) {
    wellSmelted = 0;
    smeltingEvaluation();
  }
  if (castFullnes < maxValidation2) {
    castFullnes = maxValidation2;
  }
}

deleteWeapon.onclick = () => {
  weapon = 0;
  ore = 0;
  wellSmelted = 0;
  crucibleState = 0;
  castedWeapon.style.backgroundImage = "none";
  castedWeapon.style.display = "none";
  deleteWeapon.style.display = "none";
  console.log("deleted");
};

function castingTimer() {
  interval2 = setInterval(() => {
    if (speedOfCasting - 20 >= castFullnes) {
      speedOfCasting += 10;
    }
  }, 500);
}

function smeltingEvaluation() {
  if (smeltingFinish == 1) {
    if (wellSmelted == 2) {
      switch (weapon) {
        case 1:
          switch (ore) {
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
          switch (ore) {
            case 1:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[1].castedImg})`;
              break;
            case 2:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[1].castedImg2})`;
              break;
            case 3:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[1].castedImg3})`;
              break;
          }
          break;
        case 3:
          switch (ore) {
            case 1:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[2].castedImg})`;
              castedWeapon.style.marginleft = "20vw";
              castedWeapon.style.rotate = "180deg";
              break;
            case 2:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[2].castedImg2})`;
              break;
            case 3:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[2].castedImg3})`;
              break;
          }
          break;
        case 4:
          switch (ore) {
            case 1:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[3].castedImg})`;
              break;
            case 2:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[3].castedImg2})`;
              break;
            case 3:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[3].castedImg3})`;
              break;
          }
          break;
        case 5:
          switch (ore) {
            case 1:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[4].castedImg})`;
              break;
            case 2:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[4].castedImg2})`;
              break;
            case 3:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[4].castedImg3})`;
              break;
          }
          break;
        case 6:
          switch (ore) {
            case 1:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[5].castedImg})`;
              break;
            case 2:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[5].castedImg2})`;
              break;
            case 3:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[5].castedImg3})`;
              break;
          }
          break;
      }
    } else {
      switch (weapon) {
        case 1:
          switch (ore) {
            case 1:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[0].castedBadImg})`;
              break;
            case 2:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[0].castedBadImg2})`;
              break;
            case 3:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[0].castedBadImg3})`;
              break;
          }
          break;
        case 2:
          switch (ore) {
            case 1:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[1].castedBadImg})`;
              break;
            case 2:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[1].castedBadImg2})`;
              break;
            case 3:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[1].castedBadImg3})`;
              break;
          }
          break;
        case 3:
          switch (ore) {
            case 1:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[2].castedBadImg})`;
              break;
            case 2:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[2].castedBadImg2})`;
              break;
            case 3:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[2].castedBadImg3})`;
              break;
          }
          break;
        case 4:
          switch (ore) {
            case 1:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[3].castedBadImg})`;
              break;
            case 2:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[3].castedBadImg2})`;
              break;
            case 3:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[3].castedBadImg3})`;
              break;
          }
          break;
        case 5:
          switch (ore) {
            case 1:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[4].castedBadImg})`;
              break;
            case 2:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[4].castedBadImg2})`;
              break;
            case 3:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[4].castedBadImg3})`;
              break;
          }
          break;
        case 6:
          switch (ore) {
            case 1:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[5].castedBadImg})`;
              break;
            case 2:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[5].castedBadImg2})`;
              break;
            case 3:
              castedWeapon.style.backgroundImage = `url(${dataWeapons.weapons[5].castedBadImg3})`;
              break;
          }
          break;
      }
    }
  } else {
  }
}

function smeltingTimer() {
  interval = setInterval(() => {
    console.log("ahoj");
    timeToSmelt++;
    if (timeToSmelt <= 15) {
      markTimer.style.backgroundColor = "orange";
    } else if (timeToSmelt <= 25) {
      markTimer.style.backgroundColor = "green";
      takeOut.style.display = "flex";
    } else {
      markTimer.style.backgroundColor = "red";
    }
  }, 1000);
}

function crucibleValidation() {
  switch (crucibleState) {
    case 1:
      crucible.style.backgroundImage = "url(./res/img/kotlík.png)";

      crucible.style.width = "20vw";
      crucible.style.height = "35vh";
      crucible.style.marginTop = "30vh";
      crucible.style.marginLeft = "42vw";
      break;
    case 2:
      crucible.style.backgroundImage = "url(./res/img/kotlíkTavení.png)";
      crucible.style.width = "8vw";
      crucible.style.height = "18vh";
      crucible.style.marginTop = "57vh";
      crucible.style.marginLeft = "52vw";
      break;
    case 3:
      crucible.style.backgroundImage = "url(./res/img/kotlíkHot.png)";

      crucible.style.width = "20vw";
      crucible.style.height = "35vh";
      crucible.style.marginTop = "30vh";
      crucible.style.marginLeft = "42vw";
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
        castedWeapon.style.display = "none";
        deleteWeapon.style.display = "none";
        smithingButton[0].style.display = "none";
        smithingButton[1].style.display = "none";
        smithingButton[2].style.display = "none";
        smithingButton[3].style.display = "none";
        smithingButton[4].style.display = "none";
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

        for (i = 0; i <= 4; i++) {
          if (notGenerated) {                       
          
          let t = Math.floor(Math.random() * 50 + 15);
          let y = Math.floor(Math.random() * 50 + 15);
          smithingButton[i].style.marginLeft = t + "vw";
          smithingButton[i].style.marginTop = y + "vh";
          notGenerated = false;
        }
        }
        if (wellSmelted == 2 &&seen == 0) {
          smithingButton[0].style.display = "block";
            smithingButton[1].style.display = "block";
            smithingButton[2].style.display = "block";
            smithingButton[3].style.display = "block";
            smithingButton[4].style.display = "block";
        seen = 1;
        }

        else {
        }
        castedWeapon.style.display = "block";
        if (weapon != 0 && smeltingFinish == 1) {
          deleteWeapon.style.display = "flex";
        }
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
    castedWeapon.style.display = "none";
    smithingButton[0].style.display = "none";
    smithingButton[1].style.display = "none";
    smithingButton[2].style.display = "none";
    smithingButton[3].style.display = "none";
    smithingButton[4].style.display = "none";
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
    markTimer.style.display = "block";
    sliderShow[0].style.display = "block";
    smeltingTimer();
  };
  ores[1].onclick = () => {
    ore = 2;
    oresMain.style.display = "none";
    crucibleState = 2;
    crucibleValidation();
    markTimer.style.display = "block";
    sliderShow[0].style.display = "block";
    smeltingTimer();
  };
  ores[2].onclick = () => {
    ore = 3;
    oresMain.style.display = "none";
    crucibleState = 2;
    crucibleValidation();
    markTimer.style.display = "block";
    sliderShow[0].style.display = "flex";
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

takeOut.onclick = () => {
  takeOut.style.display = "none";
  crucibleState = 3;
  smeltingFinish = 1;
  clearInterval(interval);
  crucibleValidation();
  markTimer.style.display = "none";
  sliderShow[0].style.display = "none";
  sliderShow[1].style.display = "flex";
  if (timeToSmelt <= 25) {
    wellSmelted = 1;
  } else {
  }
};

function newCustomer() {
  let t = Math.floor(Math.random() * 3 + 1);
  mainButtons[2].style.display = "block";

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
smithingButton[0].onclick = () => {
  smithingButton[0].style.display = "none";
  smithed++;
  smithedValidationWaves();
};
smithingButton[1].onclick = () => {
  smithingButton[1].style.display = "none";
  smithed++;
  smithedValidationWaves();
};
smithingButton[2].onclick = () => {
  smithingButton[2].style.display = "none";
  smithed++;
  smithedValidationWaves();
};
smithingButton[3].onclick = () => {
  smithingButton[3].style.display = "none";
  smithed++;
  smithedValidationWaves();
};
smithingButton[4].onclick = () => {
  smithingButton[4].style.display = "none";
  smithed++;
  smithedValidationWaves();
};

function smithedValidationWaves() {
if(smithed==5){
  smithingButton[0].style.display = "block";
  smithingButton[1].style.display = "block";
  smithingButton[2].style.display = "block";
  smithingButton[3].style.display = "block";
  smithingButton[4].style.display = "block";
    for (i = 0; i <= 4; i++) {
      let t = Math.floor(Math.random() * 50 + 15);
      let y = Math.floor(Math.random() * 50 + 15);
      smithingButton[i].style.marginLeft = t + "vw";
      smithingButton[i].style.marginTop = y + "vh";
    }
}else if(smithed==10){
  
    smithingButton[0].style.display = "block";
    smithingButton[1].style.display = "block";
    smithingButton[2].style.display = "block";
    smithingButton[3].style.display = "block";
    smithingButton[4].style.display = "block";
      for (i = 0; i <= 4; i++) {
        let t = Math.floor(Math.random() * 50 + 15);
        let y = Math.floor(Math.random() * 50 + 15);
        smithingButton[i].style.marginLeft = t + "vw";
        smithingButton[i].style.marginTop = y + "vh";
      }
  }else {
    
  }
}





let offset = [0, 0];
let mousePos;
let isDown = false;

this.sauceInstance.addEventListener(
  "mousedown",
  (e) => {
    isDown = true;
    offset = [
      this.sauceInstance.offsetLeft - e.clientX,
      this.sauceInstance.offsetTop - e.clientY,
    ];
  },
  true
);
document.addEventListener(
  "mouseup",
  () => {
    isDown = false;
    if (this.isAbovePlate()) {
      if (burgerExists && !burger.finished) {
        burger.addIngredient(this.type + 6);
      }
      this.sauceInstance.remove();
      new Sauce(this.type);
      return;
    }
    this.sauceInstance.style.left = this.leftOffset + "%";
    this.sauceInstance.style.top = 60 + "%";
  },
  true
);
document.addEventListener(
  "mousemove",
  (event) => {
    event.preventDefault();
    if (isDown) {
      mousePos = {
        x: event.clientX,
        y: event.clientY,
      };
      this.sauceInstance.style.left = mousePos.x + offset[0] + "px";
      this.sauceInstance.style.top = mousePos.y + offset[1] + "px";
    }
  },
  true
);

isAbovePlate() 
let rect = this.sauceInstance.getBoundingClientRect();
let plateRect = plate.getBoundingClientRect();
return (
  rect.x + rect.width / 2 > plateRect.x - 10 &&
  rect.x < plateRect.x + plateRect.width - rect.width / 2
);