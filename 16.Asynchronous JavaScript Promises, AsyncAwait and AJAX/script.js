"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/India");
request.send();
console.log(this.responseText);

request.addEventListener("load", function () {
  console.log(this.responseText);
  const data = JSON.parse(this.responseText);
  console.log(data);
});
