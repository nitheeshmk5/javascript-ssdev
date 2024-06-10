let todoList = [];
let dates = [];

const addTodo = () => {
  let todo = document.getElementById("todosData").value.trim();
  let date = document.getElementById("date").value;
  if (todo && date) {
    todoList.push({
      name: todo,
      date: date,
    });
    console.log(todoList);
    renderTodo();
  }
};

const renderTodo = () => {
  let todoHTML = [];
  for (let i = 0; i < todoList.length; i++) {
    todoHTML.push(`
    <div class="datas" >
      <p> ${todoList[i].name} </p> 
      <p> ${todoList[i].date} </p>
      <button class="delete" onclick = "todoList.splice(${i}, 1); renderTodo();"> Delete </button>
    </div>
      `);
  }
  document.querySelector(".todo-container").innerHTML = todoHTML.join("");
};

document.getElementById("addTodoBtn").addEventListener("click", addTodo);
