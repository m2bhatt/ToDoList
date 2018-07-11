const $ = require('jquery');
const TodoList = require("./TodoList.js");
const Item = require("./Item.js");

class Renderer {
  constructor(todoListRepository, containerElement) {
    this.todoListRepository = todoListRepository;
    this.todoList = todoListRepository.load();
    this.$container = $(containerElement);
    this.$todoList = $('<ul></ul>');
    this.$form = $('<form></form>');
    this.$form.on('submit', this.onSubmit.bind(this));
    this.$input = $('<input></input>').appendTo(this.$form);

    this.$container.append(this.$todoList, this.$form);
  }

  onSubmit(event) {
    event.preventDefault();
    var item = new Item(this.$input.val(), false);
    this.todoList.add(item);
    this.todoListRepository.save(this.todoList);
    this.$input.val("");
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

    $checkbox.click(this.onClicked.bind(this));
    $delItem.on('click', this.onDelete.bind(this));

    if (item.isMarkedAsDone) {
      $checkbox.prop('checked', true);
      $checkbox.parent().addClass("done");
    }
  }

  onClicked(event) {
    var index = $(":checkbox").index(event.target);
    $(event.target).parent().toggleClass("done");
    this.todoList.toggleStatusOfItemAtIndex(index);
    this.todoListRepository.save(this.todoList);
  }
  //   if (item.isMarkedAsDone == false) {
  //     $(event.target).parent().toggleClass("done");
  //   }
  // }
  // //   if (event.target.checked) {
  //
  //     $(event.target).parent().removeClass("notDone");
  //     $(event.target).parent().addClass("done");
  //   }
  //   else {
  //     $(event.target).parent().removeClass("done");
  //     $(event.target).parent().addClass("notDone");
  //   }
  // }

  onDelete(event) {
    var index = $(":button").index(event.target);
  // //  console.log(index);
    this.todoList.removeItemAtIndex(index);
  //   // console.log("Item removed?");
  //   // console.log("List contents: " + this.todoList.items);
    this.render();
  // }
}

}

module.exports = Renderer;
