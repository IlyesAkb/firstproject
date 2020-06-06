import * as noUiSlider from 'nouislider/distribute/nouislider'
import {getPrice} from '@core/utils'

export function initSlider() {
  const slider = document.querySelector('[data-type="catalogSlider"]')
  noUiSlider.create(slider, {
    start: [40, 100],
    step: 10,
    connect: true,
    margin: 20,
    range: {
      'min': 0,
      'max': 500
    }
  })

  const snapValues = [
    document.querySelector('[data-type="sliderMin"]'),
    document.querySelector('[data-type="sliderMax"]')
  ]

  slider.noUiSlider.on('update', function(values, handle) {
    snapValues[handle].innerHTML = getPrice(values[handle]);
  });

  return slider
}