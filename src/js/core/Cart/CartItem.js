export class CartItem {
  constructor(product) {
    this.id = product.id
    this.name = product.name
    this.img = product.img
    this.price = product.price
    this.quantity = product.quantity || 1
  }

  init() {
  }

  remove() {
    this.$root.remove()
  }

  get totalPrice() {
    return this.price * this.quantity
  }

  getRoot() {
    throw new Error('method getRoot is not implemented')
  }

  render() {
    this.$root = this.getRoot()
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

  toObject() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      img: this.img,
      quantity: this.quantity
    }
  }
}