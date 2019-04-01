//------------------Categories-------------------------------------
const feed = document.querySelector('#feed');
const healthBtn = document.querySelector('#health');
const accommodationBtn = document.querySelector('#accommodation');
const petfriendlyBtn = document.querySelector('#petfriendly');
const shoppingBtn = document.querySelector('#shopping');
const educationBtn = document.querySelector('#education');

const subHealthbtn = document.querySelector('#subhealth');
const subAccommodationbtn = document.querySelector('#subaccommodation');
const subPetFriendlybtn = document.querySelector('#subpetfriendly');
const subShoppingbtn = document.querySelector('#subshopping');
const subEducationbtn = document.querySelector('#subeducation');
const subNonProfitbtn = document.querySelector('#subnonprofit');

//Para almacenar en constante la base de datos de firestore
const db = firebase.firestore();

//Función que muestra elementos según su categoría
const showCategory = (event) => {

    let eventTargetCategory = event.currentTarget.dataset.category;

    db.collection(eventTargetCategory).get().then((snapshot) => {

        feed.innerHTML = '';

        const renderCard = (doc) => {

            const showSecondaryInfo = () => {

                if (secondaryInfo.style.display === 'grid') {
                    secondaryInfo.style.display = 'none';
                } else {
                    secondaryInfo.style.display = 'grid';
                }

            };

            let cardInfo = document.createElement('div');
            cardInfo.setAttribute('class', 'cardinfolayout');

            let primaryInfo = document.createElement('div');
            primaryInfo.setAttribute('class', 'primaryinfolayout')

            let leftbar = document.createElement('div');
            leftbar.setAttribute('id', 'leftbar');

            let name = document.createElement('div');
            name.setAttribute('id', 'name');
            name.innerHTML = doc.data().name;

            let likes = document.createElement('div');
            likes.setAttribute('id', 'likes');
            likes.innerHTML = doc.data().likes;

            let perks = document.createElement('div');
            perks.setAttribute('id', 'perks');
            perks.innerHTML = doc.data().perks;

            let btnLike = document.createElement('div');
            btnLike.setAttribute('id', 'btnlike');
            btnLike.innerHTML = '<i class="far fa-thumbs-up"></i>';

            let btnMore = document.createElement('div');
            btnMore.setAttribute('id', 'btnmore');
            btnMore.innerHTML = '<i class="fas fa-caret-down"></i>';
            btnMore.addEventListener('click', showSecondaryInfo);

            primaryInfo.appendChild(leftbar);
            primaryInfo.appendChild(name);
            primaryInfo.appendChild(likes);
            primaryInfo.appendChild(perks);
            primaryInfo.appendChild(btnLike);
            primaryInfo.appendChild(btnMore);

            cardInfo.appendChild(primaryInfo);

            let secondaryInfo = document.createElement('div');
            secondaryInfo.setAttribute('class', "secondaryinfolayout");

            let secondaryLeftBar = document.createElement('div');
            secondaryLeftBar.setAttribute('id', 'secondaryleftbar');

            let contactInfo = document.createElement('div');
            contactInfo.setAttribute('id', 'contactinfo');

            let schedule = document.createElement('div');
            schedule.setAttribute('id', 'schedule');
            schedule.innerHTML = '<i class="fas fa-clock"></i>';

            let scheduleInfo = document.createElement('div');
            scheduleInfo.setAttribute('id', 'scheduleinfo');
            scheduleInfo.innerHTML = doc.data().scheduleinfo;

            let telephone = document.createElement('div');
            telephone.setAttribute('id', 'telephone');
            telephone.innerHTML = '<i class="fas fa-phone"></i>';

            let telephoneInfo = document.createElement('div');
            telephoneInfo.setAttribute('id', 'telephoneinfo');
            telephoneInfo.innerHTML = doc.data().telephoneinfo;

            let website = document.createElement('div');
            website.setAttribute('id', 'website');
            website.innerHTML = '<i class="fas fa-globe"></i>';

            let websiteInfo = document.createElement('div');
            websiteInfo.setAttribute('id', 'websiteinfo');
            websiteInfo.innerHTML = doc.data().websiteinfo;

            let address = document.createElement('div');
            address.setAttribute('id', 'address');
            address.innerHTML = '<i class="fas fa-map-marker"></i>';

            let addressInfo = document.createElement('div');
            addressInfo.setAttribute('id', 'addressinfo');
            addressInfo.innerHTML = doc.data().addressinfo;

            let reviewGrid = document.createElement('div');
            reviewGrid.setAttribute('id', 'reviewgrid');

            let showReviews = document.createElement('div');
            showReviews.setAttribute('class', 'btnshowreviewsstyle');
            showReviews.innerHTML = 'Opiniones';

            let showRateForm = document.createElement('div');
            showRateForm.setAttribute('id', 'btnrate');
            showRateForm.innerHTML = 'Calificar';

            reviewGrid.appendChild(showRateForm);
            reviewGrid.appendChild(showReviews);

            contactInfo.appendChild(addressInfo);
            contactInfo.appendChild(address);
            contactInfo.appendChild(websiteInfo);
            contactInfo.appendChild(website);
            contactInfo.appendChild(telephoneInfo);
            contactInfo.appendChild(telephone);
            contactInfo.appendChild(scheduleInfo);
            contactInfo.appendChild(schedule);

            secondaryInfo.appendChild(reviewGrid);
            secondaryInfo.appendChild(contactInfo);
            secondaryInfo.appendChild(secondaryLeftBar);

            cardInfo.appendChild(secondaryInfo);

            feed.appendChild(cardInfo);

        };

        snapshot.docs.forEach((doc) => {
            renderCard(doc);
        });

    });

};



//Botones de la barra de categorías
healthBtn.addEventListener('click', showCategory);
accommodationBtn.addEventListener('click', showCategory);
petfriendlyBtn.addEventListener('click', showCategory);
shoppingBtn.addEventListener('click', showCategory);
educationBtn.addEventListener('click', showCategory);

//Botones de la barra de menú
subHealthbtn.addEventListener('click', showCategory);
subAccommodationbtn.addEventListener('click', showCategory);
subPetFriendlybtn.addEventListener('click', showCategory);
subShoppingbtn.addEventListener('click', showCategory);
subEducationbtn.addEventListener('click', showCategory);
subNonProfitbtn.addEventListener('click', showCategory);

