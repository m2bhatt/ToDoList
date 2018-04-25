// Brainstorming

// Storage manager
// behaviour
// - store a list of items
// - load a list items

const $ = require('jquery');
const TodoList = require('./TodoList.js');
const Item = require('./Item.js');
const Renderer = require('./Renderer.js');

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



test("Render a todo list with one item", function() {
  document.body.innerHTML = createHTMLAppSkeleton();
  var todoList = new TodoList();
  todoList.add(new Item("Render todo list"));
//  console.log('Todo list app root node: ', document);
  new Renderer(todoList, document.getElementById('todo-list-app')).render();
  expect($('#todo-list-app > ul > li').text()).toEqual('Render todo list');
})

test("Render a todo list with two items", function() {
  // TODO: Write the test (expectation should be similar or the same as in the refresh test)
  document.body.innerHTML = createHTMLAppSkeleton();
  var todoList = new TodoList();
  todoList.add(new Item("Item One"));
  todoList.add(new Item("Item Two"));
  new Renderer(todoList, document.getElementById('todo-list-app')).render();
  expect($('#todo-list-app > ul > li').eq(0).text()).toEqual("Item One");
  expect($('#todo-list-app > ul > li').eq(1).text()).toEqual("Item Two");
});

test("Render a form with input field alongside with the todo list", function() {
  document.body.innerHTML = createHTMLAppSkeleton();
  var todoList = new TodoList();
  new Renderer(todoList, document.getElementById('todo-list-app')).render();
  // TODO: Write the test

  expect($('#todo-list-app > form > input').length).not.toEqual(0);
});

test("Simulate form field input and ensure that the todo list and UI updates accordingly", function() {
 // TODO: Maybe in 2 weeks :)
})

test("Refresh todo list", function() {
  document.body.innerHTML = createHTMLAppSkeleton();
  var todoList = new TodoList();
  todoList.add(new Item("Render todo list"));
  var renderer = new Renderer(todoList, document.getElementById('todo-list-app'));
  todoList.add(new Item("Refresh todo list"));
  renderer.update();

  expect($('#todo-list-app > ul > li').eq(0).text()).toEqual("Render todo list");
  expect($('#todo-list-app > ul > li').eq(1).text()).toEqual("Refresh todo list");
  // TODO: Add expection
})

function createHTMLAppSkeleton() {
  return `<div id='todo-list-app'></div>`
}
