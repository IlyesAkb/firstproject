import {CartItem} from '@core/Cart/CartItem'
import {$} from '@core/dom'
import {getPrice} from '@core/utils'

export class BigCartItem extends CartItem {
  constructor(product) {
    super(product)
  }

  getRoot() {
    return $.create('tr', 'cart__table-item')
  }

  toHTML() {
    return `
      <td>
        <div class="cart__table-item-preview">
          <div class="cart__table-item-preview-img-wrap">
            <img 
              src="${this.img}" 
              alt="cart-item-image"
            >
          </div>
          <div class="cart__table-item-preview-text">
          
            <p class="cart__table-item-preview-name">
              Mango People T-shirt
            </p>
            <p><span>Color</span>: Red</p>
            <p><span>Size</span>: Xll</p>
            
          </div>
        </div>
      </td>

      <td>
        <div class="cart__table-item-info">${getPrice(this.price)}</div>
      </td>

      <td>
        <div class="cart__table-item-quantity-wrap">
          <div class="cart__table-item-quantity">
          
            <div 
              class="cart__table-item-quantity-btn dec" 
              data-type="cartRemove"
              data-id="${this.id}"
            >
              <i 
                class="fas fa-minus" 
                data-type="cartRemove"
                data-id="${this.id}"
              ></i>
            </div>
            
            <p class="cart__table-item-quantity-counter">${this.quantity}</p>
            
            <div 
              class="cart__table-item-quantity-btn inc"
              data-type="cartAdd"
              data-id="${this.id}"
            >
              <i 
                class="fas fa-plus" 
                data-type="cartAdd"
                data-id="${this.id}"
              ></i>
            </div>
            
          </div>
        </div>
      </td>

      <td>
        <div class="cart__table-item-info">free</div>
      </td>

      <td>
        <div class="cart__table-item-info">${getPrice(this.totalPrice)}</div>
      </td>

      <td>
      
        <div 
          class="cart__table-item-remove-btn" 
          data-type="cartDelete"
          data-id="${this.id}"
        >
          <i 
            class="fas fa-times-circle" 
            data-type="cartDelete" 
            data-id="${this.id}"
          ></i>
        </div>
        
      </td>
    `
  }
}