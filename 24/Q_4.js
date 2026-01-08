// Qs1. Write a JavaScript function that returns array elements larger than a number.
function getLargerElements(arr, num) {
    let result = [];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }
    return result;
}

let arr = [34, 6, 32, 10, 20];
let result = getLargerElements(arr, 10);
console.log(result);


// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh” 
function getuniqueCharacters(str) {
    let result = "";
    for (let i = 0; i <= str.length; i++) {
        if (!result.includes(str[i])) {
            result = result + str[i];
        }
    }
    return result;
}

let str = "abcdabcdefgggh";
let result1 = getuniqueCharacters(str);
console.log(result1);


// s3. Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output : 
// "United States of America"

function longestCountryName(country){
    let longest = "";
    for(let i = 0; i <= country.length; i++){
        if(country[i] > longest){
            longest = country[i];
        }
    }
    return longest;
}
let country = ["United States of America","Australia","Germany"];
let result2 = longestCountryName(country);
console.log(result2);


// Qs4. Write a JavaScript function to count the number of vowels in a String 
// argument.
// const vowels = function(){
//     let re_vowels;
//     let vowel = ['a','e','i','o','u'];
//     for(let i = 0; i <= vowel.length; i++){
//         re_vowels = vowels[i];
//     }
//     return re_vowels;
// }
// function countString(str , vowels){
//     let res;
//     for(let i = 0; i<=str.length; i++){
//         if(vowels == str[i]){
//             res = res + str[i];
//         }
//     }
//     return res;
// }
// let str2 = "apple";
// let resu = countString("apple",vowels);
// console.log(resu);


// Qs5. Write a JavaScript function to generate a random number within a range 
// (start, end)
function generateRandomNumber(start,end){
    let randomNumber = Math.floor(Math.random() * (start-end+1)) + start;
    return randomNumber;
}
let number = generateRandomNumber(50,100);
console.log(number);