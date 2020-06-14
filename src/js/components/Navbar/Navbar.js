import {Component} from '@core/Component'
import {createLinks} from '@comps/Navbar/navbar.functions'
import {NAVBAR_LINKS} from '@core/constants';

export class Navbar extends Component {
  constructor($root, options = {}) {
    super($root, {
      ...options,
      subscribes: ['currentPage']
    })

    this.$current = null
    this.init()
  }

  static selector = '[data-type="navbar"]'

  select(pageName) {
    if (this.$current) {
      this.$current.removeClass('active')
    }
    this.$current = this.$root.find(`[data-page="${pageName}"]`)
    this.$current.addClass('active')
  }

  storeChanged(data) {
    this.select(data.currentPage)
  }

  afterRender() {
    super.afterRender();
    const currentPageName = this.store.getState().currentPage
    this.select(currentPageName)
  }

  toHTML() {
    return `
      <ul class="main-nav__container">
        ${createLinks(NAVBAR_LINKS)}
      </ul>
    `
  }
}