const Student = {
    name:"Yug",
    science: 23,
    maths:45,
    english:87,
     getAverage(){
        let avg = ((this.science + this.maths + this.english) / 3)
        console.log((avg));
    }
};
console.log(Student.getAverage());