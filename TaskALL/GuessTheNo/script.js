// Generate random number when page loads
const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");

    if (guess < 1 || guess > 10 || isNaN(guess)) {
        message.textContent = "Please enter a number between 1 and 10.";
        message.style.color = "red";
        return;
    }

    if (guess > randomNumber) {
        message.textContent = "OOPS! SORRY!!! TRY A SMALLER NUMBER.";
        message.style.color = "#d32f2f";
    } 
    else if (guess < randomNumber) {
        message.textContent = "OOPS! SORRY!!! TRY A LARGER NUMBER.";
        message.style.color = "#f57c00";
    } 
    else {
        message.textContent = "🎉 CONGRATULATIONS! YOU GUESSED IT RIGHT!";
        message.style.color = "#2e7d32";
    }
}
