let wins = 0;
let losses = 0;
//let guesses = userInput;
let chances = 9;


//Computer Pick
let str = "abcdefghijklmnopqrstuvwxyz";
let letters = str.split("");
let computerPlay = letters[Math.floor(Math.random() * letters.length)];

console.log(computerPlay);

//Person Guess

document.onkeyup = function(event) {
    let userPlay = event.key.toLowerCase();
    console.log(userPlay);
};