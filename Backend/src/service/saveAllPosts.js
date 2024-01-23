const { dataAccess } = require("../data-access")

const postsPath = "../../posts.json"
const saveAllPosts = (data) => {
    return dataAccess.writeJson(postsPath, data)
}

module.exports = { saveAllPosts };