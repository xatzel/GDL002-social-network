// FIREBASE esta parte se puede agregar a otro documento y se esconde en git ignore
// por que mi apikey tiene informacion confidencial
// Initialize Firebase
let config = {
    apiKey: 'AIzaSyDwDFXpRkKoNxX_EOWwVIAHVo654hR0i8c',
    authDomain: 'social-network-ef8fe.firebaseapp.com',
    databaseURL: 'https://social-network-ef8fe.firebaseio.com',
    projectId: 'social-network-ef8fe',
    storageBucket: 'gs://social-network-ef8fe.appspot.com/',
    messagingSenderId: '676810242509'
};

firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});