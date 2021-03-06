import {Component} from '@core/Component'
import {CART_CONTAINER_SELECTOR, CART_TOTAL_SELECTOR} from '@core/constants'
import {getPrice, isEmpty} from '@core/utils'
import {calcCount, calcTotal} from '@core/Cart/cart.functions'

export class Cart extends Component {
  constructor($root, options = {}) {
    super($root, options)
    this.$container = null
    this.cartItems = []
    this.total = 0
    this.count = 0

    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
    this.init()
  }

  createItem(product) {
    throw new Error('Method createItem is not implemented')
  }

  init() {
    const items = this.store.getState().cartItems
    this.cartItems = items.map(product => {
      return this.createItem(product)
    })
    this.count = calcCount(this.cartItems)
    this.total = calcTotal(this.cartItems)
  }

  add(product) {
    const candidate = this.cartItems.find(item => item.id === product.id)
    if (candidate) {
      candidate.quantity++
      candidate.update()
    } else {
      if (isEmpty(this.cartItems)) {
        this.$container.clear()
      }
      const item = this.createItem(product)
      this.cartItems.push(item)
      this.$container.append(item.render())
    }
    this.count = calcCount(this.cartItems)
    this.renderTotal()
  }

  remove(id) {
    const item = this.cartItems.find(item => item.id === +id)
    if (item.quantity > 1) {
      item.quantity--
      item.update()
    } else {
      item.remove()
      this.cartItems.splice(this.cartItems.indexOf(item), 1)
    }

    this.count = calcCount(this.cartItems)
    this.renderTotal()
  }

  reset() {
    this.cartItems = []
    this.total = 0
    this.count = 0
    this.$container.clear()
  }

  renderTotal() {
    this.total = calcTotal(this.cartItems)
    this.$totalCounter.text(getPrice(this.total).toString())
  }

  afterRender() {
    super.afterRender()
    this.$container = this.$root.find(CART_CONTAINER_SELECTOR)
    this.cartItems.forEach(item => this.$container.append(item.render()))

    this.$totalCounter = this.$root.find(CART_TOTAL_SELECTOR)
    this.renderTotal()
  }
}