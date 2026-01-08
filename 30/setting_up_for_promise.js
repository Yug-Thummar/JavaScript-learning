// let's assume very large data and store the data in folder internet median 
function saveDB(data, success, failure) {
    // 1 MBPS to 10 MBPS data transfer 
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    // if data transfer speed is less than 4 data was successfully saved otherwise data fail
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}
saveDB("hello world!",
    // function success() 
    () => {
        console.log("success1 : data1 was saved!");
        // if first data was save then another data turns 
        saveDB("Hello world",
            // function success() 
            () => {
                console.log("success2 : data2 was saved!");
                saveDB("Yug",
                    () => {
                        console.log("success3 : data3 was saved!");
                    },
                    () => {
                        console.log("failure : data3 was failure");
                    }
                );
            },
            // function failure() 
            () => {
                console.log("success2 : data2 was failure");
            });
    },
    // function failure() 
    () => {
        console.log("failure : data1 was failure!");
    }
);
