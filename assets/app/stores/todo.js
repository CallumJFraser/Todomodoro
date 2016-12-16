const Dispatcher = require('../dispatcher');
const setupObserver = require('../setupObserver');
const todoStore = {};
const publish = setupObserver(todoStore);

//  Store handles storage and updates components that care about its events
var _todos = [{id: 1, text: 'Try Me'}];
if (localStorage && localStorage.todos) {
    _todos = JSON.parse(localStorage.todos);
}

const create = todo => {
    const todoItem = Object.assign({}, todo, {
        id: new Date(),
        text: 'A new item'
    });
    _todos.push(todoItem);
};

const remove = id => {
    _todos = _todos.filter(item => {
        return item.id !== id;
    });
};

const update = todo => {
    _todos = _todos.map(item => {
        if (item.id === todo.id) {
            return todo;
        }
        return item;
    });
};

const _dispatchId = Dispatcher.subscribe(payload => {
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
    localStorage.setItem('todos', JSON.stringify(_todos));
    publish({
        action: 'UPDATE'
    });
});

todoStore.getTodos = () => {
    return _todos;
};

todoStore.unload = function () {
    Dispatcher.unsubscribe(dispatchId);
};

module.exports = todoStore;