// variable can store function and this variable pass/called another function
let sum = function(a , b){
    return a + b;
}

let hello = function(){
    console.log("Hello");
}

// inside function change/update
hello = function(){
    console.log("Hello World!");
}

let s = sum(2,4);

console.log(s);
hello();