function sum(...numbers) { // Rest operator
  return numbers.reduce((prev, current) => prev + current)
}

console.log(sum(1, 2, 3)) // 6

let nums = [1, 2]
console.log(...nums) // Like console.log(1, 2)