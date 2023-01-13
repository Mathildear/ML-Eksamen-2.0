import "./style.css";

window.onload = function () {
  slideOne();
  slideTwo();
};

let sliderOne = document.querySelector("#slider-1");
let sliderTwo = document.querySelector("#slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 1;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

sliderOne.addEventListener("input", () => slideOne());

sliderTwo.addEventListener("input", () => slideTwo());

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = valueMapToDisplay(sliderOne.value);
  fillColor();
}

function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = valueMapToDisplay(sliderTwo.value);
  fillColor();
}

function fillColor() {
  let percent1 = (sliderOne.value / sliderMaxValue) * 100;
  let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #434c5e ${percent1}% , #a3be8c ${percent1}% , #a3be8c ${percent2}%, #434c5e ${percent2}%)`;
}

const valueMapToDisplay = (value) => {
  console.log(value);
  const number = +value;
  let display;
  switch (true) {
    case number === 0:
      display = "12:00";
      break;
    case number >= 1 && number <= 12:
      display = `${value}:00`;
      break;
    case number > 12:
      display = `${number - 12}:00`;
      break;
  }

  return (display += number < 12 ? " am" : " pm");
};
