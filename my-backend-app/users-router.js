const {addUser, getUsers} = require("./repository")
const express = require('express')
const router = express.Router()


router.get('/', async (req, res) => {
    let users = await getUsers()

    const searchValue = req.query.search.toLowerCase()
    if (searchValue) users = users.filter(u => u.name.toLowerCase().indexOf(searchValue) > -1)

    res.send(JSON.stringify(users))
})

router.get('/:id', async (req, res) => {
    const users = await getUsers()
    let userId = req.params.id
    const user = users.find(u => u.id === userId)
    if (user) res.send(JSON.stringify(user))
    else res.send(404)
})

router.post('/', async (req, res) => {
    const name = req.params.name
    await addUser(name)
    res.send(JSON.stringify({success: true}))
})

module.exports = router

/*
exports.usersController = async (req, res) => {
    switch (req.url) {
        case '/users':
            if (req.method === 'POST') {
                let body = ''
                req.on('data', async chunk => {
                    body += chunk.toString()
                })
                req.on("end", async () => {
                    const { name } = JSON.parse(body);
                    const result = await addUser(name);
                    res.write(JSON.stringify({ success: true }));
                    res.end();
                });
            } else {
                const users = await getUsers()
                res.write(users)
                res.end()
            }
            break
        case '/lessons':
            res.write(JSON.stringify(getLessons()))
            res.end()
            break
        default:
            res.write('PAGE NOT FOUND')
            res.end()
    }
}*/
