//Add item to a list
//var items = [];
//Why do we add form in brackets? What's the difference between empty brackets
//and no brackets at all?
function addItem(form){
  var input = form.children[0].value;
  var listItem = document.createElement("li");
  var text = document.createTextNode(input);
  listItem.appendChild(text);
//  var button = document.createElement("button");
//  button.setAttribute("type", "checkbox");
  var list = document.getElementsByTagName('ul')[0];
  //list.appendChild(button);
  list.appendChild(listItem);
  form.reset();
};

// function checkList(){
//   //var str = document.getElementById("myList").innerHTML;
//   console.log(str[0]);
// }


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


var str = "Hello".strikethrough;
console.log(str);

//  var check = document.createElement("input");
//  check.setAttribute("type", "checkbox");
// check.type = "checkbox";
