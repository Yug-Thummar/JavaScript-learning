// user enter a max number & then tries to guess a random generated number between 1 to max
const user = prompt("Enter a maximum number you want to generated");
let rando = Math.floor(Math.random() * user) + 1;
// console.log(rando);
let guess = prompt("guess the number");
while (true) {
    if (guess == "quit") {
        console.log("Quit the game");
        break;
    }
    if (guess == rando) {
        console.log("Congrats! You are win!");
        break;
    } else if (guess < rando) {
        guess = prompt("Hint: You are guess to small! please try again");
    } else {
        guess = prompt("Hint: You guess was so large! please try agian!");
    }
}