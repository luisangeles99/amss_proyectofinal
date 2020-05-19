const express = require('express')

const router = require('./routes')

const app = express()
const port = 3000

app.use(router)

app.listen(port,function(){
    console.log("Server up in port: " + port)
})