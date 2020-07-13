const admin = require ("firebase-admin")
const serviceAccount = require("../fir-d49e1-firebase-adminsdk-t4cax-ce31649bc0.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

