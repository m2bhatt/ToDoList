//Add item to a list
//var items = [];
//Why do we add form in brackets? What's the difference between empty brackets
//and no brackets at all?
function addItem(form){
  var input = form.children[0].value;
  var listItem = document.createElement("li");
  var text = document.createTextNode(input);
  listItem.appendChild(text);
  var list = document.getElementsByTagName('ul')[0];
  list.appendChild(listItem);
  form.reset();
};

function addItem2(form){
  // takes user input
  var input = takeUserInput(); //calls function
  var item = form.children[0].value;
  // displays it as a list item
  updateList(); //function call
  var listItem = document.createElement("li");
  var text = document.createTextNode(item);
  listItem.appendChild(text);
  var list = document.getElementsByTagName('ul')[0];
  list.appendChild(listItem);
  // clears the field
  form.reset(); // if call function on an object, refer to it as a method
};

//  var check = document.createElement("input");
//  check.setAttribute("type", "checkbox");
// check.type = "checkbox";
