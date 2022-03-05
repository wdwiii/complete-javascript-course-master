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
// const renderError = error => {
//   const html = `<p class="error">Something went wrong: ${error.message}. <br> Try again.</p>`;
//   const container = document.querySelector('.container');
//   console.error(error);
//   container.insertAdjacentHTML('afterbegin', html);
// };

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
//     .then(data => createCard(data[0], 'neighbour'))
//     .catch(renderError);
// };
//Instead of adding a second callback to each then method, apply the catch() method
//The catch() method will catch any errors no matter where they appear in the promise chain

// btn.addEventListener('click', e => {
//   getCountryData('russia');
// });

//=====================================
//255. Throwing errors manually
//=====================================
const renderError = error => {
  const html = `<p class="error">Something went wrong: ${error.message} <br> Try again.</p>`;
  const container = document.querySelector('.container');
  console.error(error.message);
  container.insertAdjacentHTML('afterbegin', html);
};

//When we want to manually create an error, use 'throw new Error()' it and be caught by the the .catch() handler.
//Throwing an error inside of this callback function of this then(), the method will immediately reject this promise.

//Convert fetch response to JSON
const getJSON = (url, errorMessage = `Country not found`) => {
  return fetch(url).then(response => {
    //console.log(response);
    if (response.ok === false)
      throw new Error(`${errorMessage}: (${response.status})`);
    return response.json();
  });
};

const getCountryData = country => {
  //Initial country
  getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => {
      console.log(data[0]);
      createCard(data[0]);
      const neighbour = data[0].borders;
      console.log(neighbour);
      if (!neighbour) throw new Error(`This country has no neighbours`);
      //Neighbouring country
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour[0]}`,
        `This country has no neighbours`
      );
    })
    .then(data => createCard(data[0], 'neighbour'))
    .catch(renderError);
};
//Links that don’t lead anywhere are known as 'dead links' or 'broken links'. The HTTP status code 404 is often referred to as 'error 404', 'HTTP 404', or '404 code'.
btn.addEventListener('click', e => {
  e.preventDefault();
  getCountryData('usa');
  //getCountryData('australia');
});

//Returns: GET https://restcountries.com/v3.1/name/fvdnvdnjnv 404 (Not Found)

//Even though there was an issue with the request, the fetch function still fulfilled and did not reject

//=====================================
//255. Coding Challenge #1
//=====================================

/* 
In this challenge you will build a function 'whereAmI' which renders a country
only based on GPS coordinates. For that, you will use a second API to geocode
coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
Your tasks:
*/

//PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat') and a longitude value ('lng') (these are GPS coordinates, examples are in test data below).

// const whereAmI = (lat, lng) => {};

//2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do not use the 'getJSON' function we created, that is cheating 😉

/*
const whereAmI = (lat, lng) => {
  //fetch(`https://geocode.xyz/${lat},${lng}?geoit=xml`)
  fetch(`https://geocode.xyz/51.50354,-0.12768?geoit=xml`)
    .then(response => response.json())
    .then(data => {});
};
*/

// 3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: “You are in Berlin, Germany”
// const whereAmI = () => {
//   //fetch(`https://geocode.xyz/${lat},${lng}?geoit=xml`)
//   fetch(`https://geocode.xyz/41.3189957000,2.0746469000?json=1`)
//     .then(response => {
//       console.log(response);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//     });
// };

// whereAmI();

//4. Chain a .catch method to the end of the promise chain and log errors to the console
// const whereAmI = () => {
//   //fetch(`https://geocode.xyz/${lat},${lng}?geoit=xml`)
//   fetch(`https://geocode.xyz/41.3189957000,2.0746469000?json=1`)
//     .then(response => {
//       console.log(response);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//     })
//     .chain(error => console.error(error));
// };

// whereAmI();

//5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does not reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message
// const whereAmI = () => {
//   //fetch(`https://geocode.xyz/${lat},${lng}?geoit=xml`)
//   fetch(`https://geocode.xyz/41.3189957000,2.0746469000?json=1`)
//     .then(response => {
//       console.log(response);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//     })
//     .chain(error => console.error(error));
// };

// whereAmI();

