//Add item to a list
var items = [];

function addItem(form){
  var input = form.children[0];
  var todo = input.value;
  items.push(todo);
};
