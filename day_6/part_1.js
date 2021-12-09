const readFile = require('../read_file.js')

const data = readFile('day_6/input.txt')

const days = 80

function createFish (timer) {
    return {
        timer: +timer
    }
}

const fishes = data[0].trim().split(',').map((age) => {
    return createFish(age)
})

for(let day = 0; day < days; day++) {
    const newFishes = fishes.map((fish) => {
        if(fish.timer === 0) {
            fish.timer = 6
            return createFish(8)
        } else {
            fish.timer = fish.timer - 1
        }
    }).filter(Boolean)

    fishes.push(...newFishes)
}

console.log(fishes.length)