let settingsTrigger = document.querySelector(".settings-trigger");
let settingsModal = document.querySelector(".settings-modal");
let settingsOptions = document.querySelectorAll(".settings-option");
let currentSettings = document.querySelectorAll(".current");
currentSettings = Array.from(currentSettings);

let foodieBreak = document.querySelector(".foodie-opt");
let snackBreak = document.querySelector(".snack-opt");

settingsTrigger.addEventListener("click", function () {
  //console.log(e.target);
  settingsModal.classList.toggle("open");
});

for (const option of settingsOptions) {
  option.addEventListener("change", function (e) {
    const parent = option.parentNode;
    let currentItem = currentSettings.find((elem) => {
      return elem.classList.contains(e.target.name);
    });
    if (e.target.value.length < 2) {
      currentItem.textContent = "0" + `${e.target.value}`;
    } else {
      currentItem.textContent = e.target.value;
    }
  });
}

function changeMinsSettings() {}

// window.addEventListener("click", function (e) {
//   console.log(e.target);
//   console.log(settingsModal.classList.contains("open"));
//   //const wrapper = document.querySelector(".custom-dropdown-wrapper");
//   if (!settingsModal.contains(e.target)) {
//     settingsModal.classList.remove("open");
//   }
// });

export { settingsTrigger, settingsModal, foodieBreak, snackBreak };
