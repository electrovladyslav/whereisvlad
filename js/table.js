"use strict";

var scheduleBody = document.querySelector('.schedule-body');
var ports = document.querySelectorAll('.port');

var arrivals = document.querySelectorAll('.arrival time');
var departures = 
	document.querySelectorAll('.departure time');

var now = new Date(); //2016, 2, 4

for (var i = 0; i < arrivals.length; i++) {
	var arrivalDate =  
		new Date(arrivals[i].attributes[0].value);
	var departureDate = 
		new Date(departures[i].attributes[0].value);
	var prevDepartureDate = 
		new Date(departures[i+1].attributes[0].value);
	
	if (now > departureDate) { //судно за пределами таблицы
		ports[i].classList.add('leaved');
		break;
	}

	if (now >= arrivalDate) {	//судно в порту
		showProgress (i, "Стоянка в порту", arrivalDate, departureDate);
		break;
	}

	if (now >= prevDepartureDate) { //судно на переходе
		showProgress (i, "Морской переход", prevDepartureDate, arrivalDate);
		break;
	};
};
//пометим все порты, начиная со следующего, посещёнными
for (++i; i < ports.length; i++) {
	ports[i].classList.add('leaved');
};

function showProgress (i, position, startDate, finishDate) {
	var voyageProgress 
		=Math.round( (1 - (finishDate - now)/(finishDate - startDate)) * 100 );

	voyageProgress = (voyageProgress > 100) ? 100 : voyageProgress;
	voyageProgress = (voyageProgress < 0) ? 0 : voyageProgress;
	var progressBarMin = (voyageProgress < 10) ? 10 : voyageProgress;

	//progressBar.innerHTML = voyageProgress + "%";
	var rowProgress = document.createElement('tr');
	rowProgress.className = 'row-progress';
	rowProgress.innerHTML = '<td>' + position + '</td><td colspan="4"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="' + voyageProgress + '" aria-valuemin="0" aria-valuemax="100" style="width:' + progressBarMin + '%;">' + voyageProgress + '%</div></td>'

	scheduleBody.insertBefore(rowProgress, arrivals[i].parentNode.parentNode.nextElementSibling)

}