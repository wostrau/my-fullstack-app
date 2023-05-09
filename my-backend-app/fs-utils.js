const fs = require("fs");

exports.readJsonFromFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
}

exports.writeJsonToFile = (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data), (err) => {
            if (err) reject()
            resolve()
        })
    })
}