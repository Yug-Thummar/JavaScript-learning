// given number large number is it or not?
function largenum(num1, num2, num3) {
    if (num1 < num2) {
        if (num2 < num3) {
            console.log("The large number is: ", num3);
        }
        else {
            console.log("The large number is: ", num2);
        }
    }
    else {
        console.log("The large number is: ", num1);
    }
}
largenum(1, 2, 3);

//create a function that gives us the average of 3 numbers
function average(n1, n2, n3) {
    let average = (n1 + n2 + n3) / 3;
    console.log("The average number is: ",average);
}
average(1,2,3);