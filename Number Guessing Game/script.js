// Step 1: Create a variable for the max value
const maxValue = 5;
// Step 2: Generate a random number for the solution
const solution = Math.floor(Math.random() * maxValue) + 1;
// for development purpose, log the solution to the console(comment this out when the game is completed)
console.log(`solution (for development): ${solution}`);
// Step 3: Create a variable to track whether the answer is correct
let isCorrect = false;
function guessNumber(){
    //Step 4: Get the user's guess from the input field
    const userGuess= Number(document.getElementById('guessInput').value);
    const resultMessage = document.getElementById('resultMessage');


    // Step 5: check if the user's guess is correct
    if (userGuess === solution) {
        resultMessage.textContent = "Congratulations! You guessed the correct number.";
        resultMessage.style.color = "green";
        isCorrect = true; // Set the status to true to break out of the loop
    } else if (userGuess <  solution) {
       resultMessage.textContent = "Your guess is too low. try again.";
       resultMessage.style.color = "red";
    } else if (userGuess > solution) {
       resultMessage.textContent = "Your guess is too high. Try Again.";
       resultMessage.style.color = "red";
    }else{
       resultMessage.textContent = "Invalid input. Please enter a number";
       resultMessage.style.color = "red";

    }
}