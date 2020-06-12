import {routerConfig} from '@core/App/app.functions'
import {Router} from '@core/Router/Router'
import {Navbar} from '@/js/components/Navbar/Navbar'
import {Component} from '@core/Component';
import {Header} from '@comps/Header/Header';
import {Footer} from '@comps/Footer/Footer';
import {ROUTER_SELECTOR} from '@core/constants'

export class App extends Component {
  constructor($root, options = {}) {
    super($root, {
      ...options,
      components: [Header, Navbar, Footer]
    });
  }

  start() {
    this.render()
  }

  afterRender() {
    super.afterRender();
    const $routerRoot = this.$root.find(ROUTER_SELECTOR)
    const routerOptions = routerConfig({
      observer: this.observer,
      store: this.store
    })
    this.router = new Router($routerRoot, routerOptions)
  }

  toHTML() {
    return `
      <div class="wrapper">
      
        <header class="header" data-type="header"></header>
        
        <nav class="main-nav" data-type="navbar"></nav>
        
        <div class="router" data-type="router"></div>
      
      </div>
      
      <footer class="footer" data-type="footer"></footer>
    `
  }
}