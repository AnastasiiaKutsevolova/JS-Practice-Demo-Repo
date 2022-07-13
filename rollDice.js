const argv = process.argv.slice(2);

const rollTheDice = (times) => {
  const result = [];
  for (let i = 1; i <= times; i++) {
    result.push(Math.ceil(Math.random() * 6));
  }
  return `Rolled 2 dice: ${result.join(", ")}`;
};

console.log(rollTheDice(3));
