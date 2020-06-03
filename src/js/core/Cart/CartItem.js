import {$} from '@core/dom'

export class CartItem {
  constructor(product, className = '') {
    this.id = product.id
    this.name = product.name
    this.img = product.img
    this.price = product.price
    this.quantity = 1
  }

  init() {}

  remove() {
    this.$root.remove()
  }

  get totalPrice() {
    return this.price * this.quantity
  }

  render() {
    this.$root = $.create('div', 'cart-item')
    this.$root.attr('data-id', this.id.toString())
    this.$root.attr('data-type', 'cartItem')
    this.$root.html(this.toHTML())
    return this.$root
  }

  update() {
    this.$root.html(this.toHTML())
  }

  toHTML() {
    throw new Error('Method toHTML is not implemented')
  }
}