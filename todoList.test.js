// Brainstorming

// Storage manager
// behaviour
// - store a list of items
// - load a list items

const TodoList = require('./TodoList.js');
const Item = require('./Item.js');

test("New items have a blank description by default", function() {
  var item = new Item();
  expect(item.description).toEqual('');
});

test("New items should not be done", function() {
  var item = new Item();
  expect(item.isMarkedAsDone).toEqual(false);
});

test("New items can be initialized with a description", function() {
  var item = new Item("Learn JavaScript");
  expect(item.description).toEqual("Learn JavaScript");
});

test("Toggling the status of a new item marks it as done", function() {
  var item = new Item();
  item.toggle();
  expect(item.isMarkedAsDone).toEqual(true);
});

test("Toggling the status of a done item marks it as undone", function() {
  var item = new Item();
  item.toggle(); // first mark it as done
  item.toggle(); // then mark it as todo
  expect(item.isMarkedAsDone).toEqual(false);
});

test("New todo lists have no items by default", function() {
  var todoList = new TodoList();
  expect(todoList.items).toEqual([]);
});

test("New todo lists should be considered empty", function() {
  var todoList = new TodoList();
  expect(todoList.isEmpty()).toBe(true);
});

test("Todo lists support adding items", function() {
  var todoList = new TodoList();
  var item = new Item();
  todoList.add(item);
  expect(todoList.items).toEqual([item])
});

test("Todo lists support removing items", function() {
  var todoList = new TodoList();
  var item = new Item();
  todoList.add(item);
  todoList.remove(item);
  expect(todoList.items).toEqual([])
});

test("Todo lists support clearing all items", function() {
  var todoList = new TodoList();
  todoList.add(new Item());
  todoList.add(new Item());
  todoList.reset();
  expect(todoList.items).toEqual([])
});
