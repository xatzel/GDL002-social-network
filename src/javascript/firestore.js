//------------------Categories-------------------------------------

const healthBtn = document.querySelector('#health');
const accommodationBtn = document.querySelector('#accommodation');
const petfriendlyBtn = document.querySelector('#petfriendly');
const shoppingBtn = document.querySelector('#shopping');
const educationBtn = document.querySelector('#education');


const db = firebase.firestore();

//Para base de datos
const showCategory = (event) => {

    db.collection(`${event.currentTarget.id}`).get().then((snapshot) => {

        snapshot.docs.forEach((doc) => {
            console.log(doc.data());

        });
    });

};

healthBtn.addEventListener('click', showCategory);

accommodationBtn.addEventListener('click', showCategory);

petfriendlyBtn.addEventListener('click', showCategory);

shoppingBtn.addEventListener('click', showCategory);

educationBtn.addEventListener('click', showCategory);