const Item = require('./Item.js');

test("New items have a blank description by default", function() {
  var item = new Item();
  expect(item.description).toEqual('');
});

test("New items should not be done", function() {
  var item = new Item();
  expect(item.isMarkedAsDone).toEqual(false);
});

test("New items can be initialized with a description", function() {
  var item = new Item("Learn JavaScript");
  expect(item.description).toEqual("Learn JavaScript");
});

test("Toggling the status of a new item marks it as done", function() {
  var item = new Item();
  item.toggle();
  expect(item.isMarkedAsDone).toEqual(true);
});

test("Toggling the status of a done item marks it as undone", function() {
  var item = new Item();
  item.toggle(); // first mark it as done
  item.toggle(); // then mark it as todo
  expect(item.isMarkedAsDone).toEqual(false);
});
