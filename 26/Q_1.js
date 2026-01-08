// check if all numbers in our array are multiple of 10 or not
let arr2 = [50,10,70,20,40];
let multiple = arr2.every((el)=>{
    return (el%10 == 0);
});
console.log(multiple);

// create a function to find the minimum number in an array
let num = [2,4,5,7,9];
let minimum = num.reduce((min,el) =>{
    if(min > el){
        return el;
    }else{
        return min;
    }
});
console.log(minimum);