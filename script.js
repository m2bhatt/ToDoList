function createTodo(form){
  var item = takeUserInput(form);
  addItem(item);
  // clears the field
  form.reset(); // if call function on an object, refer to it as a method
};

function takeUserInput(form) { //calls function
  return form.children[0].value;
}

function addItem(item){ //function call
  var listItem = document.createElement("li");
  var text = document.createTextNode(item);
  listItem.appendChild(text);
  var list = document.getElementsByTagName('ul')[0];
  list.appendChild(listItem);
}
