// Qs1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load
let btn = document.querySelector("button");
btn.addEventListener("mouseout", function () {
    console.log("button was clicked!");
});
let inp = document.querySelector("input");

inp.addEventListener("keypress", function () {
    console.log("Enter a something");
    // console.dir(inp);
    console.log(this.value);
});

// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.
const btn1 = document.createElement("button");
btn1.innerText = "click me!";
btn1.addEventListener("click", function () {
    btn.style.backgroundColor = "green";
});
