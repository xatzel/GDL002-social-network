"use strict";

/* ---------------- FETCHING DATA ---------------- */

fetch("https://raw.githubusercontent.com/shareazc/GDL002-social-network/master/src/data/services.json")
.then((data) => {
  // convertimos nuestra data a JSON
  return data.json();
}).then((dataAsJSON) => {
  // cualquier operación con la data ya procesada
  console.log(Object.values(dataAsJSON));
});

/* ------------------ SELECT DIVS AS BUTTONS ----------------- */

const searchBtn = document.querySelector("#btnsearch");
const searchBar = document.querySelector("#searchbar");
const menuBtn = document.querySelector("#btnmenu");

/* ------------ FIND PLACE BY NAME ----------- */ 
//Recibir el nombre del pokemon a buscar
const getSearch = () => {
    return document.getElementById("searchbar").value;
};

/* --------------- EVENT LISTENERS -------------- */




/* ----------- PRINT ON CARD ---------------- */

//div "name"
//div "scheduleinfo"
//div "telephoneinfo"
//div "addressinfo"

'use strict';

const btnShowReviews = document.querySelector('#btnshowreviews');
const reviewContainer = document.querySelector('#reviewcontainer');
const btnRate = document.querySelector('#btnrate');
const rateForm = document.querySelector('#rateform');


//Función que aparece div donde se muestran las opiniones
const showReviews = () => {
    reviewContainer.style.display = 'grid';
}

//Funcion para mostrar div para ingresar opinión
const showRateForm = () => {
    rateForm.style.display = 'grid';
}

//Botón para mostrar opiniones
btnShowReviews.addEventListener('click', showReviews);
btnRate.addEventListener('click', showRateForm);
