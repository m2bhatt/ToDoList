// Brainstorming

// Storage manager
// behaviour
// - store a list of items
// - load a list items

const TodoList = require('./TodoList.js');
const Item = require('./Item.js');

test("New todo lists have no items by default", function() {
  var todoList = new TodoList();
  expect(todoList.items).toEqual([]);
});

test("New todo lists when initialized with null have no items by default", function() {
  var todoList = new TodoList(null);
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

test("Todo lists support auto-converting strings to items", function() {
  var todoList = new TodoList();
  todoList.add("Some task");
  var item = todoList.items[0];

  expect(item).toBeInstanceOf(Item);
  expect(item.description).toEqual("Some task");
  expect(item.isMarkedAsDone).toEqual(false);
});

test("Todo lists auto-convert constructor arguments to items if necessary", function() {
  var todoList = new TodoList([
    new Item("This is already an Item"),
    "This is not an Item"
  ]);

  expect(todoList.items[0]).toBeInstanceOf(Item);
  expect(todoList.items[0].description).toEqual("This is already an Item");
  expect(todoList.items[1]).toBeInstanceOf(Item);
  expect(todoList.items[1].description).toEqual("This is not an Item");
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
