console.log("");
// push : push methods is used to add array in last element
console.log("push methods: ");
let cars = ["Maruti","Shift","BMW","XUV"];
console.log("car before push: ",cars);
let car_add = cars.push("Rolls royal");
console.log("car after push",cars);


console.log("");
// pop:pop methods is used to delete last elements & return it 
console.log("pop methods: ");
console.log("pop methods used & delete the last element: ",cars.pop());
console.log("After a pop methods used: ",cars);


console.log("");
// unshift : unshift methods is used to add array elements starting
console.log("unshift methods: ");
let bike = ["Shine","Activa","Access"];
console.log("Bike before unshift:",bike);
let bike_add = bike.unshift("Splander");
console.log("Bike after add: ",bike); 


console.log("");
// shift : shift methods is used to starting elements delete & return it
console.log("shift methods: ");
console.log("Bike before shift: ",bike);
let bike_remove = bike.shift();
console.log("Bike after shift",bike);


console.log("");
// indexof : to find the arrays index
console.log("indexof methods: ")
let primary = ["red","yellow","green"];
console.log(primary.indexOf("green"));
console.log(primary.indexOf("white"));
console.log(primary.indexOf("Yellow"));


console.log("");
// includes : search for a value
console.log("includes methods: ");
console.log(primary.includes("red"));
console.log(primary.includes("Yellow"));


console.log("");
// concatenation : concat methods is used to merge 2 elements 
console.log("concat methods: ");
let primary_color = ["red","yellow","green"];
let secoundary_color = ["blue","white","violet"];
console.log(secoundary_color.concat(primary_color));


console.log("");
// reverse : reverse methods is used to reverse an array
console.log("reverse methods: ");
console.log("before reverse: ",primary_color);
console.log("after reverse: ",primary_color.reverse());


console.log("");
// splice : in array add/remove/replace elements in plac ,original array change 
// splice(start,deletecount,item0..itemN)
// remove array with only start
let colors = ["red","blue","green","violet","orange"];
console.log(colors);
console.log("remove orange color: ",colors.splice(4));
console.log(colors);
// remove array with start and deletecount
console.log("remove red and blue color: ",colors.splice(0,2));
console.log(colors);
// add array elements with start deletecount and itemN
console.log("remove green color and add red & blue color: ",colors.splice(0,1,"red","blue"));
console.log(colors);


// sort : sorting array means accending order and decending order,they can not applied for number beacuse sort methods convert the value into string formate
let days = ["sunday","monday","wednesday","tuseday"];
console.log(days.sort());
let char = ['e','a','k','p','d'];
console.log(char.sort());