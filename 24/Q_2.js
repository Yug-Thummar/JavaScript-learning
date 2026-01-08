// create a function that prints the multiplication table of a number

function multiplication(num){
    for(let i = 1; i<= 10; i++){
        console.log(`${num} * ${i} = `,num*i);
    }
}
let user = prompt("Enter a number i want geneated table");
multiplication(user);