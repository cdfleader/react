
const chronometer = document.getElementById('chronometer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');


let startTime, elapsedTime = 0, intervalId;


function updateTime() {
  const ms = elapsedTime % 1000;
  const s = Math.floor(elapsedTime / 1000) % 60;
  const m = Math.floor(elapsedTime / (1000 * 60)) % 60;
  const h = Math.floor(elapsedTime / (1000 * 60 * 60));

  chronometer.innerHTML = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
}


function startChronometer() {
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(function() {
    elapsedTime = Date.now() - startTime;
    updateTime();
  }, 10);
}


function stopChronometer() {
  clearInterval(intervalId);
}


function resetChronometer() {
  stopChronometer();
  elapsedTime = 0;
  updateTime();
}


startBtn.addEventListener('click', startChronometer);
stopBtn.addEventListener('click', stopChronometer);
resetBtn.addEventListener('click', resetChronometer);
