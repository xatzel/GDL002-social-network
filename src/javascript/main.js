'use strict';

//---------------------------- Router ------------------------------//
const app = {
	pages: [],
	show: new Event('show'),
	init: function() {
		app.pages = document.querySelectorAll('.page');
		app.pages.forEach((pg) => {
			pg.addEventListener('show', app.pageShown);
		});

		document.querySelectorAll('.navlink').forEach((link) => {
			link.addEventListener('click', app.nav);
		});
		history.replaceState({}, 'Home', '#homescreen');
		window.addEventListener('popstate', app.poppin);
	},
	nav: function(ev) {
		ev.preventDefault();
		let currentPage = ev.target.getAttribute('data-target');
		document.querySelector('.active').classList.remove('active');
		document.getElementById(currentPage).classList.add('active');
		console.log(currentPage);
		history.pushState({}, currentPage, `#${currentPage}`);
		document.getElementById(currentPage).dispatchEvent(app.show);
		app.poppin();
	},

	poppin: function(ev) {
		ev && ev.preventDefault();
		console.log(location.hash, 'popstate event');
		let hash = location.hash.replace('#', '');
		console.log(document.querySelector('.active'), 'document.querySelector(.active)');
		document.querySelector('.active').classList.remove('active');
		document.getElementById(hash).classList.add('active');
		console.log(hash);
		//history.pushState({}, currentPage, `#${currentPage}`);
		document.getElementById(hash).dispatchEvent(app.show);
	}
};

document.addEventListener('DOMContentLoaded', app.init);

//--------------Searchbar & Menu --------------------------------

const searchBtn = document.querySelector('#btnsearch').value;
const searchInput = document.querySelector('#searchbar').value;
const menuBtn = document.querySelector('#btnmenu');

//---------------------- BUTTONS ---------------------------------

//OPEN & CLOSE SIDENAV MENU
document.getElementById('btnmenu').addEventListener('click', () => {
	document.getElementById('sidenavMenu').style.width = '12.5rem';
});
document.getElementById('menuCloseBtn').addEventListener('click', () => {
	document.getElementById('sidenavMenu').style.width = '0rem';

});

//OPEN SIDEMENU DROPDOWN
document.getElementById('dropdownBtn').addEventListener('click', () => {
    document.getElementById('menuDropdown').classList.toggle('showDropdownMenu');
});