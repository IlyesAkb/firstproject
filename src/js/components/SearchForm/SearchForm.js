import {Component} from '@core/Component';
import {$} from '@core/dom'

export class SearchForm extends Component {
  constructor($root, options = {}) {
    super($root, {
      ...options,
      listeners: ['click', 'submit']
    });
    this.init()
  }

  static selector = '[data-type="searchForm"]'

  init() {
    document.addEventListener('click', event => {
      if (event.target.dataset.type !== 'browseBtn') {
        this.$browseBtn.removeClass('active')
      }
    })
  }

  afterRender() {
    super.afterRender();
    this.$searchLine = this.$root.find('[data-type="searchLine"]')
    this.$browseBtn = this.$root.find('[data-type="browseBtn"]')
  }

  onClick(event) {
    const $target = $(event.target)
    if ($target.data.type === 'browseBtn') {
      $target.toggleClass('active')
    }
  }

  onSubmit(event) {
    event.preventDefault()
  }

  toHTML() {
    return `
      <div class="header__form-browse-btn" data-type="browseBtn">Browse</div>
        <input 
          type="text" 
          name="search" 
          id="search" 
          class="header__form-input"
          data-type="searchLine"
        >
      <button type="submit" class="header__form-submit-btn"></button>
    `
  }
}