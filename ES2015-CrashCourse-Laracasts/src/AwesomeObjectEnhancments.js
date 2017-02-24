// Object Shorthand

function getPerson() {
  let name = 'John'
  let age  = 25

  return {
    name,
    age,
    greet() {
      return `Hello ${this.name}`
    }
  }
}

let { name, age } = getPerson() // Object extraction

// console.log(age)

// console.log(getPerson().greet())

// --- New example

function getData({ results, count, age = 40 }) { // Age default value
  console.log(results, count, age)
}

getData({
  name: 'John',
  age: 32,
  results: ['foo', 'bar'],
  count: 30
})

// --- New example
function greet({ name, age }) {
  console.log(`Hello ${name}. You are ${age}`)
}

greet({
  name: 'John',
  age: 32,
  results: ['foo', 'bar'],
  count: 30
})