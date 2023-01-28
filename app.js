const daysEl = document.querySelector(".days span");
const hoursEl = document.querySelector(".hours span");
const minutesEl = document.querySelector(".minutes span");
const secondsEl = document.querySelector(".seconds span");

const newYear = new Date("Jan 1 ,2025 00:00:00").getTime();
newYearCount();
function newYearCount() {
  const now = new Date().getTime();
  const gap = newYear - now;

  const s = 1000;
  const m = s * 60;
  const h = m * 60;
  const d = h * 24;

  let day = Math.floor(gap / d);
  let hour = Math.floor((gap % d) / h);
  let minutes = Math.floor((gap % h) / m);
  let second = Math.floor((gap % m) / s);

  day = day < 10 ? "0" + day : day;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  second = second < 10 ? "0" + second : second;

  daysEl.textContent = day;
  hoursEl.textContent = hour;
  minutesEl.textContent = minutes;
  secondsEl.textContent = second;

  setTimeout(() => {
    newYearCount();
  }, 1000);
}
