// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

0  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

var timeDisplayEl = $("#currentDay");
var events = "";

var field 
var content
var hours1 = $("#hour-1");
var hours2 = $("#hour-2");
var hours3 = $("#hour-3");
var hours4 = $("#hour-4");
var hours5 = $("#hour-5");
var hours6 = $("#hour-6");
var hours7 = $("#hour-7");
var hours8 = $("#hour-8");
var hours9 = $("#hour-9");
var hours10 = $("#hour-10");
var hours11 = $("#hour-11");
var hours12 = $("#hour-12");
var hoursArray = [hours1, hours2, hours3, hours4, hours5, hours6, hours7, hours8, hours9, hours10, hours11, hours12, ];



function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}



$(".saveBtn").click(saveProjectsToStorage)




function readProjectsFromStorage() {
  var hourlyEvents = Object.keys(localStorage);
  for (let index = 0; index < hourlyEvents.length; index++) {
    const oneEvent = hourlyEvents[index];
    
    var storageEvent = localStorage.getItem(oneEvent);
    
    $("#" + oneEvent).val(storageEvent);
    
  }
  
  
}

function saveProjectsToStorage() {
  buttonId = this.id
  fieldId = buttonId + "field"
  content = $("#" + fieldId).val()
  localStorage.setItem(fieldId, content)
}






function checkTime() {
  
 for (let index = 9; index < 18; index++) {
  let amPmTime = index;
if (index > 12) {
  amPmTime = index - 12
}
let timeClass = "future"

if (dayjs().isSame(dayjs().hour(index), 'hour')) {
  timeClass = "present"
}
else if (dayjs().isBefore(dayjs().hour(index), 'hour')) {
  timeClass = "past"
}

$("#hour-" + amPmTime).addClass(timeClass);
  

  console.log(amPmTime);

  
 }

    


} 
checkTime();

displayTime();
setInterval(displayTime, 1000);
readProjectsFromStorage();

