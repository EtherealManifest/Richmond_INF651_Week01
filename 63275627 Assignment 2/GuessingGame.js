let userGuess = 99, numToGuess = (Math.ceil(Math.random() * 10)), guesses = 0;

userGuess = Number(prompt("Guess a number between 1 and 10"));

while(true){
    guesses++;
    if(userGuess != numToGuess){
        userGuess = Number(prompt("Incorrect!, try again. Guess a number between 1 and 10"));
        continue;
    }
    if(guesses == numToGuess && numToGuess != 1){
        alert("You just tried every number starting with 1, didn't you?")
        alert("well, now you get to sit through some text. Sometimes it's more fun to play by the rules.")
    }
    if(guesses == 1){
        alert("Lucky Guess!")
    }
    alert(`Correct, the number was ${numToGuess}!, and it took you ${guesses} guesses!`);
    break;
}

