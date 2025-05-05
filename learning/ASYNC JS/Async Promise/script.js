"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

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

const whereIm = async function (country) {
  try {
    const location = await fetch(
      `https://restcountries.com/v2/name/${country}`
    );
    const data = await location.json();
    renderCountry(data[0], "");
    const borders = data[0].borders;
    if (!borders) return;
    for (const bord of borders) {
      const neighborRes = await fetch(
        `https://restcountries.com/v2/alpha/${bord}`
      );
      if (!neighborRes.ok) throw new Error("Neighbor country not found");
      const neighBorData = await neighborRes.json();
      renderCountry(neighBorData, "neighbour");
    }
  } catch (err) {
    console.error(err);
    countriesContainer.insertAdjacentText("beforeend", `❌ ${err.message}`);
  }
};

whereIm("Bulgaria");
