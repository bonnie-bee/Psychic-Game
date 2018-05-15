
//Stuff I want on the screen when it loads
window.onload = function() {
    swal({
        title: "It looks like you want to play a game. Guess the letter I'm thinking.",
        background: "#fff9a1",
    });
    let html = 
        "<p class=instructions>Press any letter to guess what I'm thinking</p>" +
        "<p class=info>You picked:  </p>" +
        "<p class=info>Guesses left: </p>" +
        "<p class=info>You've tried: </p>" +
        "<p class=info> Wins: </p>" +
        "<p class=info> Losses: </p>";
        
        document.querySelector("#game").innerHTML = html;
};






//Setting variables for scores/guesses
let wins = 0;
let losses = 0;
let guesses = [];
let chances = 9;





//Computer guess
let str = "abcdefghijklmnopqrstuvwxyz";
let letters = str.split("");
let computerPlay = letters[Math.floor(Math.random() * letters.length)];









//Reset Code
function reset(){
    chances = 9;
    guesses = [];
    str = "abcdefghijklmnopqrstuvwxyz";
    letters = str.split("");
    computerPlay = letters[Math.floor(Math.random() * letters.length)];
    userPlay = null;
}
console.log("before game", computerPlay);









//User Guess
document.onkeyup = function(event) {

    let userPlay = event.key.toLowerCase();
    




//Game Mechanism

//Answer Right
    if (computerPlay === userPlay){
        wins++;
        reset();
    } 

//Answer Wrong
    if ((guesses.indexOf(userPlay) === -1) && (letters.indexOf(userPlay) > -1)) {
		guesses.push(userPlay);
		chances--;
	}
    

//Out of Chances
    if (chances === 0){
        swal({
            title: '<i>Sorry</i>. I was thinking of "' + computerPlay + '". If only I could have <i>helped</i> you.',
            background: "#fff9a1",
        });
        losses++;
        reset();
    }



    console.log("user", userPlay);
    console.log("after game", computerPlay);
    console.log('guesses', guesses);




//Updating scores/game info for the user
    let html = 
        "<p class=instructions>Press any letter to guess what I'm thinking</p>" +
        "<p class=info>You picked: " + userPlay + "</p>" +
        "<p class=info>Guesses left: " + chances+ "</p>" +
        "<p class=info>You've tried:" + guesses + "</p>" +
        "<p class=info> Wins: " + wins + "</p>" +
        "<p class=info> Losses: " + losses + "</p>";
        
            
    document.querySelector("#game").innerHTML = html;


};




