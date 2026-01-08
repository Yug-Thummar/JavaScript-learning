let forms = document.querySelector("form");

forms.addEventListener("submit", function (event) {
    event.preventDefault();
});

// change:The change events occurs when the value of an elements has been changed(only works on <input>,<textarea>, and <select> elements)
// change events not track a samll pices it's track a initial and final change between track
// if i press the non character then not a consider as input
let user = document.querySelector("#user");

user.addEventListener("change",function(){
    console.log("input changed");
    console.log("Final changed = ",this.value);
});

// input:The input events fires when the value of an <input> , <select> ,or <textarea> elements has been changed
let pass = document.querySelector("#pass");

pass.addEventListener("input",function(){
    console.log("input changed");
    console.log("Final changed = ",this.value);
});