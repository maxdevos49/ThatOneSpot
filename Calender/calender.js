//July 23, 2017 Max DeVos

function populateCalender(){

	var calenderHTMLData = "<tr><td><p>Sunday</p></td><td><p>Monday</p></td><td><p>Tuesday</p></td><td><p>Wednesday</p></td><td><p>Thursday</p></td><td><p>Friday</p></td><td><p>Saturday</p></td></tr>";

	//loop through the rows for the calender
	for (var inVar1 = 0;inVar1 < 6; inVar1 = inVar1 + 1){

		calenderHTMLData = calenderHTMLData + "<tr>";

			for (var inVar2 = 0; inVar2 < 7; inVar2 = inVar2 + 1){
				calenderHTMLData = calenderHTMLData + "<td><p></p></td>"
			}

		calenderHTMLData = calenderHTMLData + "</tr>";
		console.log(inVar1);
	}


	document.getElementById('calender').innerHTML = calenderHTMLData;

}

function populateToday(){


	var todaysHour = ["8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm"];

	var todayHTMLData = "<tr><td></td><td><h2><center>Todays Events</center></h2></td></tr>";

	
	for (var inVar2 = 0; inVar2 < 13; inVar2 = inVar2 + 1){

		todayHTMLData = todayHTMLData + "<tr><td><center><h4>" + todaysHour[inVar2] + ": </h4></center></td><td></td></tr>";

		//console.log(inVar2);
	}

	document.getElementById('today').innerHTML = todayHTMLData;

}

function updateTime(){
	document.getElementById('time').innerHTML = getTime();
}

function getTime(){

  var date = new Date();

  var hours = date.getHours();

  var minutes = date.getMinutes();

  var seconds = date.getSeconds();

  return hours + ":" + minutes;

}