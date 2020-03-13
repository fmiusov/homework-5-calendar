$(document).ready(function() {
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

  // WHEN I view the timeblocks for that day
  // THEN each timeblock is color coded to indicate whether it is in the past, present, or future

  for (var i = 0; i < 9; i++) {
    hourRow = $(".hour").children().prevObject[i];
    currentHour = moment().format("k");
    hourChange = $("textarea");
    console.log(hourRow.id)
    if (parseInt(currentHour) > parseInt(hourRow.id)) {
      hourChange.addClass("past");
    } else if (parseInt(currentHour) === parseInt(hourRow.id)) {
      hourChange.addClass("present");
    } else if (parseInt(currentHour) < parseInt(hourRow.id)) {
      hourChange.addClass("future");
    }
  }

  $("textarea").on

  // WHEN I click the save button for that timeblock

  // THEN the text for that event is saved in local storage

  // WHEN I refresh the page

  // THEN the saved events persist
});