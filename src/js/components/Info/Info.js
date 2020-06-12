import {Component} from '@core/Component';
import {createInfo} from '@comps/Info/info.template';

export class Info extends Component {
  constructor($root, options = {}) {
    super($root, {
      ...options
    });
  }

  static selector = '[data-type="info"]'

  toHTML() {
    return createInfo()
  }
}