let todo = document.querySelector("#text");
let root = document.querySelector("ul");

let todoList = [
];



function handleInput(event){

    let value = event.target.value ;

    if(event.keyCode === 13 && value !== ""){

        let todo = {
            task : event.target.value,
            isDone : false,
        };
    
        todoList.push(todo);
        event.target.value = "";
   
    }

    createUI();
    
}


function handleDelete(event){
    let id = event.target.dataset.id;
    todoList.splice(id,1);
    createUI();
}

function handleToggle(event){
    let id = event.target.dataset.id;
    todoList[id].isDone = !todoList[id].isDone;

    createUI();
}

// <li class="flex">
//<input type="checkbox" id="" class="" name="" />
//<p>learn dom</p>
//<span>x</span>
//</li>

function createUI(){

    root.innerHTML = "";

    todoList.forEach( (todo, index) => {

        let li = document.createElement("li");
        li.classList.add("flex");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.checked = todo.isDone;
        input.addEventListener("input",handleToggle);
        input.setAttribute("data-id",index);
        let p = document.createElement("p");
        p.innerText = todo.task;
        let span = document.createElement("span");
        span.innerText = "x";
        span.addEventListener(click , handleDelete);
        span.setAttribute("data-id", index);

        li.append(input,p,span) ;
        root.append(li);

    })

   

}

console.log(createUI());

todo.addEventListener("keyup",handleInput );