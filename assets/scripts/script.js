$(document).ready(function() {
  
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

  //I hardcoded the HTML and then spent the majority of my time trying to get the Class addition
  //conditional to work correctly. By the time I realized I had to generate the rows dynamically, it 
  //was already Friday. I tried to restart the project, but could not get the rows to generate in the alotted
  //time, so I am submitting this attempt version as it has more substance

  //The conditional works (as proven in the console) but it will not remove Classes, even with the .removeClass method
  //This issue arose because I hardcoded the HTML, misunderstanding the aim of the assignment
  for (var i = 0; i < 9; i++) {
    hourRow = $(".hour").children().prevObject[i];
    currentHour = moment().format("k");
    hourChange = $("textarea");
    if (parseInt(currentHour) > parseInt(hourRow.id)) {
      hourChange.addClass("past");
    } else if (parseInt(currentHour) === parseInt(hourRow.id)) {
      hourChange.addClass("present");
    } else if (parseInt(currentHour) < parseInt(hourRow.id)) {
      hourChange.addClass("future");
    }
  }



  //Similar difficulties with local storage when dealing with hardcoded HTML
  //My attempt here was to set the textarea to an input field and grab that input value when the save button was clicked
  //Then the value would be stored as an object in local storage
  $(".saveBtn").on("click", function(){
    $("textarea").append($("<form>").append(("<input>")))
    $("input").attr("type", "text")
    var toDoItem = $("input").value.trim()
    var toDoObj = {
      todo: toDoItem
    }
    localStorage.setItem("To Do", toDoObj);
  })

});