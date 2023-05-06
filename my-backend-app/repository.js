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

const getUsers = () => {
    return data.users
}

const addUser = (name) => {
    data.users.push({id: Number(new Date()), name: name})
}

const getLessons = () => {
    return data.lessons
}

exports.getUsers = getUsers
exports.addUser = addUser
exports.getLessons = getLessons