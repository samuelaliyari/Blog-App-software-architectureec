const fs = require("fs");

const writeJson = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.watchFile(path, JSON.stringify(data), err => {
            if (err) reject(err)
            else resolve(data)
        })
    })
}


module.exports = { writeJson };