//Node program that takes in unlimited number of command line arguments, go through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. Need at least 2 arguments.

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log(`Error: Please enter at least 2 args`);
  process.exit();
}

console.log("args:", args);

const convertToNums = function (numbers) {
  const outputArr = [];

  for (let num of numbers) {
    outputArr.push(Number(num));
  }

  return outputArr;
};

const allNums = function (numbers) {
  for (let num of numbers) {
    if (isNaN(num)) {
      console.log(`Error: please input only numbers`);
      process.exit();
    }
  }

  return numbers;
};

const sum = function (numbers) {
  let total = 0;

  for (let nb of numbers) {
    if (Number.isInteger(nb)) {
      total += nb;
    }
    console.log("nb", nb, "total", total);
  }

  return total;
};

const result = sum(allNums(convertToNums(args)));

console.log("Total:", result);
