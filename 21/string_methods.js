// 1) trim methods
let msg_1 = "         Hello Yug                           ";
// console.log(msg_1.trim());
let newmsg_1 = msg_1.trim();
console.log(newmsg_1);

// in javascript string are immutable : immutable means string are not change whenever we do try new string create. old string are same old string can not be changed they give me a new string returns

// 2) totoLowerCase() methods toUppercase() methods
let msg_2 = "HELLO WORLD";
let newmsg_2 = msg_2.toLowerCase();
console.log(newmsg_2);

// 3) toUppercase() methods
let msg_3 = "hello world";
let newmsg_3  = msg_3.toUpperCase();
console.log(newmsg_3);

// 4) indexof() methods
let msg_4 = "ILovecoding";
// let newmsg_4 = msg_4.indexOf("Love");
// let newmsg_4 = msg_4.indexOf("k");
let newmsg_4 = msg_4.indexOf("o");
console.log(newmsg_4);

// 5) method chaining : if i write like '     hello world    '. This string are convert the uppercase and trim the message you can write the following method str.toUppercase().trim()
// for example
let chaining = '       hello world      ';
console.log(chaining.trim().toUpperCase());

// 6) toString methods : is used to convert any datatypes into string formate for example 
let a = true;
let b = a.toString();
console.log(typeof(b));
console.log(typeof(a));

// 7) slice methods : slice methds is used to given string small pices of string.copies of portion of an array.
let slicees = "ThummarYug";
// let sllices = slicees.slice(3,9); // slice(starting index,ending index)
// let sllices = slicees.slice(7);  
let sllices = slicees.slice(-2); //10-2 = 8
console.log(sllices);

// 8) replace methods : this methods is used to replace the word like
let replay = "worldIsYour";
let repl = replay.replace("worldIsYour","YugThummar");
console.log(repl);
console.log(replay);

// 9) repeat methods : This methods is used to repeat the string message 
let repeaat = "Mango";
console.log(repeaat.repeat(3));