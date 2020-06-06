import {getPath, redirect} from '@core/Router/router.functions'
import {DEFAULT_ROUTE} from '@core/constants'

export class Router {
  constructor($root, options = {}) {
    this.$root = $root
    this.routes = options.routes
    this.observer = options.observer
    this.currentPage = null

    this.changePageHandler = this.changePageHandler.bind(this)
    this.init()
  }

  init() {
    window.onhashchange = this.changePageHandler
    this.changePageHandler()
  }

  changePageHandler() {
    const path = getPath()

    if (this.currentPage) {
      this.currentPage.destroy()
    }

    if (!this.routes[path]) {
      redirect(DEFAULT_ROUTE)
    } else {
      const Page = this.routes[path]
      this.currentPage = new Page({observer: this.observer})
      this.observer.emit('router: change-page', path)
      this.renderPage()
    }
  }

  renderPage() {
    this.$root.clear()
    this.$root.append(this.currentPage.render())
    this.currentPage.afterRender()
  }
}