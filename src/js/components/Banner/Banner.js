import {Component} from '@core/Component';

export class Banner extends Component {
  constructor($root, options = {}) {
    super($root, {
      ...options
    });
  }

  static selector = '[data-type="banner"]'

  toHTML() {
    return `
      <div class="container slider__container">
        <div class="slider__text">
          <h1>THE BRAND</h1>
          <h2>OF LUXERIOUS <span>FASHION</span></h2>
        </div>
      </div>
    `
  }
}