const circle = document.querySelector(".preload-circle");
const preload = document.querySelector(".preload");
const radius = circle.r.baseVal.value;
const wrapper = document.querySelector(".wrapper");
const lengthCircle = 2 * Math.PI * radius;

circle.style.strokeDashoffset = lengthCircle;
circle.style.strokeDasharray = `${lengthCircle} ${lengthCircle}`;

function setProgress(percent) {
  const offset = lengthCircle - (percent / 100) * lengthCircle;
  circle.style.strokeDashoffset = offset;
}

wrapper.style.display = 'none';
let i = 0;
let timeId = setInterval(() => {
  if (i == 101) {
    preload.style.display = "none";
    wrapper.style.display = "flex";

  }
  setProgress(i);
  i++;
}, 50);

