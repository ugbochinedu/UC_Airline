const Router = require("./features/router/Router");
const express = require("express");
const app = express();
const cors = require('cors')
const Connectdb = require("./features/db/connect");
const NotFound = require('./features/malware/NotFound')

const db ='mongodb://127.0.0.1:27017/UC_airline'


Connectdb(db)
.then(() =>{
    console.log('Database Successfully Connected')
    app.listen('8081', () =>{
        console.log('Application Started Successfully in port 8081 !!!')
    })
})
.catch((error) =>{
    console.log('db error', error)
})

app.use(
    cors()
)

app.use(express.json())
app.use('/api/v1/UC_airline', Router)

app.get("*", (req, res) =>{
    res.send('Welcome to Uc airline server')
})

app.use(NotFound)