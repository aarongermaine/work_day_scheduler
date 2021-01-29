$(document).ready(function() {


$(".saveBtn").on("click", function() {
   
    var descriptionValue = $(this).siblings(".description").val();
    var timeDisplay = $(this).parent().attr("id");

    
    localStorage.setItem(timeDisplay, descriptionValue);
  });



function hourAssign() {

    var presentHour = moment().hour();

    console.log(presentHour);

    $(".time-block").each(function () {

        var timeBlock = parseInt($(this).attr("id").split("time")[1]);

        if (timeBlock < presentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        } 
        else if (timeBlock === presentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");

        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }

    })

}

hourAssign();

$("#time9 .description").val(localStorage.getItem("time9"));
$("#time10 .description").val(localStorage.getItem("time10"));
$("#time11 .description").val(localStorage.getItem("time11"));
$("#time12 .description").val(localStorage.getItem("time12"));
$("#time13 .description").val(localStorage.getItem("time13"));
$("#time14 .description").val(localStorage.getItem("time14"));
$("#time15 .description").val(localStorage.getItem("time15"));
$("#time16 .description").val(localStorage.getItem("time16"));
$("#time17 .description").val(localStorage.getItem("time17"));
  
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

