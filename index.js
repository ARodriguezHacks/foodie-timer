import { startBtn, stopBtn, resetBtn } from "./timer.js";
import {
  settingsTrigger,
  settingsModal,
  foodieBreak,
  snackBreak,
} from "./timer-settings.js";
import foodImgOptions from "/images.js";
let imgList = document.querySelectorAll(".custom-option");
let currentFoodTitle = document.querySelector(".current-food-title");
let currentFood;
let foodImg = document.querySelector(".food-img");
let foodOptions;
let foodOptionsIcons = [];

document
  .querySelector(".custom-dropdown-wrapper")
  .addEventListener("click", function () {
    this.querySelector(".custom-dropdown").classList.toggle("open");
  });

for (const option of imgList) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
        .querySelector(".custom-option.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      this.closest(".custom-dropdown").querySelector(
        ".custom-dropdown-trigger span"
      ).textContent = this.textContent;
      this.closest(".custom-dropdown").querySelector(
        ".custom-dropdown-trigger img"
      ).src = this.children[1].src;
      currentFood = this.children[0].textContent;
      let foodImgId = foodImgOptions.findIndex((e) => {
        return e.food == currentFood.toLowerCase();
      });
      foodImg.src = foodImgOptions[foodImgId].image;
    }
  });
}

window.addEventListener("click", function (e) {
  const select = document.querySelector(".custom-dropdown");
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});
//change to hideFoodTitle
function removeFoodTitle() {
  currentFoodTitle.style.visibility = "hidden";
  currentFoodTitle.style.width = "0px";
}
//change to showFoodTitle
function addFoodTitle() {
  //let reinsertedChild = removedChild;
  currentFoodTitle.style.visibility = "visible";
  //trigger.insertBefore(reinsertedChild, currentFoodIcon);
  console.log(currentFoodTitle);
  //removedChild = null;
}
//change to checkIfChildIsHidden
function checkIfChildIsRemoved() {
  if (currentFoodTitle.style.visibility == "visible") {
    removeFoodTitle();
  }
}

function checkIfChildIsPresent() {
  if (!currentFoodTitle) {
    addFoodTitle();
  }
}
//change to HideFoodOptions
function removeFoodOptions() {
  foodOptions = document.querySelectorAll(".custom-option");
  foodOptions.forEach(function (option) {
    let foodIcon = option.childNodes[3];
    //option.style.visibility = "hidden";
    //console.log(foodSpan, foodIcon, option.childNodes);
    //removedFoodOptions.push(option.removeChild(foodSpan));
    foodOptionsIcons.push(foodIcon);
  });
}
//change to showFoodOptions
function addFoodOptions() {
  foodOptions = document.querySelectorAll(".custom-option");
  foodOptions.forEach(function (node) {
    node.style.visibility = "visible";
    //node.insertBefore(removedFoodOptions[index], foodOptionsIcons[index]);
  });
  foodOptions = null;
}
//change to checkIfFoodOptionsHidden
function checkIfFoodOptionsRemoved() {
  if (!foodOptions) {
    removeFoodOptions();
  }
}

function checkIfFoodOptionsPresent() {
  if (foodOptions) {
    addFoodOptions();
  }
}
//change if statement
function resizeWindow() {
  if (window.innerWidth < 768) {
    checkIfChildIsRemoved();
    checkIfFoodOptionsRemoved();
  } else {
    checkIfChildIsPresent();
    checkIfFoodOptionsPresent();
  }
}

window.onresize = resizeWindow;
