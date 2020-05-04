let settingsTrigger = document.querySelector(".settings-trigger");
let settingsModal = document.querySelector(".settings-modal");
let settingsWrapper = document.querySelector(".settings-dropdown-wrapper");
let foodieBreak = document.querySelector(".foodie-opt");
let snackBreak = document.querySelector(".snack-opt");

settingsTrigger.addEventListener("click", function () {
  //console.log(e.target);
  settingsModal.classList.toggle("open");
});

//Need to fix form element in HTML. Remove it and replace it where its parent element is not the settings icon.

// window.addEventListener("click", function (e) {
//   console.log(e.target);
//   console.log(settingsModal.contains(e.target));
//   // const select = document.querySelector(".settings-dropdown");
//   // if (!select.contains(e.target)) {
//   //settingsModal.classList.remove("open");
//   //}
// });

export { settingsTrigger, settingsModal, foodieBreak, snackBreak };
