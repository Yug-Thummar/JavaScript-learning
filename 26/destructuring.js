// Destructuring 
let name = ["Yug","Utsav","krishna","Bhavesh","Bhavik","Bavan"];
// let winner = name[0];
// let runnerup = name[1];
let [winner , runnerup,secoundRunnerup,...other] = name;
console.log(winner);
console.log(runnerup);
console.log(secoundRunnerup);
console.log(other);


// Destructuring object
let student = {
    name_:"Yug",
    age:18,
    branch:"computer",
    username:"yugthummar",
    password:"Yug@1234",
    // city:"Pune"
};
// let _name = student.name_;
// console.log(_name);

// let {name_ , password} = student;
// console.log(name_);
// console.log(password);  

let {name_:name__ , password:password_ , city = "Mubai"} = student;
console.log(name__);
console.log(password_);
console.log(city);