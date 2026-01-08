// create a function that return the sum of number from 1 to n
function sumab(a){
    let sum = 0;
    for(let i=1; i<=a; i++){
        sum = sum + i;
    }
    return sum;
}
let user = prompt("Enter a number");
let result = sumab(user);
console.log("The sum of n number is: ",result);