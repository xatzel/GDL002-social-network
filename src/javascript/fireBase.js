function login(){
    let emailAdd = document.getElementById(email).value;
    let passwordAdd = document.getElementById(password).value;

    firebase.auth().createUserWithEmailAndPassword(emailAdd, passwordAdd)
     .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });

}
