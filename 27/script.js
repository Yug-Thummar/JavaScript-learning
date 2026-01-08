// DOM:"documents object model",how to access a dom
// document.all[8].innerHTML = "Welcomepage";




// how to access a getElementsbyID
// document.getElementById("ID name");




// how to access a class
// let add = document.getElementsByClassName("card-description");
// console.dir(add);
// let add = document.getElementsByClassName("card-description")[1];
// console.dir(add);
// for (let i = 0; i < add.length; i++) {
//     add[i].outerHTML = "hi what are you doing"; 
// }




// selecting tag name
// document.getElementsByTagName("P");


// quearyselector : all html tag name,class name,id name given me like
// console.dir(document.querySelector("p")); in html colletion give me only one paragraph
// console.dir(document.querySelector("#feature-list"));
// console.dir(document.querySelector(".content-section"));
// if all html tag give. you can use queryselectorall
// console.dir(document.querySelectorAll("p"));




// setting content object
// let obj = document.querySelector("h3");
// obj.innerHTML; //inner text means web-pages visible text.show the visible text contained in node
// obj.innerHTML; //innerHTML means give me html file content.show the full markup. 
// obj.textContent; //textContent means give me html files. show the all full text
// obj.innertext = "hi,i am yug";




// inline style properties  
// let heading = document.querySelector("h1");
// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";




// in object how much class is exist you simplified a "classlist.add()"
// let add = document.querySelector("h1");
// add.classList;
// add.classList.add("hello");
// add.classList;
// // classList.remove() remove the class 
// add.classList.remove("hello"); //remove the class 
// // containes is used to if class is exist return true & if class is not exist return faluse
// add.classList.contains("hello");
// toggle : toggle means if class is already exist then remove the class and if class is not exist then add a class.toggle are calles as switch
//      T
// yes---->no
//     T
// no ---->yes
// add.classList.toggle("hello"); //class is already exist remove the class
// add.classList.toggle("hello"); //class is not exist add the class




// let chil = document.querySelector(".card-container");
// chil.children;  --> gives the card-container children.card container has a 3 children gives the 3 children
// chil.children[0]; --> gives the card-container children of 1
// chil.children[1]; --> gives the card-container children of 2 
// chil.children[2];  -->gives the card-container children of 3
// chil.children[2].previousElementSibling  -->gives the card-container children of [1] 
// chil.children[1].nextElementSibling;  --> gives the card-container children of [2] 




// if you can create a new elements in HTML pages,
// appendchild:
// document.createElement('p'); 
// let newP = document.createElement('p');  //first of frall create a paragraph elements
// newP 
// console.dir(newP);   //print the new paragraph
// newP.innerText = "Hii,My name is Yug";   //elements in write a pargraph
// newP
// let addP = document.querySelector("body"); 
// addP.appendChild(newP);
// removechild : remove the elements

// Q_1add a button from card-three container
// let btn = document.createElement("button")
// btn
// btn.innerText = "Click me!";
// let three = document.querySelector("#card-three");
// three
// three.appendChild(btn);
// document.querySelector("buton");
// btn.style.backgroundColor = "red";
// btn
// btn.style.color = "yellow";




// appends: if you can added a paragraph for some text and something you can use the append methods
// newP.append("My father name is kalpeshbhai");




// prepand : top of the pages you can add a prepands methods
// addP.prepend(newP);
