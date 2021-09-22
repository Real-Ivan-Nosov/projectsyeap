(function () {
    //создаем и возращаем заголовок приложения
    let createAppTitle = (title) => {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    // создаем и  возращаем форму для содания дела
    let createItemForm = () => {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.id = 'text';
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.id = 'submitButton';
        button.textContent = 'Добавить дело';
        button.disabled = true;

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button
        };
    }

    //создаем и возращаем список элементов 
    let createTodoList = () => {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    let createTodoItem = (name) => {
        let item = document.createElement('li');
        // создаем кнопки
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        // добавляем стили и расположение
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-container');
        item.textContent = name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        // собираем кнопки в группу
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return {
            item,
            doneButton,
            deleteButton
        }
    }

    let createTodoApp = (container, title = 'Список дел', hotTasks = null) => {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createItemForm();
        let todoList = createTodoList();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);
        if (hotTasks) {
            for (let hotTask of hotTasks) {
                let hot = createTodoItem(hotTask.name);
                if (hotTask.done) {
                    hot.item.classList.add('list-group-item-success');
                }
                hot.doneButton.addEventListener('click', () => {
                    hot.item.classList.toggle('list-group-item-success');
                });
                hot.deleteButton.addEventListener('click', () => {
                    if (confirm('Вы уверены?')) {
                        hot.item.remove()
                    };
                });
                todoList.append(hot.item);
            }
        }

        todoItemForm.input.addEventListener("input", () => {
            let text = document.getElementById('text');
            let button = document.getElementById('submitButton');
            if (text.value === '') {
                button.disabled = true;
            } else {
                button.disabled = false
            }
        });

        todoItemForm.form.addEventListener('submit', (e) => {
            e.preventDefault();

            //игнорируем создание элемента если пользователь ничего не ввел
            if (!todoItemForm.input.value) {
                return;
            }

            let todoItem = createTodoItem(todoItemForm.input.value);

            //добавляем обработчики на кнопки
            todoItem.doneButton.addEventListener('click', () => {
                todoItem.item.classList.toggle('list-group-item-success');
            });
            todoItem.deleteButton.addEventListener('click', () => {
                if (confirm('Вы уверены?')) {
                    todoItem.item.remove()
                };
            });

            todoList.append(todoItem.item);

            todoItemForm.input.value = '';
            let button = document.getElementById('submitButton');
            button.disabled = true;
        })
    }


    window.createTodoApp = createTodoApp;
})();