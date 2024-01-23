const { searchByUser, filterTag } = require("../../searchFunctions")
const { service } = require("../service")


const queryGet = (req, res) => {

    const userID = req.query.userId
    const tag = req.query.tag
    service.getAllPosts()
        .then(data => {
            const postResults = data.filter(post => searchByUser(post, userID)).filter(post => filterTag(post, tag))
            res.json({ success: true, result: postResults })
        }).catch(err => res.json({ success: false, error: err }))
}


module.exports = { queryGet }