import {getPrice} from '@core/utils'
import {$} from '@core/dom'

export class Product {
  constructor(product) {
    this.id = product.id
    this.name = product.name
    this.price = product.price
    this.img = product.img
  }

  render() {
    const $product = $.create('div', 'products-list__item')
    $product.html(this.toHTML())
    return $product
  }

  toHTML() {
    return `
      <div class="products-list__item-img-wrap">
        <img 
          src="${this.img}" 
          alt="item-img" 
          class="products-list__item-img"
        >
      </div>
      <div class="products-list__item-add-btn" 
        data-type="add-btn" 
        data-id="${this.id}"
      >
        <span data-type="add-btn" data-id="${this.id}">Add to Cart</span>
      </div>
      <a href="#" class="products-list__item-link">
      
        <p class="products-list__item-name">
          <strong>${this.name}</strong>
        </p>
        
        <p class="products-list__item-price">
          <strong>${getPrice(this.price)}</strong>
        </p>
      </a>
    `
  }
}