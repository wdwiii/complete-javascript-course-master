'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//248. First AJAX Call
//////////////////////////////////////
// const getCountryData = country => {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const [currencyCode] = Object.values(data.currencies);

//     const languages = Object.entries(data.languages)[0][1];

//     const population = Number(data.population / 1000000).toFixed(1);

//     const card = `
//   <article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.official}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${population} million people</p>
//       <p class="country__row"><span>🗣️</span>${languages}</p>
//       <p class="country__row"><span>💰</span>${currencyCode.name}</p>
//     </div>
//   </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', card);
//     countriesContainer.style.opacity = '1';
//   });
// };

// getCountryData('jamaica');
// getCountryData('japan');

///////////////////////////////////////
//250. Welcome to Callback Hell
//////////////////////////////////////
const createCard = (data, className = '') => {
  const card = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)} million people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(
        data.languages
      ).join(', ')}</p>
      <p class="country__row"><span>💰</span>${Object.keys(data.currencies)}</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', card);
  countriesContainer.style.opacity = '1';
};

//When we have lots of nested callbacks in order to execute asynchronus tasks in sequence it is called 'Callback Hell'

const getCountryandNeighbor = country => {
  //AJAX call for the initial country
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    //Creates the card for the country that was passed as a parameter
    createCard(data);

    //Get neighboring country
    const [neighbour] = data.borders;

    if (!neighbour) return;

    //This fHTTP request doesnt begin until the first request has finished
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      createCard(data2, 'neighbour');
    });
  });
};

getCountryandNeighbor('nepal');

//Example 2 of Callback Hell
setTimeout(() => {
  console.log(`1 Second has passed`);
  setTimeout(() => {
    console.log(`2 Seconds has passed`);
    setTimeout(() => {
      console.log(`3 Seconds has passed`);
      setTimeout(() => {
        console.log(`4 Seconds has passed`);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
