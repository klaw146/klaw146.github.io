
function calendar(dateString) {

  // Date that the monthly calendar is based on
  if (dateString == null) calDate = new Date();
  else calDate = new Date(dateString);

  document.write("<table id = 'calendar_table'>");

  // Write the header row of the calendar table
  writeCalTitle(calDate);

  // Write the row of weekday abbreviations
  writeDayNames();

  // Write the calendar days
  writeCalDays(calDate);

  document.write("</table>");
}


function writeCalTitle(calendarDay) {

  /* 
     Create an array literal named monthName and populate it with twelve strings,
     one of each month of the year (beginning with "January").
     Remove the comment block tags from the rest of the code in this function.
  */
  var monthName = ["January", "February", "March",
  "April", "May", "June", "July", "August", "September",
  "October", "November", "December"];

  /* The thisMonth variable contains the calendar month number,
  the thisYear variable contains the 4-digit year value */
  var thisMonth = calendarDay.getMonth();
  var thisYear = calendarDay.getFullYear();

  // Write the table header row of the calendar table
  document.write("<tr>");
  document.write("<th id='calendar_head' colspan='7'>");
  document.write(monthName[thisMonth] + " " + thisYear);
  document.write("</th>");
  document.write("</tr>");
}



function writeDayNames() {

  // Array of weekday abbreviations
  var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Start a table row of the weekday abbreviations
  document.write("<tr>");



  /*
    Create a for loop that steps through all the indices of the dayName array
    defined above. Hint: make sure i does not exceed the length of the array. 
    You can access the length property of an array like this arrayName.length
    For each index in the array, call the write method on the document object
    and pass it an html table heading element having the class name calendar_weekdays.
    Inside the html table heading tags, output the value stored at the current array
    index. Hint: Use string concatenation. Hint: You will need to alternate the
    use of single and double quotes for the class name.
  */
  for (var i = 0; i < dayName.length; i++) {
    document.write("<th class='calendar_weekdays'> " + dayName[i] + "</th>");
  }




  /*
    ADVANCED: Replace the for loop in the instructions above with a different
    approach that achieves the same results.
  */
  // var i = 0;
  // dayName.forEach(writeDay);
  // function writeDay() { document.write("<th class='calendar_weekdays'> " + dayName[i++] + "</th>"); }



  // End the table row
  document.write("</tr>");
}



function daysInMonth(calendarDay) {

  // Array of days in each month
  var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];

  // Extract the four digit year value from calendarDay
  var thisYear = calendarDay.getFullYear();

  // Extract the month value from calendarDay
  var thisMonth = calendarDay.getMonth();

  // Revise the days in February for leap years
  if (thisYear % 4 == 0) {
    if ((thisYear % 100 != 0) || (thisYear % 400 == 0)) {
      dayCount[1] = 29;
    }
  }

  // Return the number of days for the current month
  return dayCount[thisMonth];
}



function writeCalDays(calendarDay) {

  // Determine the starting day of the month
  var day = new Date(calendarDay.getFullYear(), calendarDay.getMonth(), 1);
  var weekDay = day.getDay();

  // Write blank cells preceding the starting day
  document.write("<tr>");
  for (var i = 0; i < weekDay; i++) {
    document.write("<td></td>");
  }

  // Write cells for each day of the month
  var totalDays = daysInMonth(calendarDay);
  var highlightDay = calendarDay.getDate();

  for (var i = 1; i <= totalDays; i++) {
    //Move to the next day in the month
    day.setDate(i);
    weekDay = day.getDay();



    /*
      Add a conditional statement here. If the value of weekDay is equal to
      zero, write a table row opening tag "<tr>" to the document. This will 
      format the output so that a new row is created each Sunday.
    */
    if (weekDay == 0) document.write("<tr>");




    // Test if the day being written matches the calendar day
    if (i== highlightDay) {
    document.write("<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>");
    } else {
    document.write("<td class='calendar_dates'>" + i + dayEvent[i] + "</td>");
    }




    /*
      Add a conditional statment here. If the value of weekDay is equal to
      six (the numeric value, not a string), write a table row closing tag
      "</tr>" to the document. This will format the output so that each row
      ends on Saturday.
      Remove the comment block tags from the lines of code just above.
    */
    if (weekDay == 6) document.write("</tr>");
  }
}
