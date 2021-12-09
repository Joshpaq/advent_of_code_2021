const readFile = require('../read_file.js')

const data = readFile('day_7/input.txt')

const locations = data[0].trim()
const locArr = locations.split(',').map(x => +x).sort((a, b) => a - b)

let smallestDistance = Infinity
let smallestPosition = null

for(let pos = 0; pos < locArr[locArr.length - 1]; pos++) {
  const totalDistance = locArr.reduce((sum, crabPos) => {
    sum += Math.abs(pos - crabPos)
    return sum
  }, 0)
  if(totalDistance < smallestDistance) {
    smallestDistance = totalDistance
    smallestPosition = pos
  }
}

console.log(smallestDistance)