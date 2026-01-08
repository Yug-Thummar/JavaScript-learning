// function randomNumber() {
//     return new Promise((resolved, rejected) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolved();
//         }, 1000);
//     });
// }
// async function greet() {
//     // await function is used to only for async function
//     await randomNumber();
//     await randomNumber();
//     await randomNumber();
//     await randomNumber();
//     await randomNumber();
// }
// greet();

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolved,rejected) => {
        setTimeout(() => {
            h1.style.color = color;
            resolved();
        }, delay);
    })
}
async function demo() {
    await changeColor("red",1000);
    await changeColor("green",1000);
    await changeColor("orange",1000);
    await changeColor("blue",1000);
}
demo();
