class cart {
  constructor() { //constructur is a method where you initialize properties
    this.items = [] //.this refers to the current object. This changes all the time. Each instance of a cart is an empty array
  }

  getItems() {
    return this.items
  }

  addItem(itemName, quantity, price) {
    const newItem = { //the empty array from before, is now an array of objects.
      name: "",
      quantity: 1,
      pricePerUnit: 99.99
    }
    newItem.name = itemName;
    newItem.quantity = quantity;
    newItem.pricePerUnit = price;

    this.items.push(newItem); // by using push, I push new items at the end of the array
    return this.items // 
  }

  clear() {
    this.items = [] // 
  }

  total() {
    const x = this.items.reduce((totalValue, currentValue) => { //the items have objects inside. Each object has name, quantity and priceper unit
      //So, I need to sum up the price per unit mulitplied by the quantity of each object. Because the pricePerUnit x quantity = the price of the object itself.
      //and because I want to know the total value of ALL the items. 
      return totalValue + currentValue.pricePerUnit * currentValue.quantity // JS is kind because instead of letting you do all the work
      //it puts all the value that you have write now (so all the things in your little cart) in the word 'totalValue'. So you don't have to add them anymore.
      //Then I added totalValue with the currentValue (which is the iterator).pricePerUnit and then I multiplied it with the quantity(of the currentvalue)
    }, 0);
    return x;
  }
}
module.exports = cart