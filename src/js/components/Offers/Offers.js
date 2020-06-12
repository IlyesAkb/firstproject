import {Component} from '@core/Component';
import {createOffers} from '@comps/Offers/offers.template';

export class Offers extends Component {
  constructor($root, options = {}) {
    super($root, {
      ...options
    });
  }

  static selector = '[data-type="offers"]'

  toHTML() {
    return createOffers()
  }
}