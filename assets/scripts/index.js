const React = require('react');

require("../styles/stylesheet.css");
const TodoList = require('./components/todoList');
const PomodoroTimer = require('./components/pomodoroTimer.js');

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