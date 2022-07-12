const joinList = (array) => {
  let result = "";
  array.forEach((word) => {
    return array[array.length - 1] === word
      ? (result += `${word}`)
      : (result += `${word}, `);
  });
  return result;
};

const conceptList = [
  "gists",
  "types",
  "operators",
  "iteration",
  "problem solving",
];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
