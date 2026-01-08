function countSum(func, count) {
    for (let i = 1; i <= count; i++) {
        func(); //this func() are meaning is sum variable in store function and that function is used here.
        //     let sum = function(){
        // console.log("Hello World!");
        //}
    }
}

let sum = function () {
    console.log("Hello World!");
}
countSum(sum, 4); //we used a variable and pass the variable as argument 
// countSum(sum(),4); which is wrong becuase whenevere a write a sum() function. sum() function is executed 



// high order request
function oddorevenFactory(request) {
    if (request == "odd") {
        let odd = function (n) {
            console.log(!(n % 2 == 0));
        }
        return odd;
    } else if (request == "even") {
        let even = function (n) {
            console.log(n % 2 == 0);
        }
        return even;
    }else{
        console.log("Wrong request!");
    }
}

let func1 = oddorevenFactory(request);
func1(3);