class User {
  constructor(username, email) {
    this.username = username
    this.email = email
  }

  static register(...args) {
    return new User(...args)
  }

  // Accessors
  get foo() {
    return 'foo'
  }

  // Muttators
  get foo() {
    return 'foo'
  }

  changeEmail(newEmail) {
    this.email = newEmail
  }
}

// let user = new User('Yavor Mihaylov', 'email@gmail.com')
// user.changeEmail('foo@example.com')
// console.dir(user)

let user = User.register('Yavor Mihaylov', 'email@gmail.com')
// console.dir(user)

// Class syntax is sugar

// --- New Example
function log(strategy) {
  strategy.handle()
}

log(new class {
  handle() {
    console.log('Using alert strategy to log!')
  }
})