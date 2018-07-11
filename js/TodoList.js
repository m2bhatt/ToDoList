const Item = require("./Item.js");

class TodoList {
  constructor(items) {
    this.items = [];
    if (items !== undefined && items !== null) {
      for (var item of items) {
        this.add(item);
      }
    }
  }

  add(item) {
    if (item instanceof Item) {
      this.items.push(item);
    }
    else if ("string" == typeof item) {
      this.items.push(new Item(item));
    }
    else if ("object" == typeof item && 'description' in item && 'isMarkedAsDone' in item) {
      this.items.push(new Item(item.description, item.isMarkedAsDone))
    }
    else {
      throw("Bad input");
    }
  }

  isEmpty() {
    return (this.items.length == 0);
  }

  remove(item) {
    var index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  toggleStatusOfItemAtIndex(index) {
    var item = this.items[index];
    item.toggle();
  }

  // itemAtIndex(index) {
  //   return this.items[index];
  // }

  removeItemAtIndex(index) {
    this.items.splice(index, 1);
  }

  reset() {
    this.items = [];
  }
}

module.exports = TodoList;
