const Twitter = {
    username: "@yug_thummar8726",
    content: "This is my first post",
    like: 150,
    repost: 5,
    tags: ["@renish3454", "@tirthpatel"]
};
console.log(Twitter);
// how to access a particular object key
// console.log(Twitter["username"]);
console.log(Twitter.username);
console.log(Twitter.tags[0]);
let prop = "repost";
console.log(Twitter[prop]);

// conversion in get value
let obj = {
    1: "a",
    2: "b",
    null: "c",
    undefined: "d",
    true: "e"
};
console.log(obj.null);

// add/update object literals
const student = {
    name: "Yug",
    age: 18,
    marks: 90.12,
    city: "Surat"
};
console.log(student);
student.age = 19;  //updated student age 
console.log(student);
student.gender = "male"; //add student gender
console.log(student);
student.marks = [90, 80, 70];
console.log(student.marks[0]);
delete student.city;
console.log(student);

// Storing a multiple student information
let student_1 = {
    yug: {
        grade: "A",
        city: "Ahmedabad"
    },
    utsav: {
        grade: "B",
        city: "surat"
    },
    krishna: {
        grade: "c",
        city: "rajkot"
    }
};
console.log(student_1);
console.log(student_1.yug);

// Array of object 
let student_2 = [
    {
        name: "yug",  // object: value
        grade: "A",
        city: "Ahmedabad"
    },
    {
        name: "utsav",
        grade: "B",
        city: "surat"
    },
    {
        name: "krishna",
        grade: "c",
        city: "rajkot"
    }
];
console.log(student_2); //access a student array
console.log(student_2[0]); //access a 0th index for name,grade,and city
console.log(student_2[0].name); //access a 0th index for name object
student_2[0].name = "bavanji";
console.log(student_2[0]);


// math function
let num = Math.random();
num = num * 10;
console.log("Random integer value: ", num);
num = Math.floor(num);
console.log("Round of value: ", num);
num = num + 1;
console.log("1 add: ", num);

// generate a random number between 0 to 100
let n = Math.floor(Math.random() * 100) + 1;
console.log("Generate a random number between 0 to 100: ", n);

// generate a random number between 0 to 15
let ran = Math.floor(Math.random() * 15) + 1;
console.log("generate a random number between o to 15: ", ran);


// user enter a max number & then tries to guess a random generated number between 1 to max
const user = prompt("Enter a maximum number you want to generated");
let rando = Math.floor(Math.random() * user) + 1;
console.log(rando);
let guess = prompt("guess the number");
while (true) {
    if (guess == "quit") {
        console.log("Quit the game");
        break;
    }
    if (guess == rando) {
        console.log("Congrats! You are write!");
        break;
    } else if(guess < rando){
        guess = prompt("Hint: you are guess to small! please try again");
    }else{
        guess = prompt("You guess was so large! please try agian!");
    }
}