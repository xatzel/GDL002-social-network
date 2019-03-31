//------------------Categories-------------------------------------
const feed = document.querySelector('#feed');
const healthBtn = document.querySelector('#health');
const accommodationBtn = document.querySelector('#accommodation');
const petfriendlyBtn = document.querySelector('#petfriendly');
const shoppingBtn = document.querySelector('#shopping');
const educationBtn = document.querySelector('#education');

//Para almacenar en constante la base de datos de firestore
const db = firebase.firestore();

//Función que muestra elementos según su categoría
const showCategory = (event) => {

    db.collection(`${event.currentTarget.id}`).get().then((snapshot) => {

        feed.innerHTML = '';

        const renderCard = (doc) => {

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

            primaryInfo.appendChild(leftbar);
            primaryInfo.appendChild(name);
            primaryInfo.appendChild(likes);
            primaryInfo.appendChild(perks);
            primaryInfo.appendChild(btnLike);
            primaryInfo.appendChild(btnMore);

            cardInfo.appendChild(primaryInfo);

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