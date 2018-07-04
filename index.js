const Renderer = require("./js/Renderer.js");
const TodoListRepository = require("./js/TodoListRepository.js");

// Setup the application (a.k.a Renderer) and connect it to the HTML
new Renderer(new TodoListRepository(), document.getElementById('todo-list-app')).render();
