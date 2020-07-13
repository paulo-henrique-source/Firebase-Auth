var btnlogin = document.querySelector("#login")
var createUserButton = document.getElementById('createUserButton')




//firebase
 
var Config = {
    apiKey: "AIzaSyDBiI9LiZ53FuGUTdqXaM1Jz2qMcXv092Y",
    authDomain: "fir-d49e1.firebaseapp.com",
    databaseURL: "https://fir-d49e1.firebaseio.com",
    projectId: "fir-d49e1",
    storageBucket: "fir-d49e1.appspot.com",
    messagingSenderId: "317330486025",
    appId: "1:317330486025:web:4007e41940f1ab8c6dd9d8",
    measurementId: "G-JVZ91S0KXK"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
  firebase.analytics();
