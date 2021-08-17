/*LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console*/

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its
//   capital city is ${capitalCity}`
// };

// const usa = describeCountry('The United States of America', 91, 'Washington DC')
// const germany = describeCountry('Germany', 32, 'Berlin')
// const wakanda = describeCountry('Wakanda', 'a few', 'Panther Cove')

// console.log(usa, germany, wakanda)

/*LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population

2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100

3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console

4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)*/

// function percentageOfWorld1(country, population) {
//   const worldPopulation = 7900
//   return `${country} has ${population} million people, so it's about ${((population / worldPopulation) * 100).toFixed(0)}% of the world's population.`
// }

// const percentageOfWorld1 = function (country, population) {
//   const worldPopulation = 7900
//   return `${country} has ${population} million people, so it's about ${((population / worldPopulation) * 100).toFixed(0)}% of the world's population.`
// }

// const usPopulation = (percentageOfWorld1("United States of America", 989))

// const chinaPopulation = (percentageOfWorld1("China", 1441))

// const haitiPopulation = (percentageOfWorld1("Haiti", 98))

//console.log(usPopulation, chinaPopulation, haitiPopulation)

// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'

// const percentageOfWorld3 = (country, population) => {
//   const worldPopulation = 7900
//   return `${country} has ${population} million people, so it's about ${((population / worldPopulation) * 100).toFixed(0)}% of the world's population.`
// }

// const usPopulation2 = (percentageOfWorld3("United States of America", 989))

// const chinaPopulation2 = (percentageOfWorld3("China", 1441))

// const haitiPopulation2 = (percentageOfWorld3("Haiti", 98))

// console.log(usPopulation2, chinaPopulation2, haitiPopulation2)

/*LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'

2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier

3. Call 'describePopulation' with data for 3 countries of your choice*/

// const percentageOfWorld = function (population) {
//   const worldPopulation = 7900
//   return ((population / worldPopulation) * 100).toFixed(1)
// }



// const describePopulation = function (country, population) {
//   const calcPercent = percentageOfWorld(population)
//   return `${country} has ${population} million people,
//   which is about ${calcPercent}% of the world.`
// }

// console.log(describePopulation("Turkey", 69))

//========================
/*LECTURE: Introduction to Arrays

1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'

2. Log to the console whether the array has 4 elements or not (true or false)

3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values*/

const populations = [1665, 3950, 2111, 1369]

console.log(populations.length === 4);

const percentageOfWorld = function (population) {
  const worldPopulation = 7900
  return ((population / worldPopulation) * 100).toFixed(1)
}

populations.forEach(function (population) {
  console.log(`${percentageOfWorld(population)}%`)
})