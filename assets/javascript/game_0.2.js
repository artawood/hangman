//Hangman Game Version 0.2

//This version transforms hangman game from prompt and alert to JS dump in HTML. Does not include validation and failcheck

//List of words as objects
var words = [
    "javascript",
    "cat",
    "four",
    "jungle",
];

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
console.log(remainingLetters);

function guess(letter) {
    for (var j = 0; j < word.length; j++) {
        if (word[j] === letter) {
            answerArray[j] = letter;
            remainingLetters--;
        }
    }
    targetDiv.textContent = answerArray.join(" "); //Update answersArray
}

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(letterGuessed);
    guess(letterGuessed); //pass local variable to guess function
}

