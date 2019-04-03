document.getElementById('formContacto').addEventListener('submit', register);

function register() {
	let names = document.getElementById('username').value;
	let emails = document.getElementById('email').value;
	let passwords = document.getElementById('password').value;
	firebase.auth().createUserWithEmailAndPassword(names, emails, passwords).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorCode);
		console.log(errorMessage);
		firebase.auth().onAuthStateChanged(function(user) {
			var dbUser = db.collection('users').doc(user.uid).set({
				email: user.email,

				someotherproperty: 'some user preference'
			});
		});
	});
	/*let contactsRef = firebase.database().ref('contactosWeb');
realTimeRegister (e){
  e.preventDefault();
    let names = document.getElementById('username').value;
	  let emails = document.getElementById('email').value;
    let passwords = document.getElementById('password').value;
    let newcommentRef = contactsRef.push();
	  newcommentRef.set({
		  name: names,
		  email: emails,
      password: passwords
    }*/

	function logIn() {
		let emailAdd = document.getElementById('email').value;
		let passwordAdd = document.getElementById('password').value;
		firebase.auth().signInWithEmailAndPassword(emailAdd, passwordAdd).catch(function(error) {
			// Handle Errors here.
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
		});
	}
	document.getElementById('formContacto').addEventListener('click', logIn);

	function Authentication() {}
	/*function observer() {
		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				// se puede ingresar una funcion donde aparece toda
				//la informacion que deseas ver dentro de tu paginaweb
				//se crea otra funcion y se manda a llamar aqui
				funcion logOut()
				var displayName = user.displayName;
				var email = user.email;
				var emailVerified = user.emailVerified;
				var photoURL = user.photoURL;
				var isAnonymous = user.isAnonymous;
				var uid = user.uid;
				var providerData = user.providerData;
				// ...
			} else {
			}
		});
	}
function logOut(){
  let contenido = document.getElementById("div de contenido");
  contenido.innerHTML = 
  } 
*/
}
