import {Component} from '@core/Component';
import {createFooter} from '@comps/Footer/footer.tamplate';

export class Footer extends Component {
  constructor($root, options = {}) {
    super($root, {
      ...options,
    });
  }

  static selector = '[data-type="footer"]'

  toHTML() {
    return createFooter()
  }
}