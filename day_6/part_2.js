const readFile = require('../read_file.js')

const data = readFile('day_6/input.txt')

const days = 256

let result = 0

//              0, 1, 2, 3, 4, 5, 6, 7, 8
const fishes = [0, 0, 0, 0, 0, 0, 0, 0, 0]

data[0].trim().split(',').forEach((age) => {
    result += 1
    return fishes[age] = fishes[age] + 1
})


for(let day = 0; day < days; day++) {
    const zeroes = fishes[0]
    const ones = fishes[1]
    const twos = fishes[2]
    const threes = fishes[3]
    const fours = fishes[4]
    const fives = fishes[5]
    const sixes = fishes[6]
    const sevens = fishes[7]
    const eights = fishes[8]

    fishes[0] = ones
    fishes[1] = twos
    fishes[2] = threes
    fishes[3] = fours
    fishes[4] = fives
    fishes[5] = sixes
    fishes[6] = sevens + zeroes
    fishes[7] = eights
    fishes[8] = zeroes

    result += zeroes
}

console.log(result)