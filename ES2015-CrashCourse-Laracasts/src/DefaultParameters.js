function defaultDiscountRate() {
  return .10
}

function applyDiscount(cost, discount = defaultDiscountRate()) { // 100, 10% discount

  return cost - (cost * discount) // 90
}

console.log(applyDiscount(100))
