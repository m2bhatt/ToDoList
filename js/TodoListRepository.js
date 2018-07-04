const TodoList = require("./TodoList.js");

class TodoListRepository {
  save(list) {
    localStorage.setItem('todoList', JSON.stringify(list.items));
  }

  load() {
    return new TodoList(JSON.parse(localStorage.getItem('todoList')));
  }
}

module.exports = TodoListRepository;
