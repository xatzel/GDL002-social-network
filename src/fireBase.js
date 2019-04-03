document.getElementById('createuserbtn').addEventListener('click', register);

function register() {
	sendSignInLinkToEmail();
	saveData();
	let username = document.getElementById('username').value;
	let emails = document.getElementById('email').value;
	let passwords = document.getElementById('password').value;
	firebase.auth().createUserWithEmailAndPassword(username, emails, passwords).catch(function(error) {
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
	document.getElementById('emailloginbtn').addEventListener('click', logIn);

	function sendSignInLinkToEmail() {
		firebase
			.auth()
			.sendSignInLinkToEmail(email, actionCodeSettings)
			.then(function() {
				// The link was successfully sent. Inform the user.
				// Save the email locally so you don't need to ask the user for it again
				// if they open the link on the same device.
				window.localStorage.setItem('emailForSignIn', email);
			})
			.catch(function(error) {
				// Some error occurred, you can inspect the code: error.code
			});
	}

	function saveData() {
		let names = document.getElementById('username').value;
		let mails = document.getElementById('email').value;
		let password = document.getElementById('password').value;
		let user = firebase.auth().currentUser;
		if (user) {
			db
				.collection('users')
				.doc(user.id)
				.set({
					name: names,
					password: password,
					email: mails
				})
				.then(function() {
					console.log('Document successfully written!');
				})
				.catch(function(error) {
					console.error('Error writing document: ', error);
				});
		}
	}
}
