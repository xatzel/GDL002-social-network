document.getElementById('createuserbtn').addEventListener('click', register);

function register() {

	let username = document.getElementById('username').value;
	let emails = document.getElementById('email').value;
	let passwords = document.getElementById('password').value;
	firebase
		.auth()
		.createUserWithEmailAndPassword(emails, passwords)
		.then(function() {
			saveData(emails, username);
		})
		.catch(function(error) {
			// Handle Errors here.
			let errorCode = error.code;
			let errorMessage = error.message;
		});

	function logIn() {
		let emailAdd = document.getElementById('useremail').value;
		let passwordAdd = document.getElementById('userpassword').value;
		firebase.auth().signInWithEmailAndPassword(emailAdd, passwordAdd).catch(function(error) {
			// Handle Errors here.
			let errorCode = error.code;
			let errorMessage = error.message;
		});
	}

	document.getElementById('registerbtn').addEventListener('click', logIn);

	function saveData(email, names) {
		let user = firebase.auth().currentUser;
		db
			.collection('users')
			.doc(user.uid)
			.set({
				name: names,
				email: email
			})
			.then(function() {
				console.log('Document successfully written!');
			})
			.catch(function(error) {
				console.error('Error writing document: ', error);
			});
	}
}

function check() {
	let user = firebase.auth().currentUser;

	user
		.sendEmailVerification()
		.then(function() {
			console.log('enviando correo...');
			// Email sent.
		})
		.catch(function(error) {
			console.log(error);
			// An error happened.
		});
}

function observer() {
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			console.log('existe usuario activo');
			//appear(user);
			// User is signed in.
			const displayName = user.displayName;
			const email = user.email;

			console.log('**************************');
			console.log(user.emailVerified);
			console.log('**************************');

			const emailVerified = user.emailVerified;
			const photoURL = user.photoURL;
			const isAnonymous = user.isAnonymous;
			const uid = user.uid;
			const providerData = user.providerData;
			// ...
		} else {
			// User is signed out.
			console.log('no existe usuario activo');
			// ...
		}
	});
}

observer();

function signInWithGoogle() {
	let provider = new firebase.auth.GoogleAuthProvider();
	firebase
		.auth()
		.signInWithPopup(provider)
		.then(function(result) {
			// This gives you a Google Access Token. You can use it to access the Google API.
			let token = result.credential.accessToken;
			// The signed-in user info.
			let user = result.user;
			// ...
		})
		.catch(function(error) {
			// Handle Errors here.
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
			// The email of the user's account used.
			let email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			let credential = error.credential;
			// ...
		});
}
document.getElementById('googleregister').addEventListener('click', signInWithGoogle);

//Log Out User
document.querySelector('#logOut').addEventListener('click', () => {
	document.getElementById('sidenavMenu').style.width = '0rem';
	firebase
		.auth()
		.signOut()
		.then(function() {
			// Sign-out successful.
		})
		.catch(function(error) {
			// An error happened.
		});
});

