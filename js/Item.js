class Item {
  constructor(description) {
    if (description !== undefined) {
      this.description = description;
    } else {
      this.description = '';
    };
    this.isMarkedAsDone = false;
  }

  toggle() {
    this.isMarkedAsDone = !this.isMarkedAsDone;
  };
}

module.exports = Item;
