function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;
body.style

const startColor = () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

if (timerId !== null) {
    
}

const stopColor = () => {
  clearInterval(timerId);
};

btnStart.addEventListener('click', startColor);
btnStop.addEventListener('click', stopColor);
