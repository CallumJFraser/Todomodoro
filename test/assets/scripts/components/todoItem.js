import chai from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import TodoItem from '../../../../assets/scripts/components/todoItem.jsx';

chai.should();

describe('TodoItem', function () {
	const testItem = {
		id: 1,
		text: 'temp'
	};
	const renderComponent = function () {
		const component = TestUtils.renderIntoDocument(<TodoItem item={testItem} />);
		return ReactDOM.findDOMNode(component);
	};

	it('should render with filled name input and remove button', function () {
		const todoItem = renderComponent();
		const nameInput = todoItem.querySelectorAll('textarea')[0];
		const removeButton = todoItem.querySelectorAll('button');

		nameInput.textContent.should.equal('temp');
		removeButton.length.should.equal(1);
		removeButton[0].textContent.should.equal('Remove');
	});
});
