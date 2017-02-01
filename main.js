var words = ['javascript', 'monkey', 'amazing', 'pancake', 'jungle', 'rocks', 'zeppelin', 'trumpet']

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = []
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

var count = 10

while (remainingLetters > 0) {
    alert("Let's play Hangman! Your word is " + answerArray.join(' '));
    var guess = prompt(`Guess a letter, or click Cancel to stop playing. You have ${count} guesses remaining`);
    guess = guess.toLowerCase();
    if (count <= 1) {
      break
    }
    if (guess === null) {
        break
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.")
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }

        }
    }
    count -= 1;
}
// need to figure out how to solve challenge #4, prevent lettersRemaining from decrementing if same letter is guessed multiple times.
// need to figure out how to give a losing message if full word is not guessed in count limit.

alert(answerArray.join(' '));
alert('Good job! The answer was ' + word)
