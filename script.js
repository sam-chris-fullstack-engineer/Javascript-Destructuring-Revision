'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Array Destructuring arrays

//without Destructuring:
// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);

//with Destructuring:
// const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, , second] = restaurant.categories;
// console.log(first, second);

// const [third, ,fourth] = restaurant.categories;
// console.log(third, fourth);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//Switching variables without Destructuring:
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Switching variables with Destructuring:
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

//Object Destructuring
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//Let's Destructuring Menu
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Task 1:
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

//Task 2:
const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) {
  average += odd
  average /= odds.length;
  console.log(average);
}

//Task 3:
for(const [team, odd] of Object.entries(game.odds)){
     const teamStr =  team === 'x' ? 'draw' : `victory ${game[team]}`
     console.log(`Odd of ${teamStr} ${odd}`);
    
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5