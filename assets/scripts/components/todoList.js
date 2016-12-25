const React = require('react');
const Dispatcher = require('../dispatcher');
const TodoStore = require('../stores/todo');

const TodoItem = require('./todoItem');

module.exports = React.createClass({
    getInitialState: () => {
        return {
            items: TodoStore.getTodos()
        };
    },
    componentDidMount: function () {
        var taskId = TodoStore.subscribe(payload => {
            if (payload.action === 'UPDATE') {
                this._onChange();
            }
        });
        this.setState({
            taskId
        });
    },
    componentWillUnmount: function () {
        TodoStore.unsubscribe(this.state.taskId);
    },
    _addItem: () => {
        Dispatcher.publish({
            action: 'TODO_CREATE',
            data: {}
        });
    },
    _onChange: function () {
        this.setState({
            items: TodoStore.getTodos()
        });
    },
    render: function TodoListRender () {
        var todos = [];
        this.state.items.forEach(function (item) {
            todos.push(<TodoItem key={item.id} item={item} />)
        });
        return (
            <section className="col-sm-8">
                <h2>Todos</h2>
                <ul>
                    {todos}
                </ul>
                <button type="button" className="btn btn-primary" onClick={this._addItem}>Add</button>
            </section>
        );
    }
});
