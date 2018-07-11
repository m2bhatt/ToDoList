class Item {
  constructor(description, isMarkedAsDone) {
    if (description !== undefined) {
      this.description = description;
    } else {
      this.description = '';
    };
    this.isMarkedAsDone = !!isMarkedAsDone;
  }

  toggle() {
    this.isMarkedAsDone = !this.isMarkedAsDone;
  //  this.setAttribute = ("style", "text-decoration: line-through; line-height: 10px");
  };
}

module.exports = Item;
