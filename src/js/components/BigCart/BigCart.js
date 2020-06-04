import {Cart} from '@core/Cart/Cart'
import {BigCartItem} from '@/js/components/BigCart/BigCartItem'
import {calcCount} from '@core/Cart/cart.functions'
import {isEmpty} from '@core/utils'
import {$} from '@core/dom'
import {
  createBigCart,
  createEmptyTemplate
} from '@/js/components/BigCart/bigCart.template'

export class BigCart extends Cart {
  constructor($root, options = {}) {
    super($root, {
      ...options,
      listeners: ['click']
    })
  }

  static selector = '[data-type="bigCart"]'

  delete(id) {
    const item = this.cartItems.find(item => item.id === +id)
    console.log(id)
    item.remove()

    this.cartItems = this.cartItems.filter(item => item.id !== +id)

    this.count = calcCount(this.cartItems)
    this.renderTotal()

    if (isEmpty(this.cartItems)) {
      this.clear()
    }
  }

  incQuantity(id) {
    const item = this.cartItems.find(item => item.id === +id)

    if (item.quantity === 99) {
      return
    }

    item.quantity++
    item.update()
    this.count = calcCount(this.cartItems)
    this.renderTotal()
  }

  createItem(product) {
    return new BigCartItem(product)
  }

  toHTML() {
    return createBigCart()
  }

  clear() {
    this.reset()
    this.$root.html(createEmptyTemplate())
  }

  onClick(event) {
    const $target = $(event.target)
    const type = $target.data.type
    const id = $target.data.id

    if (type === 'cartDelete') {
      this.delete(id)
    } else if (type === 'cartAdd') {
      this.incQuantity(id)
    } else if (type === 'cartRemove') {
      this.remove(id)
      if (!this.cartItems.length) {
        this.clear()
      }
    } else if (type === 'cartClear') {
      this.clear()
    }
  }
}