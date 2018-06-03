//Hangman Game Version 0.1

//This version is getting basic understanding of flow and function of looping and using blank arrays. Started out with textbook study.

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

//Keep track of remaining letters
var remainingLetters = word.length;

//While the word has not been guessed, run loop for failure conditions
while (remainingLetters > 0) {
    //Game
    alert(answerArray.join(" "));
    //Take input from player
    var guess = prompt("Guess a letter, or click Cancel to quit.");
    //End loop if player quit
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        //validate single letter entry
        alert("Please enter a single letter.");
    } else {
        //Update answerArray and remainingLetters for every correct letters guessed
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }

//Congratulate the player on guessing the word
}
alert(answerArray.join(" "));
alert("Congrats! You guessed the word " + word + " right!");

