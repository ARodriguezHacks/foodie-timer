let settingsTrigger = document.querySelector(".settings-trigger");
let settingsModal = document.querySelector(".settings-modal");
let settingsOptions = document.querySelectorAll(".settings-option");
let currentSettings = document.querySelectorAll(".current");

currentSettings = Array.from(currentSettings);

let foodieBreak = document.querySelector(".foodie-opt");
let snackBreak = document.querySelector(".snack-opt");

settingsTrigger.addEventListener("click", function () {
  settingsModal.classList.toggle("open");
});

for (const option of settingsOptions) {
  option.addEventListener("change", function (e) {
    //console.log(e);
    const parent = option.parentNode;
    let currentItem = currentSettings.find((elem) => {
      return elem.classList.contains(e.target.name);
    });
    //console.log(currentItem.getAttribute("onkeydown"));
    if (e.target.value.length < 2) {
      currentItem.textContent = "0" + `${e.target.value}`;
    } else {
      currentItem.textContent = e.target.value;
    }
  });

  option.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      return;
    } else {
      e.preventDefault();
    }
  });
}

window.addEventListener("click", function (e) {
  if (settingsModal.classList.contains("open")) {
    if (
      !settingsModal.contains(e.target) &&
      !settingsTrigger.contains(e.target)
    ) {
      settingsModal.classList.remove("open");
    }
  }
});

export { settingsTrigger, settingsModal, foodieBreak, snackBreak };
