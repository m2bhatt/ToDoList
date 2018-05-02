const $ = require('jquery');
const TodoList = require('./TodoList.js');
const Item = require('./Item.js');
const Renderer = require('./Renderer.js');

beforeEach(function() {
  createHTMLAppSkeleton();
});

test("Render a todo list with one item", function() {
  var todoList = new TodoList();
  todoList.add(new Item("Render todo list"));
//  console.log('Todo list app root node: ', document);
  new Renderer(todoList, document.getElementById('todo-list-app')).render();
  expect($('#todo-list-app > ul > li').text()).toEqual('Render todo list');
})

test("Render a form with input field alongside with the todo list", function() {
  var todoList = new TodoList();
  new Renderer(todoList, document.getElementById('todo-list-app')).render();

  expect($('#todo-list-app > form > input').length).not.toEqual(0);
});

test("Simulate form field input and ensure that the todo list and UI updates accordingly", function() {
  new Renderer(new TodoList(), document.getElementById('todo-list-app')).render();

  // Simulate user behaviour
  const form = $('#todo-list-app form');

  $('input', form).val("My first todo");
  form.submit();

  $('input', form).val("My second todo");
  form.submit();

  // Simulate the users expectation
  expect($('#todo-list-app > ul > li').eq(0).text()).toEqual("My first todo");
  expect($('#todo-list-app > ul > li').eq(1).text()).toEqual("My second todo");
});

test("Form is reset after a todo item has been added to the todo list", function() {
  new Renderer(new TodoList(), document.getElementById('todo-list-app')).render();

  // Simulate user behaviour
  const form = $('#todo-list-app form');

  $('input', form).val("My first todo");
  form.submit();

  // Simulate the users expectation
  expect($('#todo-list-app > form > input').eq(0).val()).toEqual("");  
});

function createHTMLAppSkeleton() {
  document.body.innerHTML = `<div id='todo-list-app'></div>`;
}
