//Add item to a list
var items = [];
//Why do we add form in brackets? What's the difference between empty brackets
//and no brackets at all?
function addItem(form){
  var input = form.children[0].value;
  var listItem = document.createElement("li");
  var text = document.createTextNode(input);

//  var check = document.createElement("input");
//  check.setAttribute("type", "checkbox");
// check.type = "checkbox";

  listItem.appendChild(text);
  document.getElementsByTagName('ul')[0].appendChild(listItem);
  form.reset();
};
