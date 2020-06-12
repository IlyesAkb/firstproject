import {Component} from '@core/Component';
import {MiniCart} from '@comps/MiniCart/MiniCart';
import {SearchForm} from '@comps/SearchForm/SearchForm';

export class Header extends Component {
  constructor($root, options = {}) {
    super($root, {
      ...options,
      components: [MiniCart, SearchForm]
    });
  }

  static selector = '[data-type="header"]'

  toHTML() {
    return `
      <div class="container header__container">

        <div class="header__left">

          <a href="#home" class="logo header__logo">
            <img 
              src="./assets/img/logo.png" 
              alt="header-logo" class="header__log-img"
            >
            bran<span>d</span>
          </a>

          <form action="#" class="header__form" data-type="searchForm"></form>

        </div>

        <div class="header__right">
        
          <div class="mini-cart header__mini-cart" data-type="miniCart">

          </div>
          <div class="header__account-btn">My Account</div>
        </div>
      </div>
    `
  }
}