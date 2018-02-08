let store = {customers:[], deliveries:[], employers:[], meals: []}

let customerId = 0;
let mealId = 0;
let deliveryId = 0;
let employerId = 0;

class Customer {
  constructor(name, employer){
    this.id = ++customerId
    this.name = name
    this.employerId = employer.id
    store.customers.push(this)
  }
}