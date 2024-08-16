const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
const maxAttempts = 10;

let attempts = 0;

function submitGuess() {
    if (attempts < maxAttempts) {
        const guessInput = document.getElementById('guess-input');
        const guess = Number(guessInput.value);
        const feedback = document.getElementById('feedback');
        const remainingGuesses = document.getElementById('remaining-guesses');

        if (isNaN(guess)) {
            feedback.textContent = "Please enter a valid number.";
        } else if (guess < minNum || guess > maxNum) {
            feedback.textContent = "Please enter a number between 1 and 100.";
        } else {
            attempts++;
            remainingGuesses.textContent = maxAttempts - attempts;

            if (guess < answer) {
                feedback.textContent = "Too low. Try again!";
            } else if (guess > answer) {
                feedback.textContent = "Too high. Try again!";
            } else {
                feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts!`;
                disableGame();
            }

            if (attempts === maxAttempts && guess !== answer) {
                feedback.textContent = `Sorry, you didn't guess the number. The correct number was ${answer}.`;
                disableGame();
            }
        }

        guessInput.value = '';
        guessInput.focus();
    }
}

function disableGame() {
    document.getElementById('submit-guess').disabled = true;
    document.getElementById('guess-input').disabled = true;
}

// Event listener for button click
document.getElementById('submit-guess').addEventListener('click', submitGuess);

// Event listener for Enter key
document.getElementById('guess-input').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        submitGuess();
    }
});
