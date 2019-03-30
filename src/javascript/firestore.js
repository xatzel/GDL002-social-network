//Para base de datos

const db = firebase.firestore();

db.collection('users').get().then((snapshot) => {

    snapshot.docs.forEach(doc => {
        console.log(doc.data());
    });
});