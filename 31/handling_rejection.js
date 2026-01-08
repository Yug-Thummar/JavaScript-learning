// if i know him this code will be error for sometime like 
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            console.log(num);
            if (num > 4) {
                rejected("error!");
            }
            h1.style.color = color;
            resolved();
        }, delay);
    })
}
async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("orange", 1000);
        await changeColor("blue", 1000);
    }
    catch(error){
        console.log(error);
    }
    let a = 45;
    console.log("The value of a is:", a);
}
demo();