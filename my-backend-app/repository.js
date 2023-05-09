const {readJsonFromFile, writeJsonToFile} = require("./fs-utils");

let data = {
    /*users.json: [
        {"id": 1, "name": "Tony"},
        {"id": 2, "name": "Ezekiel"},
        {"id": 3, "name": "Polly"}
    ],*/
    lessons: [
        {"id": 1, "title": "Native JS"},
        {"id": 2, "title": "React JS"},
        {"id": 3, "title": "Node JS"}
    ]
}

const getUsers = () => readJsonFromFile('users.json')

const addUser = async (name) => {
    const usersBuffer = await getUsers()
    const users = JSON.parse(usersBuffer.toString())
    users.push({id: Number(new Date()), name: name})

    return writeJsonToFile('users.json', users)
}

const getLessons = () => {
    return data.lessons
}

exports.getUsers = getUsers
exports.addUser = addUser
exports.getLessons = getLessons