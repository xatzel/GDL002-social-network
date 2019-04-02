let contactsRef = firebase.database().ref('contactosWeb');

document.getElementById('formContacto').addEventListener('submit', dataFireBase);

function dataFireBase(e) {
	e.preventDefault();
	let names = document.getElementById('username').value;
	let emails = document.getElementById('email').value;
	let passwords = document.getElementById('password').value;
	let newcommentRef = contactsRef.push();
	newcommentRef.set({
		name: names,
		email: emails,
		password: passwords
	});

function login(){
    let emailAdd = document.getElementById('email').value;
    let passwordAdd = document.getElementById('password').value;
     
    firebase.auth().createUserWithEmailAndPassword(emailAdd, passwordAdd)
     .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
}
