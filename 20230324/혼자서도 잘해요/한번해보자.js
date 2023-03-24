let btnList = document.querySelectorAll(".btnSlider");
let sliderList = document.querySelector("#sliderList");
let btnSliderList = document.querySelectorAll(".btnSlider");
let index = 0;
btnList.forEach((btn, idx) => {
  btn.addEventListener("click", function () {
    console.log(index);
    index = idx;
    sliderList.style.transform = `translate(${index * -100}%)`;
  });
});

btnSliderList.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("prev")) {
      index > 0 && --index;
    } else if (btn.classList.contains("next")) {
      index < 2 && ++index;
    }

    sliderList.style.transform = `translate(${index * -100}%)`;
  });
});
