class TodoList {
  constructor(items) {
    if (items !== undefined){
      this.items = items;
    } else {
      this.items = [];
    };
  }

  add(item) {
    this.items.push(item);
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

  reset() {
    this.items = [];
  }
}

module.exports = TodoList;
