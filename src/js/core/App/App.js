import {$} from '@core/dom'
import {Router} from '@core/Router/Router'
import {Observer} from '@core/Observer'
import {routerConfig} from '@core/App/app.functions'
import {MiniCart} from '@/js/components/MiniCart/MiniCart'
import {NAVBAR_SELECTOR, ROUTER_SELECTOR} from '@core/constants'
import {Navbar} from '@/js/components/Navbar/Navbar'

export class App {
  constructor($root, options = {}) {
    this.$root = $($root)
    this.components = options.components || []
    this.pages = options.pages || {}
  }

  init() {
    this.observer = new Observer()

    const $cartRoot = this.$root.find('[data-type="miniCart"]')
    this.cart = new MiniCart($cartRoot, {observer: this.observer})
    this.cart.render()

    const $navbar = this.$root.find(NAVBAR_SELECTOR)
    this.navbar = new Navbar($navbar, {observer: this.observer})
    this.navbar.render()

    const $router = this.$root.find(ROUTER_SELECTOR)
    this.router = new Router(
        $router,
        routerConfig({observer: this.observer})
    )
  }
}