const readFile = require('../read_file.js')

const data = readFile('day_8/input.txt')

const output = []

data.forEach((line) => {
    const [, rawOutput] = line.trim().split('|')
    output.push(...rawOutput.trim().split(/\s+/))
})

const unique = [2, 4, 3, 7]
const result = output.filter((letter) => unique.includes(letter.length)).length
console.log(result)