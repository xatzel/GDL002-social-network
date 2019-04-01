'use strict';
/// FIREBASE LOGIN

//homescreen logged in
//register log in screen

firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		// User is signed in.
		document.getElementById("homescreen").style.display = "grid";
		document.getElementById("register").style.display = "none";

	} else {
		// No user is signed in.
		document.getElementById("homescreen").style.display = "none";
		document.getElementById("register").style.display = "grid";
	}
});

//Log In user
document.querySelector("#createuserbtn").addEventListener('click', () => {
	//let userName = document.querySelector("#username").value;
	let userEmail = document.querySelector("#email").value;
	let userPass = document.querySelector("#password").value;

	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;

		window.alert("Error Message : " +
			errorMessage);
		// ...
	});
});

//Log Out User
document.querySelector("#logOut").addEventListener('click', () => {
	document.getElementById("sidenavMenu").style.width = '0rem';
	firebase.auth().signOut().then(function () {
		// Sign-out successful.
	}).catch(function (error) {
		// An error happened.
	});
});

//--------------Searchbar & Menu --------------------------------

const searchBtn = document.querySelector('#btnsearch').value;
const searchInput = document.querySelector('#searchbar').value;

const menuBtn = document.querySelector('#btnmenu');

//OPEN & CLOSE SIDENAV MENU
document.getElementById("btnmenu").addEventListener('click', () => {
	document.getElementById("sidenavMenu").style.width = '12.5rem';
});
document.getElementById("menuCloseBtn").addEventListener('click', () => {
	document.getElementById("sidenavMenu").style.width = '0rem';
});

//OPEN SIDEMENU DROPDOWN
document.getElementById("dropdownBtn").addEventListener('click', () => {
	document.getElementById("menuDropdown").classList.toggle('showDropdownMenu');
});

//-------------------Print Card------------------------------
/*
let givenVendorsList = dataObj;


const cardInfoLayout = (givenVendorsList) => {

	feed.innerHTML = '';

	let cardInfo = "";

	let cardInfoId = 1;

	const showSecondaryInfo = (event) => {
		let cardInfoIdDiv = event.currentTarget;
		let clickedElement = cardInfoIdDiv.querySelector("[id^='secondaryinfoid']");

		if (clickedElement.style.display === 'grid') {
			clickedElement.style.display = 'none';
		} else {
			clickedElement.style.display = 'grid';
		}
	};

	//Función que aparece div donde se muestran las opiniones
	const showReviews = () => {

		let reviewContainer = document.querySelector("[id^='reviewcontainer']");

		if (reviewContainer.style.display === "grid") {
			reviewContainer.style.display = "none";
		} else {
			reviewContainer.style.display = "grid";
		}

	};

	//Funcion para mostrar div para ingresar opinión
	const showRateForm = () => {
		rateForm = document.querySelector('#rateform');
		rateForm.style.display = 'grid';
	};

	givenVendorsList.forEach((element) => {

		cardInfo =

			`<div id="cardinfoid${cardInfoId}" class="cardinfolayout">

					<div id="primaryinfoid${cardInfoId}" class="primaryinfolayout">

						<div id="leftbar"></div>
						<div id="rating">${element.likes}</div>
						<div id="name">${element.name}</div>
						<div id="btnlike"><i class="far fa-thumbs-up"></i></div>
						<div id="perks">${element.perks}</div>

					</div>

					<div id="secondaryinfoid${cardInfoId}" class="secondaryinfolayout">

						<div id="secondaryleftbar"></div>

						<div id="contactinfo">
							<div id="schedule"><i class="fas fa-clock"></i></div>
							<div id="scheduleinfo">${element.hours}</div>
							<div id="telephone"><i class="fas fa-phone"></i></div>
							<div id="telephoneinfo">${element.phone}</div>
							<div id="website"><i class="fas fa-globe"></i></div>
							<div id="websiteinfo">${element.websiteinfo}</div>
							<div id="address"><i class="fas fa-map-marker"></i></div>
							<div id="addressinfo">${element.address}</div>
						</div>

						<div id="reviewgrid">
							<div id="btnshowreviews${cardInfoId}" class="btnshowreviewsstyle">Opiniones</div>
							<div id="btnrate">Calificar</div>
						</div>

					</div>

					<div id="reviewcontainer${cardInfoId}" class="reviewcontainerstyle">

						<div id="btnedit"><i class="far fa-edit fa-xs"></i></div>
						<div id="authorinfo">Fulanita escribió:</div>
						<div id="writtenreview">"Fido se enfermó de la panza y el veterinario lo apapachó y lo curó."</div>
						<div id="heartcount">3</div>
						<div id="heart"><i class="far fa-heart"></i></div>

					</div>

					<div id="rateform">

						<div id="ratetitle">Tu calificación:</div>

						<div id="ratebar">
							<div id="onestar"><i class="far fa-star"></i></div>
							<div id="twostar"><i class="far fa-star"></i></div>
							<div id="threestar"><i class="far fa-star"></i></div>
							<div id="fourstar"><i class="far fa-star"></i></div>
							<div id="fivestar"><i class="far fa-star"></i></div>
						</div>

						<div id="opiniontitle">Tu opinión: </div>
						<textarea id="opinion" class="textinput" placeholder="Escribe aquí tu opinión..."></textarea>
						<div id="veracitycheck" ><input type="checkbox" value="true">Juro que es la verdad y nadamas que la verdad</div> 
						<input id="btnsubmit" type="button" value="Enviar">

					</div>

				</div>`;

		cardInfoId++;
		feed.innerHTML += cardInfo;
	});

	let cardInfoIds = document.querySelectorAll("[id^='cardinfoid']");

	cardInfoIds.forEach((element) => {
		element.addEventListener('click', showSecondaryInfo);
	});

	let btnShowReviews = document.querySelector("[id^='btnshowreviews']");

	btnShowReviews.addEventListener('click', showReviews);

	document.querySelector('#btnrate').addEventListener('click', showRateForm);

};
*/