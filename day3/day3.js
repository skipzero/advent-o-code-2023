const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');

function findParts () {
  let partsArray = [];

  let dataArr = data.split('\n')
  dataArr = dataArr.map(line => {
    return line.split()
  })
  console.log(dataArr)
}

findParts()