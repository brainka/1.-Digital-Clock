function runDigitalClock() {
	// init date
	const date = new Date();

	// create days of the week array
	let daysOfTheWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	let months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	// get hour, minute, seconds, day, month, date and year from date object
	const getHour = date.getHours();
	const getMinute = date.getMinutes();
	const getSeconds = date.getSeconds();
	const getDay = date.getDay();
	const getMonth = date.getMonth();
	const getDate = date.getDate();
	const getYear = date.getFullYear();

	// get hour, minute, seconds, day, month, date and year html elements and set to a variable
	const updateHour = document.getElementById('hour');
	const updateMinute = document.getElementById('minute');
	const updateSeconds = document.getElementById('second');
	const updateDay = document.getElementById('day');
	const updateMonth = document.getElementById('month');
	const updateDate = document.getElementById('date');
	const updateYear = document.getElementById('year');
	const updateAM = document.getElementById('am');
	const updateOrdinalNum = document.getElementById('ordinalNum');

	// update inner text so it displays current information
	updateDay.innerText = `${daysOfTheWeek[getDay]},`;
	updateMonth.innerText = months[getMonth];
	updateDate.innerText = getDate;
	updateYear.innerText = getYear;
	updateAM.innerText = `AM`;
	updateOrdinalNum.innerText = 'th';

	// update to PM
	if (getHour < 10) {
		updateHour.innerText = `0${getHour}:`;
	} else if (getHour == 10) {
		updateHour.innerText = `${getHour}:`;
	} else if (getHour == 11) {
		updateHour.innerText = `${getHour}:`;
	} else if (getHour == 12) {
		updateAM.innerText = 'PM';
		updateHour.innerText = `${getHour}:`;
	} else {
		updateAM.innerText = 'PM';
		updateHour.innerText = `${getHour - 12}:`;
	}

	// add '0' to minutes if number is less than 10
	if (getMinute < 10) {
		updateMinute.innerText = `0${getMinute}:`;
	} else {
		updateMinute.innerText = `${getMinute}:`;
	}

	// add '0' to seconds if number is less than 10
	if (getSeconds < 10) {
		updateSeconds.innerText = `0${getSeconds}`;
	} else {
		updateSeconds.innerText = getSeconds;
	}

	// update date with proper use of 'st' 'nd' and 'rd'
	if (getDate === (1 || 21 || 31)) {
		updateOrdinalNum.innerText = 'st';
	} else if (getDate === (2 || 22)) {
		updateOrdinalNum.innerText = 'nd';
	} else if (getDate === (3 || 23)) {
		updateOrdinalNum.innerText = 'rd';
	}
}

// call runDigitalClock function every second
setInterval(runDigitalClock, 1000);
