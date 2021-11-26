"use strict";

const itemsObj = [
  {
    id: 1,
    img: "/assets/images/itemsimages/lanyard.jpg",
    description: "Rick and Morty Lanyard with ID Holder, Portal Gun Rubber Charm and Sticker ",
    stars: "",
    rating: 320,
    price: 13.95,
  },
  {
    id: 2,
    img: "/assets/images/itemsimages/underwear.jpg",
    description: "Good Luck Undies Men's Rick and Morty Portals Boxer Brief Underwear",
    stars: "",
    rating: 179,
    price: 23.95,
  },
  {
    id: 3,
    img: "/assets/images/itemsimages/picklejar.jpg",
    description: "SDCC Rick and Morty Pickle Rick - Pickle Jar Glass Mason Jar Exclusive",
    stars: "",
    rating: 170,
    price: 29.99,
  },
  {
    id: 4,
    img: "/assets/images/itemsimages/sock1.jpg",
    description: "Men's Rick And Morty Casual Crew Socks (Pickle Rick), 6-12",
    stars: "",
    rating: 1041,
    price: 10.99,
  },
  {
    id: 5,
    img: "/assets/images/itemsimages/hat.jpg",
    description: "Bioworld Rick and Morty I'm Pickle Rick Hat Beanie Green",
    stars: "",
    rating: 174,
    price: 26.95,
  },
  {
    id: 6,
    img: "/assets/images/itemsimages/box.jpg",
    description: "Rick & Morty - Memory Master Card Game",
    stars: "",
    rating: 2,
    price: 12.49,
  },
  {
    id: 7,
    img: "/assets/images/itemsimages/shoes.jpg",
    description: "Rick and Morty Pickle Rick Men's Slippers",
    stars: "",
    rating: 219,
    price: 40.0,
  },
  {
    id: 8,
    img: "/assets/images/itemsimages/towel.jpg",
    description: "Concept One Rick and Morty Logo and Rick Sanchez Head Knitted Cuff Beanie Hat, Black, One Size",
    stars: "",
    rating: 3,
    price: 19.5,
  },
  {
    id: 9,
    img: "/assets/images/itemsimages/socks2.jpg",
    description: "Pickle Rick Grinder - Morty Gifts - Soft Touch Matte Smooth 4 Pieces - 2.2. Inches",
    stars: "",
    rating: 1,
    price: 13.99,
  },
  {
    id: 10,
    img: "/assets/images/itemsimages/gun.jpg",
    description: "Official My Hero Academia Character Pillow - 20-Inch Shoto Todoroki Doll Body Replica",
    stars: "",
    rating: 60,
    price: 37.99,
  },
  {
    id: 11,
    img: "/assets/images/itemsimages/paint.jpg",
    description: "Rick and Morty Poster - Custom Family Portrait Wall Art Decor Merchandise Gifts",
    stars: "",
    rating: 80,
    price: 65.0,
  },
  {
    id: 12,
    img: "/assets/images/itemsimages/bottle.jpg",
    description: "Rick and Morty Pickle Rick Men's Slippers",
    stars: "",
    rating: 219,
    price: 40.0,
  },
];

const rightButton = document.querySelector(".right-btn");
const leftButton = document.querySelector(".left-btn");
const items = document.querySelectorAll(".item");
window.addEventListener("load", setItems);
rightButton.addEventListener("click", changeItems);
leftButton.addEventListener("click", setItems);

function setItems() {
  items.forEach((item, index) => {
    item.innerHTML = `<img src="${itemsObj[index].img}" alt=""/>
    <div class="item-text">${itemsObj[index].description}</div>
    <div class="rating">
    <span class="rat-stars"></span>
    <span class="span rt-nums">${itemsObj[index].rating}</span>
    </div>
    <div class="price">$<span class="item-price">${itemsObj[index].price}</span></div>`;
  });
}
function changeItems() {
  items.forEach((item, index) => {
    item.innerHTML = `<img src="${itemsObj[index + 6].img}" alt=""/>
    <div class="item-text">${itemsObj[index + 6].description}</div>
    <div class="rating">
    <span class="rat-stars"></span>
    <span class="span rt-nums">${itemsObj[index + 6].rating}</span>
    </div>
    <div class="price">$<span class="item-price">${itemsObj[index + 6].price}</span></div>`;
  });
}
