export function createSubscribe() {
  return `
    <div class="container subscribe__container">

      <div class="subscribe__left">

        <div class="subscribe__slider" data-type="slickSlider">

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

        </div>
      </div>

      <div class="subscribe__right">

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
  `
}