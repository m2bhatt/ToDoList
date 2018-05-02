const $ = require('jquery');
const Item = require("./Item.js");

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
    for (var item of this.todoList.items) {
      this._renderItem(item);
    }
  }

  _renderItem(item) {
    this.$todoList.append($("<li></li>").text(item.description));
  }
}

module.exports = Renderer;
