// const numbers = [8, 19, 5, 6, 14, 9, 13];
// const odds = numbers.filter((num) => num % 2 === 1);
// console.log(odds); 

// ================================================

const numbers = [8, 19, 5, 6, 14, 9, 13];
const odds = [];
numbers.forEach((num) => {
  if (num % 2 === 1) {
    odds.push(num);
  }
});
console.log(odds);

function getOddSumUpTo(limit) {
    if (limit % 2) limit ++;
    return limit * limit / 4;
}
console.log(getOddSumUpTo(5))