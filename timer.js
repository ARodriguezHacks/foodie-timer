let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let startBtn = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");
let resetBtn = document.querySelector(".reset-btn");

let currentMinutes;
let currentSeconds;
let minutesTimeoutId;
let secondsTimeoutId;

startBtn.addEventListener("click", startTimer);

function startTimer() {
  startMinutes();
  startSeconds();
}

function startMinutes() {
  currentMinutes = parseInt(minutes.textContent);
  currentMinutes -= 1;
  minutes.textContent = currentMinutes.toString();

  minutesTimeoutId = setInterval(() => {
    currentMinutes = parseInt(minutes.textContent);
    currentMinutes -= 1;

    if (currentMinutes < 10) {
      minutes.textContent = "0" + `${currentMinutes.toString()}`;
    } else {
      minutes.textContent = currentMinutes.toString();
    }

    if (currentMinutes === 0) {
      clearInterval(minutesTimeoutId);
    }
  }, 1000 * 60);
}

function startSeconds() {
  currentSeconds = 59;
  seconds.textContent = currentSeconds.toString();

  secondsTimeoutId = setInterval(() => {
    currentSeconds = parseInt(seconds.textContent);
    currentSeconds -= 1;

    if (seconds.textContent === "00") {
      seconds.textContent = "59";
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

// function stopTimer() {}
export { minutes, seconds, startBtn, stopBtn, resetBtn };
