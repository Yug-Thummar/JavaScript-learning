// async function return allways promise 
// if async function is right then Promisestate is "fulfilled" and PomiseResult is return "hello" & async function inside not any one write methods then PromiseResult return "undefined";
// async function greet() {
//     return "Hello";
// }
// if async function inside error then Promisestate is "rejected"
async function greet() {
    throw("this is the random error generated !");
    // return "Hello";
}
greet()
.then((result)=>{
    console.log("success :",result);
})
.catch((error)=>{
    console.log("failed :",error);
})