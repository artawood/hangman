//Hangman Game Version 0.3

//Add validation/failcheck, counter, and sounds

//Plays sound when Player wins
var intro = document.getElementById("intro");
function introSound() {
    intro.play();
}

function playAgain() {
    location.reload();
    introSound();
}//Play again. Reloads the page.

//List of words as objects
var words = [
    "springfield",
    "marge",
    "donut",
    "flanders",
    "apu",
    "jay",
];

//Lives
var lives = 5;
var showLives = document.getElementById("lives");
showLives.textContent = lives;

//Recorded Incorrect Guesses
var incorrectGuesses = [];

//Pick random word
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

//Hints
var showHint = document.getElementById("hint");

if (word === "springfield") {
    showHint.textContent = "The city where I live and work";
} else if (word === "marge") {
    showHint.textContent = "I love her so much!";
} else if (word === "donut") {
    showHint.textContent = "Hmmmmmm!";
} else if (word === "flanders") {
    showHint.textContent = "My annoying neighbor";
} else if (word === "apu") {
    showHint.textContent = "Thank you, come again";
} else if (word === "jay") {
    showHint.textContent = "It's my middle name!";
}

//Answer Array
var answerArray = [];

//Set up answerArray
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    //Log the number of letters
    console.log(answerArray[i] + "letter word");
}

//Display "_" word
var targetDiv = document.getElementById("game");
targetDiv.textContent = answerArray.join(" ");

//Keep track of remaining letters
var remainingLetters = word.length;
console.log("Remaining letters: " + remainingLetters);

//Plays sound when Player wins
var woohoo = document.getElementById("winAudio");
function woohooSound() {
    woohoo.play();
}

//Plays sound when Player guessed incorrect letter
var doh = document.getElementById("dohAudio");
function dohSound() {
    doh.play();
}

//Plays sound when Player dies
var crap = document.getElementById("gameOverAudio");
function crapSound() {
    crap.play();
}

function guess(letter) {
    if (word.indexOf(letter) === -1) {
        //VALIDATOR: If the guessed letter returns the index of the first occurrence of word array, or -1, the guessed letter is incorrect    
        if (incorrectGuesses.indexOf(letter) === -1) { //VALIDATOR: If the guessed letter returns the index of the first occurrence of incorrectGuesses array, or -1
            incorrectGuesses.push(letter); //Adds incorrect letter to incorrectGuesses array
            lives--;
            showLives.textContent = lives;
            dohSound();
            alert("You guessed " + letter + " and it's wrong. You have " + lives + " lives left");
            console.log("Number of lives: " + lives);
            if (lives == 0) {
                crapSound();
                alert("Game Over!");
                var confirmPlayAgain = confirm("Do you want to play again?");
                if (confirmPlayAgain) {
                    location.reload();
                }
            } 
        } else {
            alert("You already picked " + letter + "! I'am giving you a chance!");                
        }
        var displayIncorrectLetters = document.getElementById("lettersGuessed");
        displayIncorrectLetters.textContent = incorrectGuesses.join(", ");  
    } 
    for (var j = 0; j < word.length; j++) {
        if (word[j] === letter) {
            answerArray[j] = letter;
            remainingLetters--;
            console.log("Remaining letters: " + remainingLetters);
        } // Loop to validate if guessed letter matches letter in the randomly selected word
    }
    targetDiv.textContent = answerArray.join(" "); //Update answersArray
    if (remainingLetters == 0) {
        woohooSound();
        alert("Woohoo! I was thinking of " + word + " !");
    } // If remaining letters equals zero, the player wins.
}

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(letterGuessed);
    guess(letterGuessed); //pass local variable to guess function
}

