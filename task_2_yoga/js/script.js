window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');


	const showTab = (tabNum) => {
		console.log(tabContent[tabNum].classList.contains('show'));
		if (!(tabContent[tabNum].classList.contains('show'))) {
			console.log('Первый запуск');
			for ( let i = 0; i < tabContent.length; i++ ) {
				console.log(i);
				if (i == tabNum) {
					tabContent[i].classList.remove('hide');
					tabContent[i].classList.add('show');
				} else {
					tabContent[i].classList.remove('show');
					tabContent[i].classList.add('hide');
				};
				
			}
		}
	};

	function hideTabContent(a) {
		for ( let i = a; i < tabContent.length; i++ ) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	};

	// hideTabContent(1);
	showTab(0);
	// function showTabContent(b) {
		
	// };

	info.addEventListener('click', function(event) {
		let { target } = event;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTab(i);
					// hideTabContent(0);
					// showTabContent(i);
					// break;
				}
			}
		}
	});
});