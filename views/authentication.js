
var auth = firebase.auth
var user = firebase.auth().currentUser;
//Buttons
var btnLogin = document.getElementById('btnLogin')
var inputEmail = document.getElementById('inputEmail')
var inputPassword = document.getElementById('inputPassword')

//Atutenticação
btnLogin.addEventListener('click', function () {
firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function (result) {
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
.then(function() {
return firebase.auth().signInWithEmailAndPassword(email, password)
})

.catch(function(error) {
var errorCode = error.code
var errorMessage = error.message
})
alert("Usuário Autenticado!")
console.log(user)
})

.catch(function (error) {
var errorCode = error.code
var errorMessage = error.message
alert("Usuário não Autenticado!")

console.log("Failure!")
})

//LOGOUT    
logOutButton.addEventListener('click', function () {
firebase
.auth()
.signOut()
.then(function () {
alert('Você deslogou')
}, function (error) {
console.error(error)
})
})

})

