import {$} from '@core/dom'
import {routerConfig} from '@core/App/app.functions'
import {Router} from '@core/Router/Router'
import {Observer} from '@core/Observer'
import {MiniCart} from '@/js/components/MiniCart/MiniCart'
import {Navbar} from '@/js/components/Navbar/Navbar'
import {ROUTER_SELECTOR} from '@core/constants'

export class App {
  constructor($root, options = {}) {
    this.$root = $($root)
    this.store = options.store
  }

  init() {
    this.observer = new Observer()
    const options = {
      observer: this.observer,
      store: this.store
    }

    const $cartRoot = this.$root.find(MiniCart.selector)
    this.cart = new MiniCart($cartRoot, options)
    this.cart.render()

    const $navbar = this.$root.find(Navbar.selector)
    this.navbar = new Navbar($navbar, {
      ...options,
      links: ['home', 'catalog', 'cart']
    })
    this.navbar.render()

    const $router = this.$root.find(ROUTER_SELECTOR)
    this.router = new Router(
        $router,
        routerConfig(options)
    )
  }
}