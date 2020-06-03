/* eslint-disable max-len */
export function getTemplate() {
  return `
    <div class="header__mini-cart-btn mini-cart__btn" data-type="cartBtn">
        <img src="./assets/img/icon-cart.svg" alt="icon" data-type="cartBtn">
    </div>
    
    <div class="mini-cart__counter" data-type="cartCounter">
      99+
    </div>

    <div class="mini-cart__dropdown">

      <div class="mini-cart__items-container" data-type="cartContainer">
          
      </div>

      <div class="mini-cart__total">
        <span>total</span>
        <span data-type="cartTotal">&dollar;500</span>
      </div>

      <a href="#cart" class="mini-cart__btn-open" data-type="goToCart">go to cart</a>

    </div>
  `
}