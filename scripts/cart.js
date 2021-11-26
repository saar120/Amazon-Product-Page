"use strict;";

let cartNum = document.querySelector(".cart-count");

const incBtn = document.querySelector(".add-to-cart");
const decBtn = document.querySelector(".buy-now");

function increment() {
  cartNum.textContent++;
}
function decrement() {
  +cartNum.textContent === 0 ? 0 : cartNum.textContent--;
}

const incClick = incBtn.addEventListener("click", increment);
const decClick = decBtn.addEventListener("click", decrement);
