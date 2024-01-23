const { service } = require("../service")



const getPosts = (_, res) => {
    service.getAllPosts()
        .then(data => res.json({ success: true, result: data })).catch(err => res.json({ success: false, error: err }))
}


module.exports = { getPosts }