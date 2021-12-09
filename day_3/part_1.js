const readFile = require('../read_file.js')

const data = readFile('day_3/input.txt')

const codeLength = data[0].length
const half = data.length / 2
const gamma = []
const epsilon = []

;[...Array(codeLength)].forEach((bit, i) => {
    const countOnes = data.filter((d) => d[i] > 0).length

    gamma[i] = (countOnes > half) ? 1 : 0
    epsilon[i] = (countOnes > half) ? 0 : 1
})

const result = parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2)

console.log(result)