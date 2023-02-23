let addMassege = document.querySelector('.message');
    addButton = document.querySelector('.add');
    todo = document.querySelector('.todo');
let todoList = [];

if (localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMassage();
};

addButton.addEventListener('click', function (){

    let newTodo = {
        id: Date.now(),
        todo: addMassege.value,
        checked: false,
        important: false
    };
    todoList.push(newTodo);
    displayMassage();
    localStorage.setItem('todo',JSON.stringify(todoList))

});

function displayMassage() {
    let displayMassage = '';
    todoList.forEach(function(item, i){
        displayMassage += `
        <li class="task">
        <input type="checkbox" id="item_{i}" ${item.checked ? 'checked' : ''} class="chBox"> 
        <label for="item_{i}" class="lebText">${item.todo}</label>
        <button id="dellIt" onclick=deletedItem() data-action="delete">Удалить</button>
        </li>
        `;
        todo.innerHTML = displayMassage;

    });
};

todo.addEventListener('change', function (event){
            let idInput = event.target.getAttribute('id');
            let forLabel = todo.querySelector('[for= '+ idInput +']');
             let valueLabel = forLabel.innerHTML;

            todoList.forEach(function (item){
                if (item.todo === valueLabel){
                    item.checked = !item.checked;
                    localStorage.setItem('todo', JSON.stringify(todoList));
                };
            });
});
//удаление задачи

todo.addEventListener('click', deletedItem)
function deletedItem(event) {
        const btnActDel = (event.target.dataset.action === 'delete')
    if (btnActDel) {
        const parentNode = event.target.closest('.task');
        const idElement = parentNode.id;
        todoList.findIndex(function (task){console.log(idElement)});
        parentNode.remove();
    }



};

