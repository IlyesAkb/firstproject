import {getHandlerName} from '@core/utils'

export class DomListener {
  constructor($root, listeners = []) {
    this.$root = $root
    this.listeners = listeners
  }

  initListeners() {
    this.listeners.forEach(event => {
      const handler = getHandlerName(event)
      if (!this[handler]) {
        throw new Error(`Method '${handler}' is not provided`)
      } else {
        this[handler] = this[handler].bind(this)
        this.$root.on(event, this[handler])
      }
    })
  }

  removeListeners() {
    this.listeners.forEach(listener => {
      const handler = getHandlerName(listener)
      this.$root.off(listener, this[handler])
    })
  }
}