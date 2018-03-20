var tasks = {
  urgentImportant: [],
  nonUrgentImportant: [],
  urgentNotImportant: [],
  notUrgentNotImportant: []
};

function createTodo(form){
  var item = takeUserInput(form);
  var list = form.nextElementSibling;
  addItem(item, list);
  // clears the field
  form.reset(); // if call function on an object, refer to it as a method
};

function takeUserInput(form) { //calls function
  return form.children[0].value;
}

function addItem(taskDescription, list){ //function call
  var listIdentifier = list.parentElement.id;
  storeItem(taskDescription, tasks[listIdentifier]);
  syncWithLocalStorage();
  renderItem(list, taskDescription);
}

function storeItem(content, tasks) {
  tasks.push(content);
}

function syncWithLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderItem(list, content) {
  var listItem = document.createElement("li");
  var text = document.createTextNode(content);
  listItem.appendChild(text);
  listItem.setAttribute("class", "normalText");
  listItem.addEventListener("click", toggleDone);
  list.appendChild(listItem);
}

function retrieveList(){
  var savedTasks =  JSON.parse(localStorage.getItem("tasks"));
  // [ urgentImportant, urgentNotImportant ... ]
  for (var key in savedTasks) {
    // getElementbyId(key) retrieves parent div
    list = document.getElementById(key).getElementsByTagName("ul")[0]

    for (var i = 0; i < savedTasks[key].length; i++) {
      addItem(savedTasks[key][i], list);
    }
  }
}
  //document.getElementById(listOfKeys[i]).value;
//   for (i = 0; i < savedTasks.length; i++){
//     addItem(savedTasks[i]);
//   }
  // For every list in savedTasks:
  // - Find the right ul DOM node
  // - For every item in the particular arrays:
  //   - invoke addItem
//}

function deleteList(){
  var listIdentifier = list.parentElement.id;
  while (listIdentifier.firstChild){
    listIdentifier.removeChild(listIdentifier.firstChild);
    localStorage.removeItem(tasks[listIdentifier]);
  }
}

function toggleDone(ev) {
  if (ev.target.className == "normalText") {
    ev.target.setAttribute("class", "strikeItem");
  } else {
    ev.target.setAttribute("class", "normalText");
  }
}
