function sum(a,b){
   return a + b;
   //after return keyword not executed code
   console.log("Hello");
   console.log("Hello");
}
let add = sum(sum(2,5),3);
console.log(add);