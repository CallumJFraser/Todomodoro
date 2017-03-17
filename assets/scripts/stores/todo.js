import Dispatcher from '../dispatcher';
import setupObserver from '../setupObserver';

const localStorageName = 'Todomodoro-TodoItems';
const todoStore = {};
const publish = setupObserver(todoStore);

const getTodos = () => {
    if (localStorage && localStorage[localStorageName]) {
        return JSON.parse(localStorage[localStorageName]);
    }
    return [{id: 1, text: 'Try Me'}];
};

const setTodos = (todoList) => {
    localStorage.setItem(localStorageName, JSON.stringify(todoList));
};

const create = todo => {
    let _todos = getTodos();
    const todoItem = Object.assign({
        id: new Date(),
        text: 'A new item'
    }, todo);
    _todos.push(todoItem);

    setTodos(_todos);
};

const remove = id => {
    let _todos = getTodos();
    _todos = _todos.filter(item => {
        return item.id !== id;
    });

    setTodos(_todos);
};

const update = todo => {
    let _todos = getTodos();
    _todos = _todos.map(item => {
        if (item.id === todo.id) {
            return todo;
        }
        return item;
    });

    setTodos(_todos);
};

todoStore.handleDispatch = payload => {
    switch(payload.action) {
        case 'TODO_CREATE':
            create(payload.data);
            break;
        case 'TODO_REMOVE':
            remove(payload.data);
            break;
        case 'TODO_UPDATE':
            update(payload.data);
            break;
    }
    publish({
        action: 'UPDATE'
    });
};

const dispatchId = Dispatcher.subscribe(todoStore.handleDispatch);

todoStore.getTodos = getTodos;

todoStore.unload = function () {
    Dispatcher.unsubscribe(dispatchId);
};

export default todoStore;
