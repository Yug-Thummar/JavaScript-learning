// parse : convert string to jason object. parse means one data formate to another data formate change 
// json data gives the string formate like :
// {"fact":"A cat's whiskers are thought to be a kind of radar, which helps a cat gauge the space it intends to walk through.","length":113}

let jsonRes = "{\"fact\":\"A cat's whiskers are thought to be a kind of radar, which helps a cat gauge the space it intends to walk through.\",\"length\":113}";
console.log("This is the string data :\n",jsonRes);
console.log(typeof(jsonRes));

let validRes = JSON.parse(jsonRes);
console.log("Convert the string to JSON data :\n",validRes);
console.log(typeof(validRes));

// stringify : convert the json object to string
let stringi = JSON.stringify(validRes);
console.log("Convert the JSON to String formate :\n",stringi);
console.log(typeof(stringi));