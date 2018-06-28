const $ = require('jquery');
const Item = require("./Item.js");
const TodoList = require("./TodoList.js");

class Renderer {
  constructor(todoList, containerElement) {
    this.todoList = todoList;
    this.$container = $(containerElement);
    this.$todoList = $('<ul></ul>');
    this.$form = $('<form></form>');
    this.$form.on('submit', this.onSubmit.bind(this));
    this.$input = $('<input></input>').appendTo(this.$form);

    this.$container.append(this.$todoList, this.$form);
  }

  onSubmit(event) {
    event.preventDefault();

    var item = new Item(this.$input.val());

    this.$input.val("");
    this.todoList.add(item);
    this._renderItem(item);
  }

  render() {
    this.$todoList.empty();
    for (var item of this.todoList.items) {
      this._renderItem(item);
    }
  }

  _renderItem(item) {
    var $li = $('<li></li>').appendTo(this.$todoList);
    var $checkbox = $('<input class="toggleStatus" type="checkbox"></input>').appendTo($li);
    var $delItem = $('<input class="deleteTask" type="button" value="x"></input>');

    $li.append(document.createTextNode(item.description));
    $li.append($delItem);
    $checkbox.click(this.onClicked);
    // $delItem.click(this.onDelete);
    $delItem.on('click', this.onDelete.bind(this));

  }

  onClicked(event) {
    console.log("Event target: " + event.target);
    console.log("Is checked? " + event.target.checked);

    if (event.target.checked) {
      $(event.target).parent().removeClass("notDone");
      $(event.target).parent().addClass("done");
    }
    else {
      $(event.target).parent().removeClass("done");
      $(event.target).parent().addClass("notDone");
    }
  }

  onDelete(event) {
    var index = $(":button").index(event.target);

    // explanation of :button
    // what if multiple buttons with multiple lists? how do we assign it to
    // one element like that specific ul
    console.log(index);
    this.todoList.removeItemAtIndex(index);

    console.log("Item removed?");
    console.log("List contents: " + this.todoList.items);

    this.render();

  }

}

module.exports = Renderer;
