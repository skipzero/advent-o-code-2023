const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8");

function findParts() {
  let partsArray = [];
  const regex = /\d+/g;

  let dataArr = data.split("\n");
  dataArr = dataArr.map((line, index) => {
    line = line.split("");
    const lineArray = line[0].split("");
    console.log(`${line} \n\n ==== ${lineArray}\n\n`);
    return line;
  });

  for (let i = 0; i < dataArr.length; i++) {
    for (let j = 0; j < dataArr[i].length; j++) {
      if (regex.test(dataArr[i][j])) {
      }
      findingNeighbors(dataArr, i, j);
    }
  }
  console.log("data Array\n", dataArr[3]);
}

function findingNeighbors(myArray, i, j, count) {
  const rowLimit = myArray.length - 1;
  const columnLimit = myArray[0].length - 1;
  const symbol = /[\d.]/g;
  for (let x = Math.max(0, i - 1); x <= Math.min(i + 1, rowLimit); x++) {
    for (let y = Math.max(0, j - 1); y <= Math.min(j + 1, columnLimit); y++) {
      if (x !== i || y !== j) {
        if (symbol.test(myArray[x][y])) {
          console.log(
            `digists ${myArray[x][y]} ----- ${x}, ${y}=====${i}, ${j}`
          );
        }
      }
    }
  }
}

findParts();
