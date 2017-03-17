import chai from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import TodoList from '../../../../assets/scripts/components/todoList.jsx';

chai.should();

describe('TodoList', function () {
	const renderComponent = function () {
		const component = TestUtils.renderIntoDocument(<TodoList />);
		return ReactDOM.findDOMNode(component);
	};

	it('should render with filled name input and remove button', function () {
		const todoList = renderComponent();

		const title = todoList.querySelectorAll('h2')[0];
		title.textContent.should.equal('Todos');
	});
});
