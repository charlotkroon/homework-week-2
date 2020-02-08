//Create a class called ShoppingCart. 
//A class is a blueprint for an object.
class cart { //
  constructor() { //constructur is a method where you initialize properties. I leave it empty here because I later need to 
    // ... ???
    //
    this.items = [] //.this refers to the ShoppingCart. Items is an empty array. 
  }

  //Given a brand new instance of the class in a variable cart, calling cart.getItems() should return an empty array.
  getItems() {
    return this.items // if you call cart.getItems() outside of the class, JS will return an empty array
  }

  // the class should have a  method called cart.addItem(itemName, quantity, price)
  addItem(itemName, quantity, price) {
    const newItem = { // 
      name: "", //
      quantity: 1, //
      pricePerUnit: 99.99 //
    }
    newItem.name = itemName; // if you call newItem.name you'll get an empty string
    newItem.quantity = quantity; // if you call newItem.quantity, you'll get 1
    newItem.pricePerUnit = price; //  if you call newItem.pricePerUnit, you'll get 99.99

    this.items.push(newItem); // by using push I push new items at the end of the array
    return this.items // 
  }

  //should be able to clear items
  //Initial value is not provided, because the array is empty. So the sole value will be returned (which is 0), without calling callback.
  clear() {
    this.items = [] // 
  }

  // total() {
  //   return this.items.reduce((totalValue, currentValue) => {
  //     return totalValue + parseFloat(currentValue)
  //   })
  // }

  //Calling cart.total() should return the total value of the shopping cart. Meaning, the sum of the cost of each cart item. 
  //The cost of each item is its pricePerUnit multiplied by the quantity. Use reduce!
  // total() {
  //   const totalValueOfCart = () => {
  //     return this.cart.reduce((totalValue, currentValue) => {
  //       return totalValue + parseFloat(currentValue.pricePerUnit)
  //     })
  //   }

}

module.exports = cart //export class ShoppingCart