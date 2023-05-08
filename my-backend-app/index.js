const http = require('http')
const {usersController} = require("./usersController");


let setCorsHeaders = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Request-Method', '*')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
    res.setHeader('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS') {
        res.writeHead(200)
        res.end()
        return true
    }
    return false
}

let server = http.createServer((req, res) => {

    if (setCorsHeaders(req, res)) return

    console.log('some request')

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