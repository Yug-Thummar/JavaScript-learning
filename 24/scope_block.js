// global scope : global scope mens when we create a variable outside a function can access a variable
//function scope : function scop means when we create a variable inside a function only access insude function methods can not access aoutside a function. 
let ab = 34;
function calSum(a, b) {
    let sum = a + b;
    console.log(sum);
    console.log(ab); //can access a becuase a is global variable
}
// console.log(sum); can not access 
calSum(3, 4);
console.log(ab); //can access


console.log("Block scope: ")
// block scope : variable declared inside a {} block. can be access variable but variable declared {} outside the block can not be access variable
// {
//     let i = 90;
// }
// console.log(i);


console.log("lexical scope:")
// lexical scope : first variable declared and then inner function use this variable 
function outerFunc() {
    let x = 10;
    let y = 20;
    function innerfunc() {
        console.log(x);
        let z = 90;
    }
    innerfunc();
    console.log(z); //outerfunction can not a access a variable in inner function
}
outerFunc();  //whenever i called outer function. function is executed 
// innerfunc(); but i called inner function not direct called.if inner function use it you can first of frall outer function executed and inside inner function called.