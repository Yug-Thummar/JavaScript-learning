// Q5 find the program to find the largest of 3 number 
let num1 = 50;
let num2 = 60;
let num3 = 70;
if (num1 >= num2 && num1 >= num3) {
    console.log(`The largest number is ${num1}`);
}
else if (num2 >= num1 && num2 >= num3) {
    console.log(`The largest number is ${num2}`);
}
else {
    console.log(`The largest number is ${num3}`);
}