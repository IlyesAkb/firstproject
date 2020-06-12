import {Component} from '@core/Component';
import {createSubscribe} from '@comps/Subscribe/subscribe.template';
import {initSlick} from '@comps/Subscribe/subscribe.functions';

export class Subscribe extends Component {
  constructor($root, options = {}) {
    super($root, {
      ...options
    });
  }

  static selector = '[data-type="subscribe"]'

  toHTML() {
    return createSubscribe()
  }

  afterRender() {
    super.afterRender();
    this.$slider = this.$root.find('[data-type="slickSlider"]')
    initSlick(this.$slider.$el)
  }
}