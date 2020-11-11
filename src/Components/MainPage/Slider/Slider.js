import React, { Component } from 'react';
import Slider from 'react-slick';
import s from './Style/Slider.module.sass';
import jpeg from 'src/Static/Img/1.jpg';
export default class SliderModule extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000
        };
        let i;
        return (React.createElement("div", { className: s.SliderContainerMain },
            React.createElement("div", { className: s.Title }, "VLADISLAV"),
            React.createElement("div", { className: `${s.SliderContainer} rotateContainer` },
                React.createElement("div", { className: `${s.SliderContainerItem} rotateItem` },
                    React.createElement(Slider, Object.assign({}, settings),
                        React.createElement("div", { key: i++, className: s.Slide },
                            React.createElement("img", { src: jpeg, className: s.Slider_img, alt: '#' })))),
                React.createElement("link", { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' }),
                React.createElement("link", { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' }))));
    }
}
//# sourceMappingURL=Slider.js.map