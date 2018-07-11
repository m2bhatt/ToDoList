const TodoListRepository = require('./TodoListRepository.js');
const TodoList = require('./TodoList.js');
const Item = require('./Item.js');

beforeEach(() => {
  localStorage.clear();
});

test("Supports saving a todo list", function() {
  var todoList = new TodoList(["First to do"]);
  var repository = new TodoListRepository();

  repository.save(todoList);

  expect(JSON.parse(localStorage.getItem('todoList'))).toEqual([{"description": "First to do", "isMarkedAsDone": false}]);
});

test("Returns an empty todo list if no todo list has ever been saved", function() {
  var repository = new TodoListRepository();

  var todoList = repository.load();

  expect(todoList.items).toEqual([]);
});

test("Supports loading a previously saved todo list", function() {
  var item = new Item("First to do");
  item.toggle();
  var originalTodoList = new TodoList([item]);
  var repository = new TodoListRepository();

  repository.save(originalTodoList);
  var loadedTodoList = repository.load();

  expect(loadedTodoList).toEqual(originalTodoList);
});
