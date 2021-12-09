const readFile = require('../read_file.js')

const data = readFile('day_5/input.txt')

const lines = data.map((d) => {
    const [one, two] = d.split('->')
    const [x1, y1] = one.trim().split(',')
    const [x2, y2] = two.trim().split(',')

    return {
        x1: +x1,
        y1: +y1,
        x2: +x2,
        y2: +y2
    }
})//.filter(({ x1, y1, x2, y2 }) => x1 === x2 || y1 === y2)

const tracker = {}

lines.forEach(({ x1, y1, x2, y2 }) => {
    if (x1 === x2) {
        // x doesn't move
        const start = Math.min(y1, y2)
        const end = Math.max(y1, y2)

        for(let y = start; y <= end; y++) {
            const key = x1 + ',' + y
            tracker[key] = (tracker[key] || 0) + 1
        }
    } else if (y1 === y2) {
        // y doesn't move
        const start = Math.min(x1, x2)
        const end = Math.max(x1, x2)

        for(let x = start; x <= end; x++) {
            const key = x + ',' + y1
            tracker[key] = (tracker[key] || 0) + 1
        }
    } else {
        const diff = Math.abs(x1 - x2)

        const xstart = Math.min(x1, x2)
        const xend = Math.max(x1, x2)
        const xsub = x1 > x2

        const ystart = Math.min(y1, y2)
        const yend = Math.max(y1, y2)
        const ysub = y1 > y2

        for(let i = 0; i <= diff; i++) {
            const x = xsub ? xend - i : xstart + i
            const y = ysub ? yend - i : ystart + i
            const key = x + ',' + y
            tracker[key] = (tracker[key] || 0) + 1
        }
    }
})

const result = Object.keys(tracker).reduce((sum, key) => {
    if ( tracker[key] > 1 ) {
        sum += 1
    }
    return sum
}, 0)

console.log(result)