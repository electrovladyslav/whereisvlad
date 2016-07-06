var ports = document.querySelectorAll('.port');
var counties = document.querySelectorAll('.county');
var arrivals = document.querySelectorAll('.arrival time');
var departures = 
	document.querySelectorAll('.departure time');

var progressBar = 
	document.querySelector('.progress-bar');

var arrivalDate =  
	Date.parse(arrivals[0].attributes[0].value);
var departureDate = 
	Date.parse(departures[1].attributes[0].value);
var now = new Date();

if (arrivalDate > departureDate) {
	var finishDate = arrivalDate;
	var startDate = departureDate;
} else {
	var finishDate = departureDate;
	var startDate = arrivalDate;
}

var voyageProgress 
	=Math.round( (1 - (finishDate - now)/(finishDate - startDate)) * 100 );

voyageProgress = (voyageProgress > 100) ? 100 : voyageProgress;
voyageProgress = (voyageProgress < 0) ? 0 : voyageProgress;

progressBar.style.width = (voyageProgress > 10) ? (voyageProgress + "%") : "10%";
progressBar.innerHTML = voyageProgress + "%";