// Initialize Firebase
let config = {
	apiKey: 'AIzaSyDwDFXpRkKoNxX_EOWwVIAHVo654hR0i8c',
	authDomain: 'social-network-ef8fe.firebaseapp.com',
	databaseURL: 'https://social-network-ef8fe.firebaseio.com',
	projectId: 'social-network-ef8fe',
	storageBucket: 'gs://social-network-ef8fe.appspot.com/',
	messagingSenderId: '676810242509'
};

//Declare vendors database as db
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({
	timestampsInSnapshots: true
});
