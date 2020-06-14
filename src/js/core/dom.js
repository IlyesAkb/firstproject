class DomElement {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }

  text(text) {
    if (typeof text === 'string') {
      this.$el.innerText = text
      return this
    }
    return this.$el.innerText.trim()
  }

  append(node) {
    if (node instanceof DomElement) {
      node = node.$el
    }

    this.$el.insertAdjacentElement('beforeend', node)
    return this
  }

  remove() {
    this.$el.remove()
  }

  clear() {
    this.$el.innerHTML = ''
    return this
  }

  addClass(className) {
    this.$el.classList.add(className)
    return this
  }

  removeClass(className) {
    this.$el.classList.remove(className)
    return this
  }

  toggleClass(className) {
    this.$el.classList.toggle(className)
    return this
  }

  hasClass(className) {
    return this.$el.classList.contains(className)
  }

  css(styles = {}) {
    const keys = Object.keys(styles)
    keys.forEach(key => {
      this.$el.style[key] = styles[key]
    })
    return this
  }

  attr(name, value) {
    if (typeof value === 'string') {
      this.$el.setAttribute(name, value)
      return this
    }

    return this.$el.getAttribute(name)
  }

  value(value) {
    if (typeof value === 'string') {
      this.$el.value = value
      return this
    }
    return this.$el.value
  }

  set width(width) {
    this.css({width: width + 'px'})
  }

  get width() {
    return this.$el.clientWidth
  }

  get name() {
    return this.$el.name
  }

  get cords() {
    const cords = this.$el.getBoundingClientRect()
    return {
      top: cords.top - pageYOffset,
      left: cords.left - pageXOffset
    }
  }

  get data() {
    return this.$el.dataset
  }

  find(selector) {
    return $(this.$el.querySelector(selector))
  }

  on(event, handler) {
    this.$el.addEventListener(event, handler)
  }

  off(event, handler) {
    this.$el.removeEventListener(event, handler)
  }
}

export function $($el) {
  if (typeof $el === 'string') {
    $el = document.querySelector($el)
  }
  return new DomElement($el)
}

$.create = (tagName, classes = '') => {
  const $el = document.createElement(tagName)

  if (classes) {
    $el.classList.add(classes)
  }

  return $($el)
}