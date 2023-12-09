const fs = require('fs');

const myHand = {
  r: 12,
  g: 13,
  b: 14
}

function cubeGame() {
  const data = fs.readFileSync('input2.txt', 'utf8');
  const dataArray = data.split('\n')[0]
    .reduce((acc, row) => {
    acc = row.split(';')
    return accd
  }, {})  
  console.log(gameArrayVal)
  return gameArrayVal
  
s
}

cubeGame()