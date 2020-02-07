const assert = require("assert")

describe("Assignment 1 - ShoppingCart", function() {

  it("JS file should exist, and exported value should be a constructor", function() {
    const ShoppingCart = require("./ShoppingCart")
    new ShoppingCart()
  })

  it("should be able to add items", function() {
    const ShoppingCart = require("./ShoppingCart")
    const cart = new ShoppingCart()
    assert.deepStrictEqual(
      cart.getItems(),
      [],
      "Items should be an empty array, initially"
    )
    cart.addItem("Trash can", 1, 15.5)
    assert.deepStrictEqual(
      cart.getItems(),
      [
        {
          name: "Trash can",
          quantity: 1,
          pricePerUnit: 15.5
        }
      ],
      "The added item must be in the items array"
    )
  })

  it("should be able to clear items", function() {
    const ShoppingCart = require("./ShoppingCart")
    const cart = new ShoppingCart()
    cart.addItem("Trash can", 1, 15.5)
    cart.clear()
    assert.deepStrictEqual(
      cart.getItems(),
      [],
      "Items should be an empty after clear()"
    )
  })

  it("should total up the value of items", function() {
    const ShoppingCart = require("./ShoppingCart")
    const cart = new ShoppingCart()
    cart.addItem("item 1", 1, 15.5)
    cart.addItem("item 2", 2, 3)
    cart.addItem("item 3", 10, 2)
    cart.addItem("item 4", 0, 2)
    cart.addItem("item 5", 2, 0)
    assert.strictEqual(cart.total(), 41.5, "the total doesn't match")
    const cart2 = new ShoppingCart()
    assert.strictEqual(cart2.total(), 0, "the total of an empty cart should be 0")
  })
})
