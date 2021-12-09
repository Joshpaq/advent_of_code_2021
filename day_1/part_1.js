const readFile = require('../read_file.js')

const data = readFile('day_1/input.txt')

const result = data.reduce((sum, cur, i, arr) => {
    const prev = arr[i - 1]

    if (i === 0) return i
    if (cur > prev) return sum + 1
    return sum
}, 0)

console.log(result)


