let timerInterval;
let minutes = 25;
let seconds = 0;
let workTime = true;

function updateTimerDisplay() {
  const timerDisplay = document.getElementById('timer');
  timerDisplay.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        if (workTime) {
          minutes = 5;
          workTime = false;
        } else {
          minutes = 25;
          workTime = true;
        }
      }
      if (seconds === 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      updateTimerDisplay();
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = undefined;
}

document.getElementById('startButton').addEventListener('click', () => {
  if (!timerInterval) {
    startTimer();
    document.getElementById('startButton').innerText = 'Pause';
  } else {
    stopTimer();
    document.getElementById('startButton').innerText = 'Resume';
  }
});


updateTimerDisplay();
