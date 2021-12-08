const { Console } = require('console')
const fs = require('fs')

function readFile (fileName) {
    const data = fs.readFileSync(__dirname + '\\' + fileName, 'utf8')
    return data.split('\n')
}

module.exports = readFile