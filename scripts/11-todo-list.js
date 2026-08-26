const todoList = [
  {
    name:'make dinner',
    dueDate:'2022-12-22'
  },{
    name:'wash dishes',
    dueDate:'2022-12-22'
  }];

renderTodoList();
function helper(){
  if(event.key==='Enter'){
    addTodo();
  }
}
function renderTodoList(){
let todoListHTML = '';
for(let i=0;i<todoList.length;i++){
  const todoObject = todoList[i];
 // const name = todoObject.name;
 //const {name} = todoObject;
 //const {dueDate} = todoObject;
 //const dueDate = todoObject.dueDate;
  const {name,dueDate} = todoObject;
  const html = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button class = "btn" onclick="todoList.splice(${i},1);
  renderTodoList();">
  Delete
  </button>
   `;
  todoListHTML+=html;
}
document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;
}
function addTodo(){
  const inputElement = document.querySelector('.practice1');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  todoList.push({name,dueDate});
  console.log(todoList);
  inputElement.value = '';

  renderTodoList();
}