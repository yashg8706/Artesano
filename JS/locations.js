window.addEventListener('load', pageReady, false);

function pageReady() {
  var todayDate = new Date();
  var today = todayDate.getDay();
  var currentHH = todayDate.getHours();
  var openingHH;
  var closingHH;
  var todayDay;

  //Array of weekday values as displayed in HTML
  var weekDays = [1,2,3,4,5,6,0]; //Monday to Sunday
  //If today = to Value of <th> Day

  var rowIndex = weekDays.indexOf(today)

  //Target today's table row in each locations table pageReady
  var location1Schedule = document.querySelectorAll('#location-1 tr');
  var location2Schedule = document.querySelectorAll('#location-2 tr');
  var location3Schedule = document.querySelectorAll('#location-3 tr');
  var location4Schedule = document.querySelectorAll('#location-4 tr');
  var location5Schedule = document.querySelectorAll('#location-5 tr');



  //Highlight the current day and tailor the message with current time
  function openToday(todayIndex, schedule) {
      var todaySchedule = schedule[todayIndex];
      //Make Today's schedule bold text make Red
      todaySchedule.setAttribute("style", "font-size: 1.1em; font-weight: 700; color: #e7b30e;")

      //Set openingHH for specific Location
      openingHH = setOpenHH(todayIndex);
      //Set closingHH for Specific locations
      closingHH = setCloseHH(todayIndex);
/*****************************Logi for opening time *************************************/
      // If current Hour is > Opening time
      if (currentHH >= openingHH && currentHH <= closingHH) {
          //Change Opening time cell Data to Open
          todaySchedule.children[1].textContent = "OPEN";
          todaySchedule.children[1].style.textAlign = "right";
          //Change "to" cell data to "until"
          todaySchedule.children[2].textContent = " until ";
      } else {
          todaySchedule.children[0].textContent = "TODAY";
      }
  }//end of openToday

  function setOpenHH(indexOfToday) {
      if (indexOfToday == 1 || indexOfToday == 3) {
          return 11;
      } else {
          return 9;
      }
  }

  function setCloseHH(indexOfToday) {
      if (indexOfToday == 6 || indexOfToday == 0) {
          return 22;
      } else {
          return 21;
      }
  }

  openToday(rowIndex, location1Schedule);
  openToday(rowIndex, location2Schedule);
  openToday(rowIndex, location3Schedule);
  openToday(rowIndex, location4Schedule);
  openToday(rowIndex, location5Schedule);

}