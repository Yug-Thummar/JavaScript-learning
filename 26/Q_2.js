// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.
let num = [1,2,3,4,5];
let Square = num.map((el)=> {
    return  el* el;
});
console.log(Square);
let sum = Square.reduce((sum,el)=>{
    return sum + el;
});
console.log(sum);

// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.
let num1 = [1,2,3,4,5,6,7,8,9,55,5,-5,-7];
let original = num1.map((el)=>{
    return el + 5;
});
console.log(original);

// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.
let num2 = ["yug","krishna","bhavesh"];
let upper = num2.map((str) =>{
    return str.toUpperCase();
});
console.log(upper);



