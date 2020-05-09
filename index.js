import "./timer.js";
import { settingsTrigger, settingsModal } from "./timer-settings.js";
import foodImgOptions from "/images.js";
let imgList = document.querySelectorAll(".custom-option");
let currentFoodTitle = document.querySelector(".current-food-title");
let foodImg = document.querySelector(".food-img");

let currentFood;
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

function hideFoodTitle() {
  currentFoodTitle.style.visibility = "hidden";
  currentFoodTitle.style.width = "0px";
}

function showFoodTitle() {
  currentFoodTitle.style.visibility = "visible";
}

function checkIfChildIsHidden() {
  if (currentFoodTitle.style.visibility == "visible") {
    hideFoodTitle();
  }
}

function checkIfChildIsPresent() {
  if (!currentFoodTitle) {
    showFoodTitle();
  }
}

function hideFoodOptions() {
  foodOptions = document.querySelectorAll(".custom-option");
  foodOptions.forEach(function (option) {
    let foodIcon = option.childNodes[3];
    foodOptionsIcons.push(foodIcon);
  });
}

function showFoodOptions() {
  foodOptions = document.querySelectorAll(".custom-option");
  foodOptions.forEach(function (node) {
    node.style.visibility = "visible";
  });
  foodOptions = null;
}

function checkIfFoodOptionsHidden() {
  if (!foodOptions) {
    hideFoodOptions();
  }
}

function checkIfFoodOptionsPresent() {
  if (foodOptions) {
    showFoodOptions();
  }
}

function resizeWindow() {
  if (window.innerWidth < 768) {
    checkIfChildIsHidden();
    checkIfFoodOptionsHidden();
  } else {
    checkIfChildIsPresent();
    checkIfFoodOptionsPresent();
  }
}

window.onresize = resizeWindow;
