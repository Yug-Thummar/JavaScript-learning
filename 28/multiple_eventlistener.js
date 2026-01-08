let parah = document.querySelector("p");
parah.addEventListener("mouseenter", function(){
    console.log("Paragraph is clicked");
});

let div = document.querySelector("div");
div.addEventListener("click",function(){
    div.style.backgroundColor = "red";
});