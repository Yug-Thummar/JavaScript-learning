// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]
let arr_1 = [1,2,3,-2];
let n_1 = 3;
console.log(arr_1.slice(0,n_1));

// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [9, 0, -2]
let arr_2 = [7,9,0,-2];
let n_2 = 4;
console.log(arr_2.slice(1,n_2));

// Qs3. Write a JavaScript program to check whether a string is blank or not.
// let str = prompt("Enter a string");
// if(str.length == 0){
//     console.log("String is empty");
// }
// else{
//     console.log("String is not empty");
// }

// Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.
// let char = prompt("Enter a character");
// if(char == char.toLowerCase()){
//     console.log("This character is lowercase");
// }
// else{
//     console.log("This character is uppercase");
// }

// Qs5. Write a JavaScript program to check if an element exists in an array or not.
let arr = ["utsav","yug",90,90.90];
let item = "yug";
if(arr.indexOf(item) != -1){
    console.log("String are exists");
}
else{
    console.log("String are not exists");
}
