const width = +prompt('Matrix width?')
const height = +prompt('Matrix height?')
function matrix (w, h) {
  const result = new Array(h).fill('').map(() => new Array(w).fill(''))
  let counter = 1
  let startCol = 0
  let endCol = w - 1
  let startRow = 0
  let endRow = h - 1
  while (startCol <= endCol && startRow <= endRow) {
    for (let r = startCol; r <= endCol; r++) {
      result[startRow][r] = counter
      counter++
    }
    startRow++
    for (let c = startRow; c <= endRow; c++) {
      result[c][endCol] = counter
      counter++
    }
    endCol--
    for (let rE = endCol; rE >= startCol; rE--) {
      result[endRow][rE] = counter
      counter++
    }
    endRow--
    for (let cE = endRow; cE >= startRow; cE--) {
      result[cE][startCol] = counter
      counter++
    }
    startCol++
  }
  return result
}
console.log(matrix(width, height))
