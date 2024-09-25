// Part 2: Practocal Exercises
// 1. Multiplication Table with For Loop
/* for (let num = 1; num <= 10; num++) {
    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
    }
} */

// 2. Sum of Odd and Even Numbers with While Loop
console.log("2. Sum of Odd and Even Numbers with While Loop");
let sum_odd = 0;
let sum_even = 0;
let n = 1;

while (n <= 50) {
    if (n % 2 === 0) {
        sum_even+=n;
        n++;
    } else {
        sum_odd+=n;
        n++;
    }
}
console.log("The sum of even numbers from 1 to 50 is " + sum_even + ".");
console.log("The sum of odd numbers from 1 to 50 is " + sum_odd + ".");

// 3. Countdown with Condition using While Loop
console.log("3. Countdown with Condition using While Loop");
let x = 10;

while (x > 0) {
    if (x > 5) {
        console.log(x);
        x--;
    } else if (x === 5) {
        console.log(x);
        console.log("Almost!");
        x--;
    } else if (x > 1) {
        console.log(x);
        x--;
    } else if (x === 1) {
        console.log(x);
        console.log("Liftoff!");
        x--;
    }
}

// 4. Advanced Guessing Game with Do...While Loop
// This part is in the loops.html.
console.log("4. Advanced Guessing Game with Do...While Loop");
console.log("This part is in the loops.html.");
/* const min = 1;
const max = 100;
const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

let attempts = 1;

do {
    let guessNum = window.prompt ("Attempt " + attempts+ ": Guess a number between " + min + " and " + max + ".");
    guessNum = Number(guessNum);

    if (isNaN(guessNum)) {
        window.alert("Enter a valid number.");
    } else if (guessNum < min || guessNum > max) {
        window.alert("Enter a valid number.");
    } else {
        if (guessNum < randomNum) {
            window.alert("Too low! Try again!");
        } else if (guessNum > randomNum) {
            window.alert("Too high! Try again!");
        }else {
            window.alert("Your guess is correct! The random number was " + randomNum + ".");
            break;
        }
        attempts++;
    }
} while (attempts <= 7) {}
 */

// 5. Nested Loop Pattern
console.log("5. Nested Loop Pattern");
let height = 5;

// outer loop for rows
for (let row = 1; row <= height; row++) {
    let s = "";
    
    // inner loop1 for spaces
    for (let space = height - row; space > 0; space--) {
        s += "  ";
    }
    // inner loop2 for stars
    let pattern = "";
    for (let star = 1; star <= row; star++) {
        pattern += "* ";
    }
    console.log(s + pattern);
}
    
// 6. Labeled Statement with Break
console.log("6. Labeled Statement with Break");
myLoop: for (let num1 = 1; num1 <= 10; num1++) {
    for (let num2 = 1; num2 <= 5; num2++) {
        if (num1 * num2 === 12) {
            console.log("Outer loop number is " + num1 + ".");
            console.log("Inner loop number is " + num2 + ".");
            console.log("The product of the two numbers is " + num1 * num2 + ".");
            break myLoop;
        }
    }
}
