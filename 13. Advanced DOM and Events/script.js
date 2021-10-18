"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const openModal = function (e) {
  //   e.prevenrDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSelection = document.querySelector(".selection");
console.log(allSelection);
// document.documentElement("section--1");

const allbuttons = document.getElementsByTagName("button");
console.log(allbuttons);

console.log(document.getElementsByClassName("btn"), "By Class Name");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent = "We Used Cookie for improved functionality and analytic";
console.log(message);
message.innerHTML =
  'We Used Cookie for improved functionality and analytic .<button class="btn btn--close-cookie"> Got it !</button>';
header.prepend(message);
header.append(message);
message.style.padding = "15px";

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color, "Color");
console.log(getComputedStyle(message).height, "Height");
console.log(getComputedStyle(message).width, "Width");
console.log(getComputedStyle(message).border, "Border");

message.style.height = Number.parseFloat(
  getComputedStyle(message).height,
  10 + 40 + "px"
);

document.documentElement.style.setProperty("--color-primary", "orangered");

const logo = document.querySelector(".nav__logo");
console.log(logo.alt, "Image Alt");
console.log(logo.src, "Image Src");
console.log(logo.className, "Image Class Name");

logo.alt = "Beautiful minimalist logo";

console.log(logo.designer, "Image designer");
console.log(logo.getAttribute("designer"));

console.log(logo.alt);
logo.setAttribute("company", "Exhibyte");

logo.getAttribute("src");

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));
console.log(logo.dataset.versionNumber);

logo.classList.add("C", "J");
logo.classList.remove("C", "J");
logo.classList.toggle("C");
logo.classList.contains("C");

logo.className = "Harshad";

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log("current scroll(x/y)", window.pageXOffset, window.pageYOffset);
  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smoooth",
  // });
  section1.scrollIntoView({ behavior: "smooth" });
});

const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("Great you are reading");
};

h1.onmouseenter = function (e) {
  alert("great on mouse enter is calling");
};

h1.addEventListener("mouseenter", alertH1);
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

const rendomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const rendomColor = () =>
  `rgb(${rendomInt(0, 225)},${rendomInt(0, 225)},${rendomInt(0, 225)})`;

console.log(rendomColor(0, 225));

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = rendomColor();
  console.log("LINK", e.target, e.currentTarget);
});
document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = rendomColor();
  console.log("CONTAINER", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = rendomColor();
  console.log("NAV", e.target, e.currentTarget);
});

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     console.log("LINK");
//     e.preventDefault;
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth",
//     });
//     console.log("LINK");
//   });
// });

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
});

// if (target.classList.contains("nav__link")) {
//   const id = this.getAttribute("href");
//   document.querySelector(id).scrollIntoView({
//     behavior: "smooth",
//   });
// }

console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.firstElementChild.style.color = "orangered";

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var (--gradient-secondary)";
h1.closest(".header").style.background = "var (--gradient-primary)";

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scal(0.5)";
});

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelectorAll(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__tab__content");

// tabs.forEach((t) => t.addEventListener("click", () => console.log("TAB")));
// tabsContainer.addEventListener("click", function (e) {
//   const clicked = e.target.previousElement;
//   console.log(clicked);
//   if (!clicked) return;

//   tabs.forEach((t) => t.classList.remove("operations_tab--active"));
//   clicked.classList.add("operations_tab--active");
// });

console.log(h1);
h1.firstElementChild.style.color = "black";
console.log(window.scrollY);
console.log(window.scrollX);

const obsOpobsCallBack = function() {}

const obsOptions = {}
const observer = new IntersectionObserver();
