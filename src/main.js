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
