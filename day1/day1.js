const fs = require('fs');

function trebuchet () {
  const data = fs.readFileSync('input.txt', 'utf8');
  const inputArray = data.split('\n')
  const parsedArray = inputArray.map((line) => {
    let numb = line.match((/\d/g))
    numb = numb.join().split(',').join('')
    if (numb.length === 2) {
      return parseInt(numb)
    }
    if (numb.length === 1) {
      return parseInt(numb  + '' + numb)
    }
    if (numb.length > 2) {
      const ends = numb[0] + numb[numb.length - 1]
      return parseInt(ends)
    }
  })
  const retArray = parsedArray.reduce((acc, numb) => {
    acc += numb
    return acc
  }, 0)
  console.log(retArray)
}


trebuchet()