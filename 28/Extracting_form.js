let forms = document.querySelector("form");

forms.addEventListener("submit", function (event) {
    event.preventDefault();

    // let user = document.querySelector("#user"); 
    // let pass = document.getElementById("pass");

    // console.log(user.value);
    // console.log(pass.value);

    // alert(`your name is ${user.value} and your password is ${pass.value}`);

    console.dir(forms);
    console.log(this.elements[0].value); //this is the short hand. using this keyword can access a 0th index access 
    console.log(this.elements[1].value);
});