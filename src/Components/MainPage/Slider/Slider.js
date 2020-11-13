import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import s from './Style/Slider.module.sass';
const SliderModule = (props) => {
    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    const mapImgs = () => {
        return (React.createElement(Slider, Object.assign({}, settings)));
    };
    return (React.createElement("div", { className: s.SliderContainerMain },
        React.createElement("div", { className: s.Title }, "VLADISLAV"),
        React.createElement("div", { className: `${s.SliderContainer} rotateContainer` },
            React.createElement("div", { className: `${s.SliderContainerItem} rotateItem` },
                React.createElement("mapImgs", null)),
            React.createElement("link", { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" }),
            React.createElement("link", { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" }))));
};
const UpdateImgsCatch = (state) => {
    return {
        imgs: state.imgs,
    };
};
export default connect(UpdateImgsCatch)(SliderModule);
//# sourceMappingURL=Slider.js.map