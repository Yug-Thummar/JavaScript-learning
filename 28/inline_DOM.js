// 1)onclicked: whenever button is clicked function is executed 
// let btn = document.querySelector("button");
//1) methods 
// btn.onclick = function(){
//     console.log("button was clicked!");
// }

// 2) methods
// console.dir(btn);
// btn.onclick = sayhello;

// function sayhello(){
//     console.log("button was clicked!");
// }

// whenever all button task for same output you can for loop
// let btns = document.querySelectorAll("button");
// for(btn of btns) {
//     btn.onclick = sayhello;
// }
// function sayhello(){
//     alert("Hello clicked!");
// }



// onmouseenter : whenever we hover the button function is executed
// let btns = document.querySelectorAll("button");
// for(btn of btns) {
//     btn.onmouseenter = sayhello;
// }
// function sayhello(){
//     console.log("Hello clicked!");
// }



// addEventListener : multiple function executed
// sysntax : addEventListener("eventName",useCallback);
// addeventListener use of multile task ot=r function executed
let btns = document.querySelectorAll("button");
for (btn of btns) {
    btn.addEventListener("click", sayhello);
    btn.addEventListener("dblclick", alertgenerat);
    btn.addEventListener("onmouseenter", function () {
        console.log("heey");
    });
}
function sayhello() {
    console.log("Hello clicked!");
}
function alertgenerat() {
    alert("Alert generated!");
}