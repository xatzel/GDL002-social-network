'use strict';


const btnShowReviews = document.querySelector('#btnshowreviews');
const reviewContainer = document.querySelector('#reviewcontainer');
//--------------------Rate Elements-------------------------------
const btnRate = document.querySelector('#btnrate');
const rateForm = document.querySelector('#rateform');
const feed = document.querySelector('#feed');
const healthCategory = document.querySelector('#health');



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



//Botón para mostrar opiniones
healthCategory.addEventListener('click', cardInfoLayout(givenProvidersList));
//btnShowReviews.addEventListener('click', showReviews);
//btnRate.addEventListener('click', showRateForm);


