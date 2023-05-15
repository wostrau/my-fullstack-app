const http = require('http')
const {usersController} = require("./users-router");
const express = require('express')
const {getUsers, addUser} = require("./repository");
const users = require('./users-router')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    //we're connected!
})

const setCorsHeaders = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    if (req.method === 'OPTIONS') {
        res.writeHead(200)
        res.end()
        return true
    }
    return false
}


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use('/users', users)


app.get('/users', async (req, res) => {
    const users = await getUsers()
    res.send(JSON.stringify(users))
})
app.post('/users', async (req, res) => {
    const result = await addUser('Ninja')
    res.send(JSON.stringify({success: true}))
})
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})


let server = http.createServer((req, res) => {

    if (setCorsHeaders(req, res)) return

    switch (req.url) {
        case '/users':
            usersController(req, res)
            break
        case '/lessons':
            usersController(req, res)
            break
        default:
            res.write('PAGE NOT FOUND')
            res.end()
    }
})
server.listen(7542)