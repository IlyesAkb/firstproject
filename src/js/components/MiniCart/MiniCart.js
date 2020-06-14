import {Cart} from '@core/Cart/Cart'
import {MiniCartItem} from '@/js/components/MiniCart/MiniCartItem'
import {createMiniCart} from '@comps/MiniCart/miniCart.template'
import {isRemove} from '@core/Cart/cart.functions'
import {isEmpty} from '@core/utils'
import {$} from '@core/dom'
import {
  CART_COUNTER_SELECTOR,
  MINI_CART_DROPDOWN_SELECTOR
} from '@core/constants'
import {cartAdd, cartClear, cartDelete, cartRemove} from '@/js/redux/actions';

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
    this.$subscribe('product-list: add', product => {
      this.add(product)
    })

    this.$subscribe('big-cart: add', product => {
      this.add(product)
    })

    this.$subscribe('big-cart: delete', id => {
      this.delete(id)
    })

    this.$subscribe('big-cart: remove', id => {
      this.remove(id)
    })

    this.$subscribe('big-cart: clear', () => {
      this.clear()
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

  clear() {
    this.cartItems.forEach(item => item.remove())
    this.$container.clear()
    this.$dispatch(cartClear())
    this.reset()
    this.updateCounter()
    this.renderTotal()
    this.toggleDropdownContent()
  }

  delete(id) {
    const item = this.cartItems.find(i => i.id === +id)
    item.remove()
    this.count -= item.quantity
    this.cartItems = this.cartItems.filter(i => i.id !== +id)

    this.$dispatch(cartDelete(id))
    this.updateCounter()
    this.renderTotal()

    if (isEmpty(this.cartItems)) {
      this.clear()
    }
  }

  add(product) {
    if (!isEmpty(this.cartItems)) {
      this.toggleDropdownContent()
    }

    super.add(product);
    this.updateCounter()
    this.$dispatch(cartAdd(product))
  }

  remove(id) {
    super.remove(id);
    this.$dispatch(cartRemove(id))
    this.updateCounter()

    if (isEmpty(this.cartItems)) {
      this.toggleDropdownContent()
    }
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

  toggleDropdownContent() {
    const $placeHolder = this.$dropdown.find('[data-type="placeholder"]')
    const $dropdownContent =
      this.$dropdown.find('[data-type="dropdownContent"]')


    if (isEmpty(this.cartItems)) {
      $dropdownContent.removeClass('active')
      $placeHolder.addClass('active')
    } else {
      $dropdownContent.addClass('active')
      $placeHolder.removeClass('active')
    }
  }

  afterRender() {
    super.afterRender()
    this.$dropdown = this.$root.find(MINI_CART_DROPDOWN_SELECTOR)
    this.$counter = this.$root.find(CART_COUNTER_SELECTOR)
    this.updateCounter()
    this.toggleDropdownContent()
  }

  onClick(event) {
    const $target = $(event.target)
    const type = $target.data.type
    if (isRemove(event.target)) {
      this.remove($target.data.id)
      this.updateCounter()
      this.$emit('mini-cart: remove', $target.data.id)
    } else if (type === 'cartBtn' || type === 'goToCart') {
      this.$dropdown.toggleClass('active')
    }
  }
}