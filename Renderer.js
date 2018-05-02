const Item = require("./Item.js");

class Renderer {
  constructor(todoList, appRootNode) {
    this.todoList = todoList;
    this.appRootNode = appRootNode;
    this.todoListNode = document.createElement("ul");
    this.form = document.createElement("form");
    this.input = document.createElement("input");
  }

  handleSubmit(event) {
    event.preventDefault();
    var item = new Item(this.input.value);
    this.todoList.add(item);
    var listItemNode = document.createElement("li");
    var text = document.createTextNode(item.description);
    listItemNode.appendChild(text);
    this.todoListNode.appendChild(listItemNode);
    this.form.reset();
  }

  render() {
    this.appRootNode.appendChild(this.todoListNode);

    //var container = $('todo-list-app'),
    // TODO: Create a form with an onsubmit event handler which
    // - creates a new item
    // - adds it to the TodoList this renderer manages
    // - updates the UI
    this.form.onsubmit = this.handleSubmit.bind(this);
//    $('todo-list-app').on('submit', event.preventDefault());

    // this.todoList.appendChild(this.item);
    // - and prevents the submit default (full page reload)
    this.appRootNode.appendChild(this.form);
    this.form.appendChild(this.input);

    for (var item of this.todoList.items) {
      var listItemNode = document.createElement("li");
      var text = document.createTextNode(item.description);
      listItemNode.appendChild(text);
      this.todoListNode.appendChild(listItemNode);
    }
  }
}

module.exports = Renderer;
