// this with arrow function
const student = {
    name : "yug",
    age: 18,
    marks:90,
    getName: function (){
        console.log(this.name);
    },
    getMarks: () => {
        console.log(this);
        console.log(this.marks);
    },
    getinfo1:function(){
        setTimeout(function(){
            console.log(this); // windows
        },3000);
    },
    getinfo2: function(){
        setTimeout( () =>{
            console.log(this); // student
        },3000);
    }
};
student.getName();
student.getMarks();
// student.getinfo1();
// student.getinfo2();