//let customDropdownTrigger = document.querySelector(".custom-dropdown-trigger");
let currentFoodTitle = document.querySelector(".current-food-title");
let trigger = currentFoodTitle.parentNode;
let currentFoodIcon = document.querySelector(".current-food-icon");
let removedChild;

function removeFoodTitle() {
  removedChild = trigger.removeChild(currentFoodTitle);
  console.log(removedChild);
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

function resizeWindow() {
  if (window.innerWidth < 768) {
    checkIfChildIsRemoved();
  } else {
    checkIfChildIsPresent();
  }
}

window.onresize = resizeWindow;
