const express = require ('express')
const bodyParser = require('body-parser')
const server = express()
const nunjucks = require('nunjucks')

server.use(bodyParser.urlencoded({ extended: true }))
server.set("view engine", "ejs", "html")

server.use(express.static('views',))

server.listen(3000, function(){
    console.log("Server is Running")
})
server.set("view engine", "html")
nunjucks.configure("view", {
    express: server
})

//Routes//
   
server.get("/login.html", (req, res ) => {
res.render('../views/login.html')
})



