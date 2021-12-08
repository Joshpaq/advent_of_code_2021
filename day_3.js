const readFile = require('./read_file.js')

const data = readFile('day_3_input.txt')

// PART 1
/*
const codeLength = data[0].length
const half = data.length / 2
const gamma = []
const epsilon = []
console.log(data[0].length)

;[...Array(codeLength)].forEach((bit, i) => {
    console.log(i)
    const countOnes = data.filter((d) => d[i] > 0).length

    gamma[i] = (countOnes > half) ? 1 : 0
    epsilon[i] = (countOnes > half) ? 0 : 1
})

console.log(gamma)
console.log(epsilon)

const result = parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2)

console.log(result)
*/

// PART 2

function calculateGamma(data) {
    const codeLength = data[0].length
    const half = data.length / 2

    const gamma = []
    ;[...Array(codeLength)].forEach((bit, i) => {
        const countOnes = data.filter((d) => d[i] > 0).length
    
        gamma[i] = (countOnes >= half) ? 1 : 0
    })

    return gamma
}

function calculateEpsilon(data) {
    const codeLength = data[0].length
    const half = data.length / 2

    const epsilon = []
    ;[...Array(codeLength)].forEach((bit, i) => {
        const countOnes = data.filter((d) => d[i] > 0).length
    
        epsilon[i] = (countOnes >= half) ? 0 : 1
    })

    return epsilon
}

const codeLength = data[0].length
const half = data.length / 2

const oxygen = [...Array(codeLength).keys()].reduce((filtered, index) => {
    if (filtered.length === 1) return filtered
    const bit = ([...filtered].filter((d) => +d[index] > 0).length) >= (filtered.length / 2)
    const f = filtered.filter((d) => +d[index] === +bit)
    return f
}, data)[0]
const co2 = [...Array(codeLength).keys()].reduce((filtered, index) => {
    if (filtered.length === 1) return filtered
    const bit = !(([...filtered].filter((d) => +d[index] > 0).length) >= (filtered.length / 2))
    const f = filtered.filter((d) => +d[index] === +bit)
    return f
}, data)[0]

const result = parseInt(oxygen, 2) * parseInt(co2, 2)
console.log(result)