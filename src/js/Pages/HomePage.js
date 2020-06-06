/* eslint-disable max-len */
import {Page} from '@core/Page'
import {Featured} from '@comps/Featured/Featured'

export class HomePage extends Page {
  constructor(options ={}) {
    super([Featured], options)
  }

  toHTML() {
    return `
    <!--slider-->
    <section class="slider">
      <div class="container slider__container">
        <div class="slider__text">
          <h1>THE BRAND</h1>
          <h2>OF LUXERIOUS <span>FASHION</span></h2>
        </div>
      </div>
    </section>

    <!--offers section-->
    <section class="offers">
      <div class="container offers__container">
        <div class="offers__left">

          <a href="#" class="offers__item">

            <div class="offers__item-text">
              <h3>hOT dEAL</h3>
              <h1>FOR MEN</h1>
            </div>

            <img src="./assets/img/offers/offer-1.jpg" alt="offer-img" class="offers__item-img">

          </a>

          <a href="#" class="offers__item offers__item--small">

            <div class="offers__item-text">
              <h3>LUXIROUS & trendy</h3>
              <h1>ACCESORIES</h1>
            </div>

            <img src="./assets/img/offers/offer-2.jpg" alt="offer-img" class="offers__item-img">

          </a>

        </div>

        <div class="offers__right">

          <a href="#" class="offers__item offers__item--small">

            <div class="offers__item-text">
              <h3>30% offer</h3>
              <h1>women</h1>
            </div>

            <img src="./assets/img/offers/offer-3.jpg" alt="offer-img" class="offers__item-img">

          </a>

          <a href="#" class="offers__item">

            <div class="offers__item-text">
              <h3>new arrivals</h3>
              <h1>FOR kids</h1>
            </div>

            <img src="./assets/img/offers/offer-4.jpg" alt="offer-img" class="offers__item-img">

          </a>

        </div>
      </div>
    </section>

    <!--featured products-->
    <section class="featured">
      <div class="container featured__container">

        <div class="featured__heading">
          <h1>Featured Items</h1>
          <p>Shop for items based on what we featured in this week</p>
        </div>

        <div class="products-list featured__products-list" data-type="productList"></div>

        <div class="featured__btn-wrap">
          <div class="featured__btn">Browse All Product</div>
        </div>
      </div>
    </section>

    <!--info section-->
    <section class="info">
      <div class="container info__container">
        <div class="info__sale">
          <div class="info__sale-text">
            <h1 class="info__sale-text-big-heading">30% <span>OFFER</span></h1>
            <h1>FOR WOMEN</h1>
          </div>
        </div>
        <div class="info__advantages">

          <div class="info__advantages-item">
            <div class="info__advantages-item-icon">
              <img src="./assets/img/info/icon-info-1.svg" alt="info-icon">
            </div>
            <div class="info__advantages-item-text">
              <h2>Free Delivery</h2>
              <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
          </div>

          <div class="info__advantages-item">
            <div class="info__advantages-item-icon">
              <img src="./assets/img/info/icon-info-2.svg" alt="info-icon">
            </div>
            <div class="info__advantages-item-text">
              <h2>Sales & discounts</h2>
              
              <p>
                Worldwide delivery on all. 
                Authorit tively morph next-generation 
                innov tion with extensive models.
              </p>
              
            </div>
          </div>

          <div class="info__advantages-item">
            <div class="info__advantages-item-icon">
              <img src="./assets/img/info/icon-info-3.svg" alt="info-icon">
            </div>
            <div class="info__advantages-item-text">
              <h2>Quality assurance</h2>
              
              <p>
                Worldwide delivery on all.
                Authorit tively morph next-generation 
                innov tion with extensive models.
              </p>
              
            </div>
          </div>

        </div>

      </div>
    </section>

    <!--subscribe section-->
    <section class="subscribe">
      <div class="container subscribe__container">

        <div class="subscribe__left">

          <!--slider with comments-->
          <div class="subscribe__slider">

            <div class="subscribe__slider-item">
              <div class="subscribe__slider-item-photo-wrap">
                <img 
                  src="./src/assets/img/comment-img.jpg" 
                  alt="comment-photo"
                >
              </div>
              <div class="subscribe__slider-item-text">
              
                <p class="subscribe__slider-item-text-body">
                  “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                  a pulvinar purus condimentum a. 
                  Aliquam condimentum mattis neque sed pretium”
                </p>
                
                <p class="subscribe__slider-item-text-author">Bin Burhan</p>
                <p class="subscribe__slider-item-text-location">Dhaka, Bd</p>
                
              </div>
            </div>

            <ul class="subscribe__slider-navs">
              <li>
                <div></div>
              </li>
              <li>
                <div></div>
              </li>
              <li>
                <div></div>
              </li>
            </ul>

          </div>
        </div>

        <div class="subscribe__right">

          <!--subscribe form-->
          <form action="#" class="subscribe__form">
            <h2>Subscribe</h2>
            <p>FOR OUR NEWLETTER AND PROMOTION</p>
            <div class="subscribe__form-email">
              <input type="email">
              <button type="submit">Subscribe</button>
            </div>
          </form>

        </div>

      </div>
    </section>
    `
  }
}