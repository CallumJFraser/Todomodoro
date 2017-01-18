const React = require('react');
const ReactDOM = require('react-dom');

require("../styles/stylesheet.css");
const TodoList = require('./components/todoList.jsx');
const PomodoroTimer = require('./components/pomodoroTimer.jsx');

const Index = React.createClass({
    render: function IndexRender () {
        return (
            <div className="row">
                <h1>Todomodoro</h1>
                <TodoList />
                <PomodoroTimer />
            </div>
        );
    }
});

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(<Index />, document.getElementById('body'));
});
