// write an arrow function named arrrayAverage that an array of numbers and returns the average of those number
const arrayaverage = (arr) => {
    let number = 0;
    for (let i = 0; i < arr.length; i++) {
        number = number + arr[i];
    }
   return number / arr.length;
};
let arr = [11, 55, 623, 34];
console.log(arrayaverage(arr));


// const arrayAverage = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) { // Use i < arr.length, not i <= arr.length
//         sum += arr[i];
//     }
//     return sum / arr.length;
// };

// let arr = [11, 55, 623, 34];
// console.log(arrayAverage(arr));
