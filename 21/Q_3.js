let months = ['january','july','march','august'];
console.log(months);
console.log("remove january and july",months.splice(0,2,"july","june"));
console.log(months);


console.log("");
// question : return the index of "javascript" from the given array,if it was reverse
let technology = ["c","c++","html","javascript","python","java","c#","sql"];
console.log(technology);
console.log(technology.reverse());
console.log(technology.indexOf("python"));