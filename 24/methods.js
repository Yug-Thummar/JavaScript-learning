const calculator = {
    // a:4 this is the key:value same as function with this is the variable:function
    add: function(a,b){
        return a + b;
    },
    sub: function(a,b){
        return a - b;
    },
    mul: function(a,b){
        return a * b;
    },
    div: function(a,b){
        return a / b;
    }
};

//this is the shorthand
// const calculator = {
//     add(a,b) {
//         return a + b;
//     },
//     sub(a,b) {
//         return a - b;
//     },
//     mul(a,b){
//         return a * b;
//     },
//     div(a,b){
//         return a / b;
//     }
// };

let result1 = calculator.add(10,5);
console.log(result1);
let result2  = calculator.sub(10,5);
console.log(result2);
let result3 = calculator.mul(10,5);
console.log(result3);
let result4 = calculator.div(10,5);
console.log(result4);