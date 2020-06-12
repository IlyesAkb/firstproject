import {Component} from '@core/Component';
import {FeaturedList} from '@comps/FeaturedList/FeaturedList';

export class Featured extends Component {
  constructor($root, options = {}) {
    super($root, {
      ...options,
      components: [FeaturedList]
    });
  }

  static selector = '[data-type="featured"]'

  toHTML() {
    return `
      <div class="container featured__container">

        <div class="featured__heading">
          <h1>Featured Items</h1>
          <p>Shop for items based on what we featured in this week</p>
        </div>

        <div 
          class="products-list featured__products-list" 
          data-type="productList"
        ></div>

        <div class="featured__btn-wrap">
          <a href="#catalog" class="featured__btn">Browse All Product</a>
        </div>
      </div>
    `
  }
}