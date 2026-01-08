// Q6warite a program to check if 2 number have the same last digit.
// ex:32 and 47852 have the same last digit 
let num1 = prompt("Enter a num1");
let num2 = prompt("Enter a num2");
if(num1%10 == num2%10){
    console.log("Number have the same last digit which is",num1%10);
}
else{
    console.log("Numbers don't have the same last digit");
}