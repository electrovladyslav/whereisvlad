"use strict";

var ports = document.querySelectorAll('.port');

var arrivals = document.querySelectorAll('.arrival time');
var departures = document.querySelectorAll('.departure time');
var tbody = document.querySelector('.schedule-body');

var now = new Date();

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
/**
*
*Вставляет в таблицу строку с прогрессом стоянки в порту/морского перехода 
*	после строки текущего порта
*
* @param {number} i номер строки текущего порта
* @param {string} position "Стоянка в порту"/"Морской переход"
* @param {object} startDate объект даты начала процесса
* @param {object} finishDate объект даты конца процесса
* @return {void}	??? 
*
*/
function showProgress (i, position, startDate, finishDate) {
	var voyageProgress 
		=Math.round((1 - (finishDate - now)/(finishDate - startDate)) * 100);
	var progressBarMin;
	var rowProgress;

	voyageProgress = (voyageProgress > 100) ? 100 : voyageProgress;
	voyageProgress = (voyageProgress < 0) ? 0 : voyageProgress;
	progressBarMin = (voyageProgress < 10) ? 10 : voyageProgress;

	rowProgress = document.createElement('tr');
	rowProgress.className = 'row-progress';
	rowProgress.innerHTML = '<td>' + position + '</td><td colspan="4"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="' + voyageProgress + '" aria-valuemin="0" aria-valuemax="100" style="width:' + progressBarMin + '%;">' + voyageProgress + '%</div></td>'

	tbody.insertBefore(rowProgress, ports[i].parentNode.nextElementSibling);
}
