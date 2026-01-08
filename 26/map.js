// let newarr = arr1.map(some function defination or name);
// map : return the value 
let arr2 = [{
    name:"Yug",
    marks:94,
},
{
    name:"Krishna",
    marks:83,
},
{
    name:"Utsav",
    marks:77,
}];

let GPA = arr2.map((el) =>{
    return (el.marks /10);
});
console.log(GPA);

// filter : filter function is used to if callback return the true value then elements add new array and callback return the false value then elements not add in array
//Q_1 return the even number and push the elements in new array
let num = [2,4,1,5,6,2,7,8,9,10,12,11];
let even = num.filter((el) =>{
    return ((el%2 !=  0));
});
console.log(even);