//Node program that takes in unlimited number of command line arguments, go through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. Need at least 2 arguments.

//declare function
//get the arguments out of the command line
const args = process.argv.slice(2);

// at least 2 arguments
if (args.length < 2) {
  console.log(`Error: Please enter at least 2 args`);
  process.exit();
}

console.log("args:", args);

//declare an accumulator
let total = 0;

//goes through each args
for (let nb of args) {
  //Nan - output error message
  if (isNaN(Number(nb))) {
    console.log(`Error: please input only 
    numbers`);
    process.exit();
  }

  //argumet is not a whole number, skip it
  if (Number.isInteger(Number(nb))) {
    total += Number(nb);
  }
  console.log("nb", nb, "total", total);
}

//ensure the arguments are all numbers

//add each arg to the accumulator

//print out the sum
console.log("Total", total);
