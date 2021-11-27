"use strict";

const smallPicArr = document.querySelectorAll(".sml-pic");
let mainImage = document.querySelector(".main-img-container");

smallPicArr[0].addEventListener("mouseover", () => {
  changeImg(0);
});
smallPicArr[1].addEventListener("mouseover", () => {
  changeImg(1);
});
smallPicArr[2].addEventListener("mouseover", () => {
  changeImg(2);
});
smallPicArr[3].addEventListener("mouseover", () => {
  changeImg(3);
});
smallPicArr[4].addEventListener("mouseover", () => {
  changeImg(4);
});
smallPicArr[5].addEventListener("mouseover", () => {
  changeImg(5);
});

function changeImg(index) {
  mainImage.style.background = `url("/assets/images/hoverimg/hover${index}.jpg") no-repeat center center / contain`;
}
