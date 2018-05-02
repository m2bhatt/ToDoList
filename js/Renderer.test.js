const $ = require('jquery');
const TodoList = require('./TodoList.js');
const Item = require('./Item.js');
const Renderer = require('./Renderer.js');

test("Render a todo list with one item", function() {
  document.body.innerHTML = createHTMLAppSkeleton();
  var todoList = new TodoList();
  todoList.add(new Item("Render todo list"));
//  console.log('Todo list app root node: ', document);
  new Renderer(todoList, document.getElementById('todo-list-app')).render();
  expect($('#todo-list-app > ul > li').text()).toEqual('Render todo list');
})

test("Render a todo list with two items", function() {
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

  expect($('#todo-list-app > form > input').length).not.toEqual(0);
});

test("Simulate form field input and ensure that the todo list and UI updates accordingly", function() {
  document.body.innerHTML = createHTMLAppSkeleton();
  new Renderer(new TodoList(), document.getElementById('todo-list-app')).render();

  // Simulate user behaviour
  const form = $('#todo-list-app form');
  $('input', form).val("My first todo");
  form.submit();

  // Simulate the users expectation
  expect($('#todo-list-app > ul > li').eq(0).text()).toEqual("My first todo");
})

function createHTMLAppSkeleton() {
  return `<div id='todo-list-app'></div>`
}
