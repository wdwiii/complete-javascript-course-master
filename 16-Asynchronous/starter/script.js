'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//248. First AJAX Call
//////////////////////////////////////
const getCountryData = country => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const [currencyCode] = Object.values(data.currencies);

    const languages = Object.values(data.languages).join(', ');

    const population = Number(data.population / 1000000).toFixed(1);

    const card = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${population} million people</p>
      <p class="country__row"><span>🗣️</span>${languages}</p>
      <p class="country__row"><span>💰</span>${currencyCode.name}</p>
    </div>
  </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', card);
    countriesContainer.style.opacity = '1';
  });
};

getCountryData('jamaica');
getCountryData('japan');
