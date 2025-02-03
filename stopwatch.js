window.onload = function () {
  // Variables to access HTML elements
  let minutes = 0;
  let seconds = 0;
  let tens = 0;

  let appendMinutes = document.getElementById("minutes");
  let appendSeconds = document.getElementById("seconds");
  let appendTens = document.getElementById("tens");

  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");
  let buttonReset = document.getElementById("button-reset");

  let Interval;

  // Start the stopwatch
  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  // Stop the stopwatch
  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  // Reset the stopwatch
  buttonReset.onclick = function () {
    clearInterval(Interval);
    minutes = 0;
    seconds = 0;
    tens = 0;
    updateDisplay();
  };

  function startTimer() {
    tens++;

    if (tens > 99) {
      tens = 0;
      seconds++;
    }

    if (seconds > 59) {
      seconds = 0;
      minutes++;
    }

    updateDisplay();
  }

  function updateDisplay() {
    appendTens.innerHTML = tens.toString().padStart(2, "0");
    appendSeconds.innerHTML = seconds.toString().padStart(2, "0");
    appendMinutes.innerHTML = minutes.toString().padStart(2, "0");
  }
};
