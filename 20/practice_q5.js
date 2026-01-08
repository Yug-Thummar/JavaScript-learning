// create a number variable num with some value.
// now,print "good" if the number is divisible by 10 and print "bad" if it is not

let num = prompt("Enter your number");
if (num % 10 == 0 && num != 0) {
    console.log("Good");
}
else {
    console.log("Bad");
}