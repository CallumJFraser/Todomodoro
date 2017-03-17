import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/stylesheet.css';
import TodoList from './components/todoList.jsx';
import PomodoroTimer from './components/pomodoroTimer.jsx';

const Index = React.createClass({
    render: function IndexRender () {
        return (
            <div className="row">
                <h1>Todomodoro</h1>
                <div className="col-sm-8">
                    <TodoList />
                </div>
                <div className="col-sm-4">
                    <PomodoroTimer />
                </div>
            </div>
        );
    }
});

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(<Index />, document.getElementById('body'));
});
