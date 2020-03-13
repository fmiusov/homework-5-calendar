$(document).ready(function() {
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

  // WHEN I view the timeblocks for that day
  // THEN each timeblock is color coded to indicate whether it is in the past, present, or future

  for (var i = 0; i < 9; i++) {
    var hourRow = $(".hour").children().prevObject[i];
    var currentHour = moment().format("k");
    var hourChange = ($("textarea")[i]);
    console.log(hourRow.id)
    console.log(currentHour)
    console.log(hourChange)
    if (parseInt(currentHour) > parseInt(hourRow.id)) {
      hourChange.removeClass("future present")
      hourChange.addClass("past");
      
      console.log("past")
    } else if (parseInt(currentHour) === parseInt(hourRow.id)) {
      hourChange.removeClass("future past")
      hourChange.addClass("present");
      
      console.log("present")
    } else if (parseInt(currentHour) < parseInt(hourRow.id)) {
      hourChange.removeClass("present past")
      hourChange.addClass("future");
      console.log("future")
    }
    
  }

  // WHEN I click into a timeblock

  // THEN I can enter an event

  // WHEN I click the save button for that timeblock

  // THEN the text for that event is saved in local storage

  // WHEN I refresh the page

  // THEN the saved events persist
});
