import jquery from 'jquery'
import 'slick-carousel'
export function initSlick($root) {
  jquery($root).slick({
    dots: true,
    infinite: true,
    speed: 1000,
    // fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true
  })
}