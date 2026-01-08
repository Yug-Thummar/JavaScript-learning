h1 = document.querySelector("h1");

// setTimeout(()=>{
//     h1.style.color = "red";
// },1000);

// setTimeout(()=>{
//     h1.style.color = "orange";
// },2000);

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}

// changeColor("red",1000);
// changeColor("orange",2000);
// changeColor("green",3000);
// first run red and orange and green 
// if first red color is not run. automatically orange color run but i want to first of frall red color is run and then orange color is run
// orange color dependacy red color.this problem solve to callback hell.

changeColor("orange", 1000, () => {
    changeColor("white", 1000, () => {
        changeColor("green", 1000);
    });
});

