// arrow function is nameless function
const sum = (a , b) => (a + b);

const cube = n => {
    return n*n*n;
};

const hello = () => {
   return console.log("hello");
};

sum(3,4);
let result1 = cube(3);
console.log(result1);

hello();