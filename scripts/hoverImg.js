"use strict";

const smallPicArr = document.querySelectorAll(".sml-pic");
let mainImage = document.querySelector(".main-img-container");

smallPicArr[0].addEventListener("mouseover", () => {
  hoverImg(0);
});
smallPicArr[1].addEventListener("mouseover", () => {
  hoverImg(1);
});
smallPicArr[2].addEventListener("mouseover", () => {
  hoverImg(2);
});
smallPicArr[3].addEventListener("mouseover", () => {
  hoverImg(3);
});
smallPicArr[4].addEventListener("mouseover", () => {
  hoverImg(4);
});
smallPicArr[5].addEventListener("mouseover", () => {
  hoverImg(5);
});

function changeImg(index) {
  mainImage.style.background = `url("/assets/images/hoverimg/hover${index}.jpg") no-repeat center center / contain`;
}

function persistBorder(index) {
  smallPicArr[index].style.border = `1px solid #E67600`;
  smallPicArr[index].style.boxShadow = `0px 0px 13px 0px #FF9151`;
}

function borderReset() {
  smallPicArr.forEach((smallPic) => {
    smallPic.style.border = `1px solid #cccccc`;
    smallPic.style.boxShadow = `none`;
  });
}

function hoverImg(index) {
  changeImg(index);
  borderReset();
  persistBorder(index);
}
