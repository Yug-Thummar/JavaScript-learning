// promise is object and most popular methods is then and catch 
// if promise is fulfilled "then" methods accurs and promise is rejected "catch" methods accurs 
function saveDB(data) {
    return new Promise((resolve, rejected) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        // console.log(internetSpeed);
        if (internetSpeed > 4) {
            resolve("success : data was saved!");
        } else {
            rejected("failure : data was failure");
        }
    });
}

saveDB("Hello world!")
.then(() => {
    console.log("promise was resolve!");
})
.catch(() => {
    console.log("promise was rejected!");
})