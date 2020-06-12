import {Component} from '@core/Component';
import {CatalogSettings} from '@comps/CatalogSettings/CatalogSettings';
import {CatalogList} from '@comps/CatalogList/CatalogList';

export class Catalog extends Component {
  constructor($root, options = {}) {
    super($root, {
      ...options,
      components: [CatalogSettings, CatalogList]
    });
  }

  static selector = '[data-type="catalog"]'

  toHTML() {
    return `
      <section class="catalog">

        <div class="container catalog__container">
  
          <form 
            action="#" 
            class="catalog__form" 
            data-type="catalogSettings"
          ></form>
  
          <div 
            class="products-list catalog__products-list" 
            data-type="productList"
          >
  
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