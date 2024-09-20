const min = 1;
const max = 100;
const answer = Math.round(Math.random() * (max - min) + min);

let isrunning = true;
let guess;
let counter;

while(isrunning){
    guess = Number(window.prompt("Guess a number between 1 and 100"));
    counter = 0;
    if(isNaN(guess)){
        window.alert("Please enter a number");
    } else if(guess>max || guess<min){
        window.alert("Please enter a number between 1 and 100");
    } else{
        isrunning = false;
    }

}

while (guess != answer) {
    if (guess < answer) {
        guess = window.prompt("Too low. Guess again");
        counter++;
    } else if (guess > answer) {
        guess = window.prompt("Too high. Guess again");
        counter++;
    }

    if (guess == answer) {
        counter++;
        window.alert("Correct! the answer is " + answer + " and it took you " + counter + " guesses");
    }
}