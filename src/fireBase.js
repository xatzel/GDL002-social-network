let contactsRef = firebase.database().ref('contactosWeb');

document.getElementById('formContacto').addEventListener('submit', dataFireBase);

function dataFireBase(e) {
	e.preventDefault();
	let names = document.getElementById('txtName').value;
	let emails = document.getElementById('txtEmail').value;
	let passwords = document.getElementById('txtPassword').value;
	let newcommentRef = contactsRef.push();
	newcommentRef.set({
		name: names,
		email: emails,
		password: passwords
	});
/* este codigo es para autenticar el correo.
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		// Handle Errors here.
		let errorCode = error.code;
		let errorMessage = error.message;
		// ...
	});*/
}
document.getElementById('formLogIn').addEventListener('submit', login);
function login() {
	let mail = document.getElementById(logEmail).value;
	let passwordLog = document.getElementById(logPassword).value;
	//firebase.auth().createUserWithEmailAndPassword(emailAdd, passwordAdd).catch(function(error) {
	firebase.auth().singInWithEmailAndPassword(mail, passwordLog).catch(function(error) {
		// Handle Errors here.
		let errorCode = error.code;
		let errorMessage = error.message;
		console.log(errorCode);
		console.log(errorMessage);
	});
}
function observer({

})
