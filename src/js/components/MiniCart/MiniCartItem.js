import {CartItem} from '@core/Cart/CartItem'
import {getPrice} from '@core/utils'
import {$} from '@core/dom'

export class MiniCartItem extends CartItem {
  constructor(product) {
    super(product)
  }

  getRoot() {
    return $.create('div', 'cart-item')
  }

  toHTML() {
    return `
      <div class="cart-item__img-wrap">
        <img 
          src="${this.img}" 
          alt="mini cart item"
        >
      </div>

      <div class="cart-item__text">
        <p class="cart-item__text-name">${this.name}</p>
        
        <p class="cart-item__text-quantity">
          <span>${this.quantity}</span> X <span>${getPrice(this.price)}</span>
        </p>
      </div>

      <div 
        class="cart-item__remove-btn" 
        data-type="cartRemove"
        data-id="${this.id}"
      >
        <i 
          class="fas fa-times-circle" 
          data-type="cartRemove"
          data-id="${this.id}"
        ></i>
      </div>
    `
  }
}