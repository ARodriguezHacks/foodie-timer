let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let startBtn = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");
let resetBtn = document.querySelector(".reset-btn");

if (minutes.textContent.length < 2) {
  minutes.textContent = "0" + `${minutes.textContent}`;
}

console.log(minutes.textContent, seconds.textContent);

let currentMinutes;
let currentSeconds;
let secondsTimeoutId; //rename

let timerHasStarted = false;
let timerStopped = false;

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);

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

// function resetTimer() {}

function stopTimer() {
  startBtn.removeAttribute("disabled");
  timerStopped = true;
  clearInterval(secondsTimeoutId);
}

export { minutes, seconds, startBtn, stopBtn, resetBtn };
