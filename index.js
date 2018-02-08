let store = {customers:[], deliveries:[], employers:[], meals: []}

let customerId = 0;
let mealId = 0;
let deliveryId = 0;
let employerId = 0;

class Customer {
  constructor(name, employer){
    this.id = ++customerId
    this.name = name
    this.employer = employer
    store.customers.push(this)
  }
}

class Meal {
  constructor(title, price) {
    this.id = ++mealId
    this.title = title
    this.price = price
    store.meals.push(this)
  }
  
  static byPrice() {
    return store.meals.sort((a, b) => {
      return a.price < b.price
    })
  }
}

class Delivery {
  constructor(meal, customer) {
    this.id = ++deliveryId
    this.meal = meal
    this.customer = customer
    store.deliveries.push(this)
  }
}