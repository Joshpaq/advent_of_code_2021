const readFile = require('./read_file.js')

const data = readFile('day_2_input.txt')

const result = data.reduce((coordinates, data) => {
    const [direction, amount] = data.split(' ')

    if (direction === 'forward') {
        coordinates.horizontal += +amount
        coordinates.depth += coordinates.aim * +amount
    } else if (direction === 'down') {
        coordinates.aim += +amount
    } else if (direction === 'up') {
        coordinates.aim -= +amount
    }

    console.log(coordinates)

    return coordinates
}, {
    horizontal: 0,
    depth: 0,
    aim: 0
})

console.log(result.horizontal * result.depth)