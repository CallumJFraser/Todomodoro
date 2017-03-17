import chai from 'chai';
import todoStore from '../../../../assets/scripts/stores/todo';

chai.should();

describe('Todo store', () => {
	const createAction = 'TODO_CREATE';
	const removeAction = 'TODO_REMOVE';
	const updateAction = 'TODO_UPDATE';
	const setTodos = items => {
		localStorage.setItem('Todomodoro-TodoItems', JSON.stringify(items));
	};

	beforeEach(() => {
		localStorage.clear();
	});

	it('should return default item if localStorage empty', () => {
		let todos = todoStore.getTodos();
		todos[0].id.should.equal(1);
		todos[0].text.should.equal('Try Me');
	});

	it('should return current items from localStorage', () => {
		setTodos([{
			id: 12345,
			text: '0one2three4five6seven8nine'
		}]);

		let todos = todoStore.getTodos();
		todos[0].id.should.equal(12345);
		todos[0].text.should.equal('0one2three4five6seven8nine');

		setTodos([{
			id: 54321,
			text: '9eight7six5four3two1zero'
		}]);

		todos = todoStore.getTodos();
		todos[0].id.should.equal(54321);
		todos[0].text.should.equal('9eight7six5four3two1zero');
	});

	it('should handle todo create action',  () => {
		setTodos([]);

		todoStore.handleDispatch({
			action: createAction,
			data: {
				text: 'testing this shizzle'
			}
		});

		const todos = todoStore.getTodos();
		todos[0].text.should.equal('testing this shizzle');
	});

	it('should handle todo remove action',  () => {
		setTodos([{
			id:1,
			text: 'this is a test'
		}]);

		todoStore.handleDispatch({
			action: removeAction,
			data: 1
		});

		const todos = todoStore.getTodos();
		todos.length.should.equal(0);
	});

	it('should handle todo update action',  () => {
		setTodos([{
			id:1,
			text: 'this is a test'
		}]);

		todoStore.handleDispatch({
			action: updateAction,
			data: {
				id: 1,
				text: 'updated text'
			}
		});

		const todos = todoStore.getTodos();
		todos[0].text.should.equal('updated text');
	});
});
