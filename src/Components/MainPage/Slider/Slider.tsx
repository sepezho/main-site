import React, {Component} from 'react'
import Slider from 'react-slick'

import s from './Style/Slider.module.sass'

import jpeg from 'src/Static/Img/1.jpg'
// import Card from './Paralax_module.js';

export default class SliderModule extends Component{
  render () {
    const settings = {
      dots: false,
      arrows: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    }

    let i;
    return (
      <div className={s.SliderContainerMain}>
      <div className={s.Title}>
        VLADISLAV
      </div>
        <div className={`${s.SliderContainer} rotateContainer`}>
          <div className={`${s.SliderContainerItem} rotateItem`}>
          <Slider {...settings}>
              <div key={i++} className={s.Slide}>
                <img src={jpeg} className={s.Slider_img} alt='#'/>
              </div>
            </Slider>
          </div>
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
          />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
          />

          </div>
        </div>
    )
  }
}
