// first option
for (let num = 100; num <= 200; num++) {
  if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopySnoopy");
  } else if (num % 3 === 0) {
    console.log("Loopy");
  } else if (num % 4 === 0) {
    console.log("Snoopy");
  } else {
    console.log(num);
  }
}

//better option
for (const num of nums) {
  let output = "";

  if (num % 3 === 0) {
    output += "Loopy";
  }
  if (num % 4 === 0) {
    output += "Snoopy";
  }
  console.log(output === "" ? num : output);
}
