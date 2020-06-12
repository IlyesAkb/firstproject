import {getPath, redirect} from '@core/Router/router.functions'
import {$} from '@core/dom'
import {changePage} from '@/js/redux/actions';
import {DEFAULT_ROUTE} from '@core/constants'

export class Router {
  constructor($root, options = {}) {
    this.$root = $root
    this.routes = options.routes
    this.observer = options.observer
    this.store = options.store
    this.currentPage = null
    this.$placeholder = null

    this.changePageHandler = this.changePageHandler.bind(this)
    this.init()
  }

  init() {
    this.$placeholder = $.create('div', 'page')
    this.$placeholder.attr('data-type', 'page')
    this.$root.append(this.$placeholder)
    window.onhashchange = this.changePageHandler
    this.changePageHandler()
  }

  changePageHandler() {
    const path = getPath()
    const pageOptions = {
      observer: this.observer,
      store: this.store
    }

    if (this.currentPage) {
      this.currentPage.destroy()
    }

    if (!this.routes[path]) {
      redirect(DEFAULT_ROUTE)
    } else {
      const Page = this.routes[path]
      this.currentPage = new Page(this.$placeholder, pageOptions)
      // this.observer.emit('router: change-page', path)
      this.store.dispatch(changePage(path))
      this.renderPage()
      window.scroll(0, 0)
    }
  }

  renderPage() {
    this.$placeholder.clear()
    this.currentPage.render()
  }
}