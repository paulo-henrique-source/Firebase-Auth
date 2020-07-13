var admin = require('firebase-admin');
var serviceAccount = require('../fir-d49e1-firebase-adminsdk-t4cax-ce31649bc0.json')
var firebase = require('firebase-server')


// Initialize the SDK (TOKEN)


admin.initializeApp ({
    credential: admin.credential.cert(serviceAccount)
    })




export const firebaseAuth = firebase.auth
