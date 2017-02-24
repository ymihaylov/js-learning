class TaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks
  }

  log() {
    // When one argument - omit the parenthesis
    // When two or more - (task, index)

    this.tasks.forEach((task, index) => console.log(task, index))
  }

  prepare() {
    // this.tasks.forEach(task => task.toGulp())

    this.tasks.forEach(task => {
      console.log(this) // this reffers to TaskCollection
    });

    // this.tasks.forEach(function(task) {
    //   console.log(this) // this reffers to undefined
    // });
  }
}

class Task {
  toGulp() {
    console.log('Converting to gulp')
  }
}

// new TaskCollection([
//   new Task, new Task, new Task
// ]).prepare()

// --- New Example
let names = ['Yavor', 'Gosho', 'John', 'Mon']

// Old way
names = names.map(function (name) {
  return name + ' is cool.'
})

names = names.map(name => `${name} is cool.`) // Explicit return
console.log(names)