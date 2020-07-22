import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Teams name for 2014 world cup final */
// const name = fifaData.filter((item) => {
//     if (item["Stage"] === "Final" && item["Year"] === 2014) {
//         return item["Home Team Name"]
//     };
// });
// console.log(name)
/*(b) Away Team name for 2014 world cup final*/
// const name = fifaData.filter((item) => {
//     if (item["Stage"] === "Final" && item["Year"] === 2014) {
//         return item["Away Team Name"]
//     };
// });
// console.log(name)
/*(c) Home Team goals for 2014 world cup final*/
// const name = fifaData.filter((item) => {
//     if (item["Stage"] === "Final" && item["Year"] === 2014) {
//         return item["Home Team Goals"]
//     };
// });
// console.log(name)
/*(d) Away Team goals for 2014 world cup final*/
// const name = fifaData.filter((item) => {
//     if (item["Stage"] === "Final" && item["Year"] === 2014) {
//         return item["Away Team Goals"]
//     };
// });
// console.log(name)
/*(e) Winner of 2014 world cup final */


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

const getFinals = fifaData.filter((data) => {
    return data["Stage"] === "Final"
});

console.log(getFinals)

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {

    const years = cb.map((item) => {
        return item["Year"];
    });
    return years
}
console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
    
const winners = cb.map((item) => {

    // console.log(item)
    if (item["Home Team Goals"] > item["Away Team Goals"]) {
        return item["Home Team Name"]
    }
    else {
        return item["Away Team Name"]
    }; 
});
return winners

};

console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winCB,yearsCB) {
    const winner=winCB(getFinals)
    const year=yearsCB(getFinals)
    return winner.map((item,index)=>{
        return `In ${year[index]}, ${item} won the world cup`
    })

};

console.log(getWinnersByYear(getWinners,getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

const getAverageGoals = fifaData.reduce((currentTotal, item) => {
    return currentTotal + (item["Home Team Goals"] + item["Away Team Goals"])/fifaData.length;
}, 0);

console.log(getAverageGoals);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
