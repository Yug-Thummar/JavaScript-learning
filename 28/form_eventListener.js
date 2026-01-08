let forms = document.querySelector("form");

forms.addEventListener("submit", function (event) {
    // event preventdefault : action URL don't go
    event.preventDefault();
    alert("Form submitted!");
});