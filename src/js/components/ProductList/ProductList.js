import {Component} from '@core/Component'
import {Product} from '@/js/components/ProductList/Product'
import {isAdd} from '@/js/components/ProductList/porductList.functions'

export class ProductList extends Component {
  constructor($root, options = {}) {
    super($root, {
      ...options,
      listeners: ['click']
    })
    this.list = []
  }

  static selector = '[data-type="productList"]'

  afterRender() {
    super.afterRender()
    this.renderItems()
  }

  renderItems() {
    this.list.forEach(product => {
      product = new Product(product)
      this.$root.append(product.render())
    })
  }

  addToCart(id) {
    const product = this.list.find(product => product.id === +id)
    this.$emit('product-list: add', product)
  }

  onClick(event) {
    if (isAdd(event.target)) {
      this.addToCart(event.target.dataset.id)
    }
  }
}