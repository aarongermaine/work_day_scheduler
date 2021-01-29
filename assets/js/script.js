$(document).ready(function() {

  
//display the date (:
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

