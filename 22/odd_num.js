// print all odd number from 1 to 15
// using if else statement 
for (let num = 1; num <= 15; num++) {
    if (num % 2 == 0) {
        console.log("This number is even: ", num);
    }
    else {
        console.log("This number is odd: ", num);
    }
}

// using for loop
for (let n = 1; n <= 15; n = n + 2) {
    console.log(n);
}

// backword direction
for (let i = 15; i >= 1; i = i - 2) {
    console.log("This is backword direction odd number:", i);
}

// print all even number form 1 to 15
for (let i = 2; i <= 15; i = i + 2) {
    console.log("This is the even number: ", i);
}
// backword direction
for (let i = 14; i >= 1; i = i - 2) {
    console.log("This is the backword direction even number: ", i);
}

// 5 table print
for (let n = 1; n <= 10; n++) {
    console.log(`5 * ${n} =`, 5 * n);
}

// nested for loop
for (let i = 1; i <= 3; i++) {
    console.log("This is the outerloop: ", i);
    for (let j = 1; j <= 3; j++) {
        console.log("This is the innerloop", j);
    }
}

// using while loop print the number of 0 to 10
let w = 0;
while (w <= 10) {
    console.log(w);
    w++;
}

// guess the movie name 
let favorite_movie = "iron man";
let guess = prompt("guess the movie name");
while (guess != favorite_movie && guess != "quit") {
    guess = prompt("you are wrong,please try again");
}