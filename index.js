let currentFoodTitle = document.querySelector(".current-food-title");
let trigger = currentFoodTitle.parentNode;
let currentFoodIcon = document.querySelector(".current-food-icon");
let foodOptions;
let removedChild;
let foodOptionsIcons = [];
let removedFoodOptions = [];

document
  .querySelector(".custom-dropdown-wrapper")
  .addEventListener("click", function () {
    this.querySelector(".custom-dropdown").classList.toggle("open");
  });

for (const option of document.querySelectorAll(".custom-option")) {
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
    }
  });
}

window.addEventListener("click", function (e) {
  const select = document.querySelector(".custom-dropdown");
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});

function removeFoodTitle() {
  removedChild = trigger.removeChild(currentFoodTitle);
}

function addFoodTitle() {
  let reinsertedChild = removedChild;
  trigger.insertBefore(reinsertedChild, currentFoodIcon);
  removedChild = null;
}

function checkIfChildIsRemoved() {
  if (!removedChild) {
    removeFoodTitle();
  }
}

function checkIfChildIsPresent() {
  if (removedChild) {
    addFoodTitle();
  }
}

function removeFoodOptions() {
  foodOptions = document.querySelectorAll(".custom-option");
  foodOptions.forEach(function (option) {
    let foodSpan = option.childNodes[1];
    let foodIcon = option.childNodes[3];
    //console.log(foodSpan, foodIcon, option.childNodes);
    removedFoodOptions.push(option.removeChild(foodSpan));
    foodOptionsIcons.push(foodIcon);
  });
}

function addFoodOptions() {
  foodOptions = document.querySelectorAll(".custom-option");
  foodOptions.forEach(function (node, index) {
    node.insertBefore(removedFoodOptions[index], foodOptionsIcons[index]);
  });
  foodOptions = null;
}

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
