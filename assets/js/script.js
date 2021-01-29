$(document).ready(function() {
  
var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

  for (var i = 0; i < hours.length; i++) {

    var hourDiv = $("<div>");

    hourDiv.addClass("time-block row hour");

    hourDiv.attr("data-hour", hours[i]);

    hourDiv.text(hours[i]);

    $("#timeDiv").append(hourDiv);

    console.log(hourDiv);
    
    function displayColors () {
      
      //if hour has passed display past class
       if (moment(todaysDate).isBefore(hours)) {
         hourDiv.addClass("past");
       } else if (moment(todaysDate).isSame(hours)) {
         hourDiv.addClass("present");
       } else if (moment(todaysDate).isAfter(hours)) {
         hourDiv.addClass("future");
       }
      //if hour is present display present class

      //if hour is future display future class
  
    };

    displayColors();

  }





var todaysDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

var dateDisplay = $("#currentDay");


$(dateDisplay).text(todaysDate);
});
// i am using a planner to schedule my day

//when i click start display said planner

//display the current day at the top

//when i scrolldown i can see all hours of the day

//if the time displayed has already passed , change to a inactive color and a inactive display

//if the time displayed is immediate have an active color displayed

//if it is in the future have a future colored display

//when i click a time block then i can enter into an event

//when i click save on that time block

//then the text entered is saved into that time block that was clicked in local storage

// when i refresh all items for that day are saved

