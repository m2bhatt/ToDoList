var tasks = [];

function createTodo(form){
  var item = takeUserInput(form);
  addItem(item);
  // clears the field
  form.reset(); // if call function on an object, refer to it as a method
};

function takeUserInput(form) { //calls function
  return form.children[0].value;
}

function addItem(taskDescription){ //function call
  tasks.push(taskDescription);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  var listItem = document.createElement("li");
  var text = document.createTextNode(taskDescription);
  listItem.appendChild(text);
  var list = document.getElementsByTagName("ul")[0];
  listItem.setAttribute("class", "normalText");
  listItem.addEventListener("click", toggleDone);
  list.appendChild(listItem);
}

function retrieveList(){
  var savedTasks =  JSON.parse(localStorage.getItem("tasks"));

  for (i = 0; i < savedTasks.length; i++) {
    addItem(savedTasks[i]);
  }
}


function deleteList(){
  var delText = document.getElementById("myList");
  while (delText.firstChild){
    delText.removeChild(delText.firstChild);
    localStorage.removeItem("tasks");
  }
}

function toggleDone(ev) {
  if (ev.target.className == "normalText") {
    ev.target.setAttribute("class", "strikeItem");
  } else {
    ev.target.setAttribute("class", "normalText");
  }
}
