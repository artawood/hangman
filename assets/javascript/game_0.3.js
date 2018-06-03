//Hangman Game Version 0.3

//Add validation/failcheck, counter, win sound

//Plays sound when Player wins
var themeSong = document.getElementById("themeSong");
function themeSong() {
    themeSong.addEventListener("load", function() {
        themeSong.play();
    })
}

function playAgain() {
    location.reload();
}//Play again. Reloads the page.

//List of words as objects
var words = [
    "javascript",
    "cat",
    "four",
    "jungle",
];

//Lives
var lives = 5;

//Recorded Incorrect Guesses
var incorrectGuesses = [];

//Pick random word
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

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
var tada = document.getElementById("winAudio");
function tadaSound() {
    tada.play();
}

//Plays sound when Player guessed incorrect letter
var doh = document.getElementById("dohAudio");
function dohSound() {
    doh.play();
}

//Plays sound when Player guessed incorrect letter
var crap = document.getElementById("gameOverAudio");
function crapSound() {
    crap.play();
}

function guess(letter) {
    if (word.indexOf(letter) === -1) {
        //VALIDATOR: If the guessed letter returns the index of the first occurrence, or -1, the guessed letter is incorrect
        incorrectGuesses.push(letter); //Adds incorrect letter to incorrectGuesses array
        var displayIncorrectLetters = document.getElementById("lettersGuessed");
        displayIncorrectLetters.textContent = incorrectGuesses.join(", ");
        lives--;
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
        tadaSound();
        alert("Congratulation! You guessed " + word + " correctly. Good Job!");
    } // If remaining letters equals zero, the player wins.
}

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(letterGuessed);
    guess(letterGuessed); //pass local variable to guess function
}

