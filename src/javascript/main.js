'use strict';

/// FIREBASE LOGIN

//homescreen logged in
//register log in screen

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        document.getElementById('homescreen').style.display = 'grid';
        document.getElementById('register').style.display = 'none';
    } else {
        // No user is signed in.
        document.getElementById('homescreen').style.display = 'none';
        document.getElementById('register').style.display = 'grid';
    }
});

//Log In user
document.querySelector('#createuserbtn').addEventListener('click', () => {
    //let userName = document.querySelector("#username").value;
    let userEmail = document.querySelector('#email').value;
    let userPass = document.querySelector('#password').value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert('Error Message : ' + errorMessage);
        // ...
    });
});

//Log Out User
document.querySelector('#logOut').addEventListener('click', () => {
    document.getElementById('sidenavMenu').style.width = '0rem';
    firebase
        .auth()
        .signOut()
        .then(function () {
            // Sign-out successful.
        })
        .catch(function (error) {
            // An error happened.
        });
});

//------------------ Slideshow ------------------//

//---------------------------- Router ------------------------------//

const app = {
    pages: [],
    show: new Event('show'),
    init: function () {
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg) => {
            pg.addEventListener('show', app.pageShown);
        })

        document.querySelectorAll('.navlink').forEach((link) => {
            link.addEventListener('click', app.nav);
        })
        history.replaceState({}, 'Home', '#homescreen');
        window.addEventListener('popstate', app.poppin);
    },
    nav: function (ev) {
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        console.log(currentPage)
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(app.show);
    },

    poppin: function (ev) {
        console.log(location.hash, 'popstate event');
        let hash = location.hash.replace('#', '');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        console.log(hash)
        //history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(hash).dispatchEvent(app.show);
    }
}

document.addEventListener('DOMContentLoaded', app.init);

//--------------Searchbar & Menu --------------------------------

const searchBtn = document.querySelector('#btnsearch').value;
const searchInput = document.querySelector('#searchbar').value;

const menuBtn = document.querySelector('#btnmenu');

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


//---------------------- BUTTONS ---------------------------------

//Slideshow next & previous

let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = (n) => {
    showSlides((slideIndex += n));
};

const currentSlide = (n) => {
    showSlides((slideIndex = n));
};

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('introSlides');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'grid';
}

//click nav buttons

document.getElementById('nextSlide').addEventListener('click', showSlides(1));
document.getElementById('prevSlide').addEventListener('click', showSlides(-1));

//OPEN & CLOSE SIDENAV MENU
document.getElementById('btnmenu').addEventListener('click', () => {
    document.getElementById('sidenavMenu').style.width = '12.5rem';
});
document.getElementById('menuCloseBtn').addEventListener('click', () => {
    document.getElementById('sidenavMenu').style.width = '0rem';
});
