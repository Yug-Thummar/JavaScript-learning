// what is an array reference?
// -> when we create an array in programming, it is stored in memory.
// if we assign one array to another,we are not copyinng the array values,we are just pointing it the same array - this called a reference 
console.log("reference");
let a = [1,2,3,4,5];
let b = a;
console.log("before chage: ",a);
b[0] = 100;
console.log("after change: ",a);
// explanation:
//  a is an array with values [1,2,3]
//  b = a means b is not a nwq array, it is just a reference to the same memory a
// when we change b[0], it also change a[0] because both point to the same array

console.log("");
console.log("constant variable: ");
// constant array means they can value chnage/add/remove but another array address/reference/assign not possible in javascript
const arr = [1,2,3];
console.log(arr.push(4));
console.log(arr);
console.log(arr.pop());
console.log(arr);
// arr = [12,23,34];


console.log("");
// multidimentional array 
let multi = [[2,4],[3,6],[4,8]];
console.log(multi);
// Q1 if i access the 4 value how do you access 4th value 
console.log("access a 4 value: ",multi[0][1]);