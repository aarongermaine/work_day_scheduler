$(document).ready(function() {
//use moment to display the current date
var todaysDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

var dateDisplay = $("#currentDay");

$(dateDisplay).text(todaysDate);
//saves the hour/description to local storage
$(".saveBtn").on("click",function () {
   
    var descriptionValue = $(this).siblings(".description").val();
    
    
    var timeDisplay = $(this).parent().attr("id");

    
    localStorage.setItem(timeDisplay, descriptionValue);
  });


//add classes based on the time of day
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

//returns saved description/hour to page from local storage
$("#time9 .description").val(localStorage.getItem("time9"));
$("#time10 .description").val(localStorage.getItem("time10"));
$("#time11 .description").val(localStorage.getItem("time11"));
$("#time12 .description").val(localStorage.getItem("time12"));
$("#time13 .description").val(localStorage.getItem("time13"));
$("#time14 .description").val(localStorage.getItem("time14"));
$("#time15 .description").val(localStorage.getItem("time15"));
$("#time16 .description").val(localStorage.getItem("time16"));
$("#time17 .description").val(localStorage.getItem("time17"));
  


});


