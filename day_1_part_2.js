const readFile = require('./read_file.js')

const data = readFile('day_1_input.txt')

const group = data.reduce((grp, cur, i, arr) => {
    const A = cur
    const B = arr[i + 1]
    const C = arr[i + 2]

    if (!A || !B || !C) return grp

    grp.push(+A + +B + +C)

    return grp
}, [])

const result = group.reduce((sum, cur, i, arr) => {
    if (i === 0) return 0

    const prev = arr[i - 1]

    return (+cur > +prev) ? sum + 1 : sum
}, 0)

console.log(result)



