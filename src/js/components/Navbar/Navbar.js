import {Component} from '@core/Component'
import {createLinks} from '@comps/Navbar/navbar.functions'

export class Navbar extends Component {
  constructor($root, options = {}) {
    super($root, options)
    this.links = options.links
    this.$current = null
    this.init()
  }

  init() {
    this.subscribe('router: change-page', page => {
      if (this.$current) {
        this.$current.removeClass('active')
      }
      this.$current = this.$root.find(`[data-page="${page}"]`)
      this.$current.addClass('active')
    })
  }

  toHTML() {
    return `
      <ul class="main-nav__container">
        ${createLinks(this.links)}
      </ul>
    `
  }
}