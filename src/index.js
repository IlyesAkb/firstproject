import './styles/index.scss'
import noUiSlider from 'nouislider'

const a = 20

const slider = document.querySelector('.catalog__form-price-slider')

noUiSlider.create(slider, {
  start: [20, 80],
  connect: [false, true, false],
  margin: 10,
  range: {
    'min': [0],
    'max': [100]
  }
})

console.log(a)