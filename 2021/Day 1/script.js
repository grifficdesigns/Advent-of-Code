// javascript stuff
let fs = require("fs");
let text = fs.readFileSync("numbers.txt", "utf-8");

// input array values from numbers.txt and convert to integers
let sonarArray = text.split("\n").map(function (item) {
  return parseInt(item);
});

// PART 1
let count1 = 0;

// checks if current measurement is larger than the previous measurement
for (let position = 1; position < sonarArray.length; position++) {
  let previous = sonarArray[position - 1];
  let current = sonarArray[position];
  if (current > previous) {
    count1++;
  }
}

// PART 2
let count2 = 0;

// checks if current sum of 3 measurements is larger than previous sum of 3 measurements
for (let position = 3; position < sonarArray.length; position++) {
  let previous = sonarArray[position - 1] + sonarArray[position - 2] + sonarArray[position - 3];
  let current = sonarArray[position] + sonarArray[position - 1] + sonarArray[position - 2];
  if (current > previous) {
    count2++;
  }
}

console.log(`Part 1 value is: ${count1}`);
console.log(`Part 2 value is: ${count2}`);
