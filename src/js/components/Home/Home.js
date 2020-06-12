import {Component} from '@core/Component';
import {Banner} from '@comps/Banner/Banner';
import {Offers} from '@comps/Offers/Offers';
import {Subscribe} from '@comps/Subscribe/Subscribe';
import {Info} from '@comps/Info/Info';
import {Featured} from '@comps/Featured/Featured';

export class Home extends Component {
  constructor($root, options = {}) {
    super($root, {
      ...options,
      components: [Banner, Offers, Featured, Info, Subscribe]
    });
  }

  static selector = '[data-type="page"]'

  toHTML() {
    return `
      <section class="slider" data-type="banner"></section>

      <section class="offers" data-type="offers"></section>
  
      <section class="featured" data-type="featured"></section>
  
      <section class="info" data-type="info"></section>
  
      <section class="subscribe" data-type="subscribe"></section>
    `
  }
}