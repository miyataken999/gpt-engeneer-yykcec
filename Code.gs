/**
 * Reads data from a Google Sheet and creates events in a Google Calendar.
 */
function createEventsFromSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var calendarId = 'your_calendar_id'; // Replace with your calendar ID
  var calendar = CalendarApp.getCalendarById(calendarId);
  
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var title = row[0];
    var startDate = row[1];
    var endDate = row[2];
    var description = row[3];
    
    var event = calendar.createEvent(title, startDate, endDate, {description: description});
  }
}