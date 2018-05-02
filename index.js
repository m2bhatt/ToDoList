const Renderer = require("./js/Renderer.js");
const TodoList = require("./js/TodoList.js");

// Setup the application (a.k.a Renderer) and connect it to the HTML
new Renderer(new TodoList(), document.getElementById('todo-list-app')).render();
