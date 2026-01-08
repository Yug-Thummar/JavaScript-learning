function saveDB(data){
    return new Promise((resolve,rejected) =>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("success : data was saved!");
        }else{
            rejected("failure : data was rejected");
        }
    });
}

// this is confusing code not a proper readable 
// saveDB("Hello world")
// .then(()=>{
//     console.log("data1 saved!");
//     saveDB("Hello")
//     .then(()=>{
//         console.log("data2 saved!");
//     });
// })
// .catch(()=>{
//     console.log("data failed!");
// })

saveDB("Hello world")
.then((result)=>{
    console.log("data1 saved!",result);
    return saveDB("Hello");
})
.then((result)=>{
    console.log("data2 saved!",result);
})
.catch((error)=>{
    console.log("data failed!",error);
})

// 1) Basic Promise Success
// 👉 Create a Promise that always resolves with the message:
// "You are awesome!"
// function myPromise(message){
//     return new Promise((resolve,rejected)=>{
//         console.log(message);
//     });
// }
// myPromise("you are awesome!");