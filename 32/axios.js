// let URL = "https://catfact.ninja/fact"
// async function getFatch(){
//     try{
//         let res = await fetch(URL);
//         let data = await res.json();
//         console.log(data.fact);
//     }
//     catch(err){
//         console.log("error",err);
//     }
// }
// getFatch(); 

// let url = 'https://catfact.ninja/fact';
// async function  getfatch() {
//     let res = await axios.get(url);
//     console.log(res.data.fact);
// }
// getfatch();

let btn = document.querySelector("button");
let p = document.getElementById("fact");

btn.addEventListener("click",async function getfatch(){
    let url = 'https://catfact.ninja/fact';
    let res = await axios.get(url);
    p.innerText = res.data.fact;
});