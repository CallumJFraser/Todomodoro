import React from 'react';

import Dispatcher from '../dispatcher';
import TodoStore from '../stores/todo';
import TodoItem from './todoItem.jsx';

export default React.createClass({
    getInitialState: () => {
        return {
            items: TodoStore.getTodos()
        };
    },
    componentDidMount: function () {
        let taskId = TodoStore.subscribe(payload => {
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
        let todos = [];
        this.state.items.forEach(function (item) {
            todos.push(<TodoItem key={item.id} item={item} />)
        });
        return (
            <section>
                <h2>Todos</h2>
                <ul>
                    {todos}
                </ul>
                <button type="button" className="btn btn-primary" onClick={this._addItem}>Add</button>
            </section>
        );
    }
});
