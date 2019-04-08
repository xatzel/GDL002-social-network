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
}

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

/*function logIn() {
	let emailAdd = document.getElementById('useremail').value;
	let passwordAdd = document.getElementById('userpassword').value;
	firebase.auth().signInWithEmailAndPassword(emailAdd, passwordAdd).catch(function(error) {
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorCode);
		console.log(errorMessage);

		msgError.innerHTML = 'Usuario no registrado o datos incorrectos';
		usermail.value = ' ';
		userpasword.value = ' ';
	});
}
document.getElementById('emailloginbtn').addEventListener('click', logIn);
// Log In user
document.querySelector('#emailloginbtn').addEventListener('click', () => {
	//let userName = document.querySelector("#username").value;
	let userEmail = document.querySelector('#email').value;
	let userPass = document.querySelector('#password').value;
	firebase.auth().onAuthStateChanged(function(user) {
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
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;

		window.alert('Error Message : ' + errorMessage);
		// ...
	});
});*/

function observer() {
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			console.log('existe usuario activo?');
			// appear(user);
			// User is signed in.
			const displayName = user.displayName;
			const email = user.email;
			console.log(user.emailVerified);
			const emailVerified = user.emailVerified;
			const photoURL = user.photoURL;
			const isAnonymous = user.isAnonymous;
			const uid = user.uid;
			const providerData = user.providerData;
		} else {
			// User is signed out.
			console.log('no existe usuario activo');
			// ...
		}
	});
}

observer();

function signInWithGoogle() {
	if (firebase.auth().currentUser) {
		let provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function(result) {
				let token = result.credential.accessToken;
				let user = result.user;
				console.log(user);
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
				if (errorCode === 'auth(account-exists-whit-different-credential') {
					alert('es el mismo usuario');
				} else firebase.auth().signOut();
			});
	}
}

document.getElementById('googleregister').addEventListener('click', signInWithGoogle, false);
/* version anterior de google 
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
document.getElementById('logOut').addEventListener('click', () => {
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
	});*/
