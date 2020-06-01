import {Cart} from '@core/Cart/Cart'
import {getTemplate} from '@/js/components/MiniCart/miniCart.template'
import {MiniCartItem} from '@/js/components/MiniCart/MiniCartItem'
import {isDelete} from '@core/Cart/cart.functions'

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
    this.observer.subscribe('product-list: add', this.add)
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
    return getTemplate()
  }

  afterRender() {
    super.afterRender()
    this.$dropdown = this.$root.find('.mini-cart__dropdown')
  }

  toggleDropdown() {
    if (this.$dropdown.hasClass('active')) {
      this.$dropdown.removeClass('active')
    } else {
      this.$dropdown.addClass('active')
    }
  }

  onClick(event) {
    if (isDelete(event.target)) {
      this.remove(event.target.dataset.id)
    } else if (event.target.dataset.type === 'cartBtn') {
      this.toggleDropdown()
    }
  }
}