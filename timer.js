const sessionOptions = document.querySelectorAll(".session-opt");
let timerMinutes = document.querySelector(".timer span.minutes");
let timerSeconds = document.querySelector(".timer span.seconds");

let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let startBtn = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");
let resetBtn = document.querySelector(".reset-btn");

if (minutes.textContent.length < 2) {
  minutes.textContent = "0" + `${minutes.textContent}`;
}

let initialMinutes = minutes.textContent;
let initialSeconds = seconds.textContent;

let currentMinutes;
let currentSeconds;
let secondsTimeoutId; //rename

let timerHasStarted = false;
let timerHasStopped = false;

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

for (const option of sessionOptions) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
        .querySelector(".session-opt.selected")
        .classList.remove("selected");
      this.classList.add("selected");
    }
    timerMinutes.textContent = this.querySelector(
      ".break-content"
    ).querySelector(".current-mins").textContent;

    initialMinutes = timerMinutes.textContent;

    timerSeconds.textContent = this.querySelector(
      ".break-content"
    ).querySelector(".current-secs").textContent;

    initialSeconds = timerSeconds.textContent;
    console.log(timerMinutes);
  });
}

function startTimer() {
  timerHasStarted = true;
  startBtn.setAttribute("disabled", "");
  startSeconds();
}

//rename
function startMinutes() {
  currentMinutes = parseInt(minutes.textContent);
  currentMinutes -= 1;
  if (currentMinutes < 10) {
    minutes.textContent = "0" + `${currentMinutes.toString()}`;
  } else {
    minutes.textContent = currentMinutes.toString();
  }
}

//rename
function startSeconds() {
  if (seconds.textContent === "00") {
    startMinutes();
    currentSeconds = 59;
    seconds.textContent = currentSeconds.toString();
  }

  secondsTimeoutId = setInterval(() => {
    currentSeconds = parseInt(seconds.textContent);
    currentSeconds -= 1;

    if (seconds.textContent === "00") {
      if (minutes.textContent === "00") {
        stopTimer();
      } else {
        startMinutes();
        seconds.textContent = "59";
      }
    } else {
      if (currentSeconds < 10) {
        seconds.textContent = "0" + `${currentSeconds.toString()}`;
      } else {
        seconds.textContent = currentSeconds.toString();
      }
    }
  }, 1000);
}

function resetTimer() {
  startBtn.removeAttribute("disabled");
  timerHasStarted = false;
  clearInterval(secondsTimeoutId);
  minutes.textContent = document.querySelector(
    ".session-opt.selected span.current-mins"
  ).textContent;
  seconds.textContent = document.querySelector(
    ".session-opt.selected span.current-secs"
  ).textContent;
}

function stopTimer() {
  startBtn.removeAttribute("disabled");
  timerHasStopped = true;
  clearInterval(secondsTimeoutId);
}

export { minutes, seconds, startBtn, stopBtn, resetBtn };
