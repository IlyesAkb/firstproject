/* eslint-disable max-len */
import {Page} from '@core/Page'

export class Catalog extends Page {
  constructor(options = {}) {
    super([], options)
  }

  toHTML() {
    return `
      <section class="catalog">

      <div class="container catalog__container">

        <form action="#" class="catalog__form">
          <div class="catalog__form-top">
            <div class="catalog__form-size">
              <h3>size</h3>

              <div class="catalog__form-size-container">
                <label class="checkbox-container catalog__form-checkbox-container">
                  <input type="checkbox" name="size">xxs
                  <span class="checkmark"></span>
                </label>

                <label class="checkbox-container catalog__form-checkbox-container">
                  <input type="checkbox" name="size">xs
                  <span class="checkmark"></span>
                </label>

                <label class="checkbox-container catalog__form-checkbox-container">
                  <input type="checkbox" name="size">s
                  <span class="checkmark"></span>
                </label>

                <label class="checkbox-container catalog__form-checkbox-container">
                  <input type="checkbox" name="size">m
                  <span class="checkmark"></span>
                </label>

                <label class="checkbox-container catalog__form-checkbox-container">
                  <input type="checkbox" name="size">l
                  <span class="checkmark"></span>
                </label>

                <label class="checkbox-container catalog__form-checkbox-container">
                  <input type="checkbox" name="size">xl
                  <span class="checkmark"></span>
                </label>

                <label class="checkbox-container catalog__form-checkbox-container">
                  <input type="checkbox" name="size">xxl
                  <span class="checkmark"></span>
                </label>
              </div>

            </div>
            <div class="catalog__form-price">
              <h3>price</h3>
              <div class="catalog__form-price-slider">

              </div>
            </div>
          </div>
          <div class="catalog__form-bottom">

            <div class="catalog__form-bottom-select">
              <label for="sort">Sort By</label>
              <select name="sort" id="sort">
                <option value="1">Name</option>
              </select>
            </div>

            <div class="catalog__form-bottom-select">
              <label for="show">Show</label>
              <select name="show" id="show">
                <option value="9">09</option>
              </select>
            </div>

          </div>
        </form>

        <div class="products-list catalog__products-list">

          <div class="products-list__item">
            <div class="products-list__item-img-wrap">
              <img src="./assets/img/products/product-img-1.jpg" alt="item-img" class="products-list__item-img">
            </div>
            <div class="products-list__item-add-btn">
              <span>Add to Cart</span>
            </div>
            <a href="#" class="products-list__item-link">
              <p class="products-list__item-name"><strong>Mango People T-shirt</strong></p>
              <p class="products-list__item-price"><strong>&dollar;52.00</strong></p>
            </a>
          </div>

        </div>

        <div class="catalog__bottom">

          <ul class="catalog__bottom-pagination">
            <li><a href="#"><i class="fas fa-chevron-left"></i></a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">6</a></li>
            <li><a href="#">7</a></li>
            <li><a href="#">8</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i></a></li>

          </ul>

          <div class="catalog__bottom-btn">View All</div>

        </div>

      </div>

    </section>
    `
  }
}