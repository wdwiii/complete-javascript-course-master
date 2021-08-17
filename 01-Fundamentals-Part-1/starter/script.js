/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */

// const koalas = {
//   name: "Koalas",
//   scores: [99, 110, 123],
//   avgScore: function () {
//     return ((this.scores[0] + this.scores[1] + this.scores[2]) / this.scores.length).toFixed(3)
//   }
// };

// const dolphins = {
//   name: "Dolphins",
//   scores: [100, 102, 71],
//   avgScore: function () {
//     return ((this.scores[0] + this.scores[1] + this.scores[2]) / this.scores.length).toFixed(3)
//   }
// }

// const winnerIs = function (team1, team2) {
//   if (team1.avgScore() > team2.avgScore()) {
//     console.log(`The ${team1.name} have defeated the ${team2.name} by a margin of ${(team1.avgScore() - team2.avgScore()).toFixed(3)}`);
//   } else if (team1.avgScore() === team2.avgScore()) {
//     console.log(`The competition between the ${team1.name} and the ${team2.name} has concluded in a draw. Both teams acheived an average score of ${((Number(team1.avgScore()) + Number(team2.avgScore())) / 2).toFixed(3)}`);
//   } else if (team2.avgScore() > team1.avgScore()) {
//     console.log(`The ${team2.name} have defeated the ${team1.name} by a margin of ${(team2.avgScore() - team1.avgScore()).toFixed(3)}`);
//   }
// }

// console.log(dolphins.name, dolphins.avgScore(), koalas.name, koalas.avgScore())
// winnerIs(dolphins, koalas)
// winnerIs(koalas, dolphins)
// console.log(dolphins, koalas)

//=========================================

/*const day = "monday";

switch (day) {
  case 'monday':
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case 'tuesday':
    console.log(`Create theory videos`);
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case "friday":
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log("It's rest day, you deserve it!");
    break;
  default:
    console.log('Invalid day')
}

if (day === 'monday') {
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if (day === 'tuesday') {
  console.log(`Create theory videos`);
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === "friday") {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log("It's rest day, you deserve it!");
} else {
  console.log('Invalid day')
} */

// const age = 19;
// // age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water 🌊`);

// const drink = age >= 18 ? 'wine' : 'water';

// console.log(`I like to drink ${drink}`);