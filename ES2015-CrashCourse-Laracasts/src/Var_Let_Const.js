// function fire(bool) {
//   if (bool) {
//     var foo = 'bar'
//     console.log(foo)
//   } else {
//     console.log(foo) // -> Undefined, cause hoisting
//   }
// }

function fire(bool) {
  if (bool) {
    let foo = 'bar'
    console.log(foo)
  } else {
    console.log(foo) // -> Now raise an error
  }
}

// fire(false)
const names = ['John', 'Sandy']
// names = ['Pesho', 'Gosho'] // - Raise an error
names.push('Susan')

const name = 'Yavor'
// name = 'Gosho' // - Raise an error

// When should I use let and when should I use let
// - Use var at top level - Bullshit, better never use again
// - Default to using const
// - let If you need reassignment

// Const is not entirely immutable buy can use Object.freeze([...])
console.log(names)
