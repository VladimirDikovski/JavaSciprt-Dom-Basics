"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

function renderCountry(data, className = "") {
  const html = ` <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
}

// const getCoutryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountry(data[0]);
//     });
// };

// getCoutryData("Portugal");

// consume promise
// const getCoutryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => renderCountry(data[0]));
// };

//fetch chain

const getCoutryData = function (country, className) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((respons) => respons.json())
    .then(([data]) => {
      renderCountry(data);
      const bordersCountry = data.borders;
      if (!bordersCountry) return;
      bordersCountry.forEach((bord) =>
        fetch(`https://restcountries.com/v2/alpha/${bord}`).then((r) =>
          r.json().then((d) => renderCountry(d, "neighbour"))
        )
      );
    });
};

getCoutryData("Bulgaria");
