const readFile = require('../read_file.js')

const data = readFile('day_3/input.txt')

const codeLength = data[0].length

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