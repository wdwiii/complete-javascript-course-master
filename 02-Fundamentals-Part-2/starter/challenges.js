`use strict`
/* JavaScript Fundamentals – Part 2
=========================

Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2

5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

//Arrow function
const calcAverage = (team) => {
  return (team.game1 + team.game2 + team.game3) / 3;
}

const dolphins = {
  name: "Dolphins",
  game1: 44,
  game2: 23,
  game3: 71,
}

const dolphinsV2 = {
  name: "Dolphins V2",
  game1: 85,
  game2: 54,
  game3: 41,
}

const koalas = {
  name: "Koalas V2",
  game1: 65,
  game2: 54,
  game3: 49
}

const koalasV2 = {
  name: "Koalas V2",
  game1: 23,
  game2: 34,
  game3: 27
}

const dolphinsAvg = calcAverage(dolphins)
const koalasAvg = calcAverage(koalas)

const dolphinsAvg2 = calcAverage(dolphinsV2)
const koalasAvg2 = calcAverage(koalasV2)


const checkWinner = function (dolphinsAvg, koalasAvg) {
  if (dolphinsAvg >= (koalasAvg * 2)) {
    console.log(`And your winner is... THE DOLPHINS! They beat the Koalas ${dolphinsAvg} - ${koalasAvg}`)
  } else if (dolphinsAvg * 2 <= koalasAvg) {
    console.log(`And your winner is... THE KOALAS! They beat the Dolphins ${koalasAvg} - ${dolphinsAvg}`)
  } else {
    console.log(`There is no winner`)
  }
}

checkWinner(dolphinsAvg, koalasAvg)
checkWinner(dolphinsAvg2, koalasAvg2)
