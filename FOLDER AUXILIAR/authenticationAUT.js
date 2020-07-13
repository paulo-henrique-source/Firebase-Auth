var btnLogin = document.getElementById('btnLogin');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');


btnLogin.addEventListener('click'), function () {

    firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function (result) {
        alert("Usuário Conectado!");
        // console.log("Success!");
        window.location.replace('initial-page.html');

    }).catch(function (error) {
    
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        alert("Unknown User");
        console.log("Failure!")
    });

};

//Atutenticação
btnLogin.addEventListener('click', function () {
    firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function (result) {
        alert("Usuário Conectado!");
        // console.log("Success!");
       console.log("sucess")

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        alert("Unknwon User");
         console.log("Failure!")
    });

});

// Logout

logOutButton.addEventListener('click', function () {
    firebase
    .auth()
    .signOut()
    .then(function () {
        alert('Você se deslogou');
    }, function (error) {
        console.error(error);
    });
});


//RETORNANDO TOKEN MAS COM ERROS
const auth = firebase.auth();
// Buttons
var btnLogin = document.getElementById('btnLogin');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');

//Atutenticação
btnLogin.addEventListener('click', function () {
    firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function (result) {
    alert("Usuário Autenticado!"); 
    auth.onAuthStateChanged(firebaseUser =>{})
    console.log(firebaseUser)
    })
    
    .catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Usuario não Autenticado!");
    console.log("Failure!")
    
    
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(function() {
        
        return firebase.auth().signInWithEmailAndPassword(email, password);
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    
    });
    
    });

aaaaaaaaaaaaaaa




var auth = firebase.auth
var user = firebase.auth().currentUser;
//Buttons
var btnLogin = document.getElementById('btnLogin')
var logOutButton = document.getElementById('logOutButton')
var inputEmail = document.getElementById('inputEmail')
var inputPassword = document.getElementById('inputPassword')



//Atutenticação
btnLogin.addEventListener('click', function () {
    firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function (result) {
    alert("Usuário Autenticado!")
    firebase.auth().onAuthStateChanged(firebaseUser =>{})
    console.log(firebaseUser)
    
    if (user != null ) {
      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      
    }
    else {
      alert('FUNCTION ERROR')
    }

    })
    .catch(function (error) {
    var errorCode = error.code
    var errorMessage = error.message
    window.alert("pot")

    console.log("Failure!")

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(function() {
        return firebase.auth().signInWithEmailAndPassword(email, password)
      })
      
      .catch(function(error) {
        var errorCode = error.code
        var errorMessage = error.message
      })
    })
    
//LOGOUT    
logOutButton.addEventListener('click', function () {
     firebase
     .auth()
     .signOut()
     .then(function () {
      alert('Você se deslogou')
     }, function (error) {
      console.error(error)
})

})
})
