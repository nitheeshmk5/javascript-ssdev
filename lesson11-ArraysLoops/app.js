document.addEventListener("DOMContentLoaded", () => {
  const todoLists = [];

  const addTodo = () => {
    const inputElement = document.getElementById("task");
    const inputValue = inputElement.value.trim();

    if (inputValue) {
      todoLists.push(inputValue);
      inputElement.value = "";
      renderTodos();
    }
  };

  const renderTodos = () => {
    const addTask = document.getElementById("tasks");
    addTask.innerHTML = todoLists.map((todo) => `<p>${todo}</p>`).join("");
  };

  document.getElementById("addTaskBtn").addEventListener("click", addTodo);
});