//PART 2
//6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// const whereAmI = (lat = '41.3189957000', lng = '2.0746469000') => {
//   fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(
//           `This API allows you to make only 3 requests per second. Please allow a few moments before refresing (${response.status})`
//         );
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       //getCountryData(data.country);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country cannont be found (${response.status})`);
//       return response.json();
//     })
//     .then(data => createCard(data[0]))
//     .catch(err => console.error(`${err.message}`));
// };

//whereAmI();

//7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
const coordinates1 = [52.508, 13.381];
const coordinates2 = [19.037, 72.873];
const coordinates3 = [-33.933, 18.474];

//whereAmI();
//whereAmI(coordinates1[0], coordinates1[1]);
//whereAmI(coordinates2[0], coordinates2[1]);
//whereAmI(coordinates3[0], coordinates3[1]);

//=====================================
//258. The Event Loop in Practice
//=====================================
//Which order will the following print to the console?
// console.log(`Test Start`);
// setTimeout(() => console.log(`Timer ends in 0 seconds`), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// console.log(`Test End`);

//Test Start
//Test End
//Resolved Promise 1
//Timer Ends

///Test Start & Test End are in the global execution context so they print first

//Promise  get next highest priority so the Promise microtask that is immediately resolved will execute second

//The callback queue will only execute if there is nothing to be executed in promise microtasks queue, so setTimout is executed last (even thought it executes after 0 seconds)

//***********
//The implication of the fact that micro-tasks have priority over regular callbacks, is that if one of the micro-tasks takes a long time to run, then the timer will actually be delayed and not run after the specified time.

//console.log(`Test Start`);
// setTimeout(() => console.log(`Timer ends in 0 seconds`), 0);
// Promise.resolve('Resolved promise 1').then(res => {
//   //simulates a task that takes a long time to complete
//   for (let i = 0; i < 1099999999; i++) {}
//   console.log(res);
// });
// console.log(`Test End`);

// Promise.resolve('Promise number 2').then(res => console.log(res));

//=====================================
//259. Building Our Own Promises
//=====================================
//To build a promise, you will use the new Promise() constructor.
//The function will take two parameters, resolve and reject.
//Resolve will run if the promise succeeds and reject if it fails.

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`We are about to start the lottery`);
//   setTimeout(function () {
//     if (Math.random() >= 0.35 && Math.random() <= 0.66) resolve('You WON!!!!');
//     else reject(new Error('You lost, play again'));
//   }, 3000);
// });

//After the creation of the promise we can use the .then() method to use the resolve value

//lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//“Promisification” is a long word for a simple transformation. It’s the conversion of a function that accepts a callback into a function that returns a promise.

//Promisify the setTimeout function
//When creating a new promise it accepcts a resolution function and a rejection function
//It is impossible for the setTimeout function to fail, so a rejection function does not need to be passed into the promise constructor
const wait = numOfSecs => {
  return new Promise(resolve => setTimeout(resolve, numOfSecs * 1000));
};
//setTimeout doesn't re

// wait(2)
//   .then(() => {
//     console.log(`I waited for 2 seconds`);
//     return wait(1);
//   })
//   .then(() => console.log(`I waited for 1 more second`));

//Promisifying nested callbacks practice
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

// wait(1)
//   .then(() => {
//     console.log(`1 second has passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`2 seconds has passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`3 seconds has passed`);
//     return wait(1);
//   })
//   .then(() => console.log(`4 seconds has passed`));

// //Promises can be resolved or rejected immediatley
// Promise.resolve('I am resolved').then(res => console.log(res));
// Promise.reject(new Error('I am rejected')).catch(err => console.error(err));

//==========================================
//262. Consuming Promises with Async/Await
//==========================================
//Function for geolocation
const getPosition = function () {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition((resolve, reject))
  );
};

//Using the await keyword does NOT block the call stack because the whereAmI function is running asynchronusly
const whereAmI = async function (country) {
  // //Geolocation
  // const pos = await getPosition();
  // const { latitude: lat, longitude: lng } = pos.coords;

  // //Reverse geocoding
  // const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  // const dataGeo = await geo.json();

  //Country Data
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await res.json();
  console.log(data);
  createCard(data[0]);
};

// const whereAmI = async function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(res =>
//   console.log(res))
// };

whereAmI('jamaica');
console.log('FIRST');
