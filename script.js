//Add item to a list
var items = [];
//Why do we add form in brackets? What's the difference between empty brackets
//and no brackets at all?
function addItem(form){
  var input = form.children[0].value;
  var test = document.createElement("li");
  var text = document.createTextNode(input);
  test.appendChild(text);
  document.body.appendChild(test);
  form.reset();
};
