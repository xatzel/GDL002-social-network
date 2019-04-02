// FIREBASE esta parte se puede agregar a otro documento y se esconde en git ignore
// por que mi apikey tiene informacion confidencial
// Initialize Firebase
let config = {
	apiKey: 'AIzaSyDwDFXpRkKoNxX_EOWwVIAHVo654hR0i8c',
	authDomain: 'social-network-ef8fe.firebaseapp.com',
	databaseURL: 'https://social-network-ef8fe.firebaseio.com',
	projectId: 'social-network-ef8fe',
	storageBucket: '',
	messagingSenderId: '676810242509'
};
firebase.initializeApp(config);
// Initialize Firebase esta es de social network en poogle firebase
var config = {
	apiKey: 'AIzaSyC1vgFaBXjXk3neOu3QcVUl63tXP_W2XeU',
	authDomain: 'poogle-88112.firebaseapp.com',
	databaseURL: 'https://poogle-88112.firebaseio.com',
	projectId: 'poogle-88112',
	storageBucket: 'poogle-88112.appspot.com',
	messagingSenderId: '205231148840'
};
firebase.initializeApp(config);
