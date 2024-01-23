const { readJson } = require("./readJson");
const { writeJson } = require("./writeJson");

const dataAccess = { readJson, writeJson };

module.exports = { dataAccess }