import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../styles/stylesheet.css';
import TodoList from './components/todoList.jsx';
import PomodoroTimer from './components/pomodoroTimer.jsx';

const Index = React.createClass({
    render: function IndexRender () {
        return (
            <div className="row col-xs-12">
                <h1>Todomodoro</h1>
                <Tabs>
                    <TabList>
                        <Tab>Todos</Tab>
                        <Tab>Pomodoro</Tab>
                    </TabList>

                    <TabPanel>
                        <TodoList />
                    </TabPanel>
                    <TabPanel>
                        <PomodoroTimer />
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
});

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(<Index />, document.getElementById('body'));
});
