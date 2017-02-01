
var pickWord = function() {
    var words = ['javascript', 'monkey', 'amazing', 'pancake', 'jungle', 'rocks', 'zeppelin', 'trumpet'];
    var word = words[Math.floor(Math.random() * words.length)];
    return word;
}

var setupAnswerArray = function(word) {
    var answerArray = []
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}


var showPlayerProgress = function(answerArray) {
    return alert("Let's play Hangman! Your word is " + answerArray.join(' '));
}

var getGuess = function() {
    var guess = prompt(`Guess a letter, or click Cancel to stop playing. You have ${count} guesses remaining`);
    guess = guess.toLowerCase();
    return guess;
}

function updateGameState(guess, word, answerArray) {
    var numberOfGuesses = 0;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            numberOfGuesses++;
        }
    }
    return numberOfGuesses;
};

var showAnswerAndCongratulatePlayer = function() {
    alert(answerArray.join(' '));
    alert('Good job! The answer was ' + word)
}

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var count = 10

while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (count <= 1) {
        break
    }
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.")
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses
    }
    count -= 1
}

showAnswerAndCongratulatePlayer(answerArray);
