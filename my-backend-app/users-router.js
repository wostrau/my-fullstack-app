const {addUser, getUsers, deleteUser, updateUser} = require("./repository")
const express = require('express')
const router = express.Router()


router.get('/', async (req, res) => {
    let users = await getUsers()

    const searchValue = req.query.search.toLowerCase()
    if (searchValue) users = users.filter(u => u.name.toLowerCase().indexOf(searchValue) > -1)

    res.send(JSON.stringify(users))
})

router.get('/:id', async (req, res) => {
    const userId = req.params.id
    const user = await getUsers(userId)

    if (user) res.send(user)
    else res.send(404)
})

router.post('/', async (req, res) => {
    const userName = req.body.name

    await addUser(userName)

    res.send({success: true})
})

router.delete('/:id', async (req, res) => {
    const userId = req.params.id

    const user = await deleteUser(userId)

    if (user) res.send({success: true})
    else res.send(404)
})

router.put('/', async (req, res) => {
    const userId = req.body.id
    const userName = req.body.name

    await updateUser(userId, userName)

    res.send({success: true})
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
