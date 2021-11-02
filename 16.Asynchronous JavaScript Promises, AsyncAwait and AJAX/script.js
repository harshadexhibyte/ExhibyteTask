"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
function getCountryData(country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data[0]);

    const html = `
<div class="container">
  <div class="row">
    <div class="col-sm">
      <article class="country">
      <img class="country__img" src="${data[0].flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data[0].name.common}</h3>
          <h4 class="country__region">${data[0].region}</h4>
          <p class="country__row"><span>👫</span>${
            +data[0].population / 1000000
          }</p>
          <p class="country__row"><span>🗣️</span>${data[0].languages.hin}</p>
          <p class="country__row"><span>💰</span>${data[0].currencies.INR}</p>
        </div>
  </article>
  <br>
    </div>
  </div>
</div>
`;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
}

const allRequest = new XMLHttpRequest();
allRequest.open("GET", `https://restcountries.com/v3.1/all`);
allRequest.send();
allRequest.addEventListener("load", function () {
  console.log(this.responseText);
  const Alldata = JSON.parse(this.responseText);
  console.log(Alldata, "---");

  for (let i of Alldata) {
    // getCountryData(i.name.common);
    // console.log(i);
  }
  getCountryData("india");

  var Onedata = fetch("https://restcountries.com/v3.1/name/india");
  console.log(Onedata);
});

const fatchCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data, "JSON");
    });
};
fatchCountryData("india");

const getPositions = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => console.log(position),
    //   (err) => console.error(err)
    // );
  });
  navigator.geolocation.getCurrentPosition(resolve, reject);
};
// getPositions().then((pos) => console.log(pos));

const whereAmI = function () {
  getPositions().then((pos) => {
    const { latitude: lat, longitude: lng } = pos.coords;
  });

  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message} 💥`));
};

// btn.addEventListener("click", whereAmI);

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Function : Your promise has been resolved");
        resolve();
      } else {
        console.log("Function : Your promise has not  been resolved");
        reject("sorry not fulfilled");
      }
    }, 10);
  });
}

func1()
  .then(function () {
    console.log("Harshad : Thanks For Resolving");
  })
  .catch(function () {
    console.log("Harshad: it's vary bad , not resolving");
  });

var promise = new Promise(function (resolve, reject) {
  const x = "Harshad";
  const y = "Harshad";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Successfully");
  })
  .catch(function () {
    console.log("Some error");
  });

function asynchronous() {
  console.log("One");
  setTimeout(() => {
    console.log("Two");
  }, 200);
  console.log("Three");
}
asynchronous();

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("lottery Draw is happening");
  setTimeout(function () {
    if (Math.random >= 0.5) {
      resolve("You Win");
    } else {
      reject(new Error("You Lost Your Money"));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

async function example() {
  console.log("Inside The Example Functions");
  const responce = await fetch("https://api.github.com/users");
  console.log("Before Responce ");
  const users = responce.json();
  console.log("users Resolved");
  return users;
}
console.log(example());

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );
    // console.log(data1.capital, data2.capital, data3.capital);

    Promise.all(
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)
    );
  } catch (err) {
    console.error(err);
  }
};

get3Countries("india", "canada", "usa");
 