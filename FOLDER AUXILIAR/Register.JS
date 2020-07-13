var authFacebookButton = document.getElementById('authFacebookButton');
var authTwitterButton = document.getElementById('authTwitterButton');
var authGitHubButton = document.getElementById('authGitHubButton');
var createUserButton = document.getElementById('createUserButton');


// Autenticar com Google
authGoogleButton.addEventListener('click', function () {
    // Providers
    var provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
});

// Autenticar com Facebook
authFacebookButton.addEventListener('click', function () {
    // Providers
    var provider = new firebase.auth.FacebookAuthProvider();
    signIn(provider);
});

// Autenticar com Twitter
authTwitterButton.addEventListener('click', function () {
    // Providers
    var provider = new firebase.auth.TwitterAuthProvider();
    signIn(provider);
});

// Autenticar com GitHub
authGitHubButton.addEventListener('click', function () {
    var provider = new firebase.auth.GithubAuthProvider();
    signIn(provider)
});

// Registro de usuarios
function cadastrar(){

    var auth = null;
   
   firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
    .then(function(user){
    alert("Cadastrado com sucesso");
    auth = user;
    }).catch(function(error){
    alert("Falha ao cadastrar");
    });
   } 

   function signIn(provider) {
    firebase.auth()
        .signInWithRedirect(provider)
        .then(function (result) {
            console.log(result);
            var token = result.credential.accessToken;
            alert('Sucess');
        }).catch(function (error) {
            console.log(error);
            alert('Falha na autenticação');
        });
}
