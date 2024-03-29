//const {readJsonFromFile, writeJsonToFile} = require("./fs-utils");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({name: String})
const User = mongoose.model('User', userSchema)
//const user1 = new User({name: 'Dorothy'})

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

const getUsers = (search) => {
    if (search) User.find({name: new RegExp(search)})
    else return User.find()

    //return readJsonFromFile('users.json')
}

const getUser = (userId) => {
    return User.find({_id: userId})
}

const addUser = (name) => {
    const newUser = new User({name: name})
    return newUser.save()

    /*const usersBuffer = await getUsers()
    const users = JSON.parse(usersBuffer.toString())
    users.push({id: Number(new Date()), name: name})

    return writeJsonToFile('users.json', users)*/
}

const deleteUser = (userId) => {
    return User.deleteOne({_id: userId})
}

const updateUser = (userId, userName) => {
    return User.updateOne({_id: userId}, {name: userName})
}

const getLessons = () => {
    return data.lessons
}

exports.getUsers = getUsers
exports.getUser = getUser
exports.addUser = addUser
exports.deleteUser = deleteUser
exports.updateUser = updateUser
exports.getLessons = getLessons