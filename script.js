//Add item to a list
var items = [];

function addItem(form){
  var input = form.children[0];
  var todo = input.value;
  items.push(todo);
  var lenItem = items.length;
  for (var i=0; i<=lenItem; i++){
    lenItem = lenItem + i;
  }
  document.getElementById("firstList").innerHTML = items[i];
};
