const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const pause = document.querySelector(".pause");
const display_time = document.querySelector(".display_time");

let timer = null;
let [sec, min, hrs] = [0, 0, 0];

startTimer = () => {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      min = 0;
      hrs++;
    }
  }
  let hours = hrs < 10 ? "0" + hrs : hrs;
  let mins = min < 10 ? "0" + min : min;
  let secs = sec < 10 ? "0" + sec : sec;
  display_time.innerHTML = `${hours} : ${mins} : ${secs}`;
};

start.addEventListener("click", () => {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(startTimer, 1000);
});

pause.addEventListener("click", () => {
  timer = clearInterval(timer);
});

reset.addEventListener("click", () => {
  timer = clearInterval(timer);
  [sec, min, hrs] = [0, 0, 0];
  display_time.innerHTML = "00 : 00 : 00";
});
