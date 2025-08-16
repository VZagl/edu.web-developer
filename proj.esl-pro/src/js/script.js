import '/src/scss/style.scss';

console.log('This is the `index` page');

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM fully loaded and parsed');

	// Schedule section functionality
	// try {
	const sectionSchedule = document.querySelector('section.schedule');
	const btnScheduleMatches = sectionSchedule.querySelector(
		'#btn-schedule-matches'
	);
	const btnScheduleBattles = sectionSchedule.querySelector(
		'#btn-schedule-battles'
	);
	const scheduleMatches = sectionSchedule.querySelector(
		'.schedule__cards-matches'
	);
	const scheduleBattles = sectionSchedule.querySelector(
		'.schedule__cards-battles'
	);

	btnScheduleMatches.addEventListener('click', () => {
		scheduleMatches.classList.remove('display-hidden');
		scheduleBattles.classList.add('display-hidden');
		btnScheduleBattles.classList.remove('active');
		btnScheduleMatches.classList.add('active');
	});

	btnScheduleBattles.addEventListener('click', () => {
		scheduleBattles.classList.remove('display-hidden');
		scheduleMatches.classList.add('display-hidden');
		btnScheduleBattles.classList.add('active');
		btnScheduleMatches.classList.remove('active');
	});
	// } catch (e) {}
	//
});
