//  Q1. A "good string" is a string that starts with the letter 'a' & has a length > 3. write a program to find is good or not
let string_letter = "apple";
if(string_letter[0] == "a" && string_letter.length > 3){
    console.log("good string");
}
else{
    console.log("not good string");
}