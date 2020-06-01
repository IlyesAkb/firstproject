import {Component} from '@core/Component'

export class Navbar extends Component {
  constructor($root, options = {}) {
    super($root, options)
    this.$current = null
    this.init()
  }

  init() {
    this.observer.subscribe('router: change-page', page => {
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
        <li><a href="#home" data-page="home">Home</a></li>
        <li><a href="#catalog" data-page="catalog">Catalog</a></li>
        <li><a href="#cart" data-page="cart">Cart</a></li>
      </ul>
    `
  }
}