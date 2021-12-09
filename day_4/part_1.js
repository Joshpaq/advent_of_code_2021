const readFile = require('../read_file.js')

const data = readFile('day_4/input.txt')

const numbers = data[0].split(',').map(x => +x)//.split(/\s+/).filter(Boolean).map(x => +x)
const width = 5
const height = 5
const boards = []

function createBoard (one, two, three, four, five) {
    const numbers = [...one, ...two, ...three, ...four, ...five].reduce((final, number) => {
        final[number] = true
        return final
    }, {})

    const rows = [one, two, three, four, five]
    const columns = [...Array(width).keys()].reduce((final, index) => {
        final[index] = rows.map(row => row[index])
        return final
    }, [])

    return {
        numbers,
        hits: [],
        rows,
        columns
    }
}


for(let i = 2; i < data.length; i+=height + 1) {
    boards.push(createBoard(
        data[i].trim().split(/\s+/).map(x => +x), 
        data[i + 1].trim().split(/\s+/).map(x => +x), 
        data[i + 2].trim().split(/\s+/).map(x => +x), 
        data[i + 3].trim().split(/\s+/).map(x => +x), 
        data[i + 4].trim().split(/\s+/).map(x => +x)
    ))
}

for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i]

    // loop over boards
    for(let ii = 0; ii < boards.length; ii++) {
        const board = boards[ii]

        if(board.numbers[number]) {
            // hit
            board.hits.push(+number)

            if(board.hits.length > 4) {
                // check for win
                for (let r = 0; r < height; r++) {
                    const row = board.rows[r]
                    const won = row.filter((n) => board.hits.includes(n)).length === height
                    if(won) {
                        const unmarked = Object.keys(board.numbers).map(x => +x).filter(n => !board.hits.includes(n)).reduce((a, b) => +a + +b, 0)
                        const result = unmarked * number
                        return console.log(result)
                    }
                }

                for (let c = 0; c < width; c++) {
                    const column = board.columns[c]
                    const won = column.filter((n) => board.hits.includes(n)).length === width
                    if(won) {
                        const unmarked = Object.keys(board.numbers).map(x => +x).filter(n => !board.hits.includes(n)).reduce((a, b) => +a + +b, 0)
                        const result = unmarked * number
                        return console.log(result)
                    }
                }
            }
        }
    }
}