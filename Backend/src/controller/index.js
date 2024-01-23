const { getPosts } = require("./getPosts")
const { getUsers } = require("./getUsers")
const { queryGet } = require("./queryGet")


const controller = {
    getPosts,
    getUsers,
    queryGet
}


module.exports = { controller }