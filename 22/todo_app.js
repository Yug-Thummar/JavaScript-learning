let todo = [];
let req = prompt("Please enter your request");
while (true) {
    if (req == "quit") {
        console.log("quit a todo app:");
        break;
    }

    if (req == "list") {
        console.log("-------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(todo[i]);
        }
        console.log("-------------");
    }
    else if (req == "add") {
        let add = prompt("Please enter your task you want add");
        todo.push(add);
        console.log("task added sucessfully");
    }

    else if (req == "delete") {
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
    }
    else {
        console.log("Invalid request:")
    }
    req = prompt("Please enter your request");
}