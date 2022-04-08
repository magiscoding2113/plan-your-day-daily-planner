var dayOfWeek = moment()
$("#currentDay").text(dayOfWeek.format("dddd, MMMM Do, YYYY"));

//TO DO:
//format the blocks correctly and color code
//change color code based on past, present and future
//entered text is saved for the date and persist when pg is exited and refreshed
//var timeBlocksEl =$(".time-block");


//timeBlocksEl.each(function(index,el) {
    //var timeBlocksEl = $(el);
    //var saveBtn = saveBtn.find(".time-block");
    //var faSave = fa-save[index];
    //saveBtn.text(fa-save);
//});

function hourContainer() {
    var timeBlocksEl = document.getElementsByTagName("div")[4];
    document.getElementById("container").innerHTML = timeBlocksEl.innerHTML;
  }


var saveBtn = $(".text-block");

var hourContainer = document.querySelector(".time-block");

hourContainer.addEventListener("click", function(event) {
  var element = event.target;


});








var timeBlocksEl = $('.time-block')
for (var i = 0; i < timeBlocksEl.length; i++) {
    console.log(timeBlocksEl[i].textcontent);
    console.log(timeBlocksEl[i].id)
}
   // if (timeBlocksEl[i].textcontent < currentTime) {
        //timeBlocksEl.addClass('past')
   // }

//}






//var hourBlocks = document.querySelectorAll(".description");
//var hourOfDay = element().hourBlocks();

//$('#container').children().eq(15).addClass('hour-12');
//var schedule = [];
var ScheduleItem = $('usertext');
var SaveBtn = $('.saveBtn');

function saveText() {
    for (var i =0; i < ScheduleItem.length; i++);
    console.log(ScheduleItem)
}