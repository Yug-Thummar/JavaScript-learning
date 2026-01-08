let btn = document.querySelector("button");
let inp = document.querySelector("input");

// this is the pointer events
// btn.addEventListener("click",function(evt){
//     console.log(evt);
//     console.log("button clicked!");
// });

// this is the mouseevents
// btn.addEventListener("dblclick",function(evt){
//     console.log(evt);
//     console.log("button clicked!");
// });

// keyboard events
// inp.addEventListener("keydown",function(events){
//     console.log("This is the code:",events.code);
//     console.log("This is  the key:",events.key);
//     console.log("button was clicked");
// });

inp.addEventListener("keyup",function(events){
    console.log("This is the code:",events.code);
    console.log("This is  the key:",events.key);
    console.log("button was clicked");
});

