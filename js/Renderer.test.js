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
  expect($('#todo-list-app > ul > li > .toggleStatus').eq(0).attr("type")).toEqual("checkbox");
  expect($('#todo-list-app > ul > li').eq(1).text()).toEqual("My second todo");
  expect($('#todo-list-app > ul > li > .toggleStatus').eq(1).attr("type")).toEqual("checkbox");
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

test("Selecting the checkbox next to a todo marks it as done by applying a CSS class", function() {
  new Renderer(new TodoList(["My first to do"]), document.getElementById('todo-list-app')).render();
  // Simulate user behaviour
  $('.toggleStatus').click();
  // Simulate the users expectation
  expect($('#todo-list-app > ul > li').eq(0).hasClass("done")).toEqual(true);
});

// test to see if clicking checkbox twice will remove the CSS class (more in ACT part)
test("Selecting the checkbox next to a done todo marks it as undone by applying a CSS class", function() {
  new Renderer(new TodoList(["My first to do"]), document.getElementById('todo-list-app')).render();
  // Simulate user behaviour
  $('.toggleStatus').click();
  $('.toggleStatus').click();
  // Simulate the users expectation
  expect($('#todo-list-app > ul > li').eq(0).hasClass("notDone")).toEqual(true);
});

test("Clicking the delete button next to a todo removes it from the todo list", function() {
  new Renderer(new TodoList(["My first to do"]), document.getElementById('todo-list-app')).render();

  $('.deleteTask').click();

  expect($('#todo-list-app > ul > li').length).toEqual(0);
});

function createHTMLAppSkeleton() {
  document.body.innerHTML = `<div id='todo-list-app'></div>`;
}
