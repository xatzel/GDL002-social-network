'use strict';

/* ---------------- FETCHING DATA ---------------- */

fetch('https://raw.githubusercontent.com/shareazc/GDL002-social-network/master/src/data/services.json')
  .then((data) => {
    // convert data to JSON
    return data.json();
  }).then((dataAsJSON) => {
    // cualquier operación con la data ya procesada
    console.log(Object.values(dataAsJSON));
  });

///

//----------------------------------------
let servicesList = [];
let servicesInfo = "";
/* ------------------ SELECT DIVS AS ELEMENTS ----------------- */
//--------------Searchbar & Menu --------------------------------
const searchBtn = document.querySelector('#btnsearch');
const searchInput = document.querySelector('#searchbar');
const menuBtn = document.querySelector('#btnmenu');
//------------------Categories-------------------------------------
const healthBtn = document.querySelector('#health');
const accomodationBtn = document.querySelector('#accomodation');
const placesBtn = document.querySelector('#places');
const shoppingBtn = document.querySelector('#shopping');
const educationBtn = document.querySelector('#education');
const nonprofitBtn = document.querySelector('nonprofit');
//-------------------Review Elements------------------------------
const btnShowReviews = document.querySelector('#btnshowreviews');
const reviewContainer = document.querySelector('#reviewcontainer');
//--------------------Rate Elements-------------------------------
const btnRate = document.querySelector('#btnrate');
const rateForm = document.querySelector('#rateform');



//Validates text from SearchInput
const validateSearchInput = () => {
  console.log("prueba");
  
};

//Failed search (changes input color & resets value)
const warnAndReset = () => {
  searchInput.style.backgroundColor = "rgb(212, 110, 110)";
  searchInput.value = "";
};



/* ------------ FIND PLACE BY NAME ----------- */


/* --------------- EVENT LISTENERS -------------- */




/* ----------- PRINT ON CARD ---------------- */

//div "name"
//div "scheduleinfo"
//div "telephoneinfo"
//div "addressinfo"




//Función que aparece div donde se muestran las opiniones
const showReviews = () => {
  reviewContainer.style.display = 'grid';
};

//Funcion para mostrar div para ingresar opinión
const showRateForm = () => {
  rateForm.style.display = 'grid';
};


//---------------------- BUTTONS ---------------------------------
searchBtn.addEventListener('click', validateSearchInput);
//Botón para mostrar opiniones
btnShowReviews.addEventListener('click', showReviews);
btnRate.addEventListener('click', showRateForm);
