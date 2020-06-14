/* eslint-disable max-len */
import {SIZES} from '@core/constants'

export function createCatalogSettings() {
  return `
    <div class="catalog__form-top">
      <div class="catalog__form-size">
        <h3>size</h3>

        <div class="catalog__form-size-container">
        
          ${toCheckbox(SIZES)}

        </div>

      </div>
      
      <div class="catalog__form-price">
        <h3>price</h3>
        <div class="catalog__slider-wrap">
          <div class="catalog__form-price-slider" data-type="catalogSlider"></div>
          <div class="catalog__form-price-values">
            <span data-type="sliderMin">0</span>
            <span data-type="sliderMax">10</span>
          </div>
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
        <select name="show" id="show" data-type="itemCount">
          <option value="9">09</option>
          <option value="15">15</option>
        </select>
      </div>

    </div>
  `
}

function toCheckbox(sizes = []) {
  return sizes.reduce((html, size, idx) => {
    return html += `
      <label class="checkbox-container catalog__form-checkbox-container">
        <input type="checkbox" name="size" value="${idx + 1}">${size}
        <span class="checkmark"></span>
      </label>
    `
  }, '')
}