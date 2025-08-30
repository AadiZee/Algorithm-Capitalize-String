function capitalizeForLoop(str) {
  const words = str.split(" ");
  const result = [];

  for (let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result.join(" ");
}
function capitalizeMap(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
}

console.log(capitalizeForLoop("i am a test string"));
console.log(capitalizeMap("i am a test string"));
