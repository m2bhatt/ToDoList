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
    var $li = $('<li></li>').appendTo(this.$todoList);

    var $checkbox = $('<input type="checkbox"></input>').appendTo($li);
    $li.append(document.createTextNode(item.description));
    $checkbox.click(this.onClicked);
  }

  onClicked(event) {
    $(event.target).parent().addClass("done");
  }

}

module.exports = Renderer;
