let http = require('http')
const { addUser, getUsers, getLessons } = require('./repository')

let data = {
    users: [
        {"id": 1, "name": "Tony"},
        {"id": 2, "name": "Ezekiel"},
        {"id": 3, "name": "Polly"}
    ],
    lessons: [
        {"id": 1, "title": "Native JS"},
        {"id": 2, "title": "React JS"},
        {"id": 3, "title": "Node JS"}
    ]
}

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

let server = http.createServer((req, res)=>{

    if (setCorsHeaders(req, res)) return

    console.log('some request')

    switch (req.url) {
        case '/users':
            if (req.method === 'POST') {
                addUser('Corey')
                res.write(JSON.stringify({success: true}))
            } else res.write(JSON.stringify(getUsers()))
            break
        case '/lessons':
            res.write(JSON.stringify(getLessons()))
            break
        default:
            res.write('PAGE NOT FOUND')
    }

    res.end()
})

server.listen(7542)