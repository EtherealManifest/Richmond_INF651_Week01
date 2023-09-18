let userGuess = 99, numToGuess = (Math.ceil(Math.random() * 10));

userGuess = Number(prompt("Guess a number between 1 and 10"));

while(true){
    if(userGuess != numToGuess){
        userGuess = Number(prompt("Incorrect!, try again. Guess a number between 1 and 10"));
        continue;
    }
    alert(`Correct, the number was ${numToGuess}!`);
    break;
}

