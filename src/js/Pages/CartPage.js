/* eslint-disable max-len */
import {Page} from '@core/Page'

export class CartPage extends Page {
  constructor(options = {}) {
    super([], options)
  }

  toHTML() {
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

          <tbody>

          <!--cart item-->
          <tr class="cart__table-item">

            <td>
              <div class="cart__table-item-preview">
                <div class="cart__table-item-preview-img-wrap">
                  <img src="./assets/img/products/product-img-1.jpg" alt="cart-item-image">
                </div>
                <div class="cart__table-item-preview-text">
                  <p class="cart__table-item-preview-name">Mango People T-shirt</p>
                  <p><span>Color</span>: Red</p>
                  <p><span>Size</span>: Xll</p>
                </div>
              </div>
            </td>

            <td>
              <div class="cart__table-item-info">&dollar;150</div>
            </td>

            <td>
              <div class="cart__table-item-quantity-wrap">
                <div class="cart__table-item-quantity">
                  <div class="cart__table-item-quantity-btn dec"><i class="fas fa-minus"></i></div>
                  <p class="cart__table-item-quantity-counter">1</p>
                  <div class="cart__table-item-quantity-btn inc"><i class="fas fa-plus"></i></div>
                </div>
              </div>
            </td>

            <td>
              <div class="cart__table-item-info">free</div>
            </td>

            <td>
              <div class="cart__table-item-info">&dollar;300</div>
            </td>

            <td>
              <div class="cart__table-item-remove-btn"><i class="fas fa-times-circle"></i></div>
            </td>

          </tr>
          <tr class="cart__table-item">

            <td>
              <div class="cart__table-item-preview">
                <div class="cart__table-item-preview-img-wrap">
                  <img src="./assets/img/products/product-img-1.jpg" alt="cart-item-image">
                </div>
                <div class="cart__table-item-preview-text">
                  <p class="cart__table-item-preview-name">Mango People T-shirt</p>
                  <p><span>Color</span>: Red</p>
                  <p><span>Size</span>: Xll</p>
                </div>
              </div>
            </td>

            <td>
              <div class="cart__table-item-info">&dollar;150</div>
            </td>

            <td>
              <div class="cart__table-item-quantity-wrap">
                <div class="cart__table-item-quantity">
                  <div class="cart__table-item-quantity-btn dec"><i class="fas fa-minus"></i></div>
                  <p class="cart__table-item-quantity-counter">1</p>
                  <div class="cart__table-item-quantity-btn inc"><i class="fas fa-plus"></i></div>
                </div>
              </div>
            </td>

            <td>
              <div class="cart__table-item-info">free</div>
            </td>

            <td>
              <div class="cart__table-item-info">&dollar;300</div>
            </td>

            <td>
              <div class="cart__table-item-remove-btn"><i class="fas fa-times-circle"></i></div>
            </td>

          </tr>
          <tr class="cart__table-item">

            <td>
              <div class="cart__table-item-preview">
                <div class="cart__table-item-preview-img-wrap">
                  <img src="./assets/img/products/product-img-1.jpg" alt="cart-item-image">
                </div>
                <div class="cart__table-item-preview-text">
                  <p class="cart__table-item-preview-name">Mango People T-shirt</p>
                  <p><span>Color</span>: Red</p>
                  <p><span>Size</span>: Xll</p>
                </div>
              </div>
            </td>

            <td>
              <div class="cart__table-item-info">&dollar;150</div>
            </td>

            <td>
              <div class="cart__table-item-quantity-wrap">
                <div class="cart__table-item-quantity">
                  <div class="cart__table-item-quantity-btn dec"><i class="fas fa-minus"></i></div>
                  <p class="cart__table-item-quantity-counter">1</p>
                  <div class="cart__table-item-quantity-btn inc"><i class="fas fa-plus"></i></div>
                </div>
              </div>
            </td>

            <td>
              <div class="cart__table-item-info">free</div>
            </td>

            <td>
              <div class="cart__table-item-info">&dollar;300</div>
            </td>

            <td>
              <div class="cart__table-item-remove-btn"><i class="fas fa-times-circle"></i></div>
            </td>

          </tr>
          </tbody>
        </table>

        <div class="cart__actions">
          <button>cLEAR SHOPPING CART</button>
          <button>continue sHOPPING</button>
        </div>

        <div class="cart__order">
          <div class="cart__order-wrap">

            <div class="cart__order-total">
              <p>GRAND TOTAL <span>$900</span></p>
            </div>

            <a href="#" class="cart__order-btn">order</a>

          </div>
        </div>

      </div>
    `
  }
}