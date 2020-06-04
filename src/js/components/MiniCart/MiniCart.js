import {Cart} from '@core/Cart/Cart'
import {MiniCartItem} from '@/js/components/MiniCart/MiniCartItem'
import {createMiniCart} from '@/js/components/MiniCart/miniCart.template'
import {isRemove} from '@core/Cart/cart.functions'
import {isEmpty} from '@core/utils'
import {$} from '@core/dom'
import {
  CART_COUNTER_SELECTOR,
  MINI_CART_DROPDOWN_SELECTOR
} from '@core/constants'

export class MiniCart extends Cart {
  constructor($root, options = {}) {
    super($root, {
      ...options,
      listeners: ['click']
    })
  }

  static selector = '[data-type="miniCart"]'

  init() {
    super.init()
    this.observer.subscribe('product-list: add', product => {
      this.add(product)
      this.updateCounter()
    })
    window.addEventListener('click', event => {
      if (!event.target.closest([
        '[data-type="cartRemove"]',
        '[data-type="miniCart"]',
      ])) {
        this.$dropdown.removeClass('active')
      }
    })
  }

  createItem(product) {
    return new MiniCartItem(product)
  }

  toHTML() {
    return createMiniCart()
  }

  updateCounter() {
    if (isEmpty(this.cartItems)) {
      this.count = 0
      this.$counter.removeClass('active')
    } else {
      this.$counter.text(this.count.toString())

      if (!this.$counter.hasClass('active')) {
        this.$counter.addClass('active')
      }
    }
  }

  afterRender() {
    super.afterRender()
    this.$dropdown = this.$root.find(MINI_CART_DROPDOWN_SELECTOR)
    this.$counter = this.$root.find(CART_COUNTER_SELECTOR)
    this.updateCounter()
  }

  onClick(event) {
    const $target = $(event.target)
    if (isRemove(event.target)) {
      this.remove($target.data.id)
      this.updateCounter()
    } else if ($target.data.type === 'cartBtn') {
      this.$dropdown.toggleClass('active')
    } else if ($target.data.type === 'goToCart') {
      this.$dropdown.removeClass('active')
    }
  }
}