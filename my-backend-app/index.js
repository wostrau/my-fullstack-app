const http = require('http')
const {usersController} = require("./usersController");


let setCorsHeaders = (req, res) => {
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