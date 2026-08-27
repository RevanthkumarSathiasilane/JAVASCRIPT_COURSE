const todoList = JSON.parse(localStorage.getItem('todoList'))||[];

renderTodoList();
function helper(){
  if(event.key==='Enter'){
    addTodo();
  }
}
function renderTodoList(){
let todoListHTML = '';
todoList.forEach(function(todoObject,index){
  const todoObject = todoList[i];
  const {name,dueDate} = todoObject;
  const html = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button class = "delete-btn" onclick="todoList.splice(${index},1);
  saveTodoList();
  renderTodoList();">
  Delete
  </button>
   `;
  todoListHTML+=html;
});
document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;
}
function addTodo(){
  const inputElement = document.querySelector('.practice1');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  todoList.push({name,dueDate});
  saveTodoList();
  console.log(todoList);
  inputElement.value = '';

  renderTodoList();
}
function saveTodoList(){
  localStorage.setItem('todoList',JSON.stringify(todoList));
}