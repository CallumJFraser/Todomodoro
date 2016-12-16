require("../styles/stylesheet.css");
const TodoList = require('./components/todolist');
const PomodoroTimer = require('./components/pomodorotimer.js');

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