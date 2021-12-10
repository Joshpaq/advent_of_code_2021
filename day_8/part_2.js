const readFile = require('../read_file.js')

function matchingCount (a, b) {
    return intersection(a, b).length
}

function subString (a, b) {
    return [...a.filter((o) => b.indexOf(o) === -1), ...b.filter((o) => a.indexOf(o) === -1)]
}

function intersection (a, b) {
    return a.filter(x => b.includes(x))
}

const data = readFile('day_8/input.txt')

// this code is a nightmare, I might revisit this at some point lol
const result = data.map((line) => {
    const [rawInput, rawOutput] = line.trim().split('|')

    const map = {}

    input = rawInput.trim().split(/\s+/).map(x => x.trim())
    input.forEach((signal) => {
        if(signal.length === 2) {
            map[signal] = 1 
            map[1] = signal
        } else if (signal.length === 3) {
            map[signal] = 7 
            map[7] = signal
        } else if (signal.length === 4) {
            map[signal] = 4
            map[4] = signal
        } else if (signal.length === 7) {
            map[signal] = 8
            map[8] = signal
        }
    })

    const fiveLetterSignals = input.filter(x => x.length === 5)
    // get three
    fiveLetterSignals.forEach((signal) => {
        if(matchingCount(signal.split(''), map[1].split('')) === 2) {
            map[signal] = 3
            map[3] = signal
        }
    })
    // find five
    fiveLetterSignals.filter(x => !map[x]).forEach((signal) => {
        if(matchingCount(signal.split(''), map[4].split('')) === 3) {
            map[signal] = 5
            map[5] = signal
        }
    })
    // 2
    const twoSignal = fiveLetterSignals.filter(x => !map[x])[0]
    map[twoSignal] = 2
    map[2] = twoSignal

    const sixLetterSignals = input.filter(x => x.length === 6)
    // get 9 3 and 9 have 5 overlap
    sixLetterSignals.forEach((signal) => {
        if(matchingCount(signal.split(''), map[3].split('')) === 5) {
            map[signal] = 9
            map[9] = signal
        }
    })
    // find 6  6 and 5 have 5 overlap
    sixLetterSignals.filter(x => !map[x]).forEach((signal) => {
        if(matchingCount(signal.split(''), map[5].split('')) === 5) {
            map[signal] = 6
            map[6] = signal
        }
    })
    const zeroSignal = sixLetterSignals.filter(x => !map[x])[0]
    map[zeroSignal] = 0
    map[0] = zeroSignal

    return +rawOutput.trim().split(/\s+/).map(x => x.trim()).map((o) => {
        for(let i = 0; i < 10; i++) {
            if(!subString(o.split(''), map[i].split('')).length) {
                return i
            }
        }
    }).join('')
}).reduce((sum, num) => sum + num, 0)

console.log(result)