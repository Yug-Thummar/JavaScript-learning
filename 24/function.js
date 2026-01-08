function hello() {
    console.log("Hello");
}
function print1to5() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}

function adult(name, age){
    console.log(`${name}'s age is ${age}`);
}

function dice(){
    let rand = Math.floor(Math.random() * 6 + 1);
    console.log(rand);
}


dice();
dice();
dice();
dice();
dice();
dice();
// hello();
// print1to5();
adult("Yug",19);
adult("Yug");