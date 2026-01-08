// loops with array
let fruits = ["Orange", "Apple", "Litchi","Banana"];
for(let i = 0; i<fruits.length; i++){
    console.log(i,fruits[i]);
} 

// loops with nested array
let Gender = [["Utsav","Krishna","Yug"],["Priya","Hinali","Dixita"]];
for(let i = 0; i<Gender.length; i++){
    for(let j=0; j<Gender[i].length; j++){
        console.log(Gender[i][j]);
    }
}

// for of loops with array
let fruits_1 = ["Apple","Banana","Mango"];
for(fruit of fruits_1){
    console.log(fruit);
}

// for of loops with String
let char = "yug";
for(c of char){
    console.log(c);
}