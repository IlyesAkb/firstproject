/* eslint-disable max-len */
export function createBigCart() {
  return `
    <div class="container cart__container">

        <!--cart table-->
        <table class="cart__table">

          <thead>
          <tr>
            <th class="cart__table-head cart__table-col--big">Product Details</th>
            <th class="cart__table-head cart__table-col">unite Price</th>
            <th class="cart__table-head cart__table-col">Quantity</th>
            <th class="cart__table-head cart__table-col">shipping</th>
            <th class="cart__table-head cart__table-col">Subtotal</th>
            <th class="cart__table-head cart__table-col">ACTION</th>
          </tr>
          </thead>

          <tbody data-type="cartContainer">

          </tbody>
        </table>

        <div class="cart__actions">
          <button data-type="cartClear">cLEAR SHOPPING CART</button>
          <a href="#catalog">continue sHOPPING</a>
        </div>

        <div class="cart__order">
          <div class="cart__order-wrap">

            <div class="cart__order-total">
              <p>GRAND TOTAL <span data-type="cartTotal">$900</span></p>
            </div>

            <a href="#" class="cart__order-btn">order</a>

          </div>
        </div>

      </div>
  `
}

export function createEmptyTemplate() {
  return `
    <div class="container cart__empty-container">
    
      <h2>cart is empty</h2>
      <a href="#catalog" class="cart-btn">return to catalog</a>
      
    </div>
  `
}