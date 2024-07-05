const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const todoText = todoInput.value.trim(); 
    if (todoText !== '') {
        addTodoItem(todoText); 
        todoInput.value = ''; 
    }
});
function addTodoItem(todoText) {
    const todoItem = document.createElement('li');
    todoItem.innerHTML = `
        <span>${todoText}</span>
        <button class="delete-btn">Delete</button>
    `;
    const deleteBtn = todoItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        todoItem.remove(); 
    });
    todoList.appendChild(todoItem);
}