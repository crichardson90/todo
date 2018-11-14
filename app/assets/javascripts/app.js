$(document).ready(function() { 
  var CSRFToken = $('meta[name="csrf-token"]').prop("content");
  var app = new Vue({
    el: '#app',
    data: {
      tasks: [],
      newTaskText: "",
      showFinished: true,
    },
    mounted: function() {
      $.ajax({
        url: "/tasks",
        type: "GET",
        dataType: "json",
        success: function(response) {
          this.tasks = response;
        }.bind(this),
        error: function(response) {
          console.log(response);
        }
      })
    },
    methods: {
      addTask: function() {
        $.ajax({
          url: "/tasks",
          type: "POST",
          headers: {'X-CSRF-TOKEN': CSRFToken},
          data: {name: this.newTaskText},
          dataType: "json", 
          success: function(response) {
            this.tasks.push(response);
            this.newTaskText = "";
          }.bind(this),
          error: function(response) {
            console.log(response);
          }
        });
      },

      finishedToggle: function(task) {
        $.ajax({
          url: `/tasks/${task.id}`,
          type: "PUT",
          headers: {'X-CSRF-TOKEN': CSRFToken},
          data: {finished: !task.finished},
          dataType: "json",
          success: function(response) {
            task.finished = response.finished;
          },
          error: function(response) {
            console.log(response);
          }
        });
      }
    }
  });
});



