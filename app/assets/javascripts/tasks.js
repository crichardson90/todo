$(document).ready(function() {
  var myHeading = $("#heading");
  var myTasks = $(".task");
  var orangeButton = $("#orange-button");
  var newTaskButton = $("#new-task-button");
  var myTaskList = $("ul");
  var newTaskInput = $("#new-task-input");
  var CSRFToken = $('meta[name="csrf-token"]').prop("content");

  myHeading.hide();
  myTaskList.hide();
  myHeading.slideDown(1000);
  myTaskList.slideDown(1000);

  myHeading.on("click", function() {
    myHeading.toggleClass("large-font");
  });

  orangeButton.on("click", function() {
    myTaskList.toggleClass("orange-task-list");
  });

  newTaskButton.on("click", function() {
    $.ajax({
      type: "POST",
      url: "/tasks",
      headers: {'X-CSRF-TOKEN': CSRFToken},
      data: {
        name: newTaskInput.prop("value")
      },
      success: function(response) {
        myTaskList.append(`<li class='task' id=${response.id}>${response.name}</li>`);
        newTaskInput.prop("value", "");
      },
      error: function(response) {
        console.log(response);
      }
    });
  });

  myTaskList.on("click", function(event) {
    var task = $(event.target);
    var isFinished = task.hasClass("finished");

    $.ajax({
      type: "PUT",
      url: `/tasks/${task.prop("id")}`,
      headers: {'X-CSRF-TOKEN': CSRFToken},
      data: {finished: !isFinished},
      success: function(response) {
        task.toggleClass("finished");
      },
      error: function(response) {
        console.log(response.errors);
      }
    });
  });
});

