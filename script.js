    const todolist = [];

    function renderTodoList() {
        let todolistHtml = '';
        todolist.forEach((todoObject, index) => {
            // const name=todoObject.name;
            // const dueDate=todoObject.dueDate;
            const {
                name,
                dueDate
            } = todoObject; //destructring
            //  const{dueDate}=todoObject;
            const html = `
                    <div>${name}</div>
                    <div class="">${dueDate}</div>
                    <button  class="delete-todo-button hover js-delete-todo-button">Delete</button>
                    `;
            todolistHtml += html;
        });
        document.querySelector('.js-todo-list').innerHTML = todolistHtml;
        document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todolist.splice(index, 1);
                renderTodoList();
            });
        });


    }

    document.querySelector('.js-add-todo-button').addEventListener('click', () => {
        addTodo();
    });

    function addTodo() {
        const inputElement = document.querySelector('.js-name-input');
        const name = inputElement.value;
        const dateInputElement = document.querySelector('.js-due-date-input');
        const dueDate = dateInputElement.value;
        todolist.push({
            // name:name,
            //  dueDate:dueDate
            name,
            dueDate
        });
        console.log(todolist);

        inputElement.value = '';
        dateInputElement.value = '';
        renderTodoList();
    }