// spread methods
let arra = [14,67,32,76,87];
// Math.min(arra[0],arra[1],arra[2],arra[3],arr[4]); this is the worst methods
Math.min(...arra);
console.log(arra);

let str = "Nano technology";
console.log(...str);

let arr3 = [2,45,67,32];
let arr4 = [...arr3];  //in arr4 variable copy of arr3 assigned
console.log(arr4); 
console.log(arr3);
console.log(arr4.push(24)); //add the elements of end
console.log(arr4);  //change the array of arr4 
console.log(arr3);  //but not the change the arr3

let char = [..."Hello WOrld!"];
console.log(char);

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];
let oddorEeven = [...odd,...even];
console.log(oddorEeven);



// object literals
let data = {
    email:"yugthummar876@gmail.com",
    password:"Yug@1234"
};
let dataCopy = {...data,id:2}; //add objects literals
// let dataCopy = {...data.email}; indivusuals object can access
console.log(dataCopy);

let arra1 = [1,24,45,32];
let arra1Copy = {...arra1};
console.log(arra1Copy);