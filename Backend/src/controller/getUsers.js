const { service } = require("../service")

const getUsers = (_, res) => {
    service.getAllUsers().then(data => {
        res.json({ success: true, result: data })
    }).catch(err => res.json({ success: false, error: err }))
}


module.exports = { getUsers }