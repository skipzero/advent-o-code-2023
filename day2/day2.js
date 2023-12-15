const fs = require("fs");

const myHand = {
  red: 12,
  green: 13,
  blue: 14,
};

function cubeGame() {
  const data = fs.readFileSync("input2.txt", "utf8");
  let dataArray = data.split("\n");
  dataArray = dataArray.map((line) => {
    let lineArray = line.split(":");
    lineArray = lineArray[1].split(";");
    console.log("--", line);
    return lineArray.map((game) => {
      game = game.split(",");
      return game.reduce((acc, hand) => {
        hand = hand.trim().split(" ");
        console.log("hand", hand);
        acc[hand[1]] = parseInt(hand[0]);
        return acc;
      }, {});
    });
  });
  console.log(">>>>", dataArray);

  const sum = dataArray.reduce((acc, hands, index) => {
    let myArray = [];
    console.log("HAND:::", hands);
    hands.forEach((hand) => {
      myArray;
      for (const color in hand) {
        console.log("MY COLOURS", hand[color], myHand[color]);
        if (hand[color] < myHand[color]) {
          acc += index + 1;
        }
      }
    });
    return acc;
  }, 0);
  console.log("SUM:::", sum);
}

cubeGame();
