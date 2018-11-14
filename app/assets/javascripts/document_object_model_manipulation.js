window.addEventListener("load", function(){
  var myHeading = document.querySelector("#heading");
  var myTasks = document.querySelectorAll(".task");
  var orangeButton = document.querySelector("#orange-button");
  var newTaskButton = document.querySelector("#new-task-button");
  var myTaskList = document.querySelector("ul");
  var newTaskInput = document.querySelector("#new-task-input")
  
  myHeading.addEventListener("click", function() {
    myHeading.style.fontSize = "100px";
  });

  orangeButton.addEventListener("click", function() {
    for (var i = 0; i < myTasks.length; i++) {
      myTasks[i].style.color = "orange";
    }
  });

  newTaskButton.addEventListener("click", function() {
    var newTask = document.createElement("li");
    newTask.className = "task";
    newTask.innerHTML = newTaskInput.value;
    myTaskList.appendChild(newTask);
    newTaskInput.value = "";

    orangeButton.addEventListener("click", function() {
      newTask.style.color = "orange";
    });
  });
});

