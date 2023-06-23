const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
const team = players;

// Create a copy of the 'players' array using the spread operator
const team1 = [...players];

// Create a copy of the 'person' object using the spread operator
const cap1 = { ...person };

// Test the variables
console.log(team);   // Output: ['Player 1', 'Player 2', 'Player 3']
console.log(team1);  // Output: ['Player 1', 'Player 2', 'Player 3']
console.log(cap1);   // 
window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
