// const container = document.querySelector(".todo-container");
const input = document.querySelector(".input");
const btn = document.querySelector("button");
const list = document.querySelector(".list-input");
const filter = document.querySelector(".filter-todo");
const hamburger =document.querySelector(".hamburger");
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector(".nav-links li");


btn.addEventListener("click", newTodo);
list.addEventListener("click", deleteCheck);
filter.addEventListener("click", filterTodo);


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    // links.forEach(link => {
    //   link.classList.toggle("fade");
    // });

  });


function newTodo(event){
    event.preventDefault();
    
    //create new div
    let todo = document.createElement("div");
    todo.classList.add("todo");

    //create input
    let newLi= document.createElement("li")
    newLi.innerText=input.value;
    // storeTodos(input.value);
    newLi.classList.add("items");

    todo.appendChild(newLi);

    //create deletebtn and checkbtn
    let checkBtn = document.createElement("button");
    checkBtn.classList.add("checkBtn");
    checkBtn.innerHTML='<i class="fas fa-check-square"></i>';
    todo.appendChild(checkBtn);

    //deleteBtn
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML='<i class="fas fa-trash"></i>';
    todo.appendChild(deleteBtn);

    //append todo to the ul
    list.appendChild(todo);
    input.value= "";
}

function deleteCheck(e){
   const item = e.target;
    // console.log(item);
    if(item.classList[0] === "deleteBtn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
             todo.remove();
        });
}
//checkBtn
if(item.classList[0] === "checkBtn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
}
}

function filterTodo(e){
    const todos= list.childNodes; 
    // console.log(todos);

    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex"; 
                break;
            case "Completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex"; 
                }
                else{
                    todo.style.display="none";
                }
                break;
                case "Not-completed":
                    if(!todo.classList.contains("completed")){
                        todo.style.display = "flex"; 
                    } 
                    else{
                        todo.style.display="none";
        }
        break;
    }
    });   
}

// function storeTodos(todo){
//     let todos;
//     if(localStorage.getItem("todos") === null){
//         todos=[];
//         }else{
//             todos = JSON.parse(localStorage.getItem("todos"));
//         }
//         todos.push(todo);
//         localStorage.setItem('todos', JSON.stringify(todos)); 
// }
//  function getTodos(){
//      let todos;
//      if(localStorage.getItem("todos") === null){
//         todos=[];
//         }else{
//             todos = JSON.parse(localStorage.getItem("todos"));
//         }
      
//     }

 
