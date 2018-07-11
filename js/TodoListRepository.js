const TodoList = require("./TodoList.js");

class TodoListRepository {
  save(list) {
    localStorage.setItem('todoList', JSON.stringify(list.items));
  }

  load() {
    var data = JSON.parse(localStorage.getItem('todoList'));
    return new TodoList(data);
  }
}

module.exports = TodoListRepository;
