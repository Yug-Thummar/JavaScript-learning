// Q_1 Element of array find the largest number of value 
let arr = [1,90,34,3,56,43,77];
// let max = -1;
// for(let i = 0; i<=arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

let ans = arr.reduce((max,el) =>{
    if(max > el){
        return max;
    }else{
        return el;
    }
});
console.log(ans);