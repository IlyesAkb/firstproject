import {Component} from '@core/Component';

export class SearchForm extends Component {
  constructor($root, options = {}) {
    super($root, options);
  }

  static selector = '[data-type="searchForm"]'

  toHTML() {
    return `
      <div class="header__form-browse-btn">Browse</div>
        <input 
          type="text" 
          name="search" 
          id="search" 
          class="header__form-input"
        >
      <button type="submit" class="header__form-submit-btn"></button>
    `
  }
}