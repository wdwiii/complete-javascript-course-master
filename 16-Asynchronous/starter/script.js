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

//getCountryandNeighbor('nepal');

//Example 2 of Callback Hell
// setTimeout(() => {
//   console.log(`1 Second has passed`);
//   setTimeout(() => {
//     console.log(`2 Seconds has passed`);
//     setTimeout(() => {
//       console.log(`3 Seconds has passed`);
//       setTimeout(() => {
//         console.log(`4 Seconds has passed`);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

///////////////////////////////////////
//251. Promises and the Fetch API
//////////////////////////////////////
//Fetch API is the modern way of making AJAX calls

//XML
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/senegal`);
// request.send();

// request.addEventListener('load', function () {});

//FetchAPI
// const request = fetch('https://restcountries.com/v3.1/name/senegal');

// console.log(request); //Promise{<pending>}

//A promise is a placeholder for a single value that will be produced some time in the future (asynchronus operation)

//Advantages of promises
//1. No longer have to rely on callbacks to handle asynchronus results, which reduces the amount of unpredictible results
//2. Promises can be chained for a sequence of asynchronous operations instead of nesting callbacks (callback hell)

//Promises have two states settled(when the promise has successfully retrieved the data) and rejected(error in the asynchronus operation)

///////////////////////////////////////
//251. Consuming Promises
//////////////////////////////////////
//Function Notes
//1. call fetchAPI and pass in the api address as a string, will return a promise.
//2. call .then() method on the returned promise.
//3. in the callback function calls the .json() method the param that was passed in. Will return a second promise.
//3. apply a second .then() method to the promise that was passed in. Will return an array with the requested data

// const getCountryData = country => {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(...data);
//       createCard(...data);
//     });
// };

// const getCountryData = country => {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => createCard(data.at(0)));
// };
// getCountryData('russia');

///////////////////////////////////////
//253. Chaining Promises
//////////////////////////////////////

// const getCountryData = country => {
//   //Initial country
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       createCard(data.at(0));
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       //Neighbouring country
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => createCard(data[0], 'neighbour'));
// };

//1. After the initial fetch, a promise is returned, this allows us to use the then method.
//2. The next step is to attatch the .json() method to the response value
//3a. The .then() method is applied again to call the create card w/ the retreived data passed in
//3b. add condition: if the initial country does NOT have a neighbor, return immediately
//3c. return a new fetch (directing to api address of the neighboring country)
//4a. Since a fetch was returned, the value of that return will be a promise. The then method can be applied again.
//4b. Repeat steps 2 and 3a for

//To have a flat chain of promises, you must return a promise and attach the .then method to the outside of the callback

//=====================================
//254. Handling Rejected Promises
//=====================================
//The only way the fetch promise rejects is when the user loses internet connection.

//Handling fetch errors
//Pass a second callback function into the .then() method, the second callback is the error itself
//EXAMPLE
//fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => response.json(), err => alert(err))
const renderError = error => {
  const html = `<p class="error">Something went wrong: ${error.message}. <br> Try again.</p>`;
  const container = document.querySelector('.container');
  console.error(error);
  container.insertAdjacentHTML('afterbegin', html);
};

const getCountryData = country => {
  //Initial country
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      createCard(data.at(0));
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      //Neighbouring country
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => createCard(data[0], 'neighbour'))
    .catch(renderError);
};
//Instead of adding a second callback to each then method, apply the catch() method
//The catch() method will catch any errors no matter where they appear in the promise chain

btn.addEventListener('click', e => {
  getCountryData('russia');
});
