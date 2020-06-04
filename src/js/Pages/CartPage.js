/* eslint-disable max-len */
import {Page} from '@core/Page'
import {BigCart} from '@/js/components/BigCart/BigCart'

export class CartPage extends Page {
  constructor(options = {}) {
    super([BigCart], options)
  }

  toHTML() {
    return `
      <div class="cart" data-type="bigCart"></div>
    `
  }
}