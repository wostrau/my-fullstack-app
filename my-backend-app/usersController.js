const {addUser, getUsers, getLessons} = require("./repository")


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
}